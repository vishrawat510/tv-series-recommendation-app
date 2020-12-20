import React, { useState } from "react";
import "./styles.css";

const tvSeries = {
  Horror: [
    {
      name: "Supernatural",
      description:
        "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth."
    },
    {
      name: "American Horror Story",
      description:
        "An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, and a slasher summer camp."
    },
    {
      name: "Stranger Things",
      description:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
    }
  ],
  Thriller: [
    {
      name: "Servant",
      description:
        "A Philadelphia couple is in mourning after an unspeakable tragedy creates a rift in their marriage and opens the door for a mysterious force to enter their home."
    },
    {
      name: "Into the Dark",
      description:
        "A horror anthology series with each episode inspired by a holiday."
    },
    {
      name: "The Walking Dead",
      description:
        "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive."
    }
  ],
  Fiction: [
    {
      name: "Castle Rock",
      description:
        "Based on the stories of Stephen King, the series intertwines characters and themes from the fictional town of Castle Rock."
    },
    {
      name: "Love, Death & Robots",
      description:
        " A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy."
    },
    {
      name: "Twilight Zone",
      description:
        "An updated version of the classic anthology series featuring various tales of science fiction, mystery, and horror."
    }
  ],
  "Sci-Fi": [
    {
      name: "The Stand",
      description:
        "After the world is in ruins, due to a man-made plague, a battle of Biblical proportions ensues between the survivors."
    },
    {
      name: "Fear The Walking Dead",
      description:
        "A Walking Dead spin-off, set in Los Angeles, following two families who must band together to survive the undead apocalypse."
    },
    {
      name: "Swamp Thing",
      description:
        "Abby Arcane returns home to Marais, Louisiana to investigate a deadly swamp-borne virus, only to discover the dark, terrifying mysteries of the swamp."
    }
  ],
  Documentary: [
    {
      name: "Dark Matters: Twisted But True",
      description:
        "Delves into the most unusual research ever conducted, including attempts to crossbreed humans and apes, actual zombie investigations and head transplantation studies."
    },
    {
      name: "Cursed",
      description:
        "First-person accounts of how curses have tormented, hurt and even killed those affected are told by the people who have lived through them and by those who have seen others affected."
    },
    {
      name: "Haunted Hollywood",
      description:
        "Syndicated package of public domain horror titles hosted by the offscreen voice of John Carradine."
    }
  ]
};

const seriesGenres = Object.keys(tvSeries);

export default function App() {
  const [series, setSeries] = useState(tvSeries["Horror"]);

  return (
    <div className="App">
      <h1>Watch your fav TV series!</h1>
      <div style={{ marginBottom: "2rem" }}>
        {seriesGenres.map((genre) => (
          <span
            style={{
              padding: "1rem",
              cursor: "pointer",
              border: "2px solid grey",
              margin: "1px"
            }}
            onClick={() => {
              setSeries(tvSeries[genre]);
            }}
          >
            {genre}
          </span>
        ))}
      </div>

      {series.map((series) => (
        <div style={{ padding: "1rem" }}>
          <div>
            <strong>{series.name}:</strong>
          </div>
          <span>{series.description}</span>
        </div>
      ))}
    </div>
  );
}
