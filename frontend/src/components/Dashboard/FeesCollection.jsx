import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
    { name: 'Q1-2020', total: 4, collected: 2.5 },
    { name: 'Q2-2020', total: 5, collected: 3.2 },
    { name: 'Q3-2020', total: 6, collected: 4.8 },
    { name: 'Q4-2020', total: 8, collected: 6.5, highlighted: true },
    { name: 'Q1-2021', total: 4.5, collected: 3.1 },
    { name: 'Q2-2021', total: 5.5, collected: 4.0 },
    { name: 'Q3-2021', total: 6.5, collected: 5.2 },
    { name: 'Q4-2021', total: 8.5, collected: 7.1 },
];

const FeesCollection = () => {
    return (
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 mt-6 h-96 flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <h4 className="text-sm font-bold text-gray-800">Fees Collection</h4>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-purple-100 rounded-sm"></div>
                        <span className="text-[10px] font-bold text-gray-400">Total Fee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#4f35a1] rounded-sm"></div>
                        <span className="text-[10px] font-bold text-gray-400">Collected Fee</span>
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-bold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                        This Month <ChevronDown className="w-3 h-3" />
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid vertical={false} stroke="#f1f1f1" verticalFill={['#fff', '#fcfcfc']} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }}
                            domain={[0, 10]}
                            ticks={[2, 4, 6, 8, 10]}
                            tickFormatter={(val) => `${val}L`}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="total" fill="#f3f1ff" radius={[10, 10, 0, 0]} barSize={40} />
                        <Bar dataKey="collected" radius={[10, 10, 0, 0]} barSize={40}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.highlighted ? '#6d31ed' : '#8e6ef5'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                {/* Label for highlighted bar */}
                <div className="absolute top-1 left-[44%] -translate-x-1/2 bg-[#4f35a1] text-white text-[10px] font-black px-2 py-1 rounded-md shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#4f35a1]">
                    83%
                </div>
            </div>
        </div>
    );
};

export default FeesCollection;
