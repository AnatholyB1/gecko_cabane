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
import { useNavigate } from "react-router-dom";
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
            nav('privacy-policy')
        }
    })



    const handleAccept = () => {
        localStorage.setItem('cgu','true')
        nav('privacy-policy')
    }
    return (
        <div className="relative overflow-x-hidden ">
        <Layer className={`${focus  && 'blur'} overflow-x-hidden`}>
            <section className={`grid w-full grid-flow-row place-items-center gap-4 h-auto py-[5rem] px-5 text-center home-info-p ${bg ? 'bg-white w-full' : '' }`}>
                <div className={` overflow-y-auto grid grid-flow-row  max-h-[600px] place-items-center gap-4 h-auto ${bg ? 'bg-white w-full' : 'bg-white/90 '}  py-[5rem] px-5 text-center home-info-p `}>
                    <h2>Terms and Conditions of Site Use</h2>
                    <p>This site is intended for personal, non-commercial use.</p>
                    <p>Any reproduction, modification, distribution, or commercial use without prior authorization is strictly prohibited.</p>
                    <h2>Use of the Integrated Google Map</h2>
                    <p>The integrated Google map on this site is provided for informational purposes only.</p>
                    <p>The information displayed on the map may not be up to date or accurate.</p>
                    <h2>Use of the Pinterest Application</h2>
                    <p>Certain parts of this site may integrate content from the Pinterest application.</p>
                    <p>The use of this content is subject to Pinterest's terms of use.</p>
                </div>
                <Button onClick={() => handleAccept()}>Accept</Button>
            </section> 
        </Layer>
        <div className={`${!focus ? 'hidden' : " overflow-x-hidden absolute top-0 left-0 w-[100% - 20rem]  z-index-[9999] blur-container h-auto m-8 lg:m-[10rem] xl:mx-[20rem]"}`}>
            <Card className= "grid place-items-center">
                <CardHeader className="w-full">
                    <CardTitle>General Condition of Use</CardTitle> 
                    <CardDescription>Little bit of reading</CardDescription>
                </CardHeader>
                <CardContent className="grid  grid-flow-row h-auto min-w-[300px] max-w-[80%] mg:min-w-[700px] max-h-[500px] bg-white py-[5rem] px-5 text-center overflow-y-auto sm:overflow-hidden ">
                    <h2>Terms and Conditions of Site Use</h2>
                    <p>This site is intended for personal, non-commercial use.</p>
                    <p>Any reproduction, modification, distribution, or commercial use without prior authorization is strictly prohibited.</p>
                    <h2>Use of the Integrated Google Map</h2>
                    <p>The integrated Google map on this site is provided for informational purposes only.</p>
                    <p>The information displayed on the map may not be up to date or accurate.</p>
                    <h2>Use of the Pinterest Application</h2>
                    <p>Certain parts of this site may integrate content from the Pinterest application.</p>
                    <p>The use of this content is subject to Pinterest's terms of use.</p>
                </CardContent>  
                <CardFooter className="flex justify-between w-full">
                    <Button onClick={() => setFocus(false)} variant="outline">Cancel</Button>
                    <Button onClick={() => handleAccept()}>Accept</Button>
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
        className={`${focus  && 'hidden'} overflow-x-hidden   ${bg  && 'hidden'} top-0 left-[-10%] w-[120%] absolute z-[-1]`}   
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

//<Lottie autoPlay={true}  onComplete={() => setBg(true)} className={`${focus  && 'hidden'} overflow-x-hidden   ${bg  && 'hidden'} top-0 left-[-10%] w-[120%] absolute z-[-1]`} animationData={Monkey} loop={false}></Lottie>