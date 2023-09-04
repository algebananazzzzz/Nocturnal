import * as React from 'react';

const Text = ({ contrastLevel = null, svgSizeSm = 3, svgSizeMd = 5, text, link, classes, svgViewBox, children, svgFill = "none", svgStroke = "none", sizeSm = "base", sizeMd = "lg" }) => {
    return <> {link ? <a href={link} target='blank'>
        <p className={`text-${sizeSm} md:text-${sizeMd} ${(contrastLevel === 1) ? "text-gray-900 dark:text-gray-200" : (contrastLevel === 2) ? "text-gray-800 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"} inline-flex items-center ${classes}`}>
            {children && <svg className={`w-${svgSizeSm} md:w-${svgSizeMd} mr-2 h-auto`} viewBox={svgViewBox} fill={svgFill} stroke={svgStroke}>
                {children}
            </svg>
            }
            {text}
        </p>
    </a> :
        <div className='flex items-center'>
            {children && <svg className={`w-${svgSizeSm} md:w-${svgSizeMd} mr-2 h-auto`} viewBox={svgViewBox} fill={svgFill} stroke={svgStroke}>
                {children}
            </svg>
            }
            <p className={`text-${sizeSm} md:text-${sizeMd} ${(contrastLevel === 1) ? "text-gray-900 dark:text-gray-200" : (contrastLevel === 2) ? "text-gray-800 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"} ${classes}`}>
                {text}
            </p>
        </div>}
    </>
}

export default Text