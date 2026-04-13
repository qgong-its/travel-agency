import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="text-lg font-bold">
          Travel
        </Link>
        <div className="flex gap-2">
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/destinations" className="btn btn-ghost">
            Destinations
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
