import type {ChangeEvent, ReactNode} from "react";

interface inputProps {
    inputValue: string;
    buttonText: string;
    placeholder: string;
    buttonIcon: ReactNode;
    buttonOnClickHandler: () => void;
    inputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: inputProps) {

    return (
        <>

            <div className="flex items-center mb-2">
                <div className="relative w-full">
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={props.inputValue}
                        placeholder={props.placeholder}
                        onChange={props.inputChangeHandler}/>
                </div>
                <button type="button"
                        onClick={() => props.buttonOnClickHandler()}
                        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    {props.buttonIcon}
                    <span className="sr-only"> {props.buttonText} </span>
                </button>
            </div>
        </>
    )
}
