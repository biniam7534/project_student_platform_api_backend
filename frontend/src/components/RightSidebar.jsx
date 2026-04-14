import React from 'react';
import { ChevronLeft, ChevronRight, Plus, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RightSidebar = () => {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);

    const activities = [
        { id: 1, title: 'Student Counselling', date: '8th - 10th July 2021', time: '11 A.M - 12 P.M', color: 'bg-blue-500', day: '8' },
        { id: 2, title: 'Teachers Meeting', date: '8th - 10th July 2021', time: '4 P.M - 5 P.M', color: 'bg-pink-500', day: '8' },
    ];

    const performanceData = [{ name: 'Good', value: 75 }, { name: 'Remaining', value: 25 }];

    return (
        <div className="w-[320px] bg-white p-6 border-l border-gray-100 flex flex-col gap-8 h-screen sticky top-0 overflow-y-auto">
            <div className="flex gap-2">
                <button className="flex-1 bg-white border-2 border-[#8e6ef5] text-[#8e6ef5] text-[10px] font-black py-2.5 rounded-xl flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Schedule Class
                </button>
                <button className="flex-1 bg-[#4f35a1] text-white text-[10px] font-black py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-200">
                    <Plus className="w-4 h-4" /> New Admission
                </button>
            </div>

            <div>
                <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-black text-gray-800 tracking-tight">My Progress</h4>
                    <button className="flex items-center gap-1 text-[10px] font-black text-gray-400">
                        JULY 2022 <ChevronDown className="w-3 h-3" />
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-y-3 text-center mb-6">
                    {days.map(day => <span key={day} className="text-[10px] font-bold text-gray-400">{day}</span>)}
                    {/* Calendar Placeholder */}
                    <span className="text-xs text-transparent">0</span>
                    <span className="text-xs text-transparent">0</span>
                    <span className="text-xs text-transparent">0</span>
                    <span className="text-xs text-transparent">0</span>
                    <span className="text-xs font-bold text-gray-400">1</span>
                    <span className="text-xs font-bold text-gray-400">2</span>
                    <span className="text-xs font-bold text-gray-400">3</span>
                    <span className="text-xs font-bold text-gray-400">4</span>
                    <span className="text-xs font-bold text-gray-400">5</span>
                    <span className="text-xs font-bold text-gray-400">6</span>
                    <span className="text-xs font-bold text-gray-400">7</span>
                    <span className="text-xs font-bold text-white bg-blue-500 w-6 h-6 flex items-center justify-center rounded-full mx-auto">8</span>
                    <span className="text-xs font-bold text-gray-400">9</span>
                    <span className="text-xs font-bold text-gray-400">10</span>
                    <span className="text-xs font-bold text-gray-400">11</span>
                    <span className="text-xs font-bold text-gray-400">12</span>
                    <span className="text-xs font-bold text-white bg-pink-500 w-6 h-6 flex items-center justify-center rounded-full mx-auto">13</span>
                    <span className="text-xs font-bold text-gray-400">14</span>
                    <span className="text-xs font-bold text-gray-400">15</span>
                    <span className="text-xs font-bold text-gray-400">16</span>
                    <span className="text-xs font-bold text-gray-400">17</span>
                    <span className="text-xs font-bold text-red-400">18</span>
                    <span className="text-xs font-bold text-gray-400">19</span>
                    <span className="text-xs font-bold text-gray-400">20</span>
                    <span className="text-xs font-bold text-gray-400">21</span>
                    <span className="text-xs font-bold text-gray-400">22</span>
                    <span className="text-xs font-bold text-white bg-orange-400 w-6 h-6 flex items-center justify-center rounded-full mx-auto">23</span>
                    <span className="text-xs font-bold text-gray-400">24</span>
                    <span className="text-xs font-bold text-red-400">25</span>
                    <span className="text-xs font-bold text-gray-400">26</span>
                    <span className="text-xs font-bold text-gray-400">27</span>
                    <span className="text-xs font-bold text-gray-400">28</span>
                    <span className="text-xs font-bold text-gray-400">29</span>
                    <span className="text-xs font-bold text-gray-400">30</span>
                    <span className="text-xs font-bold text-gray-400">31</span>
                </div>

                <button className="w-full bg-[#4f35a1]/5 text-[#4f35a1] text-[10px] font-black py-2.5 rounded-xl flex items-center justify-center gap-2 border border-[#4f35a1]/10">
                    <Plus className="w-4 h-4" /> Add Event
                </button>
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-black text-gray-800">Upcoming Activities</h4>
                    <button className="text-[10px] font-bold text-blue-500">See all</button>
                </div>
                <div className="space-y-4">
                    {activities.map(activity => (
                        <div key={activity.id} className="flex items-center gap-4 group cursor-pointer border border-transparent hover:border-gray-50 hover:shadow-sm p-1 rounded-xl transition-all">
                            <div className={`${activity.color} w-10 h-10 flex items-center justify-center text-white font-black rounded-full`}>
                                {activity.day}
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-black text-gray-800">{activity.title}</p>
                                <p className="text-[10px] text-gray-400 font-medium">{activity.date} • {activity.time}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-50/50 p-5 rounded-[24px] border border-gray-100 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-black text-gray-800 w-1/2 leading-tight">Class Wise Performance</h4>
                    <button className="flex items-center gap-1 text-[9px] font-black text-gray-800 bg-white px-2 py-1 rounded border border-gray-100">
                        6th Standard <ChevronDown className="w-2.5 h-2.5" />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-24 h-24 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={performanceData}
                                    innerRadius={30}
                                    outerRadius={40}
                                    paddingAngle={0}
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={-180}
                                >
                                    <Cell fill="#f97316" />
                                    <Cell fill="#ffedd5" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xs font-black text-gray-800">75%</span>
                            <span className="text-[8px] font-black text-orange-400">Good</span>
                        </div>
                    </div>

                    <div className="flex-1 space-y-3">
                        <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex flex-col">
                            <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">Attendance Average</span>
                            <span className="text-xs font-black text-orange-300">95%</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex flex-col">
                            <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">Edu. Grade Average</span>
                            <span className="text-xs font-black text-pink-400 uppercase">B+</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    <button className="p-1.5 hover:bg-white rounded text-gray-400"><ChevronLeft className="w-3 h-3" /></button>
                    <div className="flex gap-1.5 items-center">
                        <span className="w-2.5 h-2.5 bg-[#4f35a1] rounded-full"></span>
                        <span className="w-2.5 h-2.5 border border-gray-300 rounded-full"></span>
                        <span className="w-2.5 h-2.5 border border-gray-300 rounded-full"></span>
                    </div>
                    <button className="p-1.5 hover:bg-white rounded text-gray-400"><ChevronRight className="w-3 h-3" /></button>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
