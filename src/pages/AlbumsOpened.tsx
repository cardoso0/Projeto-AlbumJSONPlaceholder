import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api';
import { Photo } from '../types/Photo';
import { PhotoItem } from '../components/PhotoItem';
import { Album as AlbumType } from '../types/Album';

export const AlbumsOpened = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [list, setList] = useState<Photo[]>([]);
    const [album, setAlbum] = useState<AlbumType>({id: 0, title: '', userId: 0});

    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbum(params.id);
        }
    }, []);

    const loadPhotos = async (id: string) => {
        let json = await api.getPhotosFromAlbum(id);
        setList(json)
    }

    const loadAlbum = async (id: string) => {
        let json = await api.getAlbum(id);
        setAlbum(json);
    }

    const backButton = () => {
        navigate(-1);
    }
    return (
        <div>
            <h1>Galeria de Fotos</h1>
            <hr />
            <button onClick={backButton}>Voltar</button>

            <h1>{album.title}</h1>

            <div>
                {list.map((item, index) => (
                    <PhotoItem
                        key={index}
                        data={item}
                    />
                ))}
                {/* {album.map((item, index) => (
                    <div key={index}>
                        <h4>{item.title}</h4>
                        <Link to="/photos/1"><img src={item.thumbnailUrl}/></Link>
                    </div>
                ))} */}
            </div>
        </div>
    )
}