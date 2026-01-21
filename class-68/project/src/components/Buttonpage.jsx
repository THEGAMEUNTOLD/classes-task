import React from 'react'

const Buttonpage = ({ text, icon, className }) => {
    return (
        <div>
            <button
                className={`${className} flex items-center gap-2 px-4 py-2 text-sm`}
            >
                {icon}
                {text}
            </button>
        </div>
    )
}

export default Buttonpage
