import {
    IconHome2,
    IconUser,
    IconSettings,
    IconUsersGroup,
    IconUserStar,
    IconShoppingCartSearch,
    IconCalendarEvent,
  } from '@tabler/icons-react';

  const sidebarMenuItems = [
    { 
      icon: IconHome2, 
      label: 'Home', 
      href: '/', 
      description: 'Navigate back to the home page.', 
    },
    { 
      icon: IconUsersGroup, 
      label: 'Team Sports', 
      href: '/team', 
      description: 'Discover and manage team sports activities, including creating lobbies for specific sports at designated locations and times.', 
    },
    { 
      icon: IconUserStar, 
      label: 'Individual Sports', 
      href: '/individual', 
      description: 'Find clubs and facilities tailored to individual sports interests.', 
    },
    { 
      icon: IconShoppingCartSearch, 
      label: 'Hobby Shops', 
      href: '/shop', 
      description: 'Locate specialty shops catering to your hobbies, such as musical instrument stores for guitar enthusiasts.', 
    },
    { 
      icon: IconCalendarEvent, 
      label: 'My Events', 
      href: '/events', 
      description: 'View and manage your scheduled events and plans.', 
    },
    { 
      icon: IconUser, 
      label: 'Account', 
      href: '/info', 
      description: 'Access and manage information related to your user account.', 
    },
    { 
      icon: IconSettings, 
      label: 'Settings', 
      href: '/settings', 
      description: 'Adjust platform settings and preferences according to your needs.', 
    },
  ];
  
  export { sidebarMenuItems };
  