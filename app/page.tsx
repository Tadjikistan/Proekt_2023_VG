import Image from 'next/image'
import avatar from './assets/avatar.png'
import iconDise from './assets/icon-dise.svg'
import iconLeave from './assets/icon-off.svg'

export default function Home() {
  return (
    <>
      <div className=' bg-[#131313] 2xl max-w-[240px] pt-4 pl-6 h-screen '>
        <div className='flex items-center gap-3 mb-6'>
          <Image src={avatar} alt={'avatar'} />
          <h2 className=' text-white font-bold text-2xl'>Elitium</h2>
        </div>
        <ul className=' text-[#838286] text-sm flex flex-col gap-4'>
          <li className=' py-3'>
            <a href="#" className='flex gap-4 duration-300 hover:text-[#794DFD]'>
            <Image src={iconDise} alt={'icon'} />
            Рулетка
            </a>
          </li>
          <li className=' py-3'>
            <a href="#" className='flex gap-4 duration-300 hover:text-[#794DFD]'>
              <Image src={iconDise} alt={'icon'} />
              Магазин
            </a>
          </li>
          <li className=' py-3'>
            <a href="#" className='flex gap-4 duration-300 hover:text-[#794DFD]'>
            <Image src={iconLeave} alt={'icon'} />
              Log out
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
