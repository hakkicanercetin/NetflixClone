/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from "../firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { BarLoader } from 'react-spinners'


const FormCard = ({title="Sing in"}) => {
  const [mail,setMail] = useState("")
  const [loading, setLoading] = useState(false);
  const [password,setPassword] = useState("")
  const [formErr,setFromErr] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, mail, password)
      const gecikmeliYonlendir = () => {
        setLoading(true)
        toast.success('Login successful')
        setTimeout(() => {
          navigate("/browse")
        }, 2000);
      };
      gecikmeliYonlendir()
    } catch (error) {
      if((error as Error).message == "Firebase: Error (auth/invalid-credential)."){
        toast('Wrong email or password!',
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
  const handleSignUp = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, mail, password)
      const gecikmeliYonlendir = () => {
        setLoading(true)
        toast.success('Registration successful.You are being redirected to the login page.')
        setTimeout(() => {
          navigate("/login")
        }, 2000);
      };
      gecikmeliYonlendir()
    } catch (error) {
      if((error as Error).message == "Firebase: Error (auth/email-already-in-use)."){
        toast('Email already used!',
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
    <div className='smm:bg-transparent smm:max-w-[450px] smm:min-h-[100vh] smm:mt-0 smm:mx-auto smm:mb-[-236px] text-[#333] my-0 mx-auto py-0 smm:before:h-[91px] smm:before:block max-[740px]:px-[5%] after:block after:h-[236px]'>
    <div>
    <div className="smm:min-h-[660px] min-h-[550px] smm:mb-[90px] smm:pt-[60px] smm:px-[68px] smm:pb-[40px] bg-[rgba(0,0,0,.75)] rounded flex flex-col m-0 pt-5 px-0 pb-[30px] w-full">
    <div className="flex-grow">
    {
      !loading ? 
      <>
      {title && <h1 className="text-white text-[32px] font-medium mb-7 ">{ title}</h1>}
      <form className='mb-0'>
      <div className='pb-4 w-full relative'>
        <div className='relative'>
          <div className='border-0 rounded relative'>
            <input type="text" id='id_userLoginId' value={mail} onChange={(e)=>setMail(e.target.value)} className='peer pl-3 bg-[#333] text-white rounded h-[50px] leading-[50px] pt-4 py-5 pb-0 w-full shadow-none box-border block text-[16px] m-0  placeholder-transparent focus:outline-none focus:border-[#e87c03]' placeholder='johndoe@gmail.com'/>
            <label htmlFor="id_userLoginId" className='absolute top-0 pl-3 transition-all text-[13px] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-[13px] text-[#8c8c8c]'>Email or phone number</label>
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
          Your password must contain between 6 and 60 characters.
        </div>}
        { formErr == "Firebase: Password should be at least 6 characters (auth/weak-password)." && <div className='text-[#e87c03] mb-[-6px] py-[6px] px-[3px] text-[13px]'>
          Your password must contain between 6 and 60 characters.
          </div>}
      </div>
      <button onClick={location.pathname=="/login" ? (e)=>handleSubmit(e) : (e)=>handleSignUp(e)} className=" rounded text-[1rem] font-medium mx-0 mt-6 mb-3 min-[360px]:max-h-full min-[360px]:w-full p-4 bg-[#e50914] text-white min-[500px]:inline-block min-[500px]:leading-[1em] min-[500px]:min-h-[37px] min-[500px]:min-w-[38px] relative ">{title}</button>
        <div className="flex">
          <div className='flex-grow relative pl-5 text-[1rem] mb-[-5px] border-box'>
            <input type="checkbox" className="absolute opacity-1 left-0 mr-[10px] top-[2px] w-4 h-4 bg-[#737373]" value="" id="flexCheckDefault" />
            <label className="p-0 text-[#333] block relative leading-[1.2] before:absolute before: before:border-0 before:h-[1rem] before:left-[-20px] before:w-[1rem] before:block before:rounded-sm before:top-[2px] after:text-[#000] after:left-[-21px] after:text-[18px] after:top-0" htmlFor="flexCheckDefault">
              <span className='text-[#b3b3b3] text-[13px] font-normal'>Remember Me</span>
            </label>
          </div>
          <Link to={"/"} className='text-[#b3b3b3] text-[13px] font-medium'>Need help?</Link>
      </div>
    </form>
    </>
    : <div className="flex items-center justify-center h-[338px]"><BarLoader color='rgba(255, 255, 255, .75)'></BarLoader></div>
    }
    </div>
    <div className="">
      <div className="text-[#737373] text-[1rem] font-medium mt-4">{location.pathname == "/login" ? "Already have an account?" : "New to Netflix?"}
        <Link className="text-white" to={location.pathname=="/login" ? "/register" : "/login"}>{location.pathname == "/login" ? "Sign up now" : "Sign in now"}</Link>.
      </div>
      <div className='text-[#8c8c8c] text-[13px] mt-[11px] relative text-left'>
        <p className='my-[13px]'>
          <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;
          <button className='text-[#0071eb] p-0 border-0 bg-transparent inline'>Learn More.</button>
          </p>
        <div className='opacity-0'>
        <span data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google 
        <Link to="https://policies.google.com/privacy" id="recaptcha-privacy-link" data-uia="recaptcha-privacy-link" target="_blank" className='text-[#0071eb]'>Privacy Policy</Link> 
        and 
        <Link to="https://policies.google.com/terms" id="recaptcha-tos-link" data-uia="recaptcha-tos-link" target="_blank" className='text-[#0071eb]'>Terms of Service</Link>
        , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
    
    </>
  )
}

export default FormCard