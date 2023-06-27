import { useState } from 'react';

const LoginPage: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			{isLoggedIn ? (
				<div>
					<h1>Esta página solo puedo verla porque estoy logueado</h1>
					<button onClick={handleLogout}>Cerrar sesión</button>
				</div>
			) : (
				<div>
					<h1>Inicia sesión para ver contenido privado</h1>
					<button onClick={handleLogin}>Ingresar</button>
				</div>
			)}
		</div>
	);
};

export default LoginPage;
