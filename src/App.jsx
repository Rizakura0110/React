import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontsize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんちには</h1>
      <p style={contentStyle}>ああああ</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
