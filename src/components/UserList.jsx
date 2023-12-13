import {  IconFileSettings, IconTrashX } from "@tabler/icons-react";

const UserList = ({ users, deleteUser, handleUpdateUser }) => {
  return (
    <section className="grid gap-6 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto py-10">
      {users.map((user) => (
       
       <article key={user.id} className="border-2 rounded-md p-2 hover:shadow-lg transition-shadow grid gap-2">
           <h2 className="capitalize font-bold text-lg line-clamp-1">{user.first_name}</h2>
           <ul>
               <li><span>First Name</span>{user.first_name}</li>
               <li><span>Last Name</span>{user.last_name}</li>
               <li><span>Email adress</span>{user.email}</li>
               <li><span>Paword</span>{user.password}</li>
               <li><span>Birthday</span>{user.birthday}</li>
           </ul>
           <div>
               <button onClick={() => handleUpdateUser(user)}
                       className="rounded-md p-1 text-white bg-yellow-500 hover:shadow-lg hover:bg-yellow-400 transition-colors">
                   
                   <IconFileSettings/></button>
               <button onClick={() => deleteUser(user.id)}
                       className="rounded-md p-1 text-white bg-red-500 hover:shadow-lg hover:bg-red-400 transition-colors"
               ><IconTrashX/></button>
           </div>
       </article> 
      ))}
    </section>
  );
};
export default UserList;
