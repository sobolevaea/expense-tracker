import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import initApp from './init.jsx'

const runApp = async () => {
  const app = await initApp()
  createRoot(document.getElementById('tracker')).render(
    <StrictMode>
      {app}
    </StrictMode>,
  )
}

runApp()