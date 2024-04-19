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
                    </Group>
                </UnstyledButton>
            </div>

        </>
    );
}





export default PowerButton;
export { AvatarPic };