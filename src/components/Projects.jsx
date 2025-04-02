export function Projects() {
    return (
        <section className="p-20 mt-10">
            <h1 className="text-3xl items-start flex justify-center text-colorpal-accent font-semibold">
                Projects
            </h1>
            <div className="mt-10 flex justify-center">
                <a
                    href="https://words-per-minute-notes-6t100u839-msithiphongs-projects.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white block hover-expand-effect"
                >
                    <img
                        className="w-full"
                        src="/images/WPM_Notes_Thumbnail.JPG" // Ensure the file exists in public/images
                        alt="Website Thumbnail"
                    />
                    <div className="px-6 py-4 bg-transparent">
                        <div className="font-bold text-xl mb-2">WPM Note Type Test</div>
                        <p className="text-gray-700 text-base">
                        A modern, feature-rich typing speed test application that helps users measure and improve their typing speed and accuracy.
                        </p>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Projects;