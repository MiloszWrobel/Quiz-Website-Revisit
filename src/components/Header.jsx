import image from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={image}></img>
        <h1>Quiz App</h1>
      </header>
    </>
  );
}
