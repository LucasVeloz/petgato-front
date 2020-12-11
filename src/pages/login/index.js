import { useCallback, useState } from 'react';

import Login from '../../components/login';

import api from '../../services/api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(async () => {
        const {data} = await api.post('/auth/login', {
            email,
            password,
        });
        const token = data.token;
        localStorage.setItem("@PetGato:token", token);
    }, [ email, password ]);

    return (
        <Login handleSubmit={handleSubmit}
               setEmail={setEmail}
               setPassword={setPassword}
        />
    );
}

export default LoginPage;