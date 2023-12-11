import React from "react";

type Props = {
  name?: string;
};

const Hello: React.FC<Props> = ({ name }) => {
  return <h1 className="Hello">Hello {name || "World"}</h1>;
};

export default Hello;
