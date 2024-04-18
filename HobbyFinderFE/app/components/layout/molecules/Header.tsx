import Logo from '@layout/atoms/Logo';
import { Burger, Button } from '@mantine/core';
import { warnOptionHasBeenDeprecated } from 'next/dist/server/config';

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
                    <Button variant="default"> Register </Button>                    
                    <Button> Login </Button>
                </div>
            </div>
        )
    );
}

export default Header;