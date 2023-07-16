const info = [ 'Name','Job Role','Location' ]

import React, {useState} from 'react'
import { UsersInfo } from '../../features/Data'
import Dropdown from '../../components/dropdown/Dropdown'
const Recruit = () => {

  const [selectedLocation, setSelectedLocation] = useState('');
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const [selectedRole, setSelectedRole] = useState('')

  const handleRole = (role) => {
    setSelectedRole(role)
  }

  const filteredUsers = UsersInfo.filter((user) => user.location === selectedLocation || user.role === selectedRole);





  return (
    <div className='max-w-7xl mx-auto'>
         <div className='m-3 py-24'>
           
           <div className="drop-down flex my-5 justify-end">

            <div className='mr-2'>

              {/* dropdown component */}
              <Dropdown 
              value='Job Role'
              items={['Project Manager', 'Software Engineer', 'Data Scientist', 'UI/UX Designer']}
              onChange={handleRole}
              
              />
            </div>

            <div className='ml-2'>

              {/* dropdown component */}
              {/* <Dropdown 
              value='Location'
              items={['Philippines', 'United States', 'Canada', 'Japan']}
              onChange={handleLocationChange}
              /> */}
            </div>

          

           </div>

           <div className="data">

            <div className='grid grid-cols-3 justify-items-center font-title text-indigo-500'>
            {info.map((i, index) => (
              <div key={index}>{i}</div>
             
              ))}
            </div>

            <div className='grid grid-cols-1 my-5 font-title'>
            {filteredUsers.map((user) => (

              <div key={user.id} className='grid grid-cols-3 text-sm text-center my-3 py-3 border-y justify-items-center items-center hover:scale-110'>
              <div>
                <h1>{user.name}</h1>
              </div>

              <div>
                <h1>{user.role}</h1>
              </div>

              <div>
                <h1>{user.location}</h1>
              </div>


              </div>
             
              ))}
            </div>

           </div>

         </div>

    </div>
  )
}

export default Recruit
