const RedirectURL = () => {
    return null;
   }

export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, { location: "https://thebluealliance.com/team/339" } );
    res.end();

    return {}
}

export default RedirectURL;