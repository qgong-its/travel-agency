import travelDatas from '@/data/travel.json';

const Destinations = () => {
  return (
    <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {travelDatas.map((item) => (
        <div key={item.slug} className="card bg-base-100 shadow">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
