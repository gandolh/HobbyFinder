import { UnstyledButton, Group, Avatar, Text, rem, Popover, Button, Stack, Divider, AvatarProps } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from '@styles/UserButton.module.css';
import { UserProfile } from '@auth0/nextjs-auth0/client';
import { ToggleThemeComp } from '@layout/atoms/ToggleThemeComp';
import Link from 'next/link';

interface PowerButtonProps {
    user: UserProfile;
}


const defaultAvatarPic = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png";

const AvatarPic = (props: AvatarProps) => {
    return (
        <Avatar
            {...props}
            src={props.src ?? defaultAvatarPic}
        />
    );
}

const PowerButton = ({ user }: PowerButtonProps) => {
    return (
        <>
            <ToggleThemeComp />
            <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <div className='flex gap-4'>
                        <UnstyledButton className={classes.user}>
                            <Group>
                                <AvatarPic src={user.picture} radius='xl' />
                                <div style={{ flex: 1 }}>
                                    <Text size="sm" fw={500}>
                                        {user.name}
                                    </Text>

                                    <Text c="dimmed" size="xs">
                                        {user.email}
                                    </Text>
                                </div>

                                <IconChevronDown style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
                            </Group>
                        </UnstyledButton>
                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <Stack gap={0}>
                        <Link className='w-full ' href="/info">
                            My info
                        </Link>
                        <Divider my={'xs'} />
                        <Link className='w-full ' href="#">
                            Others 🙂
                        </Link>
                        <Divider my={'xs'} />
                        <Link className='w-full' href="/api/auth/logout"><Button fullWidth> Logout </Button></Link>
                    </Stack>
                </Popover.Dropdown>
            </Popover>
        </>
    );
}





export default PowerButton;
export { AvatarPic };