import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconLogout,
  IconLogin,
} from '@tabler/icons-react';
import classes from '@styles/Sidebar.module.css';
import Logo from '@layout/atoms/Logo';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { sidebarMenuItems } from './MenuItems';


interface SidebarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
  href: string;
}




function SidebarLink({ icon: Icon, label, active, onClick, href }: SidebarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={href} >
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}


export function Sidebar() {
  const [active, setActive] = useState(0);
  const { user } = useUser();

  const links = sidebarMenuItems.map((link, index) => (
    <SidebarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      href={link.href}
    />
  ));

  return (
    <nav className={classes.Sidebar}>
      <div className='block sm:hidden'>
        <UnstyledButton className={classes.link} data-active={undefined}>
          <Logo size={30} />
        </UnstyledButton>

      </div>

      <div className={classes.SidebarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        {user ?
          <SidebarLink icon={IconLogout} label="Logout" href="/api/auth/logout" /> :
          <SidebarLink icon={IconLogin} label="Login" href="/api/auth/login" />
        }
      </Stack>
    </nav>
  );
}

