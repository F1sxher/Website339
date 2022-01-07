function Link() {
  return;
}

export const getServerSideProps = async (context) => {
  const { res } = context;
  res.writeHead(301, {
    location:
      "https://www.thebluealliance.com/team/339",
  });
  return res;
};

export default Link;
