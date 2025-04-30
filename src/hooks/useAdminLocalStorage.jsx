import { useEffect, useState } from 'react';
const ADMIN_EMAIL = 'nafisaali20006@gmail.com';

export default function useAdminLocalStorage() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem('userEmail');
        setIsAdmin(savedEmail === ADMIN_EMAIL);
    }, []);

    return isAdmin;
}
