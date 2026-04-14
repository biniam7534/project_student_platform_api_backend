import React from 'react';
import { MoreHorizontal, Edit2, Filter } from 'lucide-react';

const StudentDirectory = () => {
    const students = [
        {
            id: 1,
            name: 'Selva Raj',
            parents: 'Muthu Kumar',
            phone: '9600778090',
            class: '7th',
            grade: 'A+',
            status: 'Paid',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
        },
        {
            id: 2,
            name: 'Malar',
            parents: 'Muthu Kumar',
            phone: '7550364512',
            class: '10th',
            grade: 'B+',
            status: 'Unpaid',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
        },
        {
            id: 3,
            name: 'Vinoth',
            parents: 'Deva Raj',
            phone: '9600779080',
            class: '7th',
            grade: 'A+',
            status: 'Paid',
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
        }
    ];

    return (
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 mt-6">
            <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold text-gray-800">Student Directory</h4>
                <button className="flex items-center gap-2 text-[10px] font-bold text-[#4f35a1] bg-[#4f35a1]/5 px-3 py-1.5 rounded-lg border border-[#4f35a1]/10">
                    Filter & Short <Filter className="w-3 h-3" />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100">
                            <th className="pb-4 font-bold">Student Name</th>
                            <th className="pb-4 font-bold">Parents Names</th>
                            <th className="pb-4 font-bold">Phone</th>
                            <th className="pb-4 font-bold">Class</th>
                            <th className="pb-4 font-bold">Grade</th>
                            <th className="pb-4 font-bold">Fee Status</th>
                            <th className="pb-4 font-bold text-right">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {students.map((student) => (
                            <tr key={student.id} className="group hover:bg-gray-50/50 transition-colors">
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={student.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                                        <span className="text-xs font-bold text-gray-800">{student.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-xs text-gray-500 font-medium">{student.parents}</td>
                                <td className="py-4 text-xs text-gray-500 font-medium">{student.phone}</td>
                                <td className="py-4 text-xs text-gray-500 font-medium">{student.class}</td>
                                <td className="py-4 text-xs font-black text-gray-800">{student.grade}</td>
                                <td className="py-4">
                                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${student.status === 'Paid'
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-red-100 text-red-500'
                                        }`}>
                                        {student.status}
                                    </span>
                                </td>
                                <td className="py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 px-2">
                                        <button className="p-1 hover:bg-gray-200 rounded text-gray-400">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-gray-800">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentDirectory;
