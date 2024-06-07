import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Stm32 = () => {
  const [iotData, setIoTData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('tcp://test.mosquitto.org:1883');
        setIoTData(response.data);
      } catch (error) {
        console.error('Error fetching IoT data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>IoT Data</h2>
      {iotData ? (
        <pre>{JSON.stringify(iotData, null, 2)}</pre>
      ) : (
        <p>Loading IoT data...</p>
      )}
    </div>
  );
};

export default Stm32;
