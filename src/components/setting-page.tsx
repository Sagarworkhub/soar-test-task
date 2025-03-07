import { useState } from 'react';

import { SettingForm } from './setting-form';

const tabList = [
  { label: 'Edit Profile', value: 'edit-profile' },
  { label: 'Preferences', value: 'preference' },
  { label: 'Security', value: 'security' },
];

export const SettingPage = () => {
  const [activeTab, setActiveTab] = useState('');
  return (
    <div>
      <div className='p-7'>
        <div className='flex items-center overflow-x-auto'>
          {tabList.map(({ label, value }) => (
            <p
              key={value}
              className={`rounded-none px-[74px] font-medium ${
                activeTab === value
                  ? 'border-b-2 border-b-[#232323] text-lg text-[#232323]'
                  : 'text-base text-[#718EBF]'
              }`}
              onClick={() => {
                setActiveTab(value);
              }}
            >
              {label}
            </p>
          ))}
        </div>
        <div>{activeTab === 'edit-profile' && <SettingForm />}</div>
        <div>{activeTab === 'preference' && <p>Preference</p>}</div>
        <div>{activeTab === 'security' && <p>Security</p>}</div>
      </div>
    </div>
  );
};
