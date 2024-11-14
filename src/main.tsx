import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodoContextProvider from './contexts/TodoContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<KindeProvider
		clientId='9718138185e44922a4b478cd2f93955a'
		domain='https://kyrilsrizk.kinde.com'
		redirectUri={
			process.env.NODE_EVN === 'Production'
				? 'https://todoapp-wheat-eight.vercel.app'
				: 'http://localhost:5173'
		}
		logoutUri={
			process.env.NODE_EVN === 'Production'
				? 'https://todoapp-wheat-eight.vercel.app'
				: 'http://localhost:5173'
		}
		isDangerouslyUseLocalStorage={true}
	>
		<TodoContextProvider>
			<App />
		</TodoContextProvider>
	</KindeProvider>
)
