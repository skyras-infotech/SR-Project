import Admin from '../src/components/screens/Admin/Admin'
import AdminTeacherDash from './components/screens/Admin/Teacher/AdminTeacherDash'
import AdminStudentDash from '../src/components/screens/Admin/Student/AdminStudentDash';
import AdminParentDash from '../src/components/screens/Admin/Parent/AdminParentDash';
import AdminSubjectTab from '../src/components/screens/Admin/Subject/AdminSubjectTab';
import AdminExamTab from '../src/components/screens/Admin/Exam/AdminExamTab';
import AdminHostelTab from './components/screens/Admin/Hostel/AdminHostelTab';
import AdminHomeworkTab from './components/screens/Admin/Homework/AdminHomeworkTab';
import AdminTransportTab from './components/screens/Admin/Transport/AdminTransportTab';
import AdminNoticeboardTab from './components/screens/Admin/Noticeboard/AdminNotiesboardTab';
import AdminHolidayTab from './components/screens/Admin/Holiday/AdminHolidayTab';
import AdminAttendanceTab from './components/screens/Admin/Attendance/AdminAttendanceTab';
import AdminLibraryTab from './components/screens/Admin/Library/AdminLibraryTab';
import AccountInfo from './components/screens/Admin/AccountInfo';

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
    {
        path:"/students",
        name:"Students",
        components: AdminStudentDash,
        layout:"/admin"
    },
    {
        path:"/parents",
        name:"Parent",
        components: AdminParentDash,
        layout:"/admin"
    },
    {
        path:"/subjects",
        name:"Subject",
        components: AdminSubjectTab,
        layout:"/admin"
    },
    {
        path:"/attendance",
        name:"Attendance",
        components: AdminAttendanceTab,
        layout:"/admin"
    },
    {
        path:"/exams",
        name:"Exam",
        components: AdminExamTab,
        layout:"/admin"
    },
    {
        path:"/hostel",
        name:"Hostel",
        components: AdminHostelTab,
        layout:"/admin"
    },
    {
        path:"/homework",
        name:"Homework",
        components: AdminHomeworkTab,
        layout:"/admin"
    },
    {
        path:"/transport",
        name:"Transport",
        components: AdminTransportTab,
        layout:"/admin"
    },
    {
        path:"/noticeboard",
        name:"Noticeboard",
        components: AdminNoticeboardTab,
        layout:"/admin"
    },
    {
        path:"/holiday",
        name:"Holiday",
        components: AdminHolidayTab,
        layout:"/admin"
    },
    {
        path:"/library",
        name:"Library",
        components: AdminLibraryTab,
        layout:"/admin"
    },
    {
        path:"/account",
        name:"Account",
        components: AccountInfo,
        layout:"/admin"
    },
];

export default dashboardRoutes;