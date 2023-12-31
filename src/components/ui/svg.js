import * as React from 'react';

const Svg = ({ svgSizeSm = 4, svgSizeMd = 5, link, svgViewBox, children, svgFill = "currentColor", svgStroke = "none" }) => {
    return <> {link ?
        <a href={link} target='blank' className='inline-flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] text-center text-gray-600 hover:bg-gray-100 rounded-full dark:text-gray-400 dark:hover:bg-gray-800'>
            <svg className={`w-${svgSizeSm} md:w-${svgSizeMd}`} viewBox={svgViewBox} fill={svgFill} stroke={svgStroke}>
                {children}
            </svg>
        </a>
        : <span className='text-gray-600 dark:text-gray-400'>
            <svg className={`w-${svgSizeSm} md:w-${svgSizeMd}`} viewBox={svgViewBox} fill={svgFill} stroke={svgStroke}>
                {children}
            </svg>
        </span>}
    </>
}

export default Svg