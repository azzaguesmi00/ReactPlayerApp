import Players from "./Players";
import Player from "./Player";

const PlayersList = () => {

 return(
    <div style={{display:"flex", justifyContent:"space-around", margin: 30}}>
        
        {Players.map((el, i) => (

        <Player   {...el}    />  )
    )
        }
    </div>
 )
}

export default PlayersList