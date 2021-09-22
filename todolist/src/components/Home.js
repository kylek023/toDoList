import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home =(props)=>{
const [listUsers, setListUsers] = useState(null)
const [inputUser, setInputUser]=useState('')

useEffect(()=>{
    axios.get('http://localhost:3004/people').then(res=>{
        setListUsers(res.data)
    }).catch(e =>console.log(e))

},[])


const submitUser=e=>{
    e.preventDefault()


    let lastId
    listUsers.length!=0 ? lastId= listUsers[listUsers.length-1].id+1 : lastId=1
    const userNew = {
        "name":inputUser,
        "id":lastId,
        "todo":[]
    }
    const url= `http://localhost:3004/people`

    axios.post(url,userNew).then(()=>{
        const newlistUsers=listUsers.concat(userNew)
        setListUsers(newlistUsers)
        setInputUser('')
    })



}

const deleteUser=((e,key,id)=>{
    e.preventDefault()
    const url = `http://localhost:3004/people/${id}`
    axios.delete(url).then( res=>{
        const a = [...listUsers]
        a.splice(key,1)
        setListUsers(a)
    }
    )
})


    return(
        <div>
            {listUsers && 
            <div>
                <h3>List of Users</h3>
                <ul>
                {listUsers.map((item,key) =>{
                    const url=`/user/${item.id}`

                    return(
                        <li key={key}>
                            <Link to={url}>{item.name}</Link>
                            <button onClick={(e)=>deleteUser(e,key,item.id)} >X</button>

                        </li>
                    )
                })}
                </ul>


            </div>
            }

                    <form onSubmit={submitUser}>
                        <input id='inputUser' value={inputUser} placeholder='Add new User' className='inputToDo' type='text' onChange={(e)=>setInputUser(e.target.value)} />
                        <button type='submit'>Submit</button>
                    </form>

        </div>
    )
}
export default Home