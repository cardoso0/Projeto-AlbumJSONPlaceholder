import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api';
import { Photo as PhotoType } from '../types/Photo';

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [photo, setPhoto] = useState<PhotoType>();

    useEffect(() => {
        if (params.id) {
            loadPhoto(params.id);
        }
    }, []);

    const loadPhoto = async (id: string) => {
        let json = await api.getPhoto(id);
        setPhoto(json);
    }

    const backButton = () => {
        navigate(-1);
    }
    return (
        <div>
            {photo &&
                <>
                    <button onClick={backButton}>Voltar</button>
                    <h4>{photo.title}</h4>
                    <img src={photo.url} alt={photo.title}/>
                </>
            }
        </div>
    )
}