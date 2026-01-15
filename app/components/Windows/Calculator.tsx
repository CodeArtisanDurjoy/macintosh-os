'use client';

import { useState, useEffect } from 'react';

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState<string | null>(null);
    const [operation, setOperation] = useState<string | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputDigit = (digit: string) => {
        if (waitingForOperand) {
            setDisplay(digit);
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? digit : display + digit);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const clear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperation: string) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(String(inputValue));
        } else if (operation) {
            const currentValue = previousValue || '0';
            const newValue = calculate(parseFloat(currentValue), inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(String(newValue));
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const calculate = (firstValue: number, secondValue: number, operation: string): number => {
        switch (operation) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '×':
                return firstValue * secondValue;
            case '÷':
                return firstValue / secondValue;
            case '%':
                return firstValue % secondValue;
            default:
                return secondValue;
        }
    };

    const toggleSign = () => {
        const newValue = parseFloat(display) * -1;
        setDisplay(String(newValue));
    };

    const inputPercent = () => {
        const currentValue = parseFloat(display);
        if (currentValue === 0) return;

        const newValue = currentValue / 100;
        setDisplay(String(newValue));
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const { key } = event;

            if (key >= '0' && key <= '9') {
                inputDigit(key);
            } else if (key === '.') {
                inputDecimal();
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                const op = key === '*' ? '×' : key === '/' ? '÷' : key;
                performOperation(op);
            } else if (key === 'Enter' || key === '=') {
                performOperation('=');
            } else if (key === 'Escape' || key === 'c' || key === 'C') {
                clear();
            } else if (key === '%') {
                inputPercent();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [display, previousValue, operation, waitingForOperand]);

    const Button = ({
        value,
        onClick,
        className = '',
        span = false
    }: {
        value: string;
        onClick: () => void;
        className?: string;
        span?: boolean;
    }) => (
        <button
            onClick={onClick}
            className={`
                ${span ? 'col-span-2' : ''}
                ${className}
                h-14 rounded-lg font-medium text-lg
                transition-all duration-150
                active:scale-95
                shadow-sm hover:shadow-md
            `}
        >
            {value}
        </button>
    );

    return (
        <div className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <div className="w-full max-w-sm">
                {/* Calculator Body */}
                <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10">
                    {/* Display */}
                    <div className="mb-6 p-6 bg-black/40 rounded-2xl border border-white/5">
                        <div className="text-right">
                            <div className="text-5xl font-light text-white tracking-tight overflow-hidden text-ellipsis">
                                {display}
                            </div>
                        </div>
                    </div>

                    {/* Buttons Grid */}
                    <div className="grid grid-cols-4 gap-3">
                        {/* Row 1 */}
                        <Button
                            value="AC"
                            onClick={clear}
                            className="bg-gray-400 hover:bg-gray-300 text-black"
                        />
                        <Button
                            value="±"
                            onClick={toggleSign}
                            className="bg-gray-400 hover:bg-gray-300 text-black"
                        />
                        <Button
                            value="%"
                            onClick={inputPercent}
                            className="bg-gray-400 hover:bg-gray-300 text-black"
                        />
                        <Button
                            value="÷"
                            onClick={() => performOperation('÷')}
                            className="bg-orange-500 hover:bg-orange-400 text-white"
                        />

                        {/* Row 2 */}
                        <Button
                            value="7"
                            onClick={() => inputDigit('7')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="8"
                            onClick={() => inputDigit('8')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="9"
                            onClick={() => inputDigit('9')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="×"
                            onClick={() => performOperation('×')}
                            className="bg-orange-500 hover:bg-orange-400 text-white"
                        />

                        {/* Row 3 */}
                        <Button
                            value="4"
                            onClick={() => inputDigit('4')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="5"
                            onClick={() => inputDigit('5')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="6"
                            onClick={() => inputDigit('6')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="-"
                            onClick={() => performOperation('-')}
                            className="bg-orange-500 hover:bg-orange-400 text-white"
                        />

                        {/* Row 4 */}
                        <Button
                            value="1"
                            onClick={() => inputDigit('1')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="2"
                            onClick={() => inputDigit('2')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="3"
                            onClick={() => inputDigit('3')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="+"
                            onClick={() => performOperation('+')}
                            className="bg-orange-500 hover:bg-orange-400 text-white"
                        />

                        {/* Row 5 */}
                        <Button
                            value="0"
                            onClick={() => inputDigit('0')}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                            span={true}
                        />
                        <Button
                            value="."
                            onClick={inputDecimal}
                            className="bg-gray-700 hover:bg-gray-600 text-white"
                        />
                        <Button
                            value="="
                            onClick={() => performOperation('=')}
                            className="bg-orange-500 hover:bg-orange-400 text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
