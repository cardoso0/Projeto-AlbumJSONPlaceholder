import { useRoutes } from 'react-router-dom'

// import { RequireAuth } from '../RequireAuth';
import { Home } from '../pages/Home'
import { AboutItem } from '../pages/AlbumItem'

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        // { path: '/sobre', element: <RequireAuth><About /></RequireAuth> },
        { path: '/sobre/:slug', element: <AboutItem /> }
    ])
}