import React from "react"
import HomeLayout from "../components/layout/home-layout"
import PageContent from '../content/skills.yml'
import parse from 'html-react-parser';
import Text from "../components/ui/text"
import Header from "../components/ui/header"
import Svg from "../components/ui/svg"
import SvgListed from "../components/ui/svgs";

const SkillsPage = () => {

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
          <Header classes="pt-12 lg:pt-0" text="Professional Certificates" >
          </Header>
          <div className="mt-5 flex flex-col space-y-4 text-gray-700 dark:text-gray-300 ">
            {PageContent.certificates.map((value) => {
              return <Text svgFill={value.svg.fill} contrastLevel={2} svgSizeSm={value.svg.sizeSm} svgSizeMd={value.svg.sizeMd} svgViewBox={value.svg.viewbox} text={value.text} link={value.link}>
                {parse(value.svg.path)}
              </Text>
            })}
          </div>
          <div className="pt-12 lg:pt-24 pb-10">
            <Header text="Skills" >
            </Header>
            <div className="mt-2 flex items-center gap-x-1 md:gap-x-2">
              {PageContent.skillicons.map((value) => {
                return <SvgListed svgName={value.svgName} svgSizeSm={value.sizeSm} svgSizeMd={value.sizeMd} redirect={value.redirect}>
                </SvgListed>
              })}

            </div>
            <ul className="list-none list-inside mt-5 space-y-3 text-gray-700 dark:text-gray-400">
              {PageContent.developerskills.map((value) => {
                return <li className="flex items-center">
                  <Svg svgViewBox="0 0 24 24" svgFill="none" svgStroke="currentColor" >
                    <path d="M16 11L15.5 19M16 11C16 6.5 14.5 4 11.9999 2C9.5 4 8 6.5 8 11M16 11L18 12.5C19.259 13.4443 20 14.9262 20 16.5V19.4612C20 20.1849 19.2551 20.669 18.5939 20.375L15.5 19M8 11L8.5 19M8 11L6 12.5C4.74097 13.4443 4 14.9262 4 16.5V19.4612C4 20.1849 4.74485 20.669 5.40614 20.375L8.5 19M8.5 19H15.5M12 9V11" stroke-width="2"></path>
                  </Svg>
                  <Text sizeMd="lg" classes="ml-2" text={value} contrastLevel={2} >
                  </Text>
                </li>
              })}
            </ul>
            <ul className="mt-10 list-none list-inside space-y-3 text-gray-700 dark:text-gray-400">
              {PageContent.devopsskills.map((value) => {
                return <li className="flex items-center">
                  <Svg svgViewBox="0 0 24 24" svgFill="currentColor" svgStroke="currentColor" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6291 2.92377L1.6359 9.03126C1.27381 9.23242 1.14336 9.68902 1.34452 10.0511C1.54569 10.4132 2.00229 10.5436 2.36438 10.3425L11.0499 5.5171C10.5132 7.32327 10.8481 9.33324 12.0545 10.8851L4.46981 18.4697C4.17691 18.7626 4.17691 19.2374 4.4698 19.5303C4.7627 19.8232 5.23757 19.8232 5.53046 19.5303L13.1152 11.9457C14.667 13.152 16.6769 13.4868 18.4831 12.9502L13.6577 21.6358C13.4566 21.9979 13.587 22.4545 13.9491 22.6556C14.3112 22.8568 14.7678 22.7263 14.969 22.3642L21.0764 11.3709C23.3331 9.03243 23.3078 5.30714 21.0004 2.99975C18.693 0.692357 14.9677 0.667032 12.6291 2.92377ZM20.2732 10.0152C21.6788 8.25856 21.5676 5.6883 19.9397 4.06041C18.3118 2.43252 15.7415 2.32135 13.9849 3.72687C14.0696 3.89872 14.1859 4.11732 14.3409 4.37566C14.772 5.09432 15.504 6.12295 16.6907 7.30957C17.8773 8.49619 18.9059 9.22816 19.6245 9.65927C19.8828 9.81424 20.1014 9.93051 20.2732 10.0152ZM19.0646 11.0697C18.9966 11.0307 18.9259 10.9894 18.8529 10.9456C18.1501 10.524 17.2231 9.87143 16.1698 8.89115L14.1871 10.8738C15.6345 11.9031 17.557 11.9684 19.0646 11.0697ZM13.1264 9.81314C12.097 8.36572 12.0316 6.44317 12.9304 4.93544C12.9694 5.00355 13.0107 5.07423 13.0546 5.14735C13.4762 5.85016 14.1288 6.77721 15.1091 7.8305L13.1264 9.81314Z" ></path>
                  </Svg>
                  <Text sizeMd="lg" classes="ml-2" text={value} contrastLevel={2} >
                  </Text>
                </li>
              })}
            </ul>

          </div>
        </div>
      </body>
    </HomeLayout >
  )
}

export default SkillsPage

export const Head = () => <title>Algebananazzzzz</title>