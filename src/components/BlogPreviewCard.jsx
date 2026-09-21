import { formatDate } from "../utils/formatDate";
export default function BlogPreviewCard({ post }) {
    const { coverImage, categories, publishedAt, title, excerpt, author } =
        post;
    return (
        <article className="flex w-full max-w-96 flex-col gap-6 rounded-[20px] border border-gray-950 bg-white p-6 shadow-[8px_8px_0_var(--color-gray-950)] transition-shadow hover:shadow-[16px_16px_0_var(--color-gray-950)]">
            <img src={coverImage} alt={title} className="w-full rounded-[10px]"
            />
            <div className="flex flex-col items-start gap-3">
                <ul className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <li
                            key={category}
                            className="bg-yellow text-gray-950 rounded px-3 py-1 text-sm
font-extrabold"
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <p className="text-gray-950 text-sm font-medium">
                    Published {formatDate(publishedAt)}
                </p>
                <h1 className="cursor-pointer text-2xl font-extrabold text-gray-950 transition-colors hover:text-yellow">
                    {title}
                </h1>
                <p className="text-gray-500 font-medium">{excerpt}</p>
            </div>
            <div className="flex items-center gap-3">
                <img
                    src={author.avatar}
                    alt={author.name}
                    className="size-8 rounded-full"
                />
                <p className="text-gray-950 text-sm font-extrabold">{author.name}
                </p>
            </div>
        </article>
    );
}
