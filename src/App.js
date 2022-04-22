import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [errors, setErrors] = useState('');
  const [missions, setMissions] = useState([]);
  const [fetching, setFetching] = useState(false);

  const getMissions = () => {
    setFetching(true);
    axios
      .get('https://api.spacexdata.com/v3/missions')
      .then((res) => {
        setMissions(res.data);
        setFetching(false);
      })
      .catch((err) => {
        setErrors(err);
        setFetching(false);
      });
  };
  return (
    <div>
      <Form getMissions={getMissions} fetching={fetching} />
      <List missions={missions} fetching={fetching} errors={errors} />
    </div>
  );
}

export default App;
