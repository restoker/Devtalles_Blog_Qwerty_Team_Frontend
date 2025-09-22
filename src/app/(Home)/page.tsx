// import Blogs from "./_ui/Blogs"
import Hero from "./_ui/Hero"
import News from "./_ui/News"
import Team from "./_ui/Team"

const footerNavigation = {
    main: [
        { name: 'Blogs', href: '/blogs' },
        { name: "FAQs", href: '/faqs' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ],
}

export default function Home() {
    return (
        <>
            {/* Header */}

            <main className="isolate">
                {/* Hero section */}
                <Hero />
                {/* Content section */}
                {/* News section */}
                <News />
                {/* Feature section */}
                {/* Team section */}
                <Team />
                {/* Blog section */}
                {/* <Blogs /> */}
            </main>

            {/* Footer */}
            <footer className="mt-16 sm:mt-32">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                    <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                        {footerNavigation.main.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <p className="mt-10 text-center text-medium text-gray-200 underline">
                        2025 Dev/Blog.
                    </p>
                </div>
            </footer>
        </>
    )
}