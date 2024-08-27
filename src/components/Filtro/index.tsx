import React, { useState, ChangeEvent, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../state/atom'; // Ajuste o caminho conforme necessário
import style from './Filtro.module.scss'

interface IfiltroDeEventos {
  date?: Date | null;
  status: 'completos' | 'incompletos' | 'ambos'
}

const Filtro: React.FC = () => {
  const options = ['completos', 'incompletos', 'ambos'];
  const [data, setData] = useState<string>('');
  const [type, setType] = useState<'completos' | 'incompletos' | 'ambos'>('ambos');
  const setValorFiltro = useSetRecoilState(filtroDeEventos);

  useEffect(() => {
    const filtro: IfiltroDeEventos = {
      date: data ? new Date(data) : null,
      status: type,
    };
    setValorFiltro(filtro);
  }, [data, type, setValorFiltro]);

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as 'completos' | 'incompletos' | 'ambos');
  };

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <>
      <form className={style.Filtro}>
        <h3 className={style.titulo}>Filtrar por data</h3>
        <input
          type="date"
          name="data"
          className={style.input}
          onChange={handleDataChange}
          placeholder="Por data"
          value={data}
        />
   
   <select
        className={style.select}
        name="type"
        id="type"
        value={type}
        onChange={handleTypeChange}
        required
      >
        {options.map(op => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      </form>
   
    </>
  );
};

export default Filtro;
