import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

    let Taches= ()=>{
                const [liste,setListe]= useState([])


            useEffect(()=>{

                axios.get('https://todolistback-8va6.onrender.com/taches/')
                .then(response=>{
                    console.log('les reponses sont:',response)
                    
                    setListe(response.data.resultat);
                
                })
                .catch((err)=>{
                    if(err){
                        console.log(err)

                    }
                })
            }, [])
                
            const suppTache = (id)=>{
                axios.delete(`https://todolistback-8va6.onrender.com/taches/${id}`)
                .then(() => setListe(liste.filter(li => li.id !== id)))
                .catch(err => console.error(err));
            };

    


      



    return <>
            <div className=" border-black w-[500px] h-[500px] ">
                <div className=" border-black justify-centerflex flex items-center text-4xl font-bold mb-9">
                    <p className="flex justify-center items-center w-full cursor-pointer" > Mes tâches </p>
                </div>
                <div className="w-full border-2 border-black  rounded-2xl  overflow-auto">

                
                <ul>
                    {liste.map((li)=>(
                        <li key={li.id} className="w-full flex  justify-around p-9">
                            {li.id}-  {li.tache} {li.done ? "ok" : ""}
                         <button className=" bg-green-600  text-white border-black w-[100px] h-[35px] rounded-2xl cursor-pointer" onClick={() => validerTache(li.id)}>Valider</button>

                        <button className=" bg-red-600 text-white border-black w-[100px] h-[35px] rounded-2xl cursor-pointer" onClick={() => suppTache(li.id)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
                </div>
                    
            </div>
    
    </>

  }
export default Taches;