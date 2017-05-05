'use strict'
import React from 'react';
import './Home.css';

export class Home extends React.Component{
    state={
        text:"aaaaa",
        btnText:"确定",

        data:[
            {name:"杭州",id:"001"},
            {name:"杭州",id:"002"},
            {name:"杭州",id:"003"},
            {name:"杭州",id:"004"},
            {name:"杭州",id:"005"}
        ]
    }
    static defaultProps={
        text2 :"bbbb",
    }
    constructor(props){
        super(props);
        this.name="hello";
        console.log("constructor...");
    }
    componentDidMount(){
        console.log("componentDidMount...");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount...");

    }
    componentWillMount(){
        console.log("componentWillMount...");
        // this.GetData();
    }
    componentDidUpdate(){
        console.log("componentDidUpdate...");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate...");

        return true;
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        console.log("componentWillReceiveProps...");
    }

    onClickOk = (i) =>{
        console.log(i);
        console.log("ok");
        if(this.state.btnText == "确定"){
          this.setState({btnText:"取消"});
        }
        if(this.state.btnText == "取消"){
          this.setState({btnText:"确定"});
        }

    }
    onclickCity(id){
        console.log(id);
    }


    render(){
        console.log("render...");
        var a ="111";
        var divStyle={
            color:"red",
            fontSize:"20px"
        }
        return(
            // var i = 1;
            <div>
                <div className="info">{this.state.text}</div>
                <div>{this.props.text2}</div>
                <div>{this.name}333</div>
                <div>{this.props.name}</div>
                <button onClick={this.onClickOk.bind(this,10)}>{this.state.btnText}</button>

                {this.state.data.map((value,index)=>{
                    return <div key={index} onClick={this.onclickCity.bind(this,index)}>{value.name}</div>
                })}

                <div>
                    {(()=>{
                        if(this.state.id == 1){
                            return <span>333</span>
                        }else {
                            return <span>222</span>
                        }
                    })()}

                </div>

            </div>
        )
    }
}

export class Home2 extends React.Component{
  state = {
      names:"jquery",
    people:[
      {id:"1",name:"lily"},
      {id:"2",name:"lucy"},
      {id:"2",name:"job"}
    ],
    animal:[
      {id:"1",name:"rabbit"},
      {id:"2",name:"pig"},
      {id:"3",name:"cat"},
      {id:"4",name:"bear"}
    ]

  }
  onClickPerson(id){
      console.log(id);
  }
  render(){
      return(
          <div>
              <h1>{this.state.names}</h1>
              {this.state.people.map((v,k)=>{
                return <h2 key={k} onClick={this.onClickPerson.bind(this,k)}>{v.name}</h2>
              })}

              {this.state.animal.map((v,k)=>{
                return <p key={k} onClick={this.onClickPerson.bind(this,k)}>{v.name}</p>
              })}
          </div>
          // <div>
          //     {this.animalobject.animal.map((v,k)=>{
          //       return <p key={k}>{v.name}</p>
          //     })}
          // </div>
      )
  }
}
