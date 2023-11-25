import Layer from "@/layer";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Monkey from '@/assets/monkeyWalk.json'

function CGU() {
    const [focus, setFocus] = useState(true)
    const [bg, setBg] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        const cgu = localStorage.getItem('cgu')
        if(cgu == 'true')
        {
            nav('/privacy-policy')
        }
    })



    const handleAccept = () => {

        localStorage.setItem('cgu','true')
        nav('/privacy-policy')
    }
    
    return (
        <div className="relative overflow-x-hidden ">
        <Layer className={`${focus  && 'blur'} overflow-x-hidden`}>
            <section className={`grid w-full grid-flow-row place-items-center gap-4 h-auto py-[5rem]  px-5 text-center home-info-p ${bg ? ' w-full' : '' }`}>
                <div className={` overflow-y-auto grid grid-flow-row  max-h-[600px] place-items-center rounded-xl gap-4 h-auto ${bg ? ' w-full' : '/90 '}  py-[5rem] px-5 text-center home-info-p `}>
                    <TermsOfService />
                </div>
                <Button id="accept" onClick={() => handleAccept()}>Accept</Button>
            </section> 
        </Layer>
        <div className={`${!focus ? 'hidden' : " overflow-x-hidden absolute top-0 left-0 w-[100% - 20rem]  z-index-[9999]  blur-container h-auto m-8 md:mx-[7rem]   lg:my-[10rem] lg:mx-[15rem]  xl:mx-[25rem]"}`}>
            <Card className= "grid place-items-center">
                <CardHeader className="w-full">
                    <CardTitle>General Condition of Use</CardTitle> 
                    <CardDescription>Little bit of reading</CardDescription>
                </CardHeader>
                <CardContent className="grid  grid-flow-row h-auto min-w-[300px] max-w-[80%] mg:min-w-[700px] max-h-[400px]   py-[5rem] px-5 text-center overflow-y-auto  ">
                    <TermsOfService />
                </CardContent>  
                <CardFooter className="flex justify-between w-full">
                    <Button id="foccus" onClick={() => setFocus(false)} variant="outline">Cancel</Button>
                    <Button id="accept" onClick={() => handleAccept()}>Accept</Button>
                </CardFooter>
            </Card>
        </div >
        <Player
        autoplay={true}
        speed={0.60}
        loop
        src={Monkey}
        onEvent={(state)=> {
            if(state == 'pause')
            {
                setBg(true)
            }
        }
        }
        className={`${focus  && 'hidden'} overflow-x-hidden   ${bg  && 'hidden'} top-[200px]   md:top-[20px] left-[-10%] w-[120%] absolute z-[-1]`}   
        >
            <Controls
            visible={false}
            buttons={[
                "play",
                "repeat",
                "frame",
                "debug",
                "snapshot",
                "background"
            ]}
            />
        </Player>
        
        </div>
      );
}

export default CGU;


const TermsOfService: React.FC = () => {
    return (
      <div className="font-sans overflow-y-auto overflow-x-clip overflow-scroll">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Gecko Cabane Restaurant Web App</h1>
          <h2 className="text-2xl font-bold mb-2">Terms of Service</h2>
  
          <p className="mb-4"><strong>1. Acceptance of Terms</strong></p>
          <p className="mb-4">By accessing or using the Gecko Cabane Restaurant web app ("the App"), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the App.</p>
  
          <p className="mb-4"><strong>2. Use of the App</strong></p>
          <p className="mb-4">2.1 <strong>License:</strong> Gecko Cabane Restaurant grants you a limited, non-exclusive, non-transferable, and revocable license to use the App for your personal or business use.</p>
          <p className="mb-4">2.2 <strong>User Accounts:</strong> To access certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information.</p>
  
          <p className="mb-4"><strong>3. Privacy and Cookies</strong></p>
          <p className="mb-4">3.1 <strong>Privacy Policy:</strong> Your use of the App is also governed by our Privacy Policy, which can be found <Link to="/privacy-policy" >here</Link>.</p>
          <p className="mb-4">3.2 <strong>Cookies:</strong> By using the App, you agree to the use of cookies for theme color preferences and connection usage analytics. You can manage your cookie preferences through the settings.</p>
  
          <p className="mb-4"><strong>4. Google Maps Integration</strong></p>
          <p className="mb-4">4.1 <strong>Mapping Services:</strong> The App includes Google Maps to provide location-based services. Your use of Google Maps is subject to Google's Terms of Service, available at <a href="https://www.google.com/intl/en-US_US/help/terms_maps/">https://www.google.com/intl/en-US_US/help/terms_maps/</a>.</p>
  
          <p className="mb-4"><strong>5. Custom API</strong></p>
          <p className="mb-4">5.1 <strong>API Usage:</strong> The custom API provided by Gecko Cabane Restaurant is intended for use within the App. Unauthorized access or use of the API is strictly prohibited.</p>
  
          <p className="mb-4"><strong>6. Theme Color Preferences</strong></p>
          <p className="mb-4">6.1 <strong>Cookie Usage:</strong> The App may store cookies to remember your theme color preferences. You can manage these preferences through the settings.</p>
  
          <p className="mb-4"><strong>7. User Conduct</strong></p>
          <p className="mb-4">7.1 <strong>Prohibited Actions:</strong> You agree not to engage in any activity that may interfere with or disrupt the App, including but not limited to hacking, scraping, or any other unauthorized use of the App.</p>
  
          <p className="mb-4"><strong>8. Changes to Terms</strong></p>
          <p className="mb-4">Gecko Cabane Restaurant reserves the right to modify or revise these Terms of Service at any time. Your continued use of the App after such modifications will constitute your acknowledgment of the modified terms.</p>
  
          <p className="mb-4"><strong>9. Termination</strong></p>
          <p className="mb-4">Gecko Cabane Restaurant reserves the right to terminate or suspend your account and access to the App at its sole discretion, without notice, for any reason.</p>
  
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:geckocabanerestaurant@gmail.com" className="text-blue-500">geckocabanerestaurant@gmail.com</a>.</p>
        </div>
      </div>
    );
  };

//<Lottie autoPlay={true}  onComplete={() => setBg(true)} className={`${focus  && 'hidden'} overflow-x-hidden   ${bg  && 'hidden'} top-0 left-[-10%] w-[120%] absolute z-[-1]`} animationData={Monkey} loop={false}></Lottie>