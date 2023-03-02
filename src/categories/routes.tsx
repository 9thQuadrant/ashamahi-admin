import { Route, Routes } from 'react-router-dom';
import MainPageComponent from '../main/main';
import CategoriesList from './categories';

const RoutesMap = (): JSX.Element => {
    return (
      <Routes>
        <Route path="/categories" element={<CategoriesList /> } />
        <Route path="/" element={<MainPageComponent /> } />
      </Routes>
    );
  };

  export default RoutesMap;