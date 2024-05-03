import Display from './components/Display';
import Numbers from './components/Numbers';
import './App.css';

function App() {
  let arr = ['C',1,2,'+',3,4,'-',5,6,'*',7,8,'/','=',9,0,'.']
  return (
    <section className='calculator'>
      <div className='calculator-container container'>
        <div className='calculator-content'>
          {/* <input className='display' type='text' readOnly></input> */}
          {/* ek component input ka banayenge display naam se */}
          <Display></Display>
          {/* <div className='numbers'>
            <button>C</button>
            <button>1</button>
            <button>2</button>
            <button>+</button>
            <button>3</button>
            <button>4</button>
            <button>-</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>7</button>
            <button>8</button>
            <button>/</button>
            <button>=</button>
            <button>9</button>
            <button>0</button>
            <button>.</button>
          </div> */}
          {/* ek component numbers ka banayenge Numbers naam se 
            or map ke through saare button ka content lelenge upar vali arr[] se
            dynamically  
          */}
          <Numbers number={arr}></Numbers>
        </div>
      </div>
    </section>
  );
}

export default App;
