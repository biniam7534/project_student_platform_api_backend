import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/Dashboard/StatsCard';
import AttendanceChart from './components/Dashboard/AttendanceChart';
import StudentDirectory from './components/Dashboard/StudentDirectory';
import FeesCollection from './components/Dashboard/FeesCollection';
import RightSidebar from './components/RightSidebar';
import { Users, UserSquare2, Briefcase, Calendar } from 'lucide-react';

function App() {
  const stats = [
    { title: 'Total Students', value: '5,252', icon: Users, color: 'bg-[#6d31ed]' },
    { title: 'Total Teachers', value: '132', icon: UserSquare2, color: 'bg-[#ff7aa2]' },
    { title: 'Working Staff', value: '38', icon: Briefcase, color: 'bg-[#50c4ed]' },
    { title: 'This Month Events', value: '15', icon: Calendar, color: 'bg-[#ff9e44]' },
  ];

  const attendanceData = [
    { title: 'Student Attendance', present: 4752, absent: 437, color: '#ff9e44' },
    { title: 'Teachers Attendance', present: 132, absent: 4, color: '#ff7aa2' },
    { title: 'Staff Attendance', present: 32, absent: 6, color: '#50c4ed' },
  ];

  return (
    <div className="flex bg-[#f5f6fa] min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-64 flex flex-col min-w-0">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-800 tracking-tight">Dashboard</h2>
              <p className="text-xs font-bold text-gray-400 mt-1">Hi, Welcome to Edu-Center dashboard</p>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              {stats.map((stat, idx) => (
                <StatsCard key={idx} {...stat} />
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              {attendanceData.map((data, idx) => (
                <AttendanceChart key={idx} {...data} />
              ))}
            </div>

            <StudentDirectory />

            <FeesCollection />
          </div>

          <RightSidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
