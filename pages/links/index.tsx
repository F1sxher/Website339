function Link() {
  return;
}

export const getServerSideProps = async (context) => {
  const { res } = context;
  res.writeHead(301, {
    location:
      "/",
  });
  return;
};

export default Link;
