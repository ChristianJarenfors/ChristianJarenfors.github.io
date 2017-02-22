let view = document.getElementById("PrintList");
const list = [{svenska:"Kvinna",english:"Woman"},
              {svenska:"Hund",english:"Dog"},
              {svenska:"Kanin",english:"Rabbit"},
              {svenska:"Bil",english:"Car"},
              {svenska:"Lägenhet",english:"Appartment"},
              {svenska:"Lärare",english:"Teacher"},
              {svenska:"Mat",english:"Food"},
              {svenska:"Träning",english:"Exercise"},
              {svenska:"Hälsa",english:"Health"},
              {svenska:"Spel",english:"Game"},];


                       class Rendera extends React.Component{
                       
                       render(){
                           let key =0;
                           let newList = list.map((x) => <li key={key++}>Svenska:{x.svenska}  Engelska:{x.english}</li>);
                        return <ol>{newList}</ol>;
}
                       }
                       ReactDOM.render(
                       <Rendera />,
                       view);