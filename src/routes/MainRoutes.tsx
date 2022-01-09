import { useRoutes } from 'react-router-dom'

import { AlbumsOpened } from '../pages/AlbumsOpened'
import { Albums } from '../pages/Albums'
import { Photo } from '../pages/Photo'

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Albums /> },
        { path: '/album/:id', element: <AlbumsOpened /> },
        { path: '/:photo/:id', element: <Photo /> }
    ])
}