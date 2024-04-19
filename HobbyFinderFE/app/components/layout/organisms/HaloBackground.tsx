'use client';
import { useEffect } from "react";

declare global {
    interface Window { VANTA: any; }
}

interface HaloBackgroundProps {
    children: React.ReactNode;
}

const HaloBackground = ({children} : HaloBackgroundProps) => {

    useEffect(() => {
        const effect = window.VANTA.HALO({
            el: "#halo-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00
        })

        return () => {
            effect.destroy();
        }
    }, []);

    return (  
        <div id="halo-background">
            {children}
        </div>
    );
}

export default HaloBackground;