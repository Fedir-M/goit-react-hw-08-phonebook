import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, isRefreshSelector } from '../redux/Auth/authSelectors';
import { refreshUser } from '../redux/Auth/authOperations';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Loader from './Loader';

export const App = () => {
  const isAuth = useSelector(isAuthSelector);
  const isRefreshing = useSelector(isRefreshSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : !isAuth ? (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/contacts" />} />
    </Routes>
  );
};

/*
[
      { id: 'id-1', name: 'David Beckham', number: '111-11-11' },
      { id: 'id-2', name: 'Luis Suárez', number: '222-22-22' },
      { id: 'id-3', name: 'Mohamed Salah', number: '333-33-33' },
      { id: 'id-4', name: 'Virgil van Dijk', number: '444-44-44' },
      { id: 'id-5', name: 'Jurgen Klopp', number: '555-55-55' },
      { id: 'id-6', name: 'Jamie Carragher', number: '666-66-23' },
      { id: 'id-7', name: 'James Milner', number: '777-77-77' },
      { id: 'id-8', name: 'Steven Gerrard', number: '888-88-88' },
      { id: 'id-9', name: 'Frank Lampard', number: '999-99-99' },
      { id: 'id-10', name: 'Xabi Alonso', number: '111-99-99' },
    ]
*/
