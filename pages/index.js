import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [result, setResult] = useState([]);
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState("Male");
  const [lifestyle, setLifestyle] = useState("");
  const [profession, setProfession] = useState("");
  const [food, setFood] = useState("veg");
  const [aim, setAim] = useState("");
  const ans = "";
  const input = {
    background: "green"
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age,
        gender: gender,
        lifestyle: lifestyle,
        aim: aim,
        profession: profession,
        food: food,
      }),
    });
    const data = await response.json();
    setResult(data.result);
    // setResult(pre=>pre.split(/\r?\n/));
    console.log(data.result);
    console.log(result);
    console.log(gender, lifestyle, profession, aim, food);
  }

  function ConditionalRendering() {
    return <div>{result}</div>;
    result.forEach(function (item) {
      if (item === "") return <br />;
      else return <span>item</span>;
    });
  }

  return (
    <div>
      <Head>
        <title>Diet Plan </title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <body style={{ margin: "0", padding: "0" }}>
        <div className={styles.body}>
          <main className={styles.main}>
            {/* <img src="/dog.png" className={styles.icon} /> */}
            <h3 style={{ fontSize: "30px", color: "whitesmoke" }}>
              Get Your Diet Plan!!
            </h3>

            <form onSubmit={onSubmit}>
              <div className={styles.usual}>
                <span>What's your Age</span>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter Your Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                    
                />
              </div>
              <div className={styles.usual}>
                <div>What is your gender?</div>
                  <div style={{ display: "flex" }}>
                <div
                  style={{
                    // border: "2px solid green",
                    padding: "10px 5px",
                    margin: "5px",
                    borderRadius: "5px",
                    background:"#379fc1",
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      onClick={(e) =>{return setFood(e.target.value)}}
                    />

                    <label htmlFor="male" style={{cursor:"pointer"}} >Male</label>
                  </div>
                
                <div
                  style={{
                    padding: "10px 5px",
                    margin: "5px",
                    borderRadius: "5px",
                    background:"#f95773",
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    onClick={(e) => setFood(e.target.value)}
                  />
                  <label htmlFor="female"  style={{cursor:"pointer"}}>Female</label>
                </div>
                </div>
              </div>
              <div className={styles.usual}>
                <span>Select your preference</span>

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      padding: "10px 5px",
                      margin: "5px",
                      borderRadius: "5px",
                      background:"green",
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      id="veg"
                      name="food"
                      value="Veg"
                      onClick={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="veg" style={{cursor:"pointer"}}>Veg</label>
                  </div>
                  <div
                    style={{
                      padding: "10px 5px",
                    margin: "5px",
                    borderRadius: "5px",
                    background:"red",
                    
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      id="nonVeg"
                      name="food"
                      value="NonVeg"
                      onClick={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="nonVeg" style={{cursor:"pointer"}}>NonVeg</label>
                  </div>
                </div>
              </div>
              <div className={styles.usual}>
                <span>How do you describe your lifestyle?</span>
                <input
                  type="text"
                  name="lifestyle"
                  value={lifestyle}
                  onChange={(e) => setLifestyle(e.target.value)}
                  placeholder="eg. Physical work intensive"
                />
              </div>
              <div className={styles.usual}>
                <span>What is your profession?</span>
                <input
                  type="text"
                  placeholder="Enter your profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>
              <div className={styles.usual}>
                <div>What are you aiming for?</div>
                <input
                  type="text"
                  placeholder="eg. Build muscles"
                  value={aim}
                  name="aim"
                  onChange={(e) => setAim(e.target.value)}
                />
              </div>
              <input type="submit" value="Generate Diet Plan" id="submit" />
            </form>
          </main>
          <div className={styles.result}>{result}</div>
        </div>
      </body>
    </div>
  );
}
