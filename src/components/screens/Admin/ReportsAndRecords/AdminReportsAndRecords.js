import {
    Grid, Select, makeStyles, Backdrop, CircularProgress,
    Typography, FormControl, FormControlLabel, Checkbox, Button, MenuItem, FormHelperText
} from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { useLocation } from "react-router-dom";


const usesStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0.5),
    },
    root: {
        backgroundColor: "#F89",
    },
    textColor: {
        color: "#51BEFF"
    },
    whiteColor: {
        color: "#fff"
    },
    roundedButton: {
        borderRadius: 16,
        width: theme.spacing(36)
    },
    imgOptionsSize: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

function AdminReportsAndRecords() {

    let location = useLocation();
    let ls = location.state;
    const [data, setData] = useState({
        hw: ls !== undefined ? ls.hw : false,
        nc: ls !== undefined ? ls.nc : false,
        lp: ls !== undefined ? ls.lp : false,
        rc: ls !== undefined ? ls.rc : false,
        act: ls !== undefined ? ls.act : false,
        dc: ls !== undefined ? ls.dc : false,
        od: ls !== undefined ? ls.od : false,
        bc: ls !== undefined ? ls.bc : false,
        cca: ls !== undefined ? ls.cca : false,
        ass: ls !== undefined ? ls.ass : false,
        ap: ls !== undefined ? ls.ap : false,
        cc: ls !== undefined ? ls.cc : false,
    });

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.checked });
    };

    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    const classes = usesStyles();

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Grid container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item align="left" xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Teacher</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.teacher)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">-- Select teacher --</MenuItem>
                                        <MenuItem value="Priyanka Patel">Priyanka Patel</MenuItem>
                                        <MenuItem value="Ramesh Gandhi">Ramesh Gandhi</MenuItem>
                                        <MenuItem value="Mika Singh">Mika Singh</MenuItem>
                                    </Select>
                                )}
                                name="teacher"
                                control={control}
                                defaultValue={ls == null ? "" : ls.teacher}
                                rules={{
                                    required: "Please select teacher"
                                }}
                            />
                            <FormHelperText>{errors.teacher?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="hw" checked={data.hw} onChange={handleData} />}
                                label="Homework"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="nc" checked={data.nc} onChange={handleData} />}
                                label="Notebook Correction"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="lp" checked={data.lp} onChange={handleData} />}
                                label="Lesson Plan"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="rc" checked={data.rc} onChange={handleData} />}
                                label="Remedial Class"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="act" checked={data.act} onChange={handleData} />}
                                label="Activity"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="dc" checked={data.dc} onChange={handleData} />}
                                label="Digital Classroom"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="od" checked={data.od} onChange={handleData} />}
                                label="Overall Discipline"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="bc" checked={data.bc} onChange={handleData} />}
                                label="Behavior Card"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="cca" checked={data.cca} onChange={handleData} />}
                                label="CCA"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="ass" checked={data.ass} onChange={handleData} />}
                                label="Assessment"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="ap" checked={data.ap} onChange={handleData} />}
                                label="Appraisal Performance"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={2} lg={2}>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="cc" checked={data.cc} onChange={handleData} />}
                                label="Code of Conduct"
                            />
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" type="submit" onClick={handleToggle} color="primary" className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{ls == null ? "Add Report" : "Update Report"}</Typography>
                        </Button>
                    </Grid>

                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        <CircularProgress color="inherit" />
                    </Backdrop>

                </Grid>
            </form>
        </Grid>
    );
}

export default AdminReportsAndRecords;