'use client';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sidebar } from './Sidebar';
import Logo from './Logo';


interface MyAppShellProps {
    children: React.ReactNode;
}

export default function MyAppShell({ children } : MyAppShellProps) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: '80px',
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div className='flex items-center font-bold'>
                <Logo size={50}/>
                <h1>Hobby finder</h1>
                </div>
            </AppShell.Header>
            <AppShell.Navbar p="md"><Sidebar/></AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}