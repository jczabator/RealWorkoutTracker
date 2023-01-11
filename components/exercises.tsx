import React from "react";
import styles from '../styles/Home.module.css'
import { workoutData } from "../data/workout";
import { Exercise } from "./exercise";
import Grid from "@material-ui/core/Grid";

export const Exercises = () => {
    return (
        <>
        <div className="exercise-container">
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start">
            {
                workoutData.map((data, key) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={key}>
                            <Exercise
                                key={key}
                                name={data.name}
                                equipmentType={data.equipmentType}
                                setCollection={data.setCollection}
                            />                                                          
                        </Grid>
                    );
                })
            }
            </Grid>
        </div>
        </>
    )
}