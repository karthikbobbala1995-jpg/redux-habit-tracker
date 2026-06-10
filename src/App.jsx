import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Container, Typography } from '@mui/material'
import AddHabitForm from './Components/add-habit-tracker'
import HabitList from './Components/HabitList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container maxWidth="md">
     <Typography component="h1" variant='h2' align='center'>Habit tracker</Typography>
     <AddHabitForm/>
     <HabitList/>
    </Container>

    </>
  )
}

export default App
