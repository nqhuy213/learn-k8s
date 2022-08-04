import { sendEmailVerification } from 'firebase/auth'
import { registerWithEmail } from '../../firebase-config'

export default function RegisterPage() {
  const handleOnClick = async () => {
    const response = await registerWithEmail('nqhuy213@gmail.com', 'huybeo213')
    await sendEmailVerification(response.user)
    console.log(response)
  }

  return <button onClick={handleOnClick}>Create</button>
}
