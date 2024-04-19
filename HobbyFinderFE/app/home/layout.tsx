import MyAppShell from "@layout/organisms/MyAppShell";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({children} : AppLayoutProps) => {
    return (
        <MyAppShell>
            {children}
        </MyAppShell>
    );
}

export default AppLayout;