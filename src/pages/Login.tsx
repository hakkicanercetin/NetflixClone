import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FormCard from '../Components/FormCard'
import Background from '../Components/Background'

const Login = () => {
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

