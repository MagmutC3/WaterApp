import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase/firebase"
 
const handleSubmit = (testdata) => {
    const ref = collection(firestore, "Satagro-users")
 
    let data = {
        testData: testdata
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit