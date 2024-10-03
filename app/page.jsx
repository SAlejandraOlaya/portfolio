import Socials from '../components/Socials';
import { Button } from '../components/ui/button'
import { FiDownload } from "react-icons/fi"
import Photo from '../components/Photo';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container h-full mx-auto'>
        <div className='flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='order-2 text-center xl:text-left xl:order-none'>
            <span className='text-xl'> Desarrolladora Web </span>
            <h1 className='mb-6 h1'>¡Hola! soy <br /> <span className='text-accent'>Alejandra Olaya</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80'>Desarrolladora full stack con pasión por el front-end. Creo experiencias web atractivas y funcionales que dan vida a tus ideas digitales.</p>
            {/* btn and socials */}
            <div className='flex flex-col items-center gap-8 xl:flex-row'>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 px-6 py-2 uppercase"
              >
                <span>Descargar CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all durarion-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 mb-8 xl:order-none xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
};

export default Home;