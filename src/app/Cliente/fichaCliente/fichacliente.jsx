import React, { useState, useEffect } from "react";
import '../EditarCliente/editarcliente.css'
import './fichacliente.css'
import { useParams, Navigate, Link } from 'react-router-dom';
import 'firebase/firestore'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function FichaCliente(props) {
    const [loader, setLoader] = useState(false);
    const [formState, setFormState] = useState('');
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
    const db = getFirestore();
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('ID do Cliente:', id);
                const clienteDocRef = doc(db, 'clientes', id);
                console.log('Referência do Documento:', clienteDocRef);
                const docSnapshot = await getDoc(clienteDocRef);
                console.log('Snapshot do Documento:', docSnapshot.data());
                if (docSnapshot.exists()) {
                    const dados = docSnapshot.data();
                    setRazao(dados.razao);
                    setCpf(dados.cpf);
                    setLink(dados.link);
                    setFantasia(dados.fantasia);
                    setNome(dados.nome);
                    setEmail(dados.email);
                    setFone(dados.fone);
                    setData(dados.data);
                    setOperador(dados.operador);
                    setVenc(dados.venc);
                    setLink(dados.link);
                } else {
                    setMensagem('Cliente não encontrado');
                }
            } catch (error) {
                setMensagem('Erro ao obter dados do cliente');
                console.error('Erro ao obter dados do cliente:', error);
            }
        };
        fetchData();
    }, [db, id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('ID do Cliente:', id);
                const clienteDocRef = doc(db, 'clientes', id);
                console.log('Referência do Documento:', clienteDocRef);
                const docSnapshot = await getDoc(clienteDocRef);
                console.log('Snapshot do Documento:', docSnapshot.data());
                if (docSnapshot.exists()) {
                    const dados = docSnapshot.data();
                    setFormState({
                        ...formState,
                        qrCode: dados.qrCode // Defina o campo qrCode
                    });
                } else {
                    setMensagem('Cliente não encontrado');
                }
            } catch (error) {
                setMensagem('Erro ao obter dados do cliente');
                console.error('Erro ao obter dados do cliente:', error);
            }
        };
        fetchData();
    }, [db, id]);

    const handleOnClick = (event) => {
        window.history.back();
      };

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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
                            className="form-control"
                            placeholder="Insirira o telefone neste campo"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="d-flex align-items-center justify-content-center text-light" htmlFor=""><b>CLIENTE:</b></label>
                        <input
                            type="text"
                            id="razaoSocial"
                            name="razaoSocial"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
                            className="form-control"
                            placeholder="Insira o link do contrato neste campo "
                        />
                    </div>
                </div>
                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso === 'S' ? <Navigate to='/app/monitoriamapsempresas' /> : null}
            </div>
        </div>
            <div className="row salvar">
                <Link onClick={handleOnClick} className="btn btn-warning btn-acao">Cancelar</Link>

            </div>
    </div>
}
export default FichaCliente;