export default function Pagination() {
    return (
        <div className="flex justify-center">
            <div className="flex-col">
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <a href="#" className="flex items-center rounded-full justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white   hover:bg-gray-100 hover:text-gray-700 ">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center rounded-full justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center rounded-full justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 flex rounded-full items-center justify-center px-4 h-10 leading-tight text-white bg-[#1f7b6f] hover:bg-blue-100 hover:text-blue-700 ">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center rounded-full justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center rounded-full justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center rounded-full justify-center px-4 h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center py-2">
                    <span className="text-sm text-gray-700 ">
                        <span className="font-semibold text-gray-900 ">1</span> to <span className="font-semibold text-gray-900 ">10</span> of <span className="font-semibold text-gray-900 ">100</span> Available
                    </span>
                </div>
            </div>

        </div>
    )
}