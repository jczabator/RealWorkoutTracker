import { SetCollection } from "../types/setCollection";

export const Exercise = ({name, equipmentType, setCollection}: {name: string, equipmentType: string, setCollection: SetCollection[]}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{name}</h5>
                    </td>
                    <td>
                        <h5>{equipmentType}</h5>
                    </td>
                    <td>
                        <h5>
                            {setCollection.map((set, keySet) =>{
                                return `Weight: ${set.weight}, number of sets: ${set.numberOfSets}, number of repetitions: ${set.numberOfRepetitions}.`
                            })}
                        </h5>
                    </td>
                </tr>
            </tbody>
        </table>
    )
};