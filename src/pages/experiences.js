import React from "react"
import HomeLayout from "../components/layout/home-layout"
import PageContent from '../content/experiences.yml'
import parse from 'html-react-parser';
import Text from "../components/ui/text"
import Svg from "../components/ui/svg"
import Action from "../components/ui/action"

const ExperiencePage = () => {

  return (
    <HomeLayout>
      <body className="min-h-screen dark:bg-slate-900">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="pt-5 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
            <div className={`lg:col-span-4 ${!PageContent.intro.svg && "pt-5 lg:pb-24"}`}>
              <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
                {PageContent.intro.title}
              </h1>
              {PageContent.intro.text.map((value) => {
                return <Text classes="mt-5 text-justify" text={value}>
                </Text>
              })}
              <div className="flex flex-col space-y-4 mt-7">
                {PageContent.endeavourList.map((value) => {
                  return <Text svgFill={value.svg.fill} svgStroke={value.svg.stroke} contrastLevel={2} svgSizeSm={value.svg.sizeSm} svgSizeMd={value.svg.sizeMd} svgViewBox={value.svg.viewbox} text={value.text} link={value.link}>
                    {parse(value.svg.path)}
                  </Text>
                })}
              </div>
            </div>
            {PageContent.intro.svg && <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
              <svg viewBox={PageContent.intro.svg.viewbox} stroke={PageContent.intro.svg.stroke} fill={PageContent.intro.svg.fill}>
                {parse(PageContent.intro.svg.path)}
              </svg>
            </div>}
          </div>
          <ol className="mt-12 lg:mt-0 ml-3 lg:max-w-5xl text-justify relative border-l-2 border-solid border-gray-200 dark:border-gray-700">
            {PageContent.experiences.map((value) => {
              const [[name, content]] = Object.entries(value);

              return <li className="pb-10 ml-6">
                <div className="inline-flex items-center">
                  <span className="absolute flex items-center text-center justify-center w-7 h-7 bg-blue-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <Svg svgSizeSm={4} svgSizeMd={4} svgViewBox="0 0 24 24" svgFill="#f9fafb">
                      <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                    </Svg>
                  </span>
                  <Text classes="mt-1 font-semibold" sizeSm="md" sizeMd="xl" contrastLevel={1} text={name}></Text>
                </div>
                <p className="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">
                  {content.date}
                </p>
                {content.description.map((value) => {
                  return <Text classes="mt-2" sizeMd="base" text={value}></Text>
                })}
                <div className="mt-4 flex gap-x-2">
                  {content.actions.map((value) => {
                    return <Action text={value.text} asset={value.asset} link={value.link} color={value.color}></Action>
                  })}
                </div>
              </li>
            })}
          </ol>

        </div>
      </body>
    </HomeLayout>
  )
}

export default ExperiencePage

export const Head = () => <title>Experiences</title>