import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/HomePage';
import RihalaPage from '@/pages/RihalaPage';
import AcademicRecordsPage from '@/pages/AcademicRecordsPage';
import CaseStudyLayout from '@/layouts/CaseStudyLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'projects',
        element: <CaseStudyLayout />,
        children: [
          { path: 'rihala', element: <RihalaPage /> },
          { path: 'academic-records', element: <AcademicRecordsPage /> },
        ],
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
