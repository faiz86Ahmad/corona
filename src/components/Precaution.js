import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "87vh",
        padding:"20px",
        




    },
    font: {
        fontSize: "22px",
        display: "flex",
        justifyContent: "start",
        alignItems: "start"

    }

}))

const Precaution = () => {
    const classes = useStyles();
    return (

        <Container className={classes.root}>
            <Grid container>
                <Paper className={classes.font}>
                    <Grid items xs={12}>
                        <Typography variant="h5">Maintain Your Distance</Typography>
                        <Typography variant="subtitle1">It is difficult to identify who is infected and who isn’t, so avoid close contact with people around you. If someone around you is coughing or sneezing, try to maintain a distance of 1 meter and cover your mouth and eyes.</Typography>
                        <Typography variant="h5">Seek Medical Care Early</Typography>
                        <Typography variant="subtitle1">If you or someone you know is showing symptoms like cough, fever, or difficulty breathing, visit a doctor as soon as possible.</Typography>
                        <Typography variant="h5">Stay Informed and Updated</Typography>
                        <Typography variant="subtitle1">Keep a check on Coronavirus updates in your locality. Avoid parts of the city that have confirmed cases of the disease. Gather information through reliable sources like the World Health Organization</Typography>
                        <Typography variant="h5">. Practice Food Safety</Typography>
                        <Typography variant="subtitle1">Have separate cutting boards for meat and vegetables and clean them regularly with soap.</Typography>
                        <Typography variant="h5">Travel with Caution</Typography>
                        <Typography variant="subtitle1">Avoid public transport that is crowded and carry tissues to cover your mouth when you cough or sneeze. Put used tissues only inside dustbins, don’t throw them outside.</Typography>
                        <Typography variant="h5"> Get Your Questions Answered</Typography>
                        <Typography variant="subtitle1">Get facts from credible sources and take reasonable precautions by accurately determining the risk. The World Health Organization (WHO), your healthcare provider, and your national public health authority are ideal sources of accurate information on COVID-19.</Typography>
                        <Typography  variant="h5">WASH YOUR HANDS FREQUENTLY</Typography>
                        <Typography  variant="subtitle1">There is no cure for COVID-19 yet. But the best way to counter the disease for now is to wash your hands with soap regularly.</Typography>
                        <Typography  variant="h5">Carry A Sanitizer</Typography>
                        <Typography  variant="subtitle1">Alcoholic hand rubs or sanitizers are the most convenient hygiene measure you can take. It is an effective and practical way to keep your hands clean in public places without getting your hands wet. Buy sanitizers that contain 60 to 95% alcohol.</Typography>
                        <Typography variant="h5"> Use A Facemask</Typography>
                        <Typography variant="subtitle1">If you live in a region that has reported cases of COVID-19, consider wearing a Facemask before heading out. A face mask gives you basic protection against airborne germs and infections.</Typography>











                    </Grid>
                </Paper>
            </Grid>
        </Container>
    )
}
export default Precaution;
