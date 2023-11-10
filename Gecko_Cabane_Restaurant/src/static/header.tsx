
import { Button } from "@/components/ui/button"
import Separator from "@/component/separator"
import NavBarre from "@/component/nav-barre"
import DropDownMain from '@/component/header-dropdown'
import { Link } from 'react-router-dom'


export default function Header () {
    
    return (
        <section className="flex  flex-col w-screen   min-h-[25rem] md:min-h-[30rem]  gap-6 md:gap-12 px-2 ">
            <div id='bg' className='header-bg md:h-[30rem] min-h-[25rem]  w-full'></div>
            <div className="flex w-full h-auto p-2 justify-between opacity-100 ">
                <div>
                    <h1 className="transition-font-size hover:text-primary hover:cursor-pointer font-montserrat font-semibold leading-6 text-2xl md:text-xl transition-transform hover:scale-105 w-[10rem] md:w-auto" >
                        <Link to="/"> Gecko Cabane Restaurant</Link></h1>
                    <p className="leading-6 text-xs font-Inter">French & Thai fusion food</p>
                </div>
                <DropDownMain className="md:hidden  hover:scale-105"></DropDownMain>
                <NavBarre className="hidden  md:block"></NavBarre>

            </div>
            <div className="flex flex-col p-4 w-full h-auto items-center align-center md:gap-4">
                <div className="flex flex-col items-center align-center ">
                    <h5 className="mb-1 md:mb-5 text-white font-vidaloka text-2xl font-medium italic tracking-[1.4px] text-shadow text-center">explore new taste</h5>
                    <Separator></Separator>
                </div>
                <h1 className="p-4 text-white font-serif text-4xl font-extrabold uppercase tracking-wider text-shadow text-center">GECKO CABANE RESTAURANT</h1>
                <div className="flex flex-row items-center w-auto h-auto gap-6 ">
                    <Button title='link about' className="rounded-full transition duration-300 hover:scale-110">
                        <Link to='/about'>ABOUT US</Link>
                    </Button>
                    <Button title="link menu" className="rounded-full transition duration-300 hover:scale-110">
                        <Link to='/menu'>BROWSE MENU</Link></Button>
                </div>
            </div>
        </section>
    )
}