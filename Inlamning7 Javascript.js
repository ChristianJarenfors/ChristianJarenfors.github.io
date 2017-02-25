let url="http://forverkliga.se/JavaScript/api/simple.php?world=whatever";
let jsonholder;

class Filterinput extends React.Component{
    render(){
        return <input type="text" onChange={this.props.filterChange} />
    }
}
class TableData extends React.Component{
    render(){
//        alert(this.props.expected + this.props.choosenId)
        let print;
        if(this.props.choosenId==this.props.expected){
            print= <span><input type="text" onChange={this.props.changeHandeler.bind(this,this.props.index,this.props.type)} value={this.props.thevalue} /></span>;
        }else{
            print=<span>{this.props.thevalue}</span>;
        }
        return <span>{print}</span>;
    }
}
//this.changeHandeler.bind(this);
// <td onClick={this.handleClick.bind(this,{index},"name")} className="TableData"><TableData expected={"name"+index} choosenId={this.props.choosenId} thevalue={x.name} /></td>
//<td onClick={this.handleClick.bind(this,{index},{x},"name")} className="TableData">{x.name} </td>
//<td onClick={this.handleClick.bind(this,{index},{x},"cont")} className="TableData">{x.continent}</td>
//<td onClick={this.handleClick.bind(this,{index},{x},"popu")} className="TableData">{x.population} </td>

/*let lista = this.state.data.filter((x)=>
                            (x.continent.toLowerCase()==this.state.filterString.toLowerCase()||x.name.toLowerCase()==this.state.filterString.toLowerCase()))
                                .map((x,index)=>
                                    (<tr key={index} className="TableData" >
                                       <td className="TableData">{x.name}</td>
                                       <td className="TableData">{x.continent}</td>
                                       <td className="TableData">{x.population}</td>
                                       </tr>));*/
class TableDataRow extends React.Component{
    constructor(props){
        super(props);
        //this.handleClick=this.handleClick.bind(this,index);
    }
    handleClick(index,value,type,event){
        //console.log(value.x.name + type);
//        let data ="";
//        let thevalue="";
//        if(type=="name")
//            data=value.x.name;
//            if(type="cont")
//                data=value.x.continent;
//                if(type="popu")
//                    data=value.x.population;
//        for(let i=0;i<data.length;i++){
//            if(data[i]==' '){
//                thevalue+= " + "
//            }else{
//                thevalue+= data[i];
//            }
//        }
//        event.target.innerHTML="<input type='text' value="+ thevalue + "/>";
        
        
        //console.log("index innan seleted changeindex "+index.index);
        let idChooser=type+index.index;
        this.props.selectedChangeIndex(index,idChooser);
        
    }
    render(){
        let key=0;
        
        let lista = this.props.dataobject.filter((x)=>
                            (x.continent.toLowerCase().includes(this.props.filterString.toLowerCase())||x.name.toLowerCase().includes(this.props.filterString.toLowerCase())||this.props.filterString==""))
                                .map((x,index)=>
                                     (<tr key={index}  className="TableData" >
                                       
                                     <td onClick={this.handleClick.bind(this,{index},{x},"name")} className="TableData"><TableData changeHandeler={this.props.changeHandeler} index={index} type="name" expected={"name"+index} choosenId={this.props.choosenId} thevalue={x.name} /></td>
                                     <td onClick={this.handleClick.bind(this,{index},{x},"continent")} className="TableData"><TableData changeHandeler={this.props.changeHandeler} index={index} type="continent" expected={"continent"+index} choosenId={this.props.choosenId} thevalue={x.continent} /></td>
                                     <td onClick={this.handleClick.bind(this,{index},{x},"population")} className="TableData"><TableData changeHandeler={this.props.changeHandeler} index={index} type="population" expected={"population"+index} choosenId={this.props.choosenId} thevalue={x.population} /></td>
                                     
                                     
                                              
                                        <td><button className={'btn btn-danger ' + (this.props.selectedCountryIndex === index ? '' : 'hidden')}
                                        onClick={this.props.deleteClick}>
                                        Delete</button></td>
                                       </tr>));
                                        
                                    console.log(lista);
        return <tbody>{lista}</tbody>;
     }
}
                                        
class TableJSON extends React.Component{
    constructor(props){
        super(props);
        this.state={data:"undefined",filterString:"",choosenId:"inte suttits",selectedCountryIndex:null};
        this.functionDelete=this.functionDelete.bind(this);
        this.selectedChangeIndex = this.selectedChangeIndex.bind(this);
        this.filterChange=this.filterChange.bind(this);
        this.changeHandeler=this.changeHandeler.bind(this);
    }
componentDidMount(){
    this.loadData();
    
}
loadData(){
        let classthis=this;
        console.log("mounting");
        
        fetch(url)
        .then(function(response){
        return response.json();
        })
        .then(function(json){
            
            classthis.setState({data: json});
            
        });
    }
    filterChange(event){
        this.setState({filterString:event.target.value})
    }
    selectedChangeIndex(index,id){
        this.setState({selectedCountryIndex:index.index,choosenId:id});
    }
    changeHandeler(index,type,event){
       // alert(this.state.data[index].name);
        let countries= this.state.data;
        if(type=="name"){
        countries[index].name = event.target.value;
       
        }else if (type=="continent"){
            countries[index].continent=event.target.value;
           
        }else if (type=="population"){
            countries[index].population=event.target.value;
           
        }
            
            
            this.setState({data:countries});

    }
    functionDelete(){
        let countries = this.state.data;
      countries.splice(this.state.selectedCountryIndex, 1);
      this.setState({
          
          selectedCountryIndex: null,data: countries,choosenId:""
      });
    }
    render(){
        console.log("Data " + this.state.data);
        if(this.state.data=="undefined"){
            return <h1><strong>LADDAR...</strong></h1>;
        }
        else{
        //console.log("BOOM1");
        let tablehead =  <tr>
                            <th className="TableHead">Country</th>
                            <th className="TableHead">Continent</th>
                            <th className="TableHead">Population</th>
                            
                        </tr>;
        let key =0;
        //console.log("BOOM2" + this.state.data + jsonholder);
        let tablebody = <TableDataRow dataobject={this.state.data} choosenId={this.state.choosenId} filterString={this.state.filterString} selectedCountryIndex={this.state.selectedCountryIndex} changeHandeler={this.changeHandeler} deleteClick={this.functionDelete} selectedChangeIndex={this.selectedChangeIndex}/>;
        //console.log("BOOM3");
            
        //console.log(tablehead);
        //console.log(tablebody);
        return <div><h2>Filtrera tabellen</h2><Filterinput filterChange={this.filterChange} /><table className="table-bordered table-hover">
            <thead>
            {tablehead} 
            </thead>
            
            {tablebody}
        
            </table><p>Antal element i tabellen: {this.state.data.length}</p></div>;
        }
    }
}

ReactDOM.render(
  <TableJSON/>,
                                    document.getElementById("PrintDiv")
);