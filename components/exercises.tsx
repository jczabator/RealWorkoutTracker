import React from "react";
import styles from '../styles/Home.module.css'
import { workoutData } from "../data/workout";
import { Exercise } from "./exercise";

export const Exercises = () => {
    return (
        <>
        <div className="exercise-container">
            {
                workoutData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Exercise
                                key={key}
                                name={data.name}
                                equipmentType={data.equipmentType}
                                setCollection={data.setCollection}
                            />                                                        
                        </div>                        
                    );
                })
            }
        </div>
        </>
    )
}