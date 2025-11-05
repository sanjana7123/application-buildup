import { useNavigate } from 'react-router-dom';

export default function Home({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout handler from App
    navigate('/login'); // Force navigation
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {user && (
        <>
          <p>Hello, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}