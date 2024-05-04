"use client";
import { authModalState } from '@/atoms/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';
import Image from 'next/image';

type AuthPageProps = {

};

const AuthPage = (props: AuthPageProps) => {
    const authModal = useRecoilValue(authModalState);
    const [user, loading, error] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);
    const router = useRouter();

    // if (pageLoading) return null;    {useEffect will not get executed}

    useEffect(() => {
        if (user) router.push('/codepage');
        if (pageLoading && !user) setPageLoading(false);
    }, [user, router, router]);

    if (pageLoading) return null;

    return <div className='bg-gradient-to-b from-gray-500 to-black h-screen relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <div className="flex justify-center items-center pointer-events-none select-none h-[calc(100vh-5rem)] ">
                {/* <img src='/hero.png' alt='Hero Image'></img> */}
                <Image src='/hero.png' alt='Hero Image' width={700} height={700} />
            </div>
            {authModal.isOpen && <AuthModal />}
        </div>
    </div>
}

export default AuthPage;
