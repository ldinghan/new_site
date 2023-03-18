import {ReactNode} from 'react';

interface Props {
    children ?: ReactNode;
}

const ColourfulBox = ({children} : Props) => {
    return (
        <>
            <div className="p-5 border-8 border-l-fuchsia-400 border-t-fuchsia-300 border-b-sky-200 border-r-sky-300 shadow-lg shadow-rose-200">
                    {children}
            </div>
        </>
    )
}

export default ColourfulBox;