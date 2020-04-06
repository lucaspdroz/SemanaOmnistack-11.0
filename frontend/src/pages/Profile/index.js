import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong> Caso:</strong>
                    <p>Caso Teste</p>
                    <strong>Descrições</strong>
                    <p>descrições teste</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong> Caso:</strong>
                    <p>Caso Teste</p>
                    <strong>Descrições</strong>
                    <p>descrições teste</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong> Caso:</strong>
                    <p>Caso Teste</p>
                    <strong>Descrições</strong>
                    <p>descrições teste</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong> Caso:</strong>
                    <p>Caso Teste</p>
                    <strong>Descrições</strong>
                    <p>descrições teste</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00</p>
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}