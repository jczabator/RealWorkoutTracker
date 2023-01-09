import { SetCollection } from "../types/setCollection";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

export const Exercise = ({name, equipmentType, setCollection}: {name: string, equipmentType: string, setCollection: SetCollection[]}) => {
    return(
        <div style={{}}>          
          <Card
            style={{
              width: 400,
              margin: 10,
              backgroundColor: "silver",
              display: "inline-block"
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h2"                
                gutterBottom
              >
                {name}
              </Typography>
              <Typography >
                {equipmentType}
              </Typography>              
              <Typography variant="body2" component="p">
              {setCollection.map((set, keySet) =>{
                                 return `Weight: ${set.weight}, number of sets: ${set.numberOfSets}, number of repetitions: ${set.numberOfRepetitions}.${"\n"}`
                            })}
              </Typography>
            </CardContent>            
          </Card>
        </div>        
    )
};