import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'
import './styles.css';
import HeroesImage from '../../assets/heroes.png'
import LogoImage from '../../assets/logo.svg'

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try{
            const reponse = await api.post('/session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', reponse.data.name);
            alert(reponse.data.name)
            history.push('/profile')
        } catch(err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImage} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn si={16} color="E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={HeroesImage} alt="Heroes"/>
        </div>
    );
}