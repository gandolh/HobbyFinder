import Logo from '@layout/atoms/Logo';
import { Burger, Button } from '@mantine/core';
import Link from 'next/link'


interface HeaderProps {
    opened: boolean;
    toggle: () => void;
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
                    <Link href="/login">
                        <Button> Login </Button>
                    </Link>
                </div>
            </div>
        )
    );
}

export default Header;