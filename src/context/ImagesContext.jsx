import { useEffect, useState } from "react"
import { createContext } from "react"

const ImagesContext= createContext()

const ImagesProvider = ({ children }) => {


  const [modal, setModal] = useState(false)
  const [imgModal, setImgModal] = useState([])
  const [id, setId] = useState('')



  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState([]) //Random photo
    // const [valueInput, setValueInput] = useState('') //Value

  //  const {valueInput, setValueInput} = useFunctions() 
  const [valueInput, setValueInput] = useState('') 


  //  const handleChange = (e) => {
  //     setValueInput(e.target.value)
  //  }

    //Trae una imagen random cada vez que se recarga la app
   const getImage = async () =>{
        try{
          setLoading(true)

          //si el input esta vacio que traiga fotos randoms y si tiene algo que traiga las que aparecen en el input
          const res = await fetch(`https://api.unsplash.com/photos/random?client_id=UpHeTaPifbve4UAdP-oM5DNUZ7AfmZUd9B8KWLBeXa0`)
          const data = await res.json()
  
          setImage(data)
          setLoading(false)
  
       }catch(e){
          console.error(e)
       }
   }


   const [images, setImages] = useState([])

   const API_KEY = `&client_id=e5y8jIGj9QYvcG2_nmJEz1Zr_8hbzjB6IylJnef5kHY`
   const BASE_URL = `https://api.unsplash.com/photos?page=1${API_KEY}`

  //  https://api.unsplash.com/search/photos?page=1&query=office&client_id=e5y8jIGj9QYvcG2_nmJEz1Zr_8hbzjB6IylJnef5kHY

   const URL = valueInput? `https://api.unsplash.com/search/photos?page=1&query=${valueInput}&client_id=e5y8jIGj9QYvcG2_nmJEz1Zr_8hbzjB6IylJnef5kHY` : `${BASE_URL}` 

   const getImages = async () =>{
      
    try{
        setLoading(true)
        const res = await fetch(URL)
        const data = await res.json()

        if(valueInput){
          setImages(data.results)
        }else{

          setImages(data)
        }
        setLoading(false)

    }catch(e){
        console.log(e)
    }

  }

    useEffect(()=>{
        getImage() //Random Photo
        // getImages() //Photos on Masonry
    },[])

    useEffect(()=>{
      getImages() //Photos on Masonry
      console.log(valueInput,'cambiando value');
    },[valueInput])


  return (
    <ImagesContext.Provider
      value={{loading,setLoading,image,valueInput,setValueInput,images,modal, setModal, imgModal, setImgModal, id,setId}}
    >
      {children}
    </ImagesContext.Provider>
  )
}

export { ImagesProvider }

export default ImagesContext