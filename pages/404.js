// build타임에 정적 생성

export default function Error404() {
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
        404 ERROR!!
      </div>
    </div>
  );
}
