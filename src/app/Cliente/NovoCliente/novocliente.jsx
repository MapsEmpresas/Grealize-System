import React, { useState, useEffect, useRef } from "react";
import './novocliente.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, onSnapshot, getDocs } from 'firebase/firestore';

function NovoCliente() {
    const [encaminharCliente, setEncaminharCliente] = useState(false);
    const [naoEncaminharCliente, setNaoEncaminharCliente] = useState(false);
    const [encaminharClienteCobranca, setEncaminharClienteCobranca] = useState(false);
    const [naoEncaminharClienteCobranca, setNaoEncaminharClienteCobranca] = useState(false);
    const [dataEncaminhamento, setDataEncaminhamento] = useState('');
    const [dataCobranca, setDataCobranca] = useState('');
    const [vencimentoCobranca, setVencimentoCobranca] = useState('');

    const [clientes, setClientes] = useState([]);
    const [formState, setFormState] = useState('');
    const [loader, setLoader] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [razao, setRazao] = useState('');
    const [cpf, setCpf] = useState('');
    const [operador, setOperador] = useState('');
    const [data, setData] = useState('');
    const [fantasia, setFantasia] = useState('');
    const [venc, setVenc] = useState('');
    const [link, setLink] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            navigate('/app/home/novocliente');
            return;
        }
        const db = getFirestore();
        const q = query(collection(db, 'clientes'), where('userId', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const clientesData = [];
            snapshot.forEach((doc) => {
                clientesData.push({ id: doc.id, ...doc.data() });
            });
            setClientes(clientesData);
        });
        return () => {
            unsubscribe();
        };
    }, [navigate]);
    const db = getFirestore();
    async function cadastrarCliente() {
        try {
            if (nome.length === 0) {
                setMensagem('Informe o nome do autorizante 😤');
                return;
            } else if (cpf.length === 0) {
                setMensagem('Informe o CNPJ ou CPF do cliente 😤');
                return;
            }
            else if (email.length === 0) {
                setMensagem('Informe o email do cliente 😤');
                return;
            }
            const clienteData = {
                nome,
                email,
                fone,
                razao,
                cpf,
                fantasia,
                data,
                operador,
                venc,
                link,
                encaminharCliente,
                naoEncaminharCliente,
                encaminharClienteCobranca,
                naoEncaminharClienteCobranca,
                dataEncaminhamento,
                dataCobranca,
                vencimentoCobranca
            };
            const auth = getAuth();
            const userId = auth.currentUser.uid;
            clienteData.userId = userId;
            // const clienteExistente = await clienteJaExiste(cpf);
            // if (clienteExistente) {
            //     setMensagem('Cliente já cadastrado.');
            //     return;
            // }
            const novoClienteRef = await addDoc(collection(db, 'clientes'), clienteData);
            setFormState({
                nome: '',
                email: '',
                fone: '',
                razao: '',
                cpf: '',
                fantasia: '',
                data: '',
                operador: '',
                venc: '',
                link: '',
                encaminharCliente: '',
                naoEncaminharCliente: '',
                encaminharClienteCobranca: '',
                naoEncaminharClienteCobranca: '',
                dataEncaminhamento: '',
                dataCobranca: '',
                vencimentoCobranca: ''

            });
            setMensagem('');
            setSucesso('S');
            console.log('Novo cliente criado com ID:', novoClienteRef.id);
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            setMensagem('Ocorreu um erro ao cadastrar o cliente. Por favor, tente novamente.');
            setSucesso('N');
        }
    }

    return <div>
        <div className="background">
            <div className="" id="formId">
                <div className="quest row">
                    <div className="col-md-4 ">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>RAZÃO SOCIAL:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setRazao(e.target.value)}
                            value={razao}
                            className="form-control"
                            placeholder="Insirira o razão social neste campo"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>CNPJ/CPF:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setCpf(e.target.value)}
                            value={cpf}
                            className="form-control"
                            placeholder="Insirira o cnpj neste campo"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>FANTASIA:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setFantasia(e.target.value)}
                            value={fantasia}
                            className="form-control"
                            placeholder="Insirira o nome fantasia neste campo"
                        />
                    </div>
                </div>
                <div className="quest row">
                    <div className="col-md-4 ">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>E-MAIL:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="form-control"
                            placeholder="Insirira o e-mail neste campo"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>TELEFONE:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setFone(e.target.value)}
                            value={fone}
                            className="form-control"
                            placeholder="Insirira o telefone neste campo"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>NOME:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            className="form-control"
                            placeholder="Insirira o nome do cliente neste campo"
                        />
                    </div>
                </div>
                <div className="quest row">
                <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>OPERADOR:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setOperador(e.target.value)}
                            value={operador}
                            className="form-control"
                            placeholder="Insirira o nome do cliente neste campo"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>DATA:</b></label>
                        <input
                            type="date"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setData(e.target.value)}
                            value={data}
                            className="form-control"
                            placeholder="Razão social"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>VENCIMENTO:</b></label>
                        <input
                            type="date"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setVenc(e.target.value)}
                            value={venc}
                            className="form-control"
                            placeholder="CNPJ/CPF"
                        />
                    </div>
                </div>
                <div className="quest row">
                    <div className="col-md-12">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>LINK:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setLink(e.target.value)}
                            value={link}
                            className="form-control"
                            placeholder="Insira o link do contrato neste campo "
                        />
                    </div>
                </div>

                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso === 'S' ? <Navigate to='/app/home' /> : null}
            </div>

        </div>
        <div className="row salvar">
            <Link to="/app/home" className="btn btn-warning btn-acao">Cancelar</Link>
            <button onClick={cadastrarCliente} type="button" className="btn btn-primary btn-acao">Salvar</button>

        </div>
    </div >
}
export default NovoCliente;