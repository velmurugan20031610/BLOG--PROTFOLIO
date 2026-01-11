import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();
  const [log, setLog] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLog(!!user);
    });
  }, []);

  const logout = () => {
    signOut(auth);
    setMenu(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold">Personal</h2>

        <div className="hidden md:flex items-center">
          <Link className="px-4" to="/home">Home</Link>
          <Link className="px-4" to="/projects">Projects</Link>
          <Link className="px-4" to="/about">About</Link>
          <Link className="px-4" to="/contact">Contact</Link>

          {log ? (
            <button className="button-style ml-4" onClick={logout}>
              Logout
            </button>
          ) : (
            <button
              className="button-style ml-4"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>
      </div>

      {menu && (
        <div className="md:hidden bg-white border-t flex flex-col text-center">
          <Link onClick={() => setMenu(false)} className="py-3 border-b" to="/home">Home</Link>
          <Link onClick={() => setMenu(false)} className="py-3 border-b" to="/projects">Projects</Link>
          <Link onClick={() => setMenu(false)} className="py-3 border-b" to="/about">About</Link>
          <Link onClick={() => setMenu(false)} className="py-3 border-b" to="/contact">Contact</Link>

          {log ? (
            <button onClick={logout} className="py-3 text-red-600">
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setMenu(false);
                navigate("/login");
              }}
              className="py-3 text-blue-600"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
