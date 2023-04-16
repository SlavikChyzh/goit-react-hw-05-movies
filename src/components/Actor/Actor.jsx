import { useState } from 'react';
import { fetchActorImg } from 'Services/API';

const Actor = ({ actor }) => {
  const [actorImgUrl, setActorImgUrl] = useState();
  const { name, character, profile_path } = actor;

  fetchActorImg(profile_path).then(resp => {
    setActorImgUrl(resp);
  });
  return (
    <>
      <img src={actorImgUrl} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{character}</p>
    </>
  );
};

export { Actor };
