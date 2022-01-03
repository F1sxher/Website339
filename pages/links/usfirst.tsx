function Link() {
    return;
  }
  
  export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, {
      location:
        "https://firstinspires.org",
    });
    return;
  };
  
  export default Link;
  