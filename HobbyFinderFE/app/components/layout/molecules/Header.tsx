import Logo from '@layout/atoms/Logo';
import { Burger, Button } from '@mantine/core';
import { useUser } from '@auth0/nextjs-auth0/client';
import { use, useEffect } from 'react';
import PowerButton from '@layout/molecules/PowerButton';


interface HeaderProps {
    opened: boolean;
    toggle: () => void;
}


const AuthButtonsGroup = () => {
    const { user, error, isLoading } = useUser();

    if (error) console.log(error);
    useEffect(() => {
        console.log(user);
    }, [user]);

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <>
            {
                isLoading ? <></> :
                    (user ?
                        (
                            <>
                                <a href="/api/auth/logout"><Button> Logout </Button ></a>
                                <PowerButton authenticatedUser={user} />
                            </>) :
                            <a href="/api/auth/login"><Button> Login </Button></a>)
            }
        </>
    );
}

const Header = ({ opened, toggle }: HeaderProps) => {
    return (
        (
            <div className='flex justify-between items-center px-4 h-full'>
                <div >
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <div className='sm:flex items-center font-bold hidden '>
                        <Logo size={50} />
                        <h1>Hobby finder</h1>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <AuthButtonsGroup />
                </div>
            </div>
        )
    );
}

export default Header;