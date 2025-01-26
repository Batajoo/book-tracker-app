import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className='px-8 py-4 flex flex-col gap-3 border rounded-lg shadow-md'>
        <h2 className="text-lg font-semibold mb-2">Theme Preferences</h2>
        <div className='flex justify-between'>
          <span>Dark Mode</span>
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <input type="checkbox" id="toggle" className="sr-only peer" onChange={changeDarkMode}/>
          <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-500 relative transition-all duration-300">
            <div className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full shadow-md transition-all duration-300 ${darkMode ? "translate-x-7": "translate-x-0"}`}></div>
          </div>
        </label>
        </div>
        
      </div>
    </section>
  );
}

export default Settings;
