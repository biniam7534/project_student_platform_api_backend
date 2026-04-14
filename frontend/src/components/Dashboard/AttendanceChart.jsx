import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const AttendanceChart = ({ title, present, absent, color }) => {
    const data = [
        { name: 'Present', value: present },
        { name: 'Absent', value: absent },
    ];

    const total = present + absent;
    const percentage = Math.round((present / total) * 100);

    return (
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 flex-1">
            <h4 className="text-sm font-bold text-gray-800 mb-6">{title}</h4>
            <div className="flex items-center gap-8">
                <div className="w-24 h-24 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={35}
                                outerRadius={45}
                                paddingAngle={0}
                                dataKey="value"
                                startAngle={90}
                                endAngle={450}
                            >
                                <Cell fill={color} />
                                <Cell fill="#f3f4f6" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-black" style={{ color }}>{percentage}%</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-[10px] text-gray-400 font-medium">Present No.</p>
                        <p className="text-sm font-black text-gray-800">{present}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-medium tracking-tight">Absent No.</p>
                        <p className="text-sm font-black text-gray-800">{absent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceChart;
