import {React, Component} from "../CONST";

class classComponent extends Component {
  render() {
    return <div>
    <div className="class border">{this.props.name}</div></div>;
  }
}

function FunctionComponent({name}) {
  return (
    <div className="function border">
      {name}
      <button onClick={() => console.log("omg")}>click</button>
    </div>
  );
}

class ParentComponent extends Component {
  state = {
    count: 0
  };
  render() {
    return <div><div className="box border">
    <p>开课吧{this.state.count}</p>
    <div onClick={() => {
      this.setState({
        count: 1
      });
      this.setState({
        count: 3
      });
    }}>123456</div>
    {/* <a href="https://kaikeba.com/">开课吧</a>
    <FunctionComponent name="函数组件" />
    <classComponent name="class组件" /> */}

    {/* <>
      <h1>文本1</h1>
      <h2>文本2</h2>
    </> */}

    {/* // {[1, 2, 3].map(item => (
    //   <div key={item}>文本{item}</div>
    //   // <React.Fragment key={item}>
    //   //   <h1>文本1</h1>
    //   //   <h2>文本2</h2>
    //   // </React.Fragment>
    // ))} */}
  </div></div>;
  }
}

export default ParentComponent;
