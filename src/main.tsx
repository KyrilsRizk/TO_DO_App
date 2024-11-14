import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodoContextProvider from './contexts/TodoContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<KindeProvider
		clientId='9718138185e44922a4b478cd2f93955a'
		domain='https://kyrilsrizk.kinde.com'
		redirectUri='http://localhost:5173'
		logoutUri='http://localhost:5173'
	>
		<TodoContextProvider>
			<App />
		</TodoContextProvider>
	</KindeProvider>
)
