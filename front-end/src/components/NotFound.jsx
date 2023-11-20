import { Link } from "react-router-dom"

const NotFound = () => {
  return (
  <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md dark:text-white h-full duration-100">
    <div className="dark:text-white h-full p-4 flex flex-col justify-center text-center gap-2">
      <p className="text-9xl font-bold">404</p>
      <p className="text-4xl">Page Not Found</p>
      <Link to={'/'}>
        Return to Dashboard
      </Link>
    </div>
  </div>
  )
}

export default NotFound