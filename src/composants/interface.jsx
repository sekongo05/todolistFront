import { useState } from "react";
import axios from 'axios'
import Taches from "./taches";

let Interface =()=>{

    const [formData, setFormData]= useState({tache: "" })
    const [message, setMessage]= useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post('https://todolistback-8va6.onrender.com/taches', formData)
        .then(response=>{
            console.log(response)
            setFormData({ tache: "" })
            setMessage("tâche ajoutée")
        })
        .catch((error)=>{
            if(error){
                console.log(error)
                setMessage("Echec de l'ajout")


            }
        })

    }

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log( e.target.value)
    }

    const handleReset = () => {
    setFormData({ tache: "" });
    setMessage("Tâche supprimée");
  };


    return <>
                <div className="w-full h-screen border-2 border-black flex justify-around items-center">
                    <div className="border-2 border-black w-[500px] h-[500px] rounded-2xl flex flex-col gap-y-20">
                            <div className="border-2 bg-black text-white h-[100px] rounded-t-2xl flex justify-center items-center text-4xl font-bold">
                                <p>Ma TodoList</p>
                            </div>
                            
                            <form onSubmit={handleSubmit}>
                            <div className=" h-[100px] flex justify-center items-center">
                                <input className=" border-black rounded-2xl w-[90%] h-[100px] bg-gray-300 text-black text-2xl p-3 focus:outline-black" type="text" name="tache" value={formData.tache} onChange={handleChange}  required/>
                            </div>

                            <div className=" flex justify-end p-7 gap-10 items-center  border-black h-[50px] mt-15">
                                <input type="submit"  name="valider" value="Ajouter"  className="border-2 bg-black text-white border-black w-[100px] h-[45px] rounded-2xl cursor-pointer"/>
                                <input type="reset" name="annuler" value="Supprimer" onClick={handleReset} className="border-2 bg-red-600 text-white  w-[100px] h-[45px] rounded-2xl cursor-pointer"/>
                            </div>
                            <div className={`text-2xl font-bold h-[100px] flex justify-center items-center 
                                    ${message.includes("supprimée") ? "text-red-600" : "text-green-600"}`}>
                                    {message}
</div>

                            
                                 
                            
                                </form>
                         

                    </div>
                    <div>
                        <Taches />
                    </div>
                </div>
    
    
    
            </>
}


export default Interface;