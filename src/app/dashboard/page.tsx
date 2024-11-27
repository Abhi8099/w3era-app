"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';;
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';

const Dashboard: React.FC = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    return (
        <div className="flex h-screen bg-grey">
            <Sidebar setActiveItem={setActiveItem} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header activeItem={activeItem} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-lightblue">
                    <MainContent activeItem={activeItem} />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

