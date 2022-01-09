import { Link } from 'react-router-dom';
import { Photo } from '../../types/Photo'

type Props = {
    data: Photo
}

export const PhotoItem = ({ data }: Props) => {
    return (
        <Link to={`/photos/${data.id}`}>
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    );
}