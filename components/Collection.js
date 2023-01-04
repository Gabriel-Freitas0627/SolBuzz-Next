import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
const Collection = (props) =>{
    const {cNumber, cImage, cTitle, cMail} = props;
    return(
        <Grid container columnSpacing={2} columns={6} className='col-card' style={{alignItems:"center", display:"flex"}}>
            <h2 style={{display:'inline-block', margin:0}}>{cNumber}</h2>
            <Grid item sm={1} xs={1}><img src={cImage} alt="collection" /></Grid>
            <Grid item sm={2.5} xs={2.5} className="col-card-detail">
                <p className="col-card-detail-title">{cTitle}</p>
                <p className="col-card-detail-mail">{cMail}</p>
            </Grid>
            <Grid item sm={1} xs={1}>            
                <Button className='col-button' variant="outlined">Follow</Button>
            </Grid>
        </Grid>
    );
}

export default Collection;