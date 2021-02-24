import Admin from '../src/components/screens/Admin'
import AdminTeacherTab from '../src/components/screens/AdminTeacherTab'
import AdminTeacherDetails from './components/screens/AdminTeacherDetails';

const dashboardRoutes = [
    {
        path:"/",
        name:"Dashboard",
        components: Admin,
        layout:"/admin"
    },
    {
        path:"/teacher",
        name:"Teacher",
        components: AdminTeacherTab,
        layout:"/admin"
    },
    {
        path:"/students",
        name:"Students",
        components: AdminTeacherDetails,
        layout:"/admin"
    },

];

export default dashboardRoutes;