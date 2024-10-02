import { FC } from 'react';

interface IPropsMiPrimerComponent {
    texto:string;
    color:string;
    fontSize?:number;
}

export const MiPrimerComponent : FC<IPropsMiPrimerComponent> = ({texto, color, fontSize}) => {
  return (
    <div style = {{color :`${color}`, fontSize : `${fontSize || 1}rem`}}>
        <p>{texto}</p>
        
    </div>
    );
};