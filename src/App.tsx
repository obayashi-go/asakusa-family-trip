import { RecoilRoot } from 'recoil';
import './App.css'
import { RouteController } from './utils/functions/route-controller'
import { CustomLayout } from './views/conponents/layout'

function App() {
  return (
    <>
      <RecoilRoot>
        <CustomLayout>
          <RouteController />
        </CustomLayout>
      </RecoilRoot>
    </>
  )
}

export default App
