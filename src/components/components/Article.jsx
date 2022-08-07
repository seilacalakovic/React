const Article = (props) => {
    return (
      <div
        style={{
          width: "70%",
          height: "100px",
          background: "red",
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <h2>{props.article.name}</h2>
        <h2>{props.article.price}</h2>
      </div>
    );
  };
  
  export default Article;