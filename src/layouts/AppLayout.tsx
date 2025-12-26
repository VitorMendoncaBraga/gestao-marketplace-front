import { getProfile } from "@/api/getProfile"
import { NavBar } from "@/components/NavBar"
import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"
import {CircleLoader} from 'react-spinners'


export function AppLayout() {
  const {isLoading, error} = useQuery({
    queryKey: ['me'],
    queryFn: getProfile,
    retry: false
  })


  if(isLoading){
    return (
      <div className="min-h-screen flex justify-center items-center">
          <CircleLoader />
      </div>
    )
  }
  if(error){
    return <Navigate to={'/sign-in'} replace />
  }
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  )
}

