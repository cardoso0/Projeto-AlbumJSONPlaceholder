import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../api';
import { Album } from '../types/Album';
import { AlbumItem } from '../components/AlbumItem';

export const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const params = useParams();

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
                    <AlbumItem 
                        key={index}
                        id={item.id}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}