import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export function useCreateUser() {
  const { enqueueSnackbar } = useSnackbar();

  return (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          id: user.uid,
        });
        enqueueSnackbar("Usuário criado com sucesso!", { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: "error" });
        // ..
      });
}

export function useLogin() {
  const { setUser } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  return (email, password, path) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate(path);
        // ...
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      });
}

export function useCreateNewTask() {
  const { user } = useAuth();

  return async (title) => {
    await addDoc(collection(db, `users/${user.uid}/tasks`), {
      title: title,
      isCompleted: false,
    });
  };
}

export function useTasks() {
  const { user } = useAuth();
  const docs = [];

  const q = query(collection(db, `users/${user.uid}/tasks`));
  onSnapshot(q, (snapshot) => {
    snapshot.forEach((docs) => {
      docs.push(docs.data());
    });
  });

  return docs;
}

export function useSignOut() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return () => {
    setUser({});
    localStorage.clear();
    navigate("/auth/login");
  };
}

export function useUserCollection() {
  const { user } = useAuth();

  return useCollectionData(collection(db, `users/${user.uid}/tasks`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
}

export function useUpdateUserCollection() {
  const { user } = useAuth();

  return async (title) => {
    const queryDoc = query(
      collection(db, `users/${user.uid}/tasks`),
      where("title", "==", title)
    );
    const selectedDoc = await getDocs(queryDoc);

    let docId = "";
    selectedDoc.forEach((doc) => {
      docId = doc.id;
    });

    let docRef = doc(db, `users/${user.uid}/tasks/${docId}`);

    await updateDoc(docRef, {
      isCompleted: true,
    });
  };
}
