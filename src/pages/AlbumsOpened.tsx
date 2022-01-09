import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api';
import { AlbumOpened } from '../types/AlbumOpened';

export const AlbumsOpened = () => {
    const params = useParams();

    const [album, setAlbum] = useState<AlbumOpened[]>([]);

    useEffect(() => {
        loadAlbum();
    }, []);

    const loadAlbum = async () => {
        let json = await api.getAlbum();
        setAlbum(json);
    }
    return (
        <div>
            <h1>Galeria de Fotos: {album.length}</h1>
            <hr />
            <button>Voltar</button>
            <div>
                {album.map((item, index) => (
                    <div key={index}>
                        <h4>{item.title}</h4>
                        <li><img src={item.thumbnailUrl} /></li>
                    </div>
                ))}
            </div>
        </div>
    )
}