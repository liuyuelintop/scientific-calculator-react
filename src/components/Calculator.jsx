import { useState, useRef, useEffect } from 'react';

import { Button } from 'react-bootstrap';

import {funcs} from "../utils/mathFunctions";
import './Calculator.css'

export const Calculator = () => {
  const [result, setResult] = useState('');
  

  const inputRef = useRef(null);



  useEffect(() => inputRef.current.focus());

  

  function handleClick(e){
    e.preventDefault()
    console.log("handleClick: ", e.target.name);
    setResult(result.concat(e.target.name));
  }
  

  return (
    <div className="container col-xs-12 text-center">
        <div className="row calculator justify-content-center">
            <div className="display">
                <input type='text' value={result} ref={inputRef}/>
            </div>
            <div className="buttons">

                <Button  id='clear' onClick={()=>setResult(funcs.clear())} variant='dark' className="btn btn-dark delete">AC</Button>
                <Button  id='backspace' onClick={()=>setResult(funcs.backspace(result))} className="btn btn-dark delete">C</Button>
                <Button  name='(' onClick={handleClick}  className="btn dark">( </Button>
                <Button  name=')' onClick={handleClick} className="btn btn-dark"> )</Button>
                <Button  onClick={()=>setResult(funcs.computeSquare(result))} className="btn btn-dark">x²</Button>
                <Button  onClick={()=>setResult(funcs.computeSquareRoot(result))} className="btn btn-dark">²√</Button>


                <Button  onClick={()=>setResult(funcs.computeSin(result))} className="btn btn-dark">sin</Button>
                <Button  onClick={()=>setResult(funcs.computeCos(result))} className="btn btn-dark">cos</Button>
                <Button  onClick={()=>setResult(funcs.computeTan(result))} className="btn btn-dark">tg</Button>
                <Button  onClick={()=>setResult(funcs.computeCubic(result))} className="btn btn-dark">x³</Button>
                <Button  name='^' onClick={handleClick} className="btn btn-dark">xⁿ</Button>
                <Button  onClick={()=>setResult(funcs.computeCubicRoot(result))} lassName="btn btn-dark">³√</Button>

                <Button   name='7' onClick={handleClick} className="number btn btn-dark">7</Button>
                <Button   name='8' onClick={handleClick} className="number btn btn-dark">8</Button>
                <Button   name='9' onClick={handleClick} className="number btn btn-dark">9</Button>
                <Button   name='/' onClick={handleClick} className="operator btn btn-dark">/</Button>
                <Button  name='!' onClick={handleClick} onChange={()=>setResult(funcs.computeFactorial(result))} className="btn btn-dark">x!</Button>
                <Button  onClick={()=>setResult(funcs.computeNaturalLog(result))} className="btn btn-dark">ln</Button>

                <Button   name='4' onClick={handleClick} className="number btn btn-dark">4</Button>
                <Button   name='5' onClick={handleClick} className="number btn btn-dark">5</Button>
                <Button   name='6' onClick={handleClick} className="number btn btn-dark">6</Button>
                <Button   name='*' onClick={handleClick} className="operator btn btn-dark">*</Button>
                <Button   onClick={()=>setResult(funcs.computeLogBase10(result))} className="btn btn-dark">log</Button>
                <Button   onClick={()=>setResult(funcs.computeExp(result))} className="btn btn-dark">e</Button>

                <Button  name='1' onClick={handleClick} className="number btn btn-dark">1</Button>
                <Button  name='2' onClick={handleClick} className="number btn btn-dark">2</Button>
                <Button  name='3' onClick={handleClick} className="number btn btn-dark">3</Button>
                <Button  name='-' onClick={handleClick} className="operator btn btn-dark">-</Button>
                <Button  onClick={()=>setResult(funcs.computeLog1p(result))} className="btn btn-dark">logE</Button>
               

                <Button  id='result' onClick={()=>setResult(funcs.calculateResult(result))} className="btn btn-primary igual delete">=</Button>

                <Button  name='.' onClick={handleClick} className="btn btn-dark">.</Button>
                <Button  name='0' onClick={handleClick} className="number btn btn-dark">0</Button>
                <Button  onClick={()=>setResult(funcs.computePi(result))} className="btn btn-dark">π</Button>
                <Button  name='+' onClick={handleClick} className="operator btn btn-dark">+</Button>
                <Button  name='%' onClick={handleClick} className="operator btn btn-dark">%</Button>

            

            </div>
        </div> 
    </div>
  )
}
