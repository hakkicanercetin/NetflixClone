import Header from '../Components/LoginAndResigterComponents/Navbar/Header'
import Footer from '../Components/CommonComponents/Footer'
import FormCard from '../Components/LoginAndResigterComponents/FornCard/FormCard'
import Background from '../Components/LoginAndResigterComponents/Background/Background'

const Login = () => {
  console.log(process.env.GOOGLE_API_KEY)
  return (
     <div className='bg-black z-0 relative text-white min-h-full p-0 m-0'>
      <Background></Background>
      <Header></Header>
      <FormCard title={"Sign In"}></FormCard>
      <Footer></Footer>
     </div>
  )
}

export default Login

