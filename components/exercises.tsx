import React from "react";
import styles from '../styles/Home.module.css'
import { workoutData } from "../data/workout";

export const Exercises = () => {
    return (
        <>
        <div className="exercise-container">
            {
                workoutData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.name +
                            " , " + 
                            data.equipmentType +
                            " , " + 
                            data.setCollection.map((set, keySet) =>{
                                return `Weight: ${set.weight}, number of sets: ${set.numberOfSets}, number of repetitions: ${set.numberOfRepetitions}.`
                            })}
                        </div>
                    );
                })
            }
        </div>
        </>
    )
}