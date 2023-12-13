import {  IconFileSettings, IconTrashX } from "@tabler/icons-react";

const UserList = ({ users, deleteUser, handleUpdateUser }) => {
  return (

    <article className=" w-[100%] h-[100vh]  display: flex justify-center items-center">
      
    
    <section className="grid gap-6  grid-cols-[repeat(auto-fill,_500px)]  justify-center w-screen max-w-[500px] max-h-[500px] py-10  overflow-auto max-sm:grid-cols-1 max-sm:items-center max-sm:text-[18px] max-sm:ml-10 max-sm:mt-[8px] ">
      {users.map((user) => (
       
       <article key={user.id} className="relative border-2  w-[500px] h-[165px] rounded-md p-3 hover:shadow-lg transition-shadow grid gap-2 bg-[#FFFFFF80]  line-clamp-1 max-sm:w-[300px] ">

        <section className="flex ">
              <h2 className="capitalize h-[45px] text-[25px] border-b-[1px] border-[#E5E5E5] text-[#0F0F2D] max-sm:line-clamp-1 ">{user.first_name} {user.last_name}</h2>
          

            <div className="flex gap-3  absolute right-2 top-2 max-sm:right-1 max-sm:top-1 max-sm:flex-col max-sm:gap-3 max-sm:p-1 ">
               <button onClick={() => handleUpdateUser(user)}
                       className="rounded-md p-1 text-white bg-yellow-500 hover:shadow-lg hover:bg-yellow-400 transition-colors ">
                   
                   <IconFileSettings className="max-sm:w-4 max-sm:h-4" /></button>
               <button onClick={() => deleteUser(user.id)}
                       className="rounded-md p-1 text-white bg-red-500 hover:shadow-lg hover:bg-red-400 transition-colors"
               ><IconTrashX className="max-sm:w-4 max-sm:h-4"/></button>
            </div>
        </section>
           {/*<ul>
               {/*<li ><span className="flex justify-between text-[#8EFF8B]">First Name</span> {user.first_name}</li>
               <li><span className="flex justify-between text-[#8EFF8B]">Last Name</span> {user.last_name}</li>*/}
               {/*<li><span className="flex justify-between text-[#8EFF8B] line-clamp-1">Email adress</span> {user.email}</li>*/}
               {/*<li><span className="flex justify-between text-[#8EFF8B]">Paword</span> {user.password}</li>}
               <li><span className="flex justify-between text-[#8EFF8B]">Birthday</span> {user.birthday}</li>
              </ul>*/}
       

              

           <div className="flex justify-between text-[16px] gap-9 text-white w-full ">
            <div className="text-left w-1/2 ">
              <h4 className="text-[#D3D3D3] ">Email</h4>
              <p className="line-clamp-1">{user.email}</p>
            </div>
            <div className="text-left w-1/2">
              <h4 className="text-[#D3D3D3]">Birthday</h4>
              <p > {user.birthday}</p>
            </div>
           </div>

           

       </article> 
      ))}
    </section>
    </article>
  );
  
};
export default UserList;
