const RedirectURL = () => {
    return null;
   }

export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, { location: "https://github.com/FIRST-TEAM-339" } );
    res.end();

    return {}
}

export default RedirectURL;