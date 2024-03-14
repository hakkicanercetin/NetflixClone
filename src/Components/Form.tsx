import { auth } from "../firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useState } from 'react'

const Form = () => {
    const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")
  const [formErr,setFromErr] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, mail, password)
      navigate("/browse")
    } catch (error) {
      if((error as Error).message == "Firebase: Error (auth/invalid-credential)."){
        toast('Email veya şifre yanlış!',
      {
        icon: '❌',
        style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },});
      }
      setFromErr((error as Error).message)
    }
  }
  return (
    <>
    <div className='pb-4 w-full relative'>
            <div className='relative'>
              <div className='border-0 rounded relative'>
                <input type="text" id='id_userLoginId' value={mail} onChange={(e)=>setMail(e.target.value)} className='peer pl-3 bg-[#333] text-white rounded h-[50px] leading-[50px] pt-4 py-5 pb-0 w-full shadow-none box-border block text-[16px] m-0  placeholder-transparent focus:outline-none focus:border-[#e87c03]' placeholder='johndoe@gmail.com'/>
                <label htmlFor="id_userLoginId" className='absolute top-0 pl-3 transition-all text-[13px] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-[13px] text-[#8c8c8c]'>Email or phone number</label>
                  {/* <input id='id_userLoginId' className="peer bg-[#333] border-0 rounded text-white h-[50px] leading-[50px] pt-4 py-5 pb-0 w-full shadow-none box-border block text-[16px] m-0 focus:border-rose-600 focus:border-solid focus:border-8" type="email"/>
                  <label htmlFor="id_userLoginId" className='peer-placeholder-shown:top-2 absolute left-5 text-[1rem] top-6 text-[#8c8c8c] translate-y-[-50%] focus:[top:10px]'>Email or phone number</label> */}
              </div>
              { formErr == "Firebase: Error (auth/invalid-email)." && <div className='text-[#e87c03] mb-[-6px] py-[6px] px-[3px] text-[13px]'>
                Please enter a valid email or phone number.
              </div>}
            </div>
          </div>
          <div className='pb-4 w-full relative'>
            <div className='relative'>
              <div className='border-0 rounded relative'>
                <label>
                  <input id='id_password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='peer pl-3 bg-[#333] text-white rounded h-[50px] leading-[50px] pt-4 py-5 pb-0 w-full shadow-none box-border block text-[16px] m-0  placeholder-transparent focus:outline-none focus:border-[#e87c03]' placeholder='johndoe@gmail.com'/>
                  <label htmlFor="id_password" className='absolute top-0 pl-3 text-[13px] transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-[13px] text-[#8c8c8c]'>Password</label>
                </label>
              </div>
            </div>
            { formErr=="Firebase: Error (auth/missing-password)." && <div className='text-[#e87c03] mb-[-6px] py-[6px] px-[3px] text-[13px]'>
              Your password must contain between 4 and 60 characters.
            </div>}
          </div>
    </>
  )
}

export default Form