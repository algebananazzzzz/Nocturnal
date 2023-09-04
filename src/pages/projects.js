import React, { useState } from "react"
import parse from 'html-react-parser';
import HomeLayout from "../components/layout/home-layout"
import VideoPopupComponent from "../components/video-popup"
import PageContent from '../content/projects.yml'
import Text from "../components/ui/text"
import SvgListed from "../components/ui/svgs";
import Action from "../components/ui/action"

const ProjectPage = () => {
  const [popup, setPopup] = useState(null)

  return (
    <HomeLayout>
      <body className="min-h-screen dark:bg-slate-900">
        <VideoPopupComponent popup={popup} setPopup={setPopup} />

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

          <div className="pt-12 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PageContent.projects.map((value) => {
              const [[name, content]] = Object.entries(value);

              return <div className="group flex flex-col bg-white hover:bg-gray-200 hover:border-gray-300 border dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-500 transition-all duration-250  shadow-sm rounded-md px-4 md:px-5 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
                <div className="child block group-hover:hidden py-4 md:py-5">
                  <p className="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">
                    {content.date}
                  </p>
                  <Text classes="mt-1 font-bold" sizeSm="md" sizeMd="xl" contrastLevel={1} text={name}></Text>
                  <Text classes="mt-2" sizeMd="base" text={content.description}></Text>
                  <div className="mt-2 flex items-center gap-x-5 p-2">
                    {content.svgIcons.map((value) => {
                      return <SvgListed svgName={value.svgName} svgSizeSm={value.sizeSm} svgSizeMd={value.sizeMd} redirect={value.redirect}>
                      </SvgListed>
                    })}
                  </div>
                </div>
                <div className="child hidden group-hover:block py-3 md:py-4">
                  <p className="text-gray-800 dark:text-gray-300 text-justify">
                    {content.additional_description}
                  </p>
                  <div className="mt-2 flex gap-x-2">
                    {content.actions.map((value) => {
                      return <Action text={value.text} action={value.video ? () => { setPopup(value.video) } : null} asset={value.asset} link={value.link} color={value.color}></Action>
                    })}
                  </div>
                </div>
              </div>
            })}
          </div>
          <Text classes="pt-5" text=" Upcoming...">
          </Text>
          <div className="pt-5 lg:pt-7 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PageContent.upcoming_projects.map((value) => {
              const [[name, content]] = Object.entries(value);
              return <div className="flex flex-col bg-white border shadow-sm rounded-md p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <p className="text-sm font-medium uppercase text-fuchsia-500 dark:text-fuchsia-500">
                  {content.date}
                </p>
                <Text classes="mt-1 font-bold" sizeSm="md" sizeMd="xl" contrastLevel={1} text={name}></Text>
                <Text classes="mt-2" sizeMd="base" text={content.description}></Text>
              </div>
            })}

          </div>
        </div>
      </body>
    </HomeLayout >
  )
}

export default ProjectPage

export const Head = () => <title>Projects</title>