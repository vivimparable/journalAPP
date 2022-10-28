import axios from "axios";

const uploadImage =async (file)=>{
    if(!file){
        return
    }  

    try {
        const formData= new FormData()
        formData.append('upload_preset','Projecto Vue Journal')
        formData.append('file',file)
        const url = 'https://api.cloudinary.com/v1_1/divqn7ma6/image/upload'
        const {data} = await axios.postForm(url,formData)
        
        console.log(data)

        return data.secure_url

        
    } catch (error) {
        console.log('Error al cargar la imagen')
        return null;
    }
}

export default uploadImage; 