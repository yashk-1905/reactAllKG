import HealthyHeading from './components/HealthyHeading';
import HealthyList from './components/HealthyList';
import HealthyInput from './components/HealthyInput';
import Container from './components/Container';
import './App.css';



function App() {
  let textToshow = "Food items Entered by user"

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToshow = event.target.value;
    console.log(`text to show is: ${textToshow}`);
  } 

  /***
   * ab yahan par textToShow to handleOnChange me change ho raha hai 
   * to fir vo change niche ke para me jahan textToShow print ho raha hai vahan aa kyon nahi raha hai?
   * 
   * kyonki 
   * 
   * app ek function hai to jab vo har baar paint hota hai to textToShow ki value upar vali aa jati hai 
   * 
   * to ab baat aisi hai ki andar jo handleToChange ke hai vo value andar to badal rahi hai 
   * 
   * par niche jo return karaya hai vo ek baar hi paint ho raha hai har baar handleOnChange function ke chalne par 
   * 
   * nahi paint ho raha hai isliye niche ki value same hi hai vo change nahi ho rahi
   * 
   * or abhi niche vala ek hi baar paint ho rha hai to uski value store karke rakhne ke liye koi tarika humare paas iss level par nahi hai 
   * 
   * to iske liye hi ab aayega iss problem ko solve karne ke liye freedom dene ke liye state management 
   */


  let arr = ['Dal', 'chaanval', 'roti', 'paratha', 'Doodh'];
  return (
    <section className="healthy">
      <Container>
        <HealthyHeading></HealthyHeading>
        <HealthyInput handleOnChange = {handleOnChange}></HealthyInput>
        <p style={{ textAlign: "center" }}>{textToshow}</p>
        <HealthyList listItem={arr}></HealthyList>
      </Container>
    </section>
  );
}

export default App;
