import * as React from 'react';

const Header = ({ svgFill = "none", svgSize = 12, svgViewBox, children, text, classes, contrastLevel = 1, marginTop, size = "xl", sizeSm = "3xl", sizeMd = "3xl", sizeLg = "3xl", sizeXl = "4xl" }) => {
    return <p className={`${marginTop} text-${size} sm:text-${sizeSm} md:text-${sizeMd} lg:text-${sizeLg} xl:text-${sizeXl} ${(contrastLevel === 1) ? "text-gray-900 dark:text-gray-200" : (contrastLevel === 2) ? "text-gray-800 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"} font-medium inline-flex items-center ${classes}`}>
        {text}
        {children && <svg className={`w-${svgSize} h-${svgSize} ml-2`} viewBox={svgViewBox} fill={svgFill}>
            {children}
        </svg>}
    </p>
}

export default Header