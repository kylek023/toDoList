import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const User =()=>{
    const {id}= useParams()

    const [user, setUser] = useState(null)

    const [inputValue,setInputValue]= useState('')      

    useEffect(()=>{
        axios.get('http://localhost:3004/people').then(res=>{
            setUser(res.data.find(item=>item.id==id))

        })

    },[])


    const Submit=e=>{
        e.preventDefault()
        user.todo.push([inputValue,false])
        const newUser={...user}
        const url= `http://localhost:3004/people/${id}`

        axios.put(url,newUser).then(()=>{
            setUser(newUser)
            setInputValue('')
        })

    }
    const Delete=(e,key) => {
        e.preventDefault()
        user.todo.splice(key,1)

        const newUser={...user}
        const url= `http://localhost:3004/people/${id}`

        axios.put(url,newUser).then(()=>{
            setUser(newUser)
        })

    }



    



    return(
        <div>{user &&
         <div>
            <h5>{user.name}'s to do list</h5>
            <ul>
                {user.todo.map((item,key) =>(
                    <li ke={key}>
                            <div className='liDiv'>

                        {item} <button className='btn btn-secondary btn-sm' onClick={(e)=>Delete(e,key)} >X</button>
                        </div>
                    </li>
                ))}
            </ul>

        <form onSubmit={Submit}>
        <div class="input-group mb-3">
            <input id='inputToDo' autofocus value={inputValue} required placeholder='Add new things to do' className='form-control' type='text' onChange={(e)=>setInputValue(e.target.value)} />
            <button className='btn btn-outline-secondary'  type='submit'>Submit</button>
            </div>
        </form>

         
        </div>}

        </div>
    )
}
export default User