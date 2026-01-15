'use client';

import AppWindows from './components/AppViewer/AppWindows';
import Bg from './components/Bg';
import Desktop from './components/Desktop/Index';
import Header from './components/Header';
import Dock from './components/TaskBar';
import LoginScreen from './components/LoginScreen';
import useAppStore from '@/store';

export default function Page() {
  const isLoggedIn = useAppStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <div className="relative h-screen w-full">
      <Bg />
      <Desktop />
      <Header />
      <Dock />
      <AppWindows />
    </div>
  )
}