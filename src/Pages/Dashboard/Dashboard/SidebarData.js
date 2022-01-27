import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Make Admin',
        path: '/dashboard/makeAdmin',
        icon: <RiIcons.RiAdminFill />,
        cName: 'nav-text'
    },
    {
        title: 'All Blogs',
        path: '/dashboard/Allblogs',
        icon: <FaIcons.FaBlogger />,
        cName: 'nav-text'
    },
    {
        title: 'Add New Blog',
        path: '/dashboard/addnewBlog',
        icon: <FaIcons.FaBloggerB />,
        cName: 'nav-text'
    }
];