import Admin from '../src/components/screens/Admin/Admin'
import AdminTeacherDash from './components/screens/Admin/Teacher/AdminTeacherDash'
import AdminStudentDash from '../src/components/screens/Admin/Student/AdminStudentDash';
import AdminParentDash from '../src/components/screens/Admin/Parent/AdminParentDash';
import AdminSubjectDash from '../src/components/screens/Admin/Subject/AdminSubjectDash';
import AdminExamDash from '../src/components/screens/Admin/Exam/AdminExamDash';
import AdminHostelDash from './components/screens/Admin/Hostel/AdminHostelDash';
import AdminHomeworkDash from './components/screens/Admin/Homework/AdminHomeworkDash';
import AdminNoticeboardDash from './components/screens/Admin/Noticeboard/AdminNoticeboardDash';
import AdminHolidayDash from './components/screens/Admin/Holiday/AdminHolidayDash';
import AdminAttendanceDash from './components/screens/Admin/Attendance/AdminAttendanceDash';
import AdminLibraryDash from './components/screens/Admin/Library/AdminLibraryDash';
import AdminVideoUpdationDash from './components/screens/Admin/Video Updation/AdminVideoUpdationDash';
import AdminMessageDash from './components/screens/Admin/Message/AdminMessageDash';
import AdminMaterialDash from './components/screens/Admin/Material/AdminMaterialDash';
import AdminTimeTableDash from './components/screens/Admin/TimeTable/AdminTimeTableDash';
import AdminReportsAndRecordsDash from './components/screens/Admin/ReportsAndRecords/AdminReportsAndRecordsDash';
import AccountInfo from './components/screens/Admin/AccountInfo';
import AdminWeeklyAssessmentDash from './components/screens/Admin/WeeklyAssessment/AdminWeeklyAssessmentDash';


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
        components: AdminSubjectDash,
        layout:"/admin"
    },
    {
        path:"/attendance",
        name:"Attendance",
        components: AdminAttendanceDash,
        layout:"/admin"
    },
    {
        path:"/exams",
        name:"Exam",
        components: AdminExamDash,
        layout:"/admin"
    },
    {
        path:"/hostel",
        name:"Hostel",
        components: AdminHostelDash,
        layout:"/admin"
    },
    {
        path:"/homework",
        name:"Homework",
        components: AdminHomeworkDash,
        layout:"/admin"
    },
    {
        path:"/noticeboard",
        name:"Noticeboard",
        components: AdminNoticeboardDash,
        layout:"/admin"
    },
    {
        path:"/holiday",
        name:"Holiday",
        components: AdminHolidayDash,
        layout:"/admin"
    },
    {
        path:"/library",
        name:"Library",
        components: AdminLibraryDash,
        layout:"/admin"
    },
    {
        path:"/timetable",
        name:"Time Table",
        components: AdminTimeTableDash,
        layout:"/admin"
    },
    {
        path:"/material",
        name:"Material",
        components: AdminMaterialDash,
        layout:"/admin"
    },
    {
        path:"/video-list",
        name:"Video Updation",
        components: AdminVideoUpdationDash,
        layout:"/admin"
    },
    {
        path:"/message",
        name:"Message",
        components: AdminMessageDash,
        layout:"/admin"
    },
    {
        path:"/assessment",
        name:"Assessment",
        components: AdminWeeklyAssessmentDash,
        layout:"/admin"
    },
    {
        path:"/reports-and-records",
        name:"Reports & Record",
        components: AdminReportsAndRecordsDash,
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