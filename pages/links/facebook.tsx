function Link() {
    return;
  }
  
  export const getServerSideProps = async (context) => {
    const { res } = context;
    res.writeHead(301, {
      location:
        "https://facebook.com/kilroyrobotics",
    });
    return res;
  };
  
  export default Link;
  