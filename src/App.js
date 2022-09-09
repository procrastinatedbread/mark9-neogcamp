import "./styles.css";
import { useState } from "react";

var genreList = {
  javascript: [
    "4/5 Eloquent JavaScript",
    "3.5/5 You don't know JS",
    "3/5 A Smarter Way to Learn JavaScript",
    "4/5 JavaScript: The Good Parts ",
    "3.5/5 JavaScript: The Definitive Guide "
  ],
  fiction: [
    "5/5 Shiva Trilogy",
    "4/5 Harry Potter and the Socerer's Stone",
    "5/5 Game of thrones",
    "5/5 House of the dragon",
    "5/5 Sherlock"
  ],
  business: [
    "3.5/5 Never split the difference",
    "5/5 Loonshots",
    "4/5 The Intelligent Investor",
    "5/5 Shoe Dog: A Memoir by the Creator of Nike",
    "5/5 Rich Dad, Poor Dad"
  ]
};

export default function App() {
  var [bookList, setBookState] = useState("");

  var arrBookList = []; // new array declared to store food list

  //this makes a new array to traverse with map
  for (var i = 0; i < bookList.length; i++) {
    arrBookList[i] = bookList[i];
  }

  function buttonClickHandler(state) {
    var userClick = state.target.value;
    var foodList = genreList[userClick];
    setBookState(foodList);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <h2>Checkout my favourite books. Select a genre to get started.</h2>
      <button onClick={buttonClickHandler} value="javascript">
        JavaScript
      </button>
      <button onClick={buttonClickHandler} value="fiction">
        Fiction
      </button>
      <button onClick={buttonClickHandler} value="business">
        Business
      </button>

      <hr className="style-two" />
      <div>
        {arrBookList.map((book) => {
          return <p key={book}>{book}</p>;
        })}
      </div>
    </div>
  );
}
