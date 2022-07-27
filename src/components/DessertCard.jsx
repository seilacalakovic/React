const DessertCard = ({ des }) => {
  return (
    <div style={{ border: "1px solid black", margin: "30px" }} key={des.uid}>
      <h1>{des.id}</h1>
      <h1>{des.flavor}</h1>
      <h1>{des.topping}</h1>
    </div>
  );
};

export default DessertCard;