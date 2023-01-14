
COMMANDS 
1. npx create-next-app   => creare the project
2. install sanity clien and image url
3. canves conffett for canfity when order is there
4. react hot toast for notifcation
5. react icons for the icon in project
7. npm i --legacy-peer-deps  => will intall the package in the future when these depenceis become dataed

 8. npm install -g @sanity/cli => gets the command line working for sanity
 9. npm run dev  => starts the server

 sandity banner and product are used for CRUD functionality for the database, it more user firendly and funner to update

all can be found in the schema folder in the ecomerce folder of the next.js application

10. sanity manage
        going to use comaned line in sanity project use command will go to the 
        projecti in sanity get all the information for the lib/clien varables

11. server side props is what is used in fetch data in next, its the choice over useEffect, beacuse it si supperior.

        done after the closing bracket or perenthese of the main fucntion

                export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }

file routing allow us to be pass the need for react router.
each image has a slug, by using [] and the key in the object of there data, for the file in the pages in a folder called after whaty they are products I was able to make a quck pager for reach.


get statick is used to fetch specific data while server side obtains all the data


In the context folder I am going to put my hooks and mage the whole state compentesn throug project

NEXT  API folder allow for the using server side and local storage.
        this eleminates the use of express and node