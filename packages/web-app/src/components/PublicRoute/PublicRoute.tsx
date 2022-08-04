import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  authed: boolean
  redirect: string
}

export default function PublicRoute({ authed, redirect }: Props) {
  return !authed ? <Outlet /> : <Navigate to={redirect} />
}
