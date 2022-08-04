import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  redirect: string
  authed: boolean
}

export default function AuthRoute(props: Props) {
  return props.authed ? <Outlet /> : <Navigate to={props.redirect} />
}
