import React from 'react';

const StatsCard = ({ title, value, icon: Icon, color }) => {
    return (
        <div className="bg-white p-5 rounded-[24px] flex items-center gap-5 shadow-sm border border-gray-50 flex-1 min-w-[200px]">
            <div className={`${color} p-4 rounded-full`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
                <p className="text-gray-400 text-[11px] font-medium mb-1">{title}</p>
                <h3 className="text-2xl font-black text-gray-800 tracking-tight">{value}</h3>
            </div>
        </div>
    );
};

export default StatsCard;
