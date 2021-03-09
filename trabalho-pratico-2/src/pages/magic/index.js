import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import FlexBoxCard from '../../FlexBoxCard';
import FlexBox from '../../FlexBox';

const Magic = () => {
  const [magic, setMagic] = useState(null);

  useEffect(() => {
    async function pegarDados() {
      const resposta = await axios.get(
        'https://api.magicthegathering.io/v1/cards',
      );
      setMagic(resposta.data);
    }
    pegarDados();
  }, []);
  if (magic === null) {
    return <p>Carregando ...</p>;
  }

  return (
    <>
      <FlexBox titulo="Cartas">
        {magic.cards.map((item) => (
          <FlexBoxCard key={item.id}>
            <img id="carta" src={item.imageUrl} />
            <p>{item.name}</p>
            <p>{item.type}</p>
            <p>{item.rarity}</p>
            <p>{item.set}</p>
          </FlexBoxCard>
        ))}
      </FlexBox>
    </>
  );
};

export default Magic;
