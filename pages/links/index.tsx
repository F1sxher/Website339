const RedirectURL = () => {
    return null;
   }

export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, { location: "/" } );
    res.end();

    return {}
}

export default RedirectURL;