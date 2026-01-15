"use client";
import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { LucidePlay, LucideSquare, LucideActivity } from 'lucide-react';

export default function Nmap() {
    const [target, setTarget] = useState('192.168.1.1');
    const [isScanning, setIsScanning] = useState(false);
    const [output, setOutput] = useState<string[]>([]);
    const outputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    const handleScan = () => {
        if (isScanning) return;
        setIsScanning(true);
        setOutput([`Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toISOString()}`]);

        const steps = [
            { text: `Initiating Ping Scan at ${new Date().toLocaleTimeString()}`, delay: 500 },
            { text: `Scanning ${target} [2 ports]`, delay: 1200 },
            { text: `Completed Ping Scan at ${new Date().toLocaleTimeString()}, 0.00s elapsed (1 total hosts)`, delay: 1800 },
            { text: `Initiating Parallel DNS resolution of 1 host. at ${new Date().toLocaleTimeString()}`, delay: 2000 },
            { text: `Completed Parallel DNS resolution of 1 host. at ${new Date().toLocaleTimeString()}, 0.01s elapsed`, delay: 2500 },
            { text: `Initiating Connect Scan at ${new Date().toLocaleTimeString()}`, delay: 2800 },
            { text: `Scanning ${target} [1000 ports]`, delay: 3200 },
            { text: `Discovered open port 80/tcp on ${target}`, delay: 4000 },
            { text: `Discovered open port 443/tcp on ${target}`, delay: 4500 },
            { text: `Discovered open port 22/tcp on ${target}`, delay: 5000 },
            { text: `Completed Connect Scan at ${new Date().toLocaleTimeString()}, 2.00s elapsed (1000 total ports)`, delay: 6000 },
            { text: `Nmap scan report for ${target}`, delay: 6200 },
            { text: `Host is up (0.00042s latency).`, delay: 6300 },
            { text: `Not shown: 997 closed tcp ports (conn-refused)`, delay: 6400 },
            { text: `PORT    STATE SERVICE`, delay: 6500 },
            { text: `22/tcp  open  ssh`, delay: 6600 },
            { text: `80/tcp  open  http`, delay: 6700 },
            { text: `443/tcp open  https`, delay: 6800 },
            { text: `\nNmap done: 1 IP address (1 host up) scanned in 3.42 seconds`, delay: 7000 },
        ];

        let currentDelay = 0;
        steps.forEach((step, index) => {
            currentDelay = step.delay;
            setTimeout(() => {
                setOutput(prev => [...prev, step.text]);
                if (index === steps.length - 1) {
                    setIsScanning(false);
                }
            }, step.delay);
        });
    };

    const handleStop = () => {
        setIsScanning(false);
        setOutput(prev => [...prev, '\nScan aborted by user.']);
    };

    return (
        <div className="h-full flex flex-col bg-[#1e1e1e] text-green-500 font-mono text-sm p-4 rounded-b-xl">
            <div className="flex gap-2 mb-4 border-b border-gray-700 pb-4">
                <div className="flex-1 flex flex-col gap-1">
                    <label className="text-gray-400 text-xs">Target:</label>
                    <input
                        type="text"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        className="bg-black/30 border border-gray-600 rounded px-2 py-1 text-white focus:outline-none focus:border-green-500 transition-colors"
                        disabled={isScanning}
                    />
                </div>
                <div className="flex items-end">
                    {!isScanning ? (
                        <button
                            onClick={handleScan}
                            className="bg-green-700 hover:bg-green-600 text-white px-4 py-1 rounded flex items-center gap-2 transition-colors"
                        >
                            <LucidePlay size={14} /> Scan
                        </button>
                    ) : (
                        <button
                            onClick={handleStop}
                            className="bg-red-700 hover:bg-red-600 text-white px-4 py-1 rounded flex items-center gap-2 transition-colors"
                        >
                            <LucideSquare size={14} /> Stop
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 bg-black/50 rounded p-2 overflow-y-auto font-mono whitespace-pre-wrap" ref={outputRef}>
                {output.map((line, i) => (
                    <div key={i} className="mb-0.5 animate-in fade-in duration-300">{line}</div>
                ))}
                {output.length === 0 && (
                    <div className="text-gray-500 italic mt-20 text-center">
                        <LucideActivity className="mx-auto mb-2 opacity-50" size={32} />
                        Ready to scan network overlay...
                    </div>
                )}
            </div>
        </div>
    );
}
