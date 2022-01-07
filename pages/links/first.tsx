const RedirectURL = () => {
    return null;
   }

export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, { location: "https://firstinspires.org" } );
    res.end();

    return {}
}

export default RedirectURL;