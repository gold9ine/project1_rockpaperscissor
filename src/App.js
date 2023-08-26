import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box.js";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock: {name: "Rock", img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"},
  scissor: {name: "Scissor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8eqc0quV_Y-M4jUoqtt1D1kOZCS7znnoCRWFzF1dtn8GVkhhxYNlhjHWbIyXKl7YK8o"},
  paper: {name: "Paper", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvPs_7JF_5AGQNf1UsDt-A3i_Y-GHRQ2HLw"}
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }
  const judgement = (user, computer) => {
    // console.log("user : ", user);
    // console.log("computer : ", computer);

    if (user.name == computer.name) {
      return "tie";
    } else if(user.name == "Rock") {
      return computer.name == "Scissor" ? "win" : "lose";
    } else if (user.name ==  "Scissor") {
      return computer.name == "Paper" ? "win" : "lose";
    } else if (user.name == "Paper") {
      return computer.name =="Rock" ? "win" : "lose";
    };
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 Array로 만들어주는 함수 
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("randomItem : ", randomItem);
    // console.log("itemArray.length : ", itemArray.length);
    let final = itemArray[randomItem];
    // console.log("final :", final);
    return choice[final];
  }

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
