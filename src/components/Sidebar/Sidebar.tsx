"use client";
import SidebarItem from "./item";
import { IoClose } from 'react-icons/io5';

interface ISidebarItem {
    name: string;
    path: string;
    icon: React.ReactNode;
    items?: ISubItem[];
}

interface ISubItem {
    name: string;
    path: string;
}

const items: ISidebarItem[] = [
    {
        name: "Simple Programs",
        path: "/codepage/topic1",
        icon: <IoClose />,
    },
    {
        name: "If-Else",
        path: "/codepage/topic2",
        icon: <IoClose />,
    },
    {
        name: "Switch-case",
        path: "/codepage/topic3",
        icon: <IoClose />,
    },
    {
        name: "Patterns",
        path: "/codepage/topic4",
        icon: <IoClose />,
    },
    {
        name: "Linked List",
        path: "/codepage/topic5",
        icon: <IoClose />,
        items: [
            {
                name: "abc",
                path: "/settings",
            },
            {
                name: "xyz",
                path: "/settings/security",
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className="fixed left-0 h-full w-64 bg-color-dark-layer-1 text-color-dark-gray-7 shadow-lg z-10 p-4">
            <div className="flex flex-col space-y-10 w-full">
                {/* <img className="h-10 w-fit" src="/logo-expanded.png" alt="Logo" /> */}
                <div className="flex flex-col space-y-2">
                    {items.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
