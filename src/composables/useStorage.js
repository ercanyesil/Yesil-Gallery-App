import {ref,watchEffect} from 'vue'
import {depo} from '../firebase/config'

const useStorage=(dosya)=>{
    const error=ref(null);
    const url=ref(null);

    watchEffect(()=>{

        const storageRef=depo.ref('resimler/'+dosya.name);

        storageRef.put(dosya).on('state_changed',(snap)=>){
            console.log(snap);
        },(err)=>{
            error.value=err
        },async ()=>{
            const dlUrl=await storageRef.getDownloadURL();
            url.value=dlUrl;
        })
    })
    return {url,error}
}
export default useStorage