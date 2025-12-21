import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';



function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))
  return () => {}
  }, [])

  return (
    <>
      <Typography variant='h3'>Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id} alignItems="flex-start">
            <ListItemText
              primary={activity.title}
            />
          </ListItem>
        ))}
      </List>
    </>

  )
}

export default App
