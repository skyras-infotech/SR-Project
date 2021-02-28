import { grey,blue, orange } from '@material-ui/core/colors';
const drawerWidth = 260;

const adminDashbardStyle = theme => ({
  
    root: {  
        display: "flex",
      },
      dashboardPaper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#FFE5BF",
        height:theme.spacing(30),
        paddingLeft:100,
        borderRadius:30,
        cursor:"pointer",
      },
      paperStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor:"#7DBCDC",
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200,
      },
      upcomingEvents:{
        color:"white",
        fontSize:27,
        paddingLeft:15,
        paddingTop:15,
      },
      verticalLine: {
        borderLeft: 6,
        borderColor:"black",
        borderStyle:"solid",
        height: 55,
      },
      commonPaper: {
        cursor:"pointer",
        display: "flex",
        flexDirection: "column",
        paddingBottom:20,
        borderRadius:30,
      },
      commonPaper2: {
        cursor:"pointer",
        display: "flex",
        flexDirection: "column",
        borderRadius:30,
        paddingBottom:10,
        position:"relative",
        top:40,    
      },
      studentBGColor:{
        backgroundColor:"#1974D3",
      },
      teacherBGColor:{
        backgroundColor:"#FFF7D9",
      },
      attendanceBGColor:{
        backgroundColor:"#53CCEC",
      },
      parentsBGColor:{
        backgroundColor:"#F6989F",
      },
      messageBGColor:{
        backgroundColor:"#17E9E1",
      },
      noticeBGColor:{
        backgroundColor:"#DD8A63",
      },
      BGColor:{
        backgroundColor:"white"
      },
      padding:{
        paddingLeft:20,
        paddingRight:20,
        color:"white",
        fontSize:30
      },
      textColor:{
        paddingLeft:20,
        paddingRight:20,
        color:"black"
      },
      dashboardTitle:{
        color:"#262626",
        fontSize:35
      },
      textColors:{
        paddingLeft:15,
        paddingRight:15,
          color:"#7d7d7d"
      },
      imgOptionsSize:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        position:"relative",
        bottom:40,    
      },
      imgOptionsSize2:{
        width: theme.spacing(12),
        height: theme.spacing(14),
      },
      imgHeightWidth:{
        width: theme.spacing(35),
        height: theme.spacing(35),
        position:"relative",
        bottom:50, 
      },
      large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      largeIcon: {
        width: 40,
        height: 40,
      },
      appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        backgroundColor:"white",
      },
      margin: {
        padding:5,
        margin:5,
      },
      spacingOfOption:{
        marginTop:50,
      },
      examListArrowColor:{
        color: orange[500],
        backgroundColor: orange[200],
      },
      noticeListArrowColor:{
        color: blue[500],
        backgroundColor: blue[200],
      },
      holidayListArrowColor:{
        color: "black",
        backgroundColor: grey[350],
      },
      marginRight:{
        marginRight:5,
      },
      rightMargin:{
        marginTop:10,
        marginRight:25,
        fontSize:28,
      },
      bottomMargin:{
        marginBottom:30,
      },
      fontSize:{
        fontSize:33,
      },
      welcomeColor:{
        color:"#FF8484",
        fontSize:38
      },
      selectedDrawerColor:{
        color:"#949494",
        fontSize:48
      },
      unselectedDrawerColor:{
        color:"#c4c4c4",
        textAlign:"right",
        fontSize:28
      },
      drawerSelectedBGColor:{
        paddingLeft:100
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        color:"#000",
        padding: theme.spacing(2),
        marginTop: theme.spacing(3),
      },
});

export default adminDashbardStyle;