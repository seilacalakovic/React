import { useCallback, useMemo } from "react";
import Article from "./Article";

const Cart = (props) => {
  const articles = props.articles;

  let total = useMemo(() => {
    
    let total = 0;

    articles.forEach((article) => {
      console.log("CALCULATING TOTAL OF ARTICLES");
      total += article.price;
    });

    return total;
  }, [articles]);

  const myF = (a, b) => {
    return a + b;
  };

  const memoizedCallback = useCallback(() => {
    console.log("IZVRSILA SE");
    return 5;
  }, []);



    let total = 0;

    articles.forEach((article) => {
      console.log("CALCULATING TOTAL OF ARTICLES");
      total += article.price;
    });


    
  return (
    <div
      style={{
        width: "100%",
        minHeight: "70vh",
        background: "red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {articles.map((article, index) => {
        return <Article article={article} key={index} />;
      })}
      <h1>total:{total}</h1>
    </div>
  );
};

export default Cart;