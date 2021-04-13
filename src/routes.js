import Admin from '../src/components/screens/Admin/Admin'
import AdminTeacherList from './components/screens/Admin/Teacher/AdminTeacherList'
import AdminStudentList from '../src/components/screens/Admin/Student/AdminStudentList';
import AdminParentList from '../src/components/screens/Admin/Parent/AdminParentList';
import AdminSubjectList from '../src/components/screens/Admin/Subject/AdminSubjectList';
import AdminExamList from '../src/components/screens/Admin/Exam/AdminExamList';
import AdminHostelDash from './components/screens/Admin/Hostel/AdminHostelDash';
import AdminHomeworkList from './components/screens/Admin/Homework/AdminHomeworkList';
import AdminNoticeboardList from './components/screens/Admin/Noticeboard/AdminNoticeboardList';
import AdminHolidayList from './components/screens/Admin/Holiday/AdminHolidayList';
import AdminAttendanceList from './components/screens/Admin/Attendance/AdminAttendanceList';
import AdminLibraryDash from './components/screens/Admin/Library/AdminLibraryDash';
import AdminVideoUpdationList from './components/screens/Admin/Video Updation/AdminVideoUpdationList';
import AdminMessageDash from './components/screens/Admin/Message/AdminMessageDash';
import AdminMaterialList from './components/screens/Admin/Material/AdminMaterialList';
import AdminTimeTableList from './components/screens/Admin/TimeTable/AdminTimeTableList';
import AdminReportsAndRecordsList from './components/screens/Admin/ReportsAndRecords/AdminReportsAndRecordsList';
import AccountInfo from './components/screens/Admin/Account/AccountInfo';
import AdminWeeklyAssessmentList from './components/screens/Admin/WeeklyAssessment/AdminWeeklyAssessmentList';
import AdminRemedialList from './components/screens/Admin/Remedial/AdminRemedialList';
import AdminOneClickMigration from './components/screens/Admin/OneClickMigration/AdminOneClickMigration';
import AdminStudyHoursList from './components/screens/Admin/StudyHours/AdminStudyHoursList';


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
        components: AdminTeacherList,
        layout:"/admin"
    },
    {
        path:"/students",
        name:"Students",
        components: AdminStudentList,
        layout:"/admin"
    },
    {
        path:"/parents",
        name:"Parent",
        components: AdminParentList,
        layout:"/admin"
    },
    {
        path:"/subjects",
        name:"Subject",
        components: AdminSubjectList,
        layout:"/admin"
    },
    {
        path:"/attendance",
        name:"Attendance",
        components: AdminAttendanceList,
        layout:"/admin"
    },
    {
        path:"/exams",
        name:"Exam",
        components: AdminExamList,
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
        components: AdminHomeworkList,
        layout:"/admin"
    },
    {
        path:"/noticeboard",
        name:"Noticeboard",
        components: AdminNoticeboardList,
        layout:"/admin"
    },
    {
        path:"/holiday",
        name:"Holiday",
        components: AdminHolidayList,
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
        components: AdminTimeTableList,
        layout:"/admin"
    },
    {
        path:"/material",
        name:"Material",
        components: AdminMaterialList,
        layout:"/admin"
    },
    {
        path:"/video-list",
        name:"Video Updation",
        components: AdminVideoUpdationList,
        layout:"/admin"
    },
    {
        path:"/message",
        name:"Message",
        components: AdminMessageDash,
        layout:"/admin"
    },
    {
        path:"/remedial",
        name:"Remedial",
        components: AdminRemedialList,
        layout:"/admin"
    },
    {
        path:"/study-hours",
        name:"Study Hours",
        components: AdminStudyHoursList,
        layout:"/admin"
    },
    {
        path:"/assessment",
        name:"Assessment",
        components: AdminWeeklyAssessmentList,
        layout:"/admin"
    },
    {
        path:"/reports-and-records",
        name:"Reports & Record",
        components: AdminReportsAndRecordsList,
        layout:"/admin"
    },
    {
        path:"/one-click-migrations",
        name:"One Click Migrations",
        components: AdminOneClickMigration,
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