import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import theme from '../../../../theme'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminTeacher from './AdminTeacher';
import AdminTeacherList from './AdminTeacherList';
import AdminTeacherDetails from './AdminTeacherDetails';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ReorderIcon from '@material-ui/icons/Reorder';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

export default function AdminTeacherTab(prop) {

  //const history = useHistory();

  const [isViewDetails, SetIsViewDetails] = React.useState(prop.val);

  const [value, setValue] = React.useState(isViewDetails ? 2 : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    SetIsViewDetails(false);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={2}>

      <Tabs
        value={isViewDetails ? 2 : value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab icon={<ReorderIcon/>} label="Teacher List" />
        <Tab icon={<AddCircleRoundedIcon/>} label="Add Teacher"/>
        { isViewDetails ? 
        <Tab icon={<VisibilityRoundedIcon/>} label="View Teacher" /> : "" }
      </Tabs>

      
        <TabPanel value={value} index={0} dir={theme.direction}>
            <AdminTeacherList/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <AdminTeacher/>
        </TabPanel>
        { isViewDetails ? 
        <TabPanel value={value} index={2} dir={theme.direction}>
            <AdminTeacherDetails/>
        </TabPanel> : "" }
    </Paper>
  );
}