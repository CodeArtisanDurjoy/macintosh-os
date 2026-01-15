"use client";

import clsx from "clsx";
import Image from "next/image";
import useAppStore from "@/store";
import { BOX_HEIGHT, BOX_WIDTH, IconProps } from "@/Constants/constants";
import useAppWindows from "@/store/useAppWindows";
import useSoundEffect from "@useverse/usesoundeffect";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Icon({
    src,
    alt,
    tooltip,
    id,
    windowType,
}: IconProps) {
    const { theme } = useAppStore();
    const [isHovered, setIsHovered] = useState(false);

    const clickSound = useSoundEffect("/audio/mouse-click.mp3", {
        volume: 0.25,
    });

    const { windows, addWindow, restoreWindow } = useAppWindows();

    const thisWindow = windows.find((window) => window.id === id);

    const isWindowOpen = !!thisWindow;

    const handleOpenWindow = () => {
        clickSound.play();
        if (thisWindow?.isMinimized) {
            restoreWindow(id);
            return;
        }
        if (isWindowOpen) return;

        const { innerWidth, innerHeight } = window;
        const screenWidth = innerWidth;
        const screenHeight = innerHeight;

        // Safe "mid" boundaries (e.g. 5% to 95% of screen)
        const minX = screenWidth * 0.05;
        const maxX = screenWidth * 0.95 - BOX_WIDTH;
        const minY = screenHeight * 0.05;
        const maxY = screenHeight * 0.95 - BOX_HEIGHT;

        const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
        const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

        addWindow({
            id,
            title: tooltip,
            position: { x: randomX, y: randomY },
            fixedLocation: "right",
            windowType,
            isMinimized: false,
        });

    };

    return (
        <motion.div
            onClick={handleOpenWindow}
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onContextMenu={(e) => {
                e.preventDefault();
            }}
            onContextMenuCapture={(e) => {
                e.preventDefault();
            }}
            initial={{ scale: 1, y: 0 }}
            animate={{
                scale: isHovered && !isWindowOpen ? 1.4 : 1,
                y: isHovered && !isWindowOpen ? -20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                mass: 0.5,
            }}
        >
            <motion.div
                animate={{
                    rotate: isHovered && !isWindowOpen ? [0, -5, 5, -5, 0] : 0,
                }}
                transition={{
                    duration: 0.5,
                    repeat: isHovered && !isWindowOpen ? Infinity : 0,
                    repeatDelay: 0.5,
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={64}
                    height={64}
                    draggable={false}
                    className={clsx(
                        "transition-all duration-300",
                        isHovered && !isWindowOpen && "drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                    )}
                />
            </motion.div>

            <motion.div
                className={clsx(
                    "absolute -top-[3.25rem] pointer-events-none left-1/2 -translate-x-1/2 border rounded-md px-3 py-0.5 inset-shadow-[0_0_0_0.5px] inset-shadow-foreground/30 transition-all duration-300 whitespace-nowrap",
                    theme === "dark" && "border-background/80 bg-[#252525]",
                    theme === "light" && "border-foreground/30 bg-[#d8d8d8]"
                )}
                initial={{ opacity: 0, y: 5 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 5,
                }}
                transition={{ duration: 0.2 }}
            >
                <div
                    className={clsx(
                        "absolute left-1/2 -bottom-[0.36rem] -translate-x-1/2 w-3 h-3 rotate-45 inset-shadow-[0_0_0_0.5px] inset-shadow-foreground/30",
                        theme === "dark" && "border-b border-r border-background/80 bg-[#252525]",
                        theme === "light" && "border-b border-r border-foreground/30 bg-[#d8d8d8]"
                    )}
                    style={{
                        clipPath: "polygon(37% 37%, 100% 0, 100% 100%, 0% 100%)",
                    }}
                />
                <span className="text-sm capitalize">{tooltip}</span>
            </motion.div>

            {isWindowOpen && (
                <motion.div
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white/70"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                />
            )}
        </motion.div>
    )
}
