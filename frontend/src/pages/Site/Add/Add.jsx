import React, { useState } from 'react'
import {Formik,Form,Field} from 'formik'
import axios from 'axios'
const Add = () => {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const item={
        name,
        price
    }
  return (
    <div>
      <Formik onSubmit={async ()=>{
 await axios.post('http://localhost:8080/',item).then((res)=>{
    
})
      }} initialValues={{name:'',price:''}}>
        <Form >
            <Field onChange={(e)=>{
                setName(e.target.value)
            }} value={name} type='text'/>
            <Field onChange={(e)=>{
                setPrice(e.target.value)
            }} value={price} type='Number'/>
            <button type='submit'>submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Add
