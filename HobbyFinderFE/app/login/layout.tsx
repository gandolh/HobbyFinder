import HaloBackground from "@layout/organisms/HaloBackground";
import { Box } from "@mantine/core";

interface LoginLayoutProps {
    children: React.ReactNode;
}
const LoginLayout = ({ children }: LoginLayoutProps) => {
    return (
        <HaloBackground>
            <Box className="flex justify-center items-center h-dvh">
                {children}
            </Box>
        </HaloBackground>

    );
}

export default LoginLayout;