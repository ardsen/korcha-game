import HomepageInfoButtons from "./HomepageInfoButtons";

function HomepageInfoButtonContainer() {
  const scrollArray = ["1", "2", "3", "4"];

  return (
    <div className="info-btn-container" style={{ paddingBottom: "5rem" }}>
      <HomepageInfoButtons scroll={scrollArray[0]}>Story</HomepageInfoButtons>
      <HomepageInfoButtons scroll={scrollArray[1]}>
        What is Korcha?
      </HomepageInfoButtons>
      <HomepageInfoButtons scroll={scrollArray[2]}>
        How to play?
      </HomepageInfoButtons>
      <HomepageInfoButtons scroll={scrollArray[3]}>Classes</HomepageInfoButtons>
      <section id="section-1">
        <h3
          style={{
            color: "var(--color-text)",
            textShadow: "0px 0px 5px white",
            fontSize: "24px",
          }}
        >
          Storyline
        </h3>
        <br />
        <p>Storyline is under development...</p>
      </section>
      <section id="section-2">
        <h3
          style={{
            color: "var(--color-text)",
            textShadow: "0px 0px 5px white",
            fontSize: "24px",
          }}
        >
          What is Korcha?
        </h3>
        <br />
        <p>
          Korcha is a web-based old-school turn-based action game which has RPG
          elements. Choose your race, create your character, defeat your
          enemies. Currently, it only has single-player mod.
        </p>
      </section>
      <section id="section-3">
        <h3
          style={{
            color: "var(--color-text)",
            textShadow: "0px 0px 5px white",
            fontSize: "24px",
          }}
        >
          How to Play?
        </h3>
        <br />
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "3rem",
                height: "100%",
              }}
            >
              <p>
                There are 5 different stats in the game which are HP, END, STR,
                INT, AGI. You will gain 3 stat points for each level up. Each
                monster will give you experience and gold according to its
                level. Distribute your stats, buy new items, defeat higher level
                enemies. Currently, there are two maps and 20 different enemies
              </p>
              <img src="/healthcont.png" alt="" width="74%" />
            </div>
            <img src="/statcont.png" alt="" width="28%" />
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <p>
              In the game, pressing the right button on the right time is
              essential. You should be able to manage your stamina and health
              bar. Basic attack deals less damage and consumes less stamina
              while strong attack deals more damage and consume more stamina.
              Also there is a crush attack which ignores the opponents defence.
              You also can choose to play sorcerer class to deal tons of damage
              with spells but you should be careful with your health bar.
            </p>
            <img src="/attackcont.png" alt="" width="28%" />
          </div>
        </div>
      </section>
      <section id="section-4">
        <h3
          style={{
            color: "var(--color-text)",
            textShadow: "0px 0px 5px white",
            fontSize: "24px",
          }}
        >
          Classes
        </h3>
        <br />
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p>
            There are three main classes in the game: Warrior/Knight,
            Sorcerer/Mage, Thief/Rogue Rogue
          </p>
          <br />
          <div style={{ display: "flex", gap: ".2rem", alignItems: "center" }}>
            <img src="/orc-finalization-warrior.png" width="25%" alt="" />
            <p>
              <span style={{ textShadow: "0 0 10px white" }}>
                Warrior/Knight:
              </span>{" "}
              Has the greatest Physical Attack Power in the game. They use
              greatswords and greataxes which has the highest physical attack
              power. This class has stable, high damage and also good amount of
              health point. STR - HP stats are recommended
            </p>
            <img src="/human-warrior-finalization.png" width="25%" alt="" />
          </div>
          <div style={{ display: "flex", gap: ".2rem", alignItems: "center" }}>
            <img src="orc-finalization-sorcerer.png" alt="" width="25%" />
            <p>
              <span style={{ textShadow: "0 0 10px white" }}>
                Sorcerer/Mage:
              </span>{" "}
              Has the greatest Magical Attack Power in the game. They use
              staffs, scepters. Sorcerers has highest stable damage among the
              all classes. But because of that, it is the class that has lowest
              health point in the game. INT - END - HP stats are recommended
            </p>
            <img src="human-sorcerer-finalization.png" alt="" width="25%" />
          </div>
          <div style={{ display: "flex", gap: ".2rem", alignItems: "center" }}>
            <img src="orc-finalization-warlock.png" alt="" width="25%" />
            <p>
              <span style={{ textShadow: "0 0 10px white" }}>Thief/Rogue:</span>{" "}
              This class is capable of dealing record damages in the game. They
              use daggers which are the weapons that have high critical rate.
              Agility also makes rogues to deal higher critical damage. AGI - HP
              stats are recommended
            </p>
            <img src="human-warlock-finalization.png" alt="" width="25%" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomepageInfoButtonContainer;
