import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import file_back from './backend/app.js'
export default function Home() {
  return (
    <>
      <Sidebar />
      <Header title='Рулетка'/>
      <Main />
    </>
  )
}
