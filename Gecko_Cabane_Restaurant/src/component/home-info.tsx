
import { cn } from '@/lib/utils';
import Separator from './separator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

function HomeInfo({ className} : { className? : string}) {
    const nav = useNavigate()
    return ( <section className={cn(className,'grid place-items-center grid-flow-row bg-white gap-5 py-[5rem] ')}>
                    <h4 className="transition-font-size home-info-title text-center md:w-[50rem] px-5 text-xl md:text-4xl ">Our restaurant is a collective of amazing people striving to build gastronomic products</h4>
                    <Separator></Separator>
                    <div className="grid grid-flow-row gap-3 px-5 md:w-[50rem]">
                        <p className="text-center home-info-p">We preferded to give our restaurant a cozy mood, built on relationship and careness.</p>
                        <p className="text-center home-info-p">Table of 10 persons or more please make a reservation. We want to make sure you will appreciate your time in our restaurant.</p>
                        <p className="text-center home-info-p">Reservation can be made at restaurant or by phone.</p>
                    </div>
                    <div  className="grid grid-flow-row gap-1 px-5 md:w-[50rem]" >
                        <p className='text-center home-info-p'>Open time :</p>
                        <p className='text-center home-info-p'>17:00 - 23:00</p>
                    </div>
                    <Button title="link about" className="flex gap-2 hover:scale-105 transition-transform" onClick={() => nav('/about')} variant={'link'}><BookOpen className='w-4 h-4 stroke-1'></BookOpen> Read More</Button>
            </section> );
}

export default HomeInfo;