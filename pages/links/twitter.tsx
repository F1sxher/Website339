const RedirectURL = () => {
    return null;
   }

export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, { location: "https://twitter.com/kilroyrobotics" } );
    res.end();

    return {}
}

export default RedirectURL;