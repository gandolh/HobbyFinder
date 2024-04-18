'use client';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sidebar } from '@layout/molecules/Sidebar';
import Header from '@layout/molecules/Header';


interface MyAppShellProps {
    children: React.ReactNode;
}

export default function MyAppShell({ children }: MyAppShellProps) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: '80px',
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md">
            <AppShell.Header>
                <Header opened={opened} toggle={toggle} />
            </AppShell.Header>
            <AppShell.Navbar p="md"><Sidebar /></AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}