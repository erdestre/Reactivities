import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Header, List } from 'semantic-ui-react';
import { activity } from '../models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<activity[]>([]);
  const[selectedActivity, setSelectActivity] = useState<activity | undefined>(undefined);
  
  useEffect(() => {
    axios.get<activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data);
    })
  }, []);

  function handleSelectedActivity(id: string){
    setSelectActivity(activities.find(x => x.id === id));
  }
  function handleCancelSelectActivity(){
    setSelectActivity(undefined);
  }

  
  return (
    <>
      <NavBar/>
      <Container style = {{marginTop : '7em'}}>
        <ActivityDashboard 
        activities = {activities}
        selectedActivity = {selectedActivity}
        selectActivity = {handleSelectedActivity}
        cancelSelectActivity = {handleCancelSelectActivity}
        />
      </Container>
    </>
  );
}

export default App;
