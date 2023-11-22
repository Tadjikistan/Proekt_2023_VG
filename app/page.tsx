import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
      <Header title='Рулетка'/>
      <Main />
    </>
  )
}
