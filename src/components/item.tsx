import XMarkIcon from "./icons/x-mark.tsx";

interface itemProps {
    name: string;
    index: number;
    remove: (index: number, name: string) => void;
}

export default function Item({name, index, remove}: itemProps) {

    return (
        <>
            <div
                key={index}
                className="flex justify-between items-center w-full px-4 py-2 font-medium text-left text-black border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none">
                <p className="max-w-[380px] truncate"> {name} </p>
                <button
                    type="submit"
                    onClick={() => remove(index, name)}
                    className=" text-xs font-medium rounded-lg border text-blue-700 border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <XMarkIcon></XMarkIcon>
                </button>
            </div>
        </>
    )
}
