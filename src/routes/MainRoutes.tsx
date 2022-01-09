import { useRoutes } from 'react-router-dom'

// import { RequireAuth } from '../RequireAuth';
import { Albums } from '../pages/Albums'
import { AlbumsOpened } from '../pages/AlbumsOpened'

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Albums /> },
        // { path: '/sobre', element: <RequireAuth><About /></RequireAuth> },
        { path: '/:slug/:slug/:slug', element: <AlbumsOpened /> }
    ])
}