import './App.css';
import MagnifyingGlassIcon from "./components/icons/magnifying-glass.tsx";
import PlusIcon from "./components/icons/plus.tsx";
import XMarkIcon from "./components/icons/x-mark.tsx";


function App() {

    return (
        <>
            <div className="my-4 max-w-md mx-auto">
                <form>
                    <div className="flex items-center mb-2">
                        <div className="relative w-full">
                            <input type="text" id="simple-search"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Add item"/>
                        </div>
                        <button type="submit"
                                className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <PlusIcon></PlusIcon>
                            <span className="sr-only">Add</span>
                        </button>
                    </div>
                    <div className=" flex items-center">
                        <div className="relative w-full">
                            <input type="text" id="simple-search"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Filter items"/>
                        </div>
                        <button type="submit"
                                className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <MagnifyingGlassIcon></MagnifyingGlassIcon>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </form>


                <div className="mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                    <div
                        className="flex justify-between items-center w-full px-4 py-2 font-medium text-left text-black border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none">
                        <p> Item 1 </p>
                        <button type="submit"
                                className=" text-xs font-medium rounded-lg border text-blue-700 border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <XMarkIcon></XMarkIcon>
                        </button>
                    </div>
                    <div
                        className="flex justify-between items-center w-full px-4 py-2 font-medium text-left text-black border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none">
                        <p> Item 2 </p>
                        <button type="submit"
                                className=" text-xs font-medium rounded-lg border text-blue-700 border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <XMarkIcon></XMarkIcon>
                        </button>
                    </div>
                    <div
                        className="flex justify-between items-center w-full px-4 py-2 font-medium text-left text-black border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none">
                        <p> Item 3 </p>
                        <button type="submit"
                                className=" text-xs font-medium rounded-lg border text-blue-700 border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <XMarkIcon></XMarkIcon>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default App