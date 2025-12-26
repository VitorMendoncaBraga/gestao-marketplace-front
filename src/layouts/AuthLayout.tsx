
import Background from '@/assets/Background.png'
import Logo from '@/assets/Logo.svg'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className='flex min-h-screen'>
        <div className='bg-shape w-6/10 p-10'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <img src={Background} alt="" className='mt-6 w-full' />
        </div>
        <Outlet />         
    </div>
  )
}


