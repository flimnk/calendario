import React, { Suspense, useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import { IEvento } from './interfaces/IEvento';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil';
function App() {



  const [filtro, setFiltro] = useState<Date | null>()

  const adicionarEvento = (evento: IEvento) => {
    evento.id = Math.round((new Date()).getTime() / 1000)
    // eventos.push(evento)
    // console.log(eventos);

    // setEventos([...eventos])
  }
  const alterarStatusEvento = (id: number) => {
    // const evento = eventos.find(evento => evento.id === id)
    // if (evento) {
    //   evento.completo = !evento.completo
    // }
    // setEventos([...eventos])
  }
  const deletarEvento = (id: number) => {
    // setEventos([...eventos.filter(evento => evento.id !== id)])
  }

  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data)
  }

  const filtrados = !filtro
  // ? eventos
  // : eventos.filter((evento) =>
  //   filtro!.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
  // );

  return (
    <RecoilRoot>
      <Suspense fallback={'Carregando...'}>
        <div className={style.App}>
          <div className={style.Coluna}>
            <Card>
              <Formulario />
            </Card>

            <hr />
            <Card>
              <ListaDeEventos />
            </Card>
          </div>

          <div className={style.Coluna}>
            <Calendario />
          </div>
        </div>


      </Suspense>
    </RecoilRoot>
  );

}

export default App;
