import React from "react";
interface PropsType {
  title: string;
  children: React.ReactChild | React.ReactNode;
}

class Section extends React.Component<PropsType> {
  render() {
    return (
      <div className="section">
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
export default Section;
