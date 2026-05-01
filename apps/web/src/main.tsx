import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@workspace/ui/globals.css"
import { App } from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "@workspace/ui/components/sonner"
import { BrowserRouter } from "react-router-dom"
import TanstackQuery from "./context/tanstack-query.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TanstackQuery>
          <App />
          <Toaster position="bottom-right" richColors />
        </TanstackQuery>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
