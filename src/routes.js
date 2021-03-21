import Admin from '../src/components/screens/Admin/Admin'
import AdminTeacherDash from './components/screens/Admin/Teacher/AdminTeacherDash'

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
        components: AdminTeacherDash,
        layout:"/admin"
    },
];

export default dashboardRoutes;