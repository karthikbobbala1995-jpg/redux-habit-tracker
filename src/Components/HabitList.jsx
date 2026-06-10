import { CheckCircle } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete'
import { removeHabit, toggleHabit } from '../Store/habit.slice';
const HabitList = () => {
    const habitsRender = useSelector((state) => state.habits.habits);
    const today = new Date().toISOString().split('T')[0];

    const dispatch = useDispatch();


    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
                {
                    habitsRender.map((habit) => (
                        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Typography variant="h6">{habit.name}</Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ textTransform: "capitalize" }}
                                    >
                                        {habit.frequency}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <Button
                                    onClick={()=>{
                                        dispatch(toggleHabit({id:habit.id,date:today}))
                                    }}
                                    variant="outlined"
                                    color={habit.completedDates.includes(today) ? "success" : "primary"}
                                    startIcon={<CheckCircleIcon/>}
                                    >
                                        {habit.completedDates.includes(today) ? 'Completed' : 'Mark Completed'}
                                    </Button>

                                    <Button
                                    onClick={()=>{
                                        dispatch(removeHabit({id:habit.id}))
                                    }}
                                     variant="contained"
                                     color="error"
                                     startIcon={<DeleteIcon/>}
                                     >
                                        Remove
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    ))
                }
            </Box>
        </div>
    )
}

export default HabitList
