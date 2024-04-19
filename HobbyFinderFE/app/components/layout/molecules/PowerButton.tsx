import { UnstyledButton, Group, Avatar, Text, rem, Popover, Button, Stack, Divider } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from '@styles/UserButton.module.css';
import { UserProfile } from '@auth0/nextjs-auth0/client';
import { ToggleThemeComp } from '@layout/atoms/ToggleThemeComp';
import Link from 'next/link';

type PowerButtonProps = {
    authenticatedUser: UserProfile;
}


const PowerButton = ({ authenticatedUser }: PowerButtonProps) => {


    return (
        <>
            <ToggleThemeComp />
            <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <div className='flex gap-4'>
                        <UnstyledButton className={classes.user}>
                            <Group>
                                <Avatar
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                                    radius="xl"
                                />

                                <div style={{ flex: 1 }}>
                                    <Text size="sm" fw={500}>
                                        {authenticatedUser.name}
                                    </Text>

                                    <Text c="dimmed" size="xs">
                                        {authenticatedUser.email}
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
                    </Stack>
                </Popover.Dropdown>
            </Popover>
        </>

    );
}





export default PowerButton;