import { AuthProvider } from './context/Auth';
import { Routes } from './routes/Routes';
import { SnackbarProvider } from 'notistack';

function App() {
	return (
		<SnackbarProvider
			maxCount={3}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
		>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</SnackbarProvider>
	);
}

export default App;
