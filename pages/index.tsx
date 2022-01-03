import type { NextPage } from "next";
import Image from "next/image"
import path from "path"
import fs from "fs"
import scrollId from "../scripts/scroll-id";


const Home: NextPage | any = (pageProps) => {
  return (
    <div className="justify-center h-[200vh] bg-gray-300">
      <div>
        <div className="w-screen h-screen bg-thumbnail-img bg-top bg-no-repeat bg-cover z-1">
          <div className="w-screen h-screen z-2 left-0 shadow-lg backdrop-blur-[2px]">
            <div className="text-center element-clear">
              <h1 className="text-4xl tracking-tight font-bold text-gray-300 sm:text-5xl md:text-6xl text-stroke">
                <span className="block xl:inline font-bold sm:text-1x1"> Who{"'"}s here? </span>
                <span className="block text-orange-600 xl:inline font-extrabold"> Kilroy </span>
                <span className="block xl:inline"> is here! </span>
              </h1>
              <br />
              <h2 className="text-3xl tracking-tight font-bold text-gray-300 sm:text-4xl md:text-5xl text-stroke">
                <span className="block xl:inline text-orange-600 font-bold sm:text-1x1"> Kilroy Robotics </span>
                <span className="block xl:inline"> Team </span>
                <span className="block text-orange-600 xl:inline font-extrabold"> 339 </span>
              </h2>
              <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8 p-64">
                <div className="rounded-md shadow">
                  <a className="w-full flex items-center justify-center py-3 px-5 md:py-4 md:px-10 md:text-large border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-600 to-yellow-700 hover:bg-yellow-700 hover:cursor-pointer" onClick={() => {scrollId("main")}}> Learn More </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center" id="main">
        <h3 className="font-bold text-5xl p-5">{pageProps.texts.mainHeader}</h3>
        <span className="text-2xl p-5">
          {pageProps.texts.description}
        </span>
      </div>
      <br />
      <div className="relative text-center" id="sponsors">
        <h3 className="font-bold text-5xl p-5">{pageProps.texts.sponsorsHeader}</h3>
        <div className="grid grid-rows-1 grid-flow-col gap-10 overflow-x-hidden justify-center">
          {pageProps.sponsors.map((item) => (
            <a key={item.name} href={item.url} className={item.styles}>
              <span>{" "}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const filenamesText = fs.readdirSync("./public/text")
  const foldersSponsors = fs.readdirSync("./public/sponsors")

  const texts = {}
  const sponsors = []

  filenamesText.map(filename => {
    const filePath = path.join("./public/text", filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    texts[`${filename.split(".")[0]}`] = fileContents
    return;
  })

  foldersSponsors.map(folder => {
    const folderPath = path.join("./public/sponsors/", folder)
    const folderItems = fs.readdirSync(folderPath)

    let sponsor = {
      name: folder.split("_").join(" "),
      url: "/#",
      image: `/sponsors/${folder}/logo.png`,
      styles: `p-4 rounded-lg shadow-xl min-w-[25vw] max-w-[25vw] min-h-[25vh] max-h-[25vh] bg-gray-200 bg-norepeat bg-cover bg-[url('/sponsors/${folder}/logo.png')]`
    }
    
    folderItems.map(item => {
      if (item === "url.txt") {
        const filePath = path.join("./public/sponsors/", folder, "/", item)
        const fileContents = fs.readFileSync(filePath, 'utf8')

        sponsor.url = fileContents
      }
    })

    sponsors.push(sponsor)
    return;
  })
  
  return {
    props: {
      texts,
      sponsors,
    },
  }
}

export default Home;
