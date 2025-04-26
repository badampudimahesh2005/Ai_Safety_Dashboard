import React from "react";

const Header:React.FC = () => {
    return (
        <header className="flex items-center mb-6 bg-[#7353BA] border border-indigo-100  p-4 justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white/85 hover:text-white">AI Safety Incident Dashboard</h1>
      </header>
    );
    }

export default Header;