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
  //const titleForm = isUpdating ? "Actualizar Usuario" : "Crear Usuario";
  const textButtonSubmit = isUpdating ? "Guardar cambios" : "Crear";

  return (
    <>
    {showModal ? <section className="z-20 fixed bg-white/70 backdrop-blur-sm top-0 left-0 right-0 bottom-0 h-screen flex justify-center items-center transition-all max-sm:text-sm max-sm:p-1 max-sm:m-1">
     
      <form 
        onSubmit={handleSubmit(submit)}  
        className="z-30 w-[495px] h-[710px] px-20 pb-10 py-20 grid gap-1  bg-[#3C3C3D] rounded-[30px] relative max-sm:w-[370px] max-sm:h-[500px] max-sm:p-3 max-sm:m-5">
          <button onClick={onCloseModal}
                  type="button"
                  className="absolute top-2 right-2 hover:text-red-700 transition-colors">
            <IconEyeClosed size={24}/>
          </button>
     
        {/* <h1 className="text-center text-[#8EFF8B] font-bold">{titleForm}</h1> */}
        
    
      
          <label  className="grid gap-2 absolute left-[calc(50%-70px)] top-[-70px] max-sm:hidden">
          <div className=" flex justify-center border-[2px] border-[#8EFF8B] rounded-full">
            <img name="image_url"  className="w-[140px] h-[140px] object-cover rounded-full" src="https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg" alt="" />     
          </div>
          
        </label>
        
        <label className="flex flex-col">
          <span className="text-[#8EFF8B]">Name <span className="text-red-500">*</span></span>
          <input name="first_name" type="text" className="h-[42px] text-white border-[2px] border-neutral-400 rounded-md px-4 bg-transparent placeholder:text-[#ccc]" placeholder="Ingresa tu nombre" required
                {...register("first_name")}/>
        </label>

        <label className="flex flex-col">
          <span className="text-[#8EFF8B]">Last Name <span className="text-red-500">*</span></span>
          <input name="last_name" type="text" className="h-[42px] text-white border-[2px] border-neutral-400 rounded-md px-4 bg-transparent placeholder:text-[#ccc]" placeholder="Ingresa tu apellido" required
                {...register("last_name")} />
        </label>

        <label className="flex flex-col">
          <span className="text-[#8EFF8B]">Email adress <span className="text-red-500">*</span></span>
          <input name="email" type="email" className="h-[42px] text-white border-[2px] border-neutral-400 rounded-md px-4 bg-transparent placeholder:text-[#ccc]" placeholder="Correo electronico" required 
                {...register("email")}/>
        </label>

        <label className="flex flex-col"> 
          <span className="text-[#8EFF8B]">Pasword <span className="text-red-500">*</span></span>
          <input name="password" type="text" className="h-[42px] text-white border-[2px] border-neutral-400 rounded-md px-4 bg-transparent placeholder:text-[#ccc]" placeholder="Contraseña" required 
                {...register("password")}/>
        </label>

        <label className="flex flex-col">
          <span className="text-[#8EFF8B]">Birthday</span>
          <input name="birthday" type="date" className="h-[42px] text-white border-[2px] border-neutral-400 rounded-md px-4 bg-transparent placeholder:text-[#ccc]" 
                {...register("birthday")}/>
        </label>

        <button
          type="submit"
          className="mt-4 bg-[#CBFFDA] text-black h-[42px] rounded-md hover:bg-green-600 transition-all hover:tracking-widest"
        >
          {textButtonSubmit}
        </button>
        <button onClick={onCloseModal}
                  type="button" className="text-sm text-[#CBFFDA] hover:tracking-widest">or Cancel</button>
      
          
        
      </form>
    </section>
    : null}
    </>
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
