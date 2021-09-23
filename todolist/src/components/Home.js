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
                <h5>List of Users</h5>
                <ul>
                {listUsers.map((item,key) =>{
                    const url=`/user/${item.id}`

                    return(
                        <li key={key}>
                            <div className='liDiv'>
                            <Link to={url}>{item.name}</Link>
                            <button className='btn btn-secondary btn-sm' onClick={(e)=>deleteUser(e,key,item.id)} >X</button>
                            </div>
                        </li>
                    )
                })}
                </ul>


            </div>
            }

                    <form onSubmit={submitUser}>
                    <div class="input-group mb-3">
                        <input autofocus id='inputUser'  value={inputUser} required placeholder='Add new User' className='form-control' type='text' onChange={(e)=>setInputUser(e.target.value)} />
                        <button  className='btn btn-outline-secondary' type='submit'>Submit</button>
                    </div>
                    </form>

        </div>
    )
}
export default Home