import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import theme from '../../../../theme'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminIssueBookList from './AdminIssueBookList';
import AdminIssueBook from './AdminIssueBook';
import AdminBookList from './AdminBookList';
import AdminBook from './AdminBook';
import AdminMemberList from './AdminMemberList';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ReorderIcon from '@material-ui/icons/Reorder';

export default function AdminLibraryTab() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab icon={<ReorderIcon/>} label="Member List" />
        <Tab icon={<ReorderIcon/>} label="Book List"/>
        <Tab icon={<AddCircleRoundedIcon/>} label="Add Book" />
        <Tab icon={<ReorderIcon/>} label="Issue Book List" />
        <Tab icon={<AddCircleRoundedIcon/>} label="Issue Book" />
      </Tabs>

      
        <TabPanel value={value} index={0} dir={theme.direction}>
            <AdminMemberList/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <AdminBookList/>
        </TabPanel>
        
        <TabPanel value={value} index={2} dir={theme.direction}>
            <AdminBook/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <AdminIssueBookList/>
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
            <AdminIssueBook/>
        </TabPanel>
      
    </Paper>
  );
}