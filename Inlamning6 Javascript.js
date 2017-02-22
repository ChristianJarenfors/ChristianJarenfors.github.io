
let viewer = document.getElementById("PrintDiv");
let inp1;
let inp2;
let signs;



class Inputfield extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <input id={this.props.id} key={this.props.id} onChange={this.props.handleChange} type="text" />;
    }
}





class SignHolder extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return <span>
            <select onChange={this.props.changeSign} >
                <option value="+"  id="+"> + </option>
                <option value="-"  id="-"> - </option>
                <option value="*"  id="*"> * </option>
                <option value="/"  id="/"> / </option>
            </select>
                </span>;
    }
}



class Kalkylator extends React.Component{
    constructor(props){
        super(props);
        this.state={thesign:"+",inpt1:0,inpt2:0,resultt:"noll",message:""};
      this.Counting=this.Counting.bind(this);
        this.changeSign=this.changeSign.bind(this);
        this.handleChange=this.handleChange.bind(this);

        signs = <SignHolder changeSign={this.changeSign}  />;
        inp1 = <Inputfield id="1" handleChange={this.handleChange} />;
        inp2 = <Inputfield id="2" handleChange={this.handleChange} />;

    }
    changeSign(event){
    let _sign = event.target.value;
    console.log(_sign + "Changesign");
//        let id = e.target.id;
        let test = this.Counting(event);
        console.log("värde " + test);
    this.setState({thesign:event.target.value,resultt:test,message:this.checkResult(test)});
        
    
    }
          
    Counting(event2){
        console.log("Inne i Counting " + event2);
        console.log("Counting"+ this.state.inpt1+this.state.thesign+this.state.inpt2);
        let tal1=this.state.inpt1;
        let tal2=this.state.inpt2;
        let currentsign=this.state.thesign;
        let svar;
        if(event2.target.id==="1"){
            tal1=event2.target.value;
            tal2=this.state.inpt2;
            currentsign=this.state.thesign;
            console.log("Setting " + tal1 + currentsign + tal2);
        }else if(event2.target.id==="2"){
            tal2=event2.target.value;
            tal1=this.state.inpt1;
            currentsign=this.state.thesign;
            console.log("Setting " + tal1 + currentsign + tal2);
        }else{
            tal1=this.state.inpt1;
            tal2=this.state.inpt2;
            currentsign=event2.target.value;
            console.log("Setting " + tal1 + currentsign + tal2);
        }
        if(currentsign=="+")
        svar= (tal1-0) + (tal2-0);
        if(currentsign=="-")
        svar=  (tal1-0) - (tal2-0);
        if(currentsign=="*")
        svar=  (tal1-0) * (tal2-0);
        if(currentsign=="/")
        svar=  (tal1-0) / (tal2-0);
        
        return svar;
    }
    handleChange(event){
        let id = event.target.id;
        console.log(`Handlechange, event=${event}, id=${event.target.id}`);
    if(event.target.id==="1")
    this.setState({inpt1:event.target.value,resultt:this.Counting(event),message:this.checkResult(this.Counting(event))});
    if(event.target.id==="2")
    this.setState({inpt2:event.target.value,resultt:this.Counting(event),message:this.checkResult(this.Counting(event))});
    
        console.log("Result "+this.state.resultt);
        this.checkResult();
    }
    checkResult(thedata){
        if(isNaN(thedata))
            return "Wrong input!!";
        else    
            return "";
    }
    render(){
//        
        return <span><p> {inp1} {signs} {inp2} = {this.state.resultt}</p>
                <p>{this.state.message}</p>
                </span>;
    }
}
let Calc = <Kalkylator />
ReactDOM.render(
    Calc
    ,
viewer);