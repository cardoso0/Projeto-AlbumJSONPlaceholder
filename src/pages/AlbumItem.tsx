import { useParams, useNavigate } from 'react-router-dom'

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
            Página Sobre {params.slug?.toUpperCase()} ({params.slug?.length} letras:)
            <hr />
        </div>
    )
}