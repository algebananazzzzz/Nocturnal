import * as React from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '../theme/theme-context';
import ThemeToggler from '../theme/dark-toggler';

const HomeLayout = ({ children }) => {
    const { theme, changeTheme } = React.useContext(ThemeContext)

    return <body className="min-h-screen">
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-slate-900 dark:border-gray-700">
            <nav className="max-w-7xl flex justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mr-5 md:mr-8">
                    <Link className="flex-none text-sm md:text-xl font-semibold dark:text-white" to="/">Algebananazzzzz</Link>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <a target="blank" href="https://github.com/algebananazzzzz" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full text-gray-700 align-middle hover:bg-gray-200 transition-all dark:hover:bg-slate-800 dark:text-gray-400  dark:hover:text-white dark:hover:text-white">
                        <svg className="w-2.5 h-2.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                    <a target="blank" href="mailto:daniel.zhouqx@gmail.com" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full text-gray-700 align-middle hover:bg-gray-200 transition-all dark:hover:bg-slate-800 dark:text-gray-400  dark:hover:text-white dark:hover:text-white">
                        <svg className="w-2.5 h-2.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 512 512">
                            <path class="st0" d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083 h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92 c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87 C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024 c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674 l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469 c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599 C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92 c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92 C462.107,387.195,462.94,397.75,456.948,404.771z"></path>
                        </svg>
                    </a>
                    <a target="blank" href="https://t.me/danielzqx" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full text-gray-700 align-middle hover:bg-gray-200 transition-all dark:hover:bg-slate-800 dark:text-gray-400  dark:hover:text-white dark:hover:text-white">
                        <svg className="w-2.5 h-2.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 48 48">
                            <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </header>
        <main id="content" role="main">
            <nav className="sticky -top-px bg-white text-xs md:text-sm lg:text-base font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t pt-3 md:pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]">
                <div className="max-w-7xl snap-x w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto">
                    <div className='flex'>
                        {/* <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last:pr-0 text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                            <Link activeClassName='bg-clip-text bg-gradient-to-l from-yellow-600 to-red-600 text-transparent dark:from-yellow-400 dark:to-red-400' className="inline-flex items-center gap-x-2" to="/about">Exploration</Link>
                        </div> */}
                        <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last:pr-0 text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                            <Link activeClassName='bg-clip-text bg-gradient-to-l from-teal-600 to-yellow-500 text-transparent dark:from-teal-400 dark:to-yellow-400' className="inline-flex items-center gap-x-2" to="/skills">Discoveries</Link>
                        </div>
                        <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last:pr-0 text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                            <Link activeClassName='bg-clip-text bg-gradient-to-l from-indigo-600 to-teal-500 text-transparent dark:from-indigo-600 dark:to-teal-400' className="inline-flex items-center gap-x-2" to="/projects">Projects</Link>
                        </div>
                        <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last:pr-0 text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                            <Link activeClassName='bg-clip-text bg-gradient-to-l from-pink-600 to-indigo-500 text-transparent dark:from-pink-500 dark:to-indigo-600' className="inline-flex items-center gap-x-2" to="/experiences">Encounters</Link>
                        </div>
                        <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last:pr-0 text-gray-800 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500">
                            <a href='https://algebananazzzzz.github.io/Resume.pdf' target='blank'>
                                <div className='inline-flex items-center gap-x-1'>
                                    Resume
                                    <svg className='w-3 h-3 md:w-5 md:h-5' viewBox="0 0 24 24" fill='none' stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </a>

                        </div>

                    </div>
                    <ThemeToggler theme={theme} changeTheme={changeTheme}></ThemeToggler>
                </div>
            </nav>
            {children}
        </main>
        <footer className="bg-white dark:bg-slate-900 mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center text-gray-600 dark:text-gray-400">
                <p >Vectors by <a className='text-blue-500 font-bold' href="https://www.instagram.com/xiyou0608/?ref=svgrepo.com" target="blank">Xiyou0608</a> via <a className="text-blue-500 font-bold" href="https://www.svgrepo.com/" target="blank">SVG Repo</a></p>
                <p >Crafted and deployed using these technologies</p>
                <div className="mt-3 space-x-2 flex items-center justify-center">
                    <a href="https://www.gatsbyjs.com" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#744C9E" >
                            <path d="M12 0C5.32267 0 0 5.31733 0 12C0 18.6827 5.31733 24 12 24C18.6827 24 24 18.6773 24 12C24 5.32267 18.6827 0 12 0ZM2.608 12.1013L11.8987 21.3867C6.784 21.392 2.608 17.216 2.608 12.1013ZM14.0853 21.184L2.82133 9.90933C3.76 5.73333 7.51467 2.60267 12 2.60267C15.008 2.61333 17.8347 4.04267 19.616 6.464L18.2613 7.61067C16.8267 5.50933 14.4427 4.256 11.8987 4.26667C8.64533 4.24533 5.74933 6.30933 4.69333 9.38133L14.5067 19.2C16.9067 18.3627 18.784 16.2773 19.3067 13.7707H15.2373V12H21.392C21.392 16.4853 18.2613 20.2453 14.0853 21.184Z" ></path>
                        </svg>
                    </a>
                    <a href="https://tailwindcss.com" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                        <svg fill="#38bdf8" className="w-5 h-5" viewBox="0 0 24 24"  >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path>
                        </svg>
                    </a>
                    <a href="https://aws.amazon.com" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                        <svg viewBox="0 -30 150 150" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F90" d="M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z" ></path>
                            <path fill="#F90" d="M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z" ></path>
                            <path fill="currentColor" d="M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z" ></path>
                        </svg>
                    </a>
                    <a href="https://www.terraform.io" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="#5C4EE5">
                            <path d="M1 0v5.05l4.349 2.527V2.526L1 0zM10.175 5.344l-4.35-2.525v5.05l4.35 2.527V5.344zM10.651 10.396V5.344L15 2.819v5.05l-4.349 2.527zM10.174 16l-4.349-2.526v-5.05l4.349 2.525V16z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </body>
}

export default HomeLayout