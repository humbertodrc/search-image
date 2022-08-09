import { useState } from "react"

//No puedo usar el useContext ni el Context dentro de este CustomHOOK

const useFunctions = () => {

    const [valueInput,setValueInput] = useState()

    const handleChange = (e) =>{
        setValueInput(e.target.value)
     }

      

      return {handleChange, valueInput, setValueInput}
}

export default useFunctions