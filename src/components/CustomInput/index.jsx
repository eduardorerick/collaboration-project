export function CustomInput({ label, type = 'text', value, onChange, placeholder, htmlFor }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '14px',
				maxWidth: '426px',
				color: '#696F79'
			}}
		>
			<label htmlFor={htmlFor}>{label}</label>
			<input
				id={htmlFor}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				style={{ padding: '23px 23px', borderRadius: '6px', border: '1px solid #8692A6' }}
			/>
		</div>
	);
}
