import { Route, Routes } from 'react-router-dom';
import App from './pages/Login'

function Apply() {

  return (
    <Routes>
    <Route path='/' element={<App />} />
    </Routes>
  );

  }
export default Apply;
