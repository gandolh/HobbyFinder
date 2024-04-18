import Image from 'next/image'

interface LogoProps {
    size: number;
}

const Logo = ({size} : LogoProps) => {
    return (
        <>
            <Image src="/8_1sasa11.jpg"
                width={size}
                height={size}
                alt='logo image' />
        </>
    );
}

export default Logo;