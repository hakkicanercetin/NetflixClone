import Background from "../Components/LoginAndResigterComponents/Background/Background"
import Footer from "../Components/CommonComponents/Footer"
import FormCard from "../Components/LoginAndResigterComponents/FornCard/FormCard"
import Header from "../Components/LoginAndResigterComponents/Navbar/Header"

const Register = () => {
  return (
    <>
      <div className='bg-black z-0 relative text-white min-h-full p-0 m-0'>
      <Background></Background>
      <Header></Header>
      <FormCard title="Sign Up"></FormCard>
      <Footer></Footer>
     </div>
    </>
    
  )
}

export default Register