function Error({ statusCode }) {
  // handle 500 error
  return (
    <div
      className="error-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="notice-icon"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30px",
          height: "30px",
          backgroundColor: "tomato",
          borderRadius: "50%",
          marginRight: "1rem",
          color: "#fff",
          fontWeight: "600",
          fontSize: "30px",
          padding: "1rem",
        }}
      >
        !
      </div>
      <div
        className="notice-errormsg"
        style={{ fontSize: "30px", fontWeight: "600" }}
      >
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
