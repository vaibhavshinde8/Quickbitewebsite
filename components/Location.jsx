import { useState, useEffect } from 'react';
import Error from './Error';

const Location = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error handling

  const fetchData = async () => {
    try {
      const response = await fetch(
        '/dapi/misc/place-autocomplete?input=nashik&types='
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.data && data.data.length > 0) {
        setDescription(data.data[0].description);
      } else {
        setDescription('No location found.');
      }
    } catch (error) {
      setError('Failed to fetch location data.');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Nashik, Maharashtra, India</p>
      ) : error ? (
        <Error/>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};

export default Location;
