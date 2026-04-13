import { useParams } from 'react-router';
import travelData from '@/data/travel.json';

const DestinationDetails = () => {
  const { slug } = useParams();

  const destination = travelData.find((item) => item.slug === slug);

  if (!destination) {
    return <h1>Destination not found</h1>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={destination.image}
        alt={destination.title}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-4">{destination.title}</h1>

      <p className="mt-4">{destination.description}</p>
    </div>
  );
};

export default DestinationDetails;
