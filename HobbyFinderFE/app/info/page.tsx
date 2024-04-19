import { getSession, Session } from '@auth0/nextjs-auth0';
import ProfileCard from '@components/info/ProfileCard';
import { Box, ScrollArea } from '@mantine/core';

const AppShellMainHeight = "calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px) - 2 * var(--app-shell-padding, 0px)) ";


export default async function ProfileServer() {
    const session: Session | null | undefined = await getSession();
    const user = session?.user;
    
    return (
        <Box
         h={AppShellMainHeight}
         className='flex justify-center items-center'>
            {user && (
                <ProfileCard user={user} />
            )}
        </Box>
    );
}