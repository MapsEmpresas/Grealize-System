import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from 'react-router-dom';
import './fichaCobranca.css'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import 'firebase/firestore'

function FichaCobranca() {
    const [cliente, setCliente] = useState(null);

    const [cobrador, setCobrador] = useState('');
    const [vencimentoCobranca, setVencimentoCobranca] = useState('');
    const [dataCobranca, setDataCobranca] = useState('');
    const [valor, setValor] = useState('');
    const [senha, setSenha] = useState('');
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
                    setCliente(docSnapshot.data());
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

    const AlterarCliente = async () => {
        try {
            // Solicitar senha
            const senhaDigitada = prompt("Digite sua senha:");
            if (senhaDigitada === '@') { // Verifica se a senha está correta
                await updateDoc(doc(db, 'clientes', id), {
                    cobrador: cobrador,
                    vencimentoCobranca: vencimentoCobranca,
                    dataCobranca: dataCobranca,
                    valor: valor,
                });
                setMensagem('');
                setSucesso('S');
            } else {
                setMensagem('Senha incorreta');
            }
        } catch (erro) {
            setMensagem('Erro ao atualizar cliente');
            setSucesso('N');
            console.error('Erro ao atualizar cliente:', erro);
        }
    };

    return (
        <div>
                        {cliente && (

            <div className="background9">
                <form className="box">
                    <div className="title">
                        <h1>
                            Itens da cobrança
                        </h1>
                    </div>

                    <div>
                        <div className="caixa-cobrador">
                            <div className="input-group-prendend">
                                <span className="input-group-text">Nome do cobrador:</span>
                            </div>
                            <select className="custom-select d-block"  onChange={(e) => setCliente({ ...cliente, cobrador: e.target.value})}  value={cliente.cobrador} id="estado" required>
                            <option value="">Escolha</option>
                            <option value="talita">talita</option>
                                <option value="bruno">bruno</option>
                                <option value="allan">allan</option>
                                <option value="jhow">jhow</option>
                                <option value="ana">ana</option>
                                <option value="karol">karol</option>
                                <option value="bruno pg">bruno pg</option>
                                <option value="allan pg">allan pg</option>
                                <option value="jhow pg">jhow pg</option>
                                <option value="ana pg">ana pg</option>
                                <option value="karol pg">karol pg</option>
                            </select>
                        </div>
                        <div className="caixa-cobrador">
                            <div className="input-group-prendend">
                                <span className="input-group-text">Data da cobrança:</span>
                            </div>

                            <input  onChange={(e) => setCliente({ ...cliente, dataCobranca: e.target.value})} value={cliente.dataCobranca} id="date" type="date" className="form-control" />
                        </div>
                        <div className="caixa-cobrador">
                            <div className="input-group-prendend">
                                <span className="input-group-text">Data de Vencimento:</span>
                            </div>
                            <input onChange={(e) => setCliente({ ...cliente, vencimentoCobranca: e.target.value})} value={cliente.vencimentoCobranca} id="date" type="date" className="form-control" />
                        </div>
                    </div>
                    {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                    {sucesso === 'S' ? <Navigate to='/app/cobrancamapsempresas' /> : null}
                </form>

            </div>
)}
            <div className="voltar row">
                <Link to="/app/cobrancamapsempresas" className="btn btn-warning btn-acao">Voltar</Link>
                <button onClick={AlterarCliente} type="button" className="btn btn-primary btn-acao">Salvar</button>
            </div>
        </div>
    );
}

export default FichaCobranca;