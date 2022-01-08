import { useEffect, useState } from 'react'
import { api } from '../api';
import { Album } from '../types/Album';
import { AboutItem } from './AlbumItem';

export const Home = () => {
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
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}