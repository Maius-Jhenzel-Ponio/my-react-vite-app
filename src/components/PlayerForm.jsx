import "./PlayerForm.css";
import React, { useState } from "react";

const PlayerForm = () => {
    const [formData, setFormData] = useState({
        name:"", age:"", player:"", position:"", champion:"",
    });

const handleChange = (e) => {
    const{name,value } =e.target;
    setFormData({
        ...formData, [name]:value,
    });
}

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.player || !formData.position || !formData.champion){
        alert ("Please select to the choices, before submitting!");
        return;
    }

    try{
        const response = await fetch ("https://lolplayerform.azurewebsites.net/submit", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if(response.ok){
            const result = await response.json();
            alert("Form is submitted successfully");
            console.log("API Response: ", result)
            console.log("Form submission was successful!");

            setFormData({
                name:"",
                age:"",
                player:"select your answer",
                position:"select your answer",
                champion:"select your answer"
            });
        } else {
           alert("Failed to submit form. Please try again");
           console.error("API Error", response.statusText); 
        }
    } catch(error){
        alert("An error occured while submitting the form");
        console.error("error", error);
    }

};

return (
    <div className="information-container">
        <div className="player-information">
            <h1>Are you a League of Legends Player?</h1>
            <p>Fill out the details below, if you play the game!</p>
        <form onSubmit={handleSubmit}>

            {/*Name*/}
            <div className="information-field">
                <label htmlFor="name"> Name </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>

            {/*Age*/}
            <div className="information-field">
                <label htmlFor="age"> Age </label>
            <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                required
            />
            </div>

            {/*Player*/}
            <div className="information-field">
                <label htmlFor="player">Do you play League of Legends?</label>
            <select
                id="player"
                name="player"
                value={formData.player}
                onChange={handleChange}
                required
                >
                    <option value ="">
                        Enter your answer
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Just know the game">Just know the game</option>

            </select>
            </div>

            {/*Positions*/}
            <div className="information-field">
                <label htmlFor="position">What lane or position do you play?</label>
            <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                >
                    <option value ="">
                        Enter your answer
                    </option>
                    <option value="Doesn't Play">Doesn't Play</option>
                    <option value="Top Lane">Top Lane</option>
                    <option value="Jungle">Jungle</option>
                    <option value="Mid Lane">Mid Lane</option>
                    <option value="Support">Support</option>
                    <option value="Bot Lane / ADC">Bot Lane / ADC</option>
                    <option value="Flex Lane">Flex Lane</option>
            </select>
            </div> 

            {/*Champion*/}
            <div className="information-field">
                <label htmlFor="champion">Who is your main champion in the game?</label>
            <select
                id="champion"
                name="champion"
                value={formData.champion}
                onChange={handleChange}
                required
                >
                    <option value ="">
                        Enter your answer
                    </option>
                    <option>Doesn't know anyone</option>
                    <option value="Aatrox">Aatrox</option>
                    <option value="Ahri">Ahri</option>
                    <option value="Akali">Akali</option>
                    <option value="Akshan">Akshan</option>
                    <option value="Alistar">Alistar</option>
                    <option value="Ambessa">Ambessa</option>
                    <option value="Amumu">Amumu</option>
                    <option value="Anivia">Anivia</option>
                    <option value="Annie">Annie</option>
                    <option value="Aphelios">Aphelios</option>
                    <option value="Ashe">Ashe</option>
                    <option value="Aurelion Sol">Aurelion Sol</option>
                    <option value="Aurora">Aurora</option>
                    <option value="Azir">Azir</option>
                    <option value="Bard">Bard</option>
                    <option value="Bel'Veth">Bel'Veth</option>
                    <option value="Blitzcrank">Blitzcrank</option>
                    <option value="Brand">Brand</option>
                    <option value="Braum">Braum</option>
                    <option value="Briar">Briar</option>
                    <option value="Caitlyn">Caitlyn</option>
                    <option value="Camille">Camille</option>
                    <option value="Cassiopeia">Cassiopeia</option>
                    <option value="Cho'Gath">Cho'Gath</option>
                    <option value="Corki">Corki</option>
                    <option value="Darius">Darius</option>
                    <option value="Diana">Diana</option>
                    <option value="Dr. Mundo">Dr. Mundo</option>
                    <option value="Draven">Draven</option>
                    <option value="Ekko">Ekko</option>
                    <option value="Elise">Elise</option>
                    <option value="Evelynn">Evelynn</option>
                    <option value="Ezreal">Ezreal</option>
                    <option value="Fiddlesticks">Fiddlesticks</option>
                    <option value="Fiora">Fiora</option>
                    <option value="Fizz">Fizz</option>
                    <option value="Galio">Galio</option>
                    <option value="Gangplank">Gangplank</option>
                    <option value="Garen">Garen</option>
                    <option value="Gnar">Gnar</option>
                    <option value="Gragas">Gragas</option>
                    <option value="Graves">Graves</option>
                    <option value="Gwen">Gwen</option>
                    <option value="Hecarim">Hecarim</option>
                    <option value="Heimerdinger">Heimerdinger</option>
                    <option value="Hwei">Hwei</option>
                    <option value="Illaoi">Illaoi</option>
                    <option value="Irelia">Irelia</option>
                    <option value="Ivern">Ivern</option>
                    <option value="Janna">Janna</option>
                    <option value="Jarvan IV">Jarvan IV</option>
                    <option value="Jax">Jax</option>
                    <option value="Jayce">Jayce</option>
                    <option value="Jhin">Jhin</option>
                    <option value="Jinx">Jinx</option>
                    <option value="Kai'Sa">Kai'Sa</option>
                    <option value="Kalista">Kalista</option>
                    <option value="Karma">Karma</option>
                    <option value="Karthus">Karthus</option>
                    <option value="Kassadin">Kassadin</option>
                    <option value="Katarina">Katarina</option>
                    <option value="Kayle">Kayle</option>
                    <option value="Kayn">Kayn</option>
                    <option value="Kennen">Kennen</option>
                    <option value="Kha'Zix">Kha'Zix</option>
                    <option value="Kindred">Kindred</option>
                    <option value="Kled">Kled</option>
                    <option value="Kog'Maw">Kog'Maw</option>
                    <option value="LeBlanc">LeBlanc</option>
                    <option value="Lee Sin">Lee Sin</option>
                    <option value="Leona">Leona</option>
                    <option value="Lillia">Lillia</option>
                    <option value="Lissandra">Lissandra</option>
                    <option value="Lucian">Lucian</option>
                    <option value="Lulu">Lulu</option>
                    <option value="Lux">Lux</option>
                    <option value="Malphite">Malphite</option>
                    <option value="Malzahar">Malzahar</option>
                    <option value="Maokai">Maokai</option>
                    <option value="Master Yi">Master Yi</option>
                    <option value="Milio">Milio</option>
                    <option value="Mel">Mel</option>
                    <option value="Miss Fortune">Miss Fortune</option>
                    <option value="Mordekaiser">Mordekaiser</option>
                    <option value="Morgana">Morgana</option>
                    <option value="Naafiri">Naafiri</option>
                    <option value="Nami">Nami</option>
                    <option value="Nasus">Nasus</option>
                    <option value="Nautilus">Nautilus</option>
                    <option value="Neeko">Neeko</option>
                    <option value="Nidalee">Nidalee</option>
                    <option value="Nilah">Nilah</option>
                    <option value="Nocturne">Nocturne</option>
                    <option value="Nunu & Willump">Nunu & Willump</option>
                    <option value="Olaf">Olaf</option>
                    <option value="Orianna">Orianna</option>
                    <option value="Ornn">Ornn</option>
                    <option value="Pantheon">Pantheon</option>
                    <option value="Poppy">Poppy</option>
                    <option value="Pyke">Pyke</option>
                    <option value="Qiyana">Qiyana</option>
                    <option value="Quinn">Quinn</option>
                    <option value="Rakan">Rakan</option>
                    <option value="Rammus">Rammus</option>
                    <option value="Rek'Sai">Rek'Sai</option>
                    <option value="Rell">Rell</option>
                    <option value="Renata Glasc">Renata Glasc</option>
                    <option value="Renekton">Renekton</option>
                    <option value="Rengar">Rengar</option>
                    <option value="Riven">Riven</option>
                    <option value="Rumble">Rumble</option>
                    <option value="Ryze">Ryze</option>
                    <option value="Samira">Samira</option>
                    <option value="Sejuani">Sejuani</option>
                    <option value="Senna">Senna</option>
                    <option value="Seraphine">Seraphine</option>
                    <option value="Sett">Sett</option>
                    <option value="Shaco">Shaco</option>
                    <option value="Shen">Shen</option>
                    <option value="Shyvana">Shyvana</option>
                    <option value="Singed">Singed</option>
                    <option value="Sion">Sion</option>
                    <option value="Sivir">Sivir</option>
                    <option value="Skarner">Skarner</option>
                    <option value="Smolder">Smolder</option>
                    <option value="Sona">Sona</option>
                    <option value="Soraka">Soraka</option>
                    <option value="Swain">Swain</option>
                    <option value="Sylas">Sylas</option>
                    <option value="Syndra">Syndra</option>
                    <option value="Tahm Kench">Tahm Kench</option>
                    <option value="Taliyah">Taliyah</option>
                    <option value="Talon">Talon</option>
                    <option value="Taric">Taric</option>
                    <option value="Teemo">Teemo</option>
                    <option value="Thresh">Thresh</option>
                    <option value="Tristana">Tristana</option>
                    <option value="Trundle">Trundle</option>
                    <option value="Tryndamere">Tryndamere</option>
                    <option value="Twisted Fate">Twisted Fate</option>
                    <option value="Twitch">Twitch</option>
                    <option value="Udyr">Udyr</option>
                    <option value="Urgot">Urgot</option>
                    <option value="Varus">Varus</option>
                    <option value="Vayne">Vayne</option>
                    <option value="Veigar">Veigar</option>
                    <option value="Vel'Koz">Vel'Koz</option>
                    <option value="Vex">Vex</option>
                    <option value="Vi">Vi</option>
                    <option value="Viego">Viego</option>
                    <option value="Viktor">Viktor</option>
                    <option value="Vladimir">Vladimir</option>
                    <option value="Volibear">Volibear</option>
                    <option value="Warwick">Warwick</option>
                    <option value="Wukong">Wukong</option>
                    <option value="Xayah">Xayah</option>
                    <option value="Xerath">Xerath</option>
                    <option value="Xin Zhao">Xin Zhao</option>
                    <option value="Yasuo">Yasuo</option>
                    <option value="Yone">Yone</option>
                    <option value="Yorick">Yorick</option>
                    <option value="Yuumi">Yuumi</option>
                    <option value="Zac">Zac</option>
                    <option value="Zed">Zed</option>
                    <option value="Zeri">Zeri</option>
                    <option value="Ziggs">Ziggs</option>
                    <option value="Zilean">Zilean</option>
                    <option value="Zoe">Zoe</option>
                    <option value="Zyra">Zyra</option>

            </select>
            </div>

            {/*Submit*/}
            <button type="submit" className="Submit-btn">
                Submit
            </button>
            </form>
            </div>
            </div>        
)
}
export default PlayerForm;