import React from 'react'
import { useState } from 'react';

function Calwater() {

const [weight, setWeight] = useState<number>(0);
const [ml, setMl] = useState<number>(0);

const onChangeWeight = (event:React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value)
    console.log(weight)
};

const onSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ml = weight * 2.2 * (30/2)
    setMl(+ml.toFixed(2))
}

  return (
    <div>
            <h2>ควรดื่มน้ำวันละเท่าไหร่ ?</h2>

            <h3>x มล.</h3>
            <form onSubmit={onSubmit}>
            <div>
                <input type="number" name="weight" id="weight" placeholder='น้ำหนักของคุณ (กิโลกรัม)' onChange={onChangeWeight}/>
            </div>
            <h2>{ml} มล.</h2>

            <button>คำนวณ</button>
        </form>



    </div>
  )
}

export default Calwater