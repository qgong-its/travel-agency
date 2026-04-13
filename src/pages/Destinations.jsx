import { Link } from 'react-router';
import travelData from '@/data/travel.json';

const Destinations = () => {
  return (
    <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {travelData.map((item) => (
        <div key={item.slug} className="card bg-base-100 shadow">
          <Link to={`/destinations/${item.slug}`}>
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
