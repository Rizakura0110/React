import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さししょ");
  const [num, setNum] = useState(0);
  const [stringShowFlag, setStringShowFlag] = useState(true);

  const onCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setStringShowFlag(!stringShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      stringShowFlag || setStringShowFlag(true);
    } else {
      stringShowFlag && setStringShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんちには</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {stringShowFlag && <p>sssssß</p>}
    </>
  );
};

export default App;
