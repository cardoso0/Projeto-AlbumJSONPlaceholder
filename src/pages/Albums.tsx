import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { Album } from '../types/Album';

export const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        let json = await api.getAllAlbums();
        setAlbums(json);
    }
    return (
        <div>
            <h1>Galeria de Fotos: {albums.length}</h1>
            <hr />
            <div>
                {albums.map((item, index) => (
                    <div key={index}>
                        <h4><Link to="/:slug/:slug/:slug">{item.title}</Link></h4>
                    </div>
                ))}
            </div>
        </div>
    )
}