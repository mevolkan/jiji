export default function Prefooter() {
    return (
        <div className="container mx-auto bg-[#f6f6f6] text-[#1f7b6f] px-16 py-20 rounded-lg">
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h2 className="text-4xl font-bold">Need Help? Talk to our expert</h2>
                    <p>Talk to our experts or Browse through more help</p>
                </div>
                <div>
                    <button type="button" className="text-[#7a7b7e] hover:text-white border border-[#7a7b7e] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 ">Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#7a7b7e" d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" /></svg></button>
                    <button type="button" className="text-white bg-[#181a20] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                        <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                        +254 716410368
                    </button>
                </div>
            </div>
        </div>
    )
}