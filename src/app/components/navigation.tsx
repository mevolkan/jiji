export default function Navigation() {
    return (
        <section className="container mx-auto flex">

            <div className="flex ">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/eye.png" className="h-12" alt=" Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eye</span>
                </a>
            </div>
            <div className="w-full">
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">info@example.com</a>
                            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">380 Albert St Melborne</a>
                            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        </div>
                        <div>
                            <div className="flex mt-4 space-x-5  md:mt-0 rtl:space-x-reverse">
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="bg-gray-50 ">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <a href="#" className="text-gray-900  hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900  hover:underline">Pages</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900  hover:underline">Shop</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900  hover:underline">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900  hover:underline">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900  hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </section>
    )
}