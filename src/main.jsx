import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { QueryClient, QueryClientProvider, queryOptions } from '@tanstack/react-query'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider   client={queryClient}> 
      <App />
  </QueryClientProvider> 
 
)
