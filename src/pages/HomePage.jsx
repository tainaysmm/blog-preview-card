import BlogPreviewCard from "../components/BlogPreviewCard";
import { useFetch } from "../hooks/useFetch";
export default function HomePage() {
    const { data: post, loading, error } = useFetch("/post");
    if (loading) {
        return <p className="text-gray-950 font-medium">Carregando...</p>;
    }
    if (error) {
        return (
            <p className="text-gray-950 font-medium">
                Não foi possível carregar o post. Tente novamente.
            </p>
        );
    }
    return <BlogPreviewCard post={post} />;
}