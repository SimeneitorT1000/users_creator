import {  IconEyeClosed } from "@tabler/icons-react";

const Modal = ({
  showModal,
  onCloseModal,
  handleSubmit,
  register,
  createUser,
  isUpdating,
  updateUser,
  errors,
}) => {
  const submit = (currentUser) => {
    isUpdating ? updateUser(currentUser) : createUser(currentUser);
  };
  console.log(errors);
  const titleForm = isUpdating ? "Actualizar Usuario" : "Crear Usuario";
  const textButtonSubmit = isUpdating ? "Guardar cambios" : "Crear";

  return (
    <section className={`fixed bg-black/60 top-0 left-0 right-0 h-screen flex justify-center items-center transition-all  
            ${showModal ? "visible opacity-80" : "invisible opacity-0" }`}>
     
      <form 
        onSubmit={handleSubmit(submit)}  
        className="max-w-[400px] mx-auto grid gap-2  bg-white p-4 rounded-md relative ">
          <button onClick={onCloseModal}
                  type="button"
                  className="absolute top-2 right-2 hover:text-red-700 transition-colors">
            <IconEyeClosed size={24}/>
          </button>
     
        <h1 className="text-center p-2 font-bold">{titleForm}</h1>
        
        
          
          
        <label  className="grid gap-2 ">
          <div className=" flex justify-center">
            <img name="image_url"  className="max-w-[50px]" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />     
          </div>
          
        </label>
        
        <label className="grid gap-2 ">
          <span>Name <span className="text-red-500">*</span></span>
          <input name="first_name" type="text" className="text-black" required
                {...register("first_name")}/>
        </label>

        <label className="grid gap-2">
          <span>Last Name <span className="text-red-500">*</span></span>
          <input name="last_name" type="text" className="text-black" required
                {...register("last_name")} />
        </label>

        <label className="grid gap-2">
          <span>Email adress <span className="text-red-500">*</span></span>
          <input name="email" type="email" className="text-black" required 
                {...register("email")}/>
        </label>

        <label className="grid gap-2"> 
          <span>Pasword <span className="text-red-500">*</span></span>
          <input name="password" type="text" className="text-black" required 
                {...register("password")}/>
        </label>

        <label className="grid gap-2">
          <span>Birthday</span>
          <input name="birthday" type="date" className="text-black" 
                {...register("birthday")}/>
        </label>

        <button
          type="submit"
          className="bg-green-500 text-white font-semibold p-2 rounded-md hover:bg-green-600 transition-all uppercase hover:tracking-widest"
        >
          {textButtonSubmit}
        </button>
      </form>
    </section>
  );
};
export default Modal;

{
  /* <label>
  <span>
    Password: <span>*</span>
  </span>
  <input
    className="border-2 rounded-md p-1 outline-none"
    type="text"
    {...register("password", {
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        message:
          "La contraseña debe tener entre 6 y 16 caracteres, debe tener almenos un numero y un caracter especial",
      },
    })}
  />
  {errors.password && (
    <span className="text-red-500 text-xs">{errors.password.message}</span>
  )}
</label>; */
}
