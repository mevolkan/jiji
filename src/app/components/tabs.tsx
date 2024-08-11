'use client';

import React, { useState, ReactNode, ReactElement } from 'react';

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const validChildren = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  );

  const [activeTab, setActiveTab] = useState(
    validChildren[0]?.props.label || ''
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-wrap border-b border-gray-300">
        {validChildren.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2 border-purple-500' : ''
            } flex-1 text-gray-700 font-medium py-2 tab-button`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap py-4 w-full">
        {validChildren.map((child) =>
          child.props.label === activeTab ? (
            <div key={child.props.label}>{child.props.children}</div>
          ) : null
        )}
      </div>
    </div>
  );
};

interface TabProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const Tab = ({ label, children, className }: TabProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export { Tabs, Tab };
