import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const User =(props)=>{
    const {id}= useParams()

    const [user, setUser] = useState(null)

useEffect(()=>{
    axios.get('http://localhost:3001/db').then(res=>{
        setUser(res.data.db.users.find(item => item.key=id))
    })

},[])



    return(
        <div>
            <h3>{user && user.name}</h3>
        </div>
    )
}
export default User