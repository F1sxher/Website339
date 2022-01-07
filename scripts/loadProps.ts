import path from "path"
import fs from "fs"
import { getSortedPostsData } from "./posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function() {
  const allPostsData = getSortedPostsData();
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
      allPostsData
    },
  }
}