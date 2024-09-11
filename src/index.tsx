import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!) // Added `!` to assert that `rootElement` is not null

root.render(<App />)
