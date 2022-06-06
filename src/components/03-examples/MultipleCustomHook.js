 import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const MultipleCustomHook = () => {

    const { counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data && data[0]

  return (
    <div className='card' id='card'>
        <p className='title'>BreakingBad Quotes</p>

        {
            loading ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
            :
                (   
                    <blockquote className="blockquote text-center advice" id='advicetext'>
                        <p >{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
        }

        <img src={ process.env.PUBLIC_URL + "/assets/images/pattern-divider-desktop.svg" } alt='pattern-divider-desktop' className='divider'/>

        <button 
            className='btn' id='btn'
            onClick={ increment }>
                <img src={ process.env.PUBLIC_URL + "/assets/images/icon-dice.svg" } alt='icon-dice' className='btn-img'/>
        </button>

    </div>
  )
}
