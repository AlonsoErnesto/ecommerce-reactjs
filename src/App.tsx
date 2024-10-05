import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import ListProduct from './pages/products/ListProduct';
import CreateProduct from './pages/products/CreateProduct';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    if (location.pathname === '/login') {
      return <Navigate to="/dashboard" replace />; // Redirigir a dashboard si ya está autenticado
    }
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/*" element={<h2>ERROR 404</h2>} />
          <Route
            path="/products/list"
            element={
              <DefaultLayout>
                <PageTitle title="Products | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <ListProduct />
              </DefaultLayout>
            }
          />
          <Route
            path="/products/create"
            element={
              <DefaultLayout>
                <PageTitle title="Products | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <CreateProduct />
              </DefaultLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DefaultLayout>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <ECommerce />
              </DefaultLayout>
            }
          />
          <Route
            path="/calendar"
            element={
              <DefaultLayout>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Calendar />
              </DefaultLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DefaultLayout>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
              </DefaultLayout>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <DefaultLayout>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
              </DefaultLayout>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <DefaultLayout>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </DefaultLayout>
            }
          />
          <Route
            path="/tables"
            element={
              <DefaultLayout>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
              </DefaultLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <DefaultLayout>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
              </DefaultLayout>
            }
          />
          <Route
            path="/chart"
            element={
              <DefaultLayout>
                <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Chart />
              </DefaultLayout>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <DefaultLayout>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
              </DefaultLayout>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <DefaultLayout>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
              </DefaultLayout>
            }
          />
          <Route
            path="/auth/signin"
            element={
              <DefaultLayout>
                <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignIn />
              </DefaultLayout>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <DefaultLayout>
                <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignUp />
              </DefaultLayout>
            }
          />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
