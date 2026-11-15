import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle"; 


function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          Tech <span>News</span>
        </Link>
        <div className="header-actions">
          {user ? (
            <>
              <Link to="/rating" className="nav-link">
                Reyting
              </Link>
              <Link to="/about" className="nav-link">
                Sayt haqida
              </Link>
              <ThemeToggle />
              <Link to="/create" className="btn btn-primary">
                + Maqola
              </Link>
              <Link to="/profile" className="user-badge">
                <Avatar name={user.name} src={user.avatar} />
                <span className="user-name">{user.name}</span>
              </Link>
              <button className="btn btn-ghost" onClick={handleLogout}>
                Chiqish
              </button> 
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Kirish
              </Link>
              <Link to="/register" className="btn btn-primary">
                Ro'yxatdan o'tish
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;