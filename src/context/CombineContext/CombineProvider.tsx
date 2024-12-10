import UserProvider from '@/features/auth/context/UserProvider';
import { CombineContexts } from './CombineContext';
import AuthProvider from '../AuthContext/AuthProvider';




const providers = [
    UserProvider,AuthProvider
]




export const CombineContextProvider = ({children}:{children: React.ReactNode})=>{
    return <CombineContexts components={providers} children={children} />
}