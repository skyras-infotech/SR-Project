import React from 'react';
import {Grid,Avatar, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img1 from '../../../Images/1.png'
import img3 from '../../../Images/3.png'
import img4 from '../../../Images/4.png'
import img5 from '../../../Images/5.png'
import img6 from '../../../Images/6.png'
import img2 from '../../../Images/2.png'
import img7 from '../../../Images/7.png'
import img8 from '../../../Images/8.png'
import img9 from '../../../Images/9.png'
import img10 from '../../../Images/10.png'
import { ArrowForward,DoubleArrow } from '@material-ui/icons';
import clsx from 'clsx';
import adminDashbardStyle from '../../Styles/adminDashboardStyle';

const useStyles = makeStyles(adminDashbardStyle);

export default function Admin() {

    const classes = useStyles();

    return(
        <Grid container spacing={8}>
        <Grid item xs={12}>
            <Paper elevation={10} className={classes.dashboardPaper}>
                <Grid item xs={12} container justify="space-between" alignItems="center">
                <Grid item><Typography variant="h2" className={classes.welcomeColor}>Welcome Back!</Typography></Grid>
                <Grid item><img src={img1} alt="Img" className={classes.imgHeightWidth}/> </Grid>
                </Grid>
            </Paper>
        </Grid>

        <Grid item xs={12} lg={4} md={6}>
            <Paper elevation={10} className={clsx(classes.commonPaper,classes.studentBGColor,classes.padding)} onClick={() => {
                alert("Alert clicked");
            }}>
            <Grid item align="right">
                <img src={img2} alt="Img" className={classes.imgOptionsSize}/>  
            </Grid>
            <Grid item align="left"><Typography variant="h4">Student</Typography></Grid>
            <Grid item xs={12} container justify="space-between" alignItems="center">
                <Grid item><Typography variant="h4">1</Typography></Grid>
                <Grid item><ArrowForward className={classes.largeIcon}/> </Grid>
            </Grid>
            </Paper>
        </Grid>

        <Grid item  xs={12} lg={4} md={6} >
            <Paper elevation={10} className={clsx(classes.commonPaper,classes.teacherBGColor,classes.textColor)}>
            <Grid item align="right">
                <img src={img3} alt="Img" className={classes.imgOptionsSize}/>  
            </Grid>
            
            <Grid item align="left"><Typography variant="h4">Teacher</Typography></Grid>
            <Grid item xs={12} container justify="space-between" alignItems="center">
                <Grid item><Typography variant="h4">1</Typography></Grid>
                <Grid item><ArrowForward className={classes.largeIcon}/> </Grid>
            </Grid>
        
            </Paper>
        </Grid>

        <Grid item  xs={12} lg={4} md={6}>
            <Paper elevation={10} className={clsx(classes.commonPaper,classes.attendanceBGColor,classes.padding)}>
            <Grid item align="right">
                <img src={img4} alt="Img" className={classes.imgOptionsSize}/>  
            </Grid>
            
            <Grid item align="left"><Typography variant="h4">Attendence</Typography></Grid>
            <Grid item xs={12} container justify="space-between" alignItems="center">
                <Grid item><Typography variant="h4">1</Typography></Grid>
                <Grid item><ArrowForward className={classes.largeIcon}/> </Grid>
            </Grid>
            
            </Paper>   
        </Grid>
        <Grid item  xs={12} lg={4} md={6}>
            <Paper elevation={10} className={clsx(classes.commonPaper,classes.parentsBGColor,classes.padding)}>
            <Grid item align="right">
                <img src={img5} alt="Img" className={classes.imgOptionsSize}/>  
            </Grid>
            <Grid item align="left"><Typography variant="h4">Parent</Typography></Grid>
            <Grid item xs={12} container justify="space-between" alignItems="center">
                <Grid item><Typography variant="h4">1</Typography></Grid>
                <Grid item><ArrowForward className={classes.largeIcon}/> </Grid>
            </Grid>
            </Paper>
        </Grid>

        <Grid item xs={12} lg={4} md={6}>
        <Paper elevation={10} className={clsx(classes.commonPaper,classes.messageBGColor,classes.textColor)}>
            <Grid item align="right">
                <img src={img6} alt="Img" className={classes.imgOptionsSize}/>  
            </Grid>
            <Grid item align="left"><Typography variant="h4">Message</Typography></Grid>
            <Grid item xs={12} container justify="space-between" alignItems="center">
                <Grid item><Typography variant="h4">1</Typography></Grid>
                <Grid item><ArrowForward className={classes.largeIcon}/> </Grid>
            </Grid>
            </Paper>
        </Grid>

        <Grid item  xs={12} lg={4} md={6}>
        <Paper elevation={10} className={clsx(classes.commonPaper,classes.noticeBGColor,classes.padding)}>
            <Grid item align="right">
                <img src={img7} alt="Img" className={classes.imgOptionsSize}/>  
            </Grid>
            <Grid item align="left"><Typography variant="h4">Notice</Typography></Grid>
            <Grid item xs={12} container justify="space-between" alignItems="center">
                <Grid item><Typography variant="h4">1</Typography></Grid>
                <Grid item><ArrowForward className={classes.largeIcon}/> </Grid>
            </Grid>
            </Paper>
        </Grid>

        <Grid item xs={12} className={classes.bottomMargin}>
            <Paper elevation={10} className={classes.paperStyle}>    
            <Grid item align="left"><Typography variant="h5" className={classes.upcomingEvents}>Upcoming Events</Typography></Grid>

                <Grid item xs={12} container spacing={6} justify="space-evenly" alignItems="center">

                <Grid item xs={12} lg={4} md={6}>
                    <Paper elevation={10} className={clsx(classes.commonPaper2,classes.BGColor,classes.textColors)}>
                        <Grid item xs={12} container justify="space-between" alignItems="center">
                            <Grid item>
                                <img src={img8} alt="Img" className={classes.imgOptionsSize2}/> 
                            </Grid>
                            <Grid item direction="column">
                                <Typography variant="h4" className={classes.rightMargin}>Exam list</Typography>
                                <Grid item align="right">
                                    <Avatar className={clsx(classes.spacingOfOption,classes.examListArrowColor)}>
                                        <DoubleArrow/>
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>    

                <Grid item xs={12} lg={4} md={6}>
                    <Paper elevation={10} className={clsx(classes.commonPaper2,classes.BGColor,classes.textColors)}>
                        <Grid item xs={12} container justify="space-between" alignItems="center">
                            <Grid item>
                                <img src={img9} alt="Img" className={classes.imgOptionsSize2}/> 
                            </Grid>
                            <Grid item direction="column">
                                <Typography variant="h4" className={classes.rightMargin}>Notice board</Typography>
                                <Grid item align="right">
                                <Avatar className={clsx(classes.spacingOfOption,classes.noticeListArrowColor)}>
                                        <DoubleArrow/>
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>     

                <Grid item xs={12} lg={4} md={6}>
                    <Paper elevation={10} className={clsx(classes.commonPaper2,classes.BGColor,classes.textColors)}>
                        <Grid item xs={12} container justify="space-between" alignItems="center">
                            <Grid item>
                                <img src={img10} alt="Img" className={classes.imgOptionsSize2}/> 
                            </Grid>
                            <Grid item direction="column">
                            <Typography variant="h4" className={classes.rightMargin}>Holiday list</Typography>
                                <Grid item align="right">
                                <Avatar className={clsx(classes.spacingOfOption,classes.holidayListArrowColor)}>
                                        <DoubleArrow/>
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>                   

                </Grid>
            </Paper>
        </Grid>
        </Grid>

    );
}
