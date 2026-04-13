import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dates = formData.get('dates');
    const origin = formData.get('origin');
    const destination = formData.get('destnation');

    navigate('/destinations');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Travel Agency</h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input type="date" name="dates" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="origin"
            placeholder="From (origin)"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            className="h-4 w-4 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            name="destination"
            className="grow"
            placeholder="To (destination)"
          />
        </label>
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default Home;
