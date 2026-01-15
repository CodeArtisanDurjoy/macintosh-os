"use client";
import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { LucidePlay, LucideSquare, LucideTerminal } from 'lucide-react';

export default function JohnTheRipper() {
    const [hash, setHash] = useState('5f4dcc3b5aa765d61d8327deb882cf99'); // md5("password")
    const [isCracking, setIsCracking] = useState(false);
    const [output, setOutput] = useState<string[]>([]);
    const outputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    const handleCrack = () => {
        if (isCracking) return;
        setIsCracking(true);
        setOutput([`Loaded 1 password hash (MD5 [128/128 AVX intrinsics 12x])`]);

        const candidates = [
            '123456', 'qwerty', 'admin', 'welcome', 'login',
            'p@ssw0rd', 'dragon', 'baseball', 'monkey', 'letmein',
            'blink', 'sunshine', 'master', 'football', 'password'
        ];

        const steps: { text: string, delay: number }[] = [
            { text: `Will run 4 OpenMP threads`, delay: 500 },
            { text: `Press 'q' or Ctrl-C to abort, almost any other key for status`, delay: 600 },
            { text: `0g 0:00:00:00 DONE (2025-01-15 14:20) 0g/s 0p/s 0c/s 0C/s`, delay: 1000 },
            { text: `Warning: Only 1 candidate left, all others cracked.`, delay: 1200 },
            { text: `Proceeding with wordlist mode: /usr/share/john/password.lst`, delay: 1500 },
        ];

        // Add varying candidate trials
        candidates.forEach((cand, i) => {
            steps.push({ text: `Trying candidate: ${cand}`, delay: 2000 + (i * 300) });
        });

        // Add success step
        steps.push({
            text: `\npassword         (?)`,
            delay: 2000 + (candidates.length * 300) + 500
        });
        steps.push({
            text: `1g 0:00:00:05 DONE (2025-01-15 14:20) 0.1851g/s 300.2p/s 300.2c/s 300.2C/s`,
            delay: 2000 + (candidates.length * 300) + 700
        });
        steps.push({
            text: `Use the "--show" option to display all of the cracked passwords reliably`,
            delay: 2000 + (candidates.length * 300) + 800
        });
        steps.push({
            text: `Session completed`,
            delay: 2000 + (candidates.length * 300) + 1000
        });


        let currentDelay = 0;
        steps.forEach((step, index) => {
            currentDelay = step.delay;
            setTimeout(() => {
                // If it's the success line, show it in green/bold
                if (step.text.includes('password         (?)')) {
                    setOutput(prev => [...prev, `\x1b[32m${step.text}\x1b[0m`]); // Logic to handle color in render
                } else {
                    setOutput(prev => [...prev, step.text]);
                }

                if (index === steps.length - 1) {
                    setIsScanning(false);
                }
            }, step.delay);
        });

        // Cleanup timeout wrapper not strictly implemented here for brevity, 
        // relying on setIsScanning(false) at end. 
        setTimeout(() => setIsCracking(false), steps[steps.length - 1].delay);
    };

    // Helper fake setISScanning for the timeout logic above
    const setIsScanning = (val: boolean) => setIsCracking(val);

    const handleStop = () => {
        setIsCracking(false);
        setOutput(prev => [...prev, '\nSession aborted.']);
    };

    return (
        <div className="h-full flex flex-col bg-[#0d0d0d] text-gray-300 font-mono text-sm p-4 rounded-b-xl border-t border-gray-800">
            <div className="flex gap-2 mb-4 border-b border-gray-800 pb-4 items-center">
                <LucideTerminal size={20} className="text-orange-500" />
                <div className="flex-1 flex flex-col gap-1">
                    <label className="text-gray-500 text-xs uppercase tracking-wider">Target Hash (MD5)</label>
                    <input
                        type="text"
                        value={hash}
                        onChange={(e) => setHash(e.target.value)}
                        className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-orange-400 focus:outline-none focus:border-orange-500 transition-colors font-mono text-xs"
                        disabled={isCracking}
                    />
                </div>
                <div className="flex items-end h-full pt-4">
                    {!isCracking ? (
                        <button
                            onClick={handleCrack}
                            className="bg-orange-700 hover:bg-orange-600 text-white px-4 py-1.5 rounded flex items-center gap-2 transition-colors text-xs font-bold uppercase"
                        >
                            <LucidePlay size={12} fill="currentColor" /> Crack
                        </button>
                    ) : (
                        <button
                            onClick={handleStop}
                            className="bg-red-900 hover:bg-red-800 text-white px-4 py-1.5 rounded flex items-center gap-2 transition-colors text-xs font-bold uppercase"
                        >
                            <LucideSquare size={12} fill="currentColor" /> Stop
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 bg-black/80 rounded p-3 overflow-y-auto font-mono whitespace-pre-wrap leading-tight text-xs" ref={outputRef}>
                {output.map((line, i) => (
                    <div key={i} className={clsx(
                        "mb-0.5 animate-in fade-in duration-300",
                        line.includes('password         (?)') && "text-green-400 font-bold text-base my-2"
                    )}>
                        {line.replace(/\x1b\[[0-9;]*m/g, '')}
                    </div>
                ))}
                {output.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-gray-700 opacity-50">
                        <div className="text-4xl font-black mb-2 select-none">JTR 2.0</div>
                        <p>Ready to audit password strength...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
