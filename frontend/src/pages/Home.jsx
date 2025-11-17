import { useNavigate } from 'react-router-dom';

export default function Home({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Welcome to the Home Page
        </h1>

        {user && (
          <>
            <p className="text-gray-600 mb-6">
              Hello, <span className="font-semibold text-gray-900">{user.username}</span>!
            </p>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
