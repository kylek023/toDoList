import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home =(props)=>{
const [listUsers, setListUsers] = useState(null)

useEffect(()=>{
    axios.get('http://localhost:3001/db').then(res=>{
        setListUsers(res.data.db.users)
    }).catch(e =>console.log(e))

},[])

    return(
        <div>
            <ul>
            {listUsers && listUsers.map(item =>{
                const url=`/user/${item.key}`
                return(
                    <li>
                        <Link to={url}>{item.name}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
export default Home