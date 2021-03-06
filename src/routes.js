import Admin from '../src/components/screens/Admin/Admin'
import AdminTeacherTab from '../src/components/screens/Admin/Teacher/AdminTeacherTab'
import AdminStudentTab from '../src/components/screens/Admin/Student/AdminStudentTab';
import AdminParentTab from '../src/components/screens/Admin/Parent/AdminParentTab';
import AdminSubjectTab from '../src/components/screens/Admin/Subject/AdminSubjectTab';
import AdminExamTab from '../src/components/screens/Admin/Exam/AdminExamTab';
import AdminHostelTab from './components/screens/Admin/Hostel/AdminHostelTab';
import AdminHomeworkTab from './components/screens/Admin/Homework/AdminHomeworkTab';
import AdminTransportTab from './components/screens/Admin/Transport/AdminTransportTab';
import AdminNoticeboardTab from './components/screens/Admin/Noticeboard/AdminNotiesboardTab';
import AdminHolidayTab from './components/screens/Admin/Holiday/AdminHolidayTab';
import AdminAttendanceTab from './components/screens/Admin/Attendance/AdminAttendanceTab';
import AdminManageMarkTab from './components/screens/Admin/ManageMarks/AdminManageMarkTab';
import AdminFeePaymentTab from './components/screens/Admin/FeePayment/AdminFeePaymentTab';
import AdminPaymentTab from './components/screens/Admin/Payment/AdminPaymentTab';
import AdminLibraryTab from './components/screens/Admin/Library/AdminLibraryTab';

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
        components: AdminStudentTab,
        layout:"/admin"
    },
    {
        path:"/parents",
        name:"Parent",
        components: AdminParentTab,
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
        path:"/manage-mark",
        name:"Manage Mark",
        components: AdminManageMarkTab,
        layout:"/admin"
    },
    {
        path:"/payment",
        name:"Payment",
        components: AdminPaymentTab,
        layout:"/admin"
    },
    {
        path:"/fee-payment",
        name:"Fee Payment",
        components: AdminFeePaymentTab,
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
   
];

export default dashboardRoutes;