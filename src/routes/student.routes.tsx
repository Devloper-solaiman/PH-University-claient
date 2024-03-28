import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "Dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "Offered Course",
    element: <OfferedCourse />,
  },
];
