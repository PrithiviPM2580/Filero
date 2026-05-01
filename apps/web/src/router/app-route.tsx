import { Routes, Route } from "react-router-dom"
import SignIn from "@/pages/auth/sign-in"
import SignUp from "@/pages/auth/sign-up"

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
