export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative  before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <h1 className="text-3xl text-center mb-3 font-bold">litElements</h1>
      <h2 className="text-center text-xl mb-3">
        We&apos;re currently working on some awesome Lit components.
      </h2>
      <p className="max-w-[720px] mx-auto px-2.5 text-center">
        litElements provides a collection of customizable Web Components built with Lit, a lightweight and powerful library for building web applications. With litElements, you can easily add UI components to your projects, customize their styles and behavior, and enjoy the benefits of web components, including encapsulation, reusability, and composability. Whether you&apos;re building a small website or a complex web application, litElements can help you save time and effort and create beautiful, functional, and scalable user interfaces. Try litElements today and start building your next web project with ease.
      </p>
      </div>
    </main>
  )
}
