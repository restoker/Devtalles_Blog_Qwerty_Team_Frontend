import Image from 'next/image';
import Comments from './_ui/Comments';
import LikeButton from './_ui/LikeButton';
import { auth } from '@/server/auth';

export default async function BlogPage({ params }: { params: { id: string } }) {
    const { id: postId } = await params;
    const session = await auth();
    const tokenAuth = session?.user?.tokenAuth || '';
    const url = `${process.env.ADDRESS_SERVER}/api/posts/${postId}`;
    const promiseLike = fetch(`${process.env.ADDRESS_SERVER}/api/likes/check/${postId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenAuth}`,
        }
    });
    const promisePost = fetch(url);
    const [responseLike, responsePost] = await Promise.all([promiseLike, promisePost]);
    const postResponse = await responsePost.json();
    const likesResponse = await responseLike.json();
    const post = postResponse.data;
    const likes = likesResponse.data;
    const likesState = likes?.has_liked
    return (
        <div className="relative min-h-screen w-full bg-zinc-950">
            <main className="relative isolate pt-24 sm:pt-32">
                {session && <LikeButton postId={postId} tokenAuth={tokenAuth} userId={session?.user?.id?.toString() || ''} likesState={likesState} />}
                <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-16">
                    <article className="space-y-12">
                        <header className="text-center">
                            <p className="text-base font-semibold leading-7 text-primary">{post.category.name}</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                {post.title}
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-muted-foreground">
                                {post.description}
                            </p>
                            <div className="mt-8 flex items-center justify-center gap-x-4">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        src={post.author.image || "/img/img9.webp"}
                                        alt="Foto del autor"
                                        width={40}
                                        height={40}
                                        className="aspect-square h-10 w-10 rounded-full bg-gray-50"
                                        data-ai-hint="person portrait"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-foreground">
                                            {post.author.name}
                                        </p>
                                        <p className="text-muted-foreground">{post.author.position}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-muted-foreground">
                                {new Date(post.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        </header>

                        <div className="prose prose-invert lg:prose-xl max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        >
                        </div>
                    </article>
                    <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200">
                        <Comments postId={postId} />
                    </section>
                </div>
            </main>
        </div>
    )
}