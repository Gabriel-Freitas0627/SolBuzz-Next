import { Avatar, AvatarGroup } from '@mui/material';
// import cardImage from '../../../assets/images/splash1.png'
// import peopleImage from '../../../assets/images/image1.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';

const Card = (props) => {
    const { cardImage, bottomText1,peopleImage1,peopleImage2,peopleImage3,peopleImage4,peopleImage5} = props;
    return(
        <div className = 'card'>
            <div style={{backgroundImage:`url(${cardImage})`}} className='card-image'>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <div className="card-project">
                        <h4 style={{marginTop:'3px'}}>Project</h4> 
                    </div>
                    <div className="card-heart">
                        <h4 style={{marginTop:'3px'}}><FavoriteBorderIcon/></h4> 
                    </div>
                </div>
                <div className="card-bottom">
                    <h4 style={{margin:'3px'}}>{bottomText1}</h4> 
                </div>
            </div>                
            <div className="fp-text">
                <h4>Current Fp:</h4>
                <h4 style={{color:'#F69F30'}}>0</h4>
            </div>
            <h4>26 Sales (1 hour)</h4>
            <Divider variant="middle" style={{color:'white'}}/>
            <AvatarGroup max={4} className="Avatar">
                <Avatar alt="Remy Sharp" src={peopleImage1} />
                <Avatar alt="Remy Sharp" src={peopleImage2} />
                <Avatar alt="Remy Sharp" src={peopleImage3} />
                <Avatar alt="Remy Sharp" src={peopleImage4} />
                <Avatar alt="Remy Sharp" src={peopleImage5} />
            </AvatarGroup>
        </div>
    );
}

export default Card;