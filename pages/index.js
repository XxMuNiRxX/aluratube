import config from "../config";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
function HomePage() {
  const estilosDaHome = {
    // backgroundColor: "red"
  };

  // console.log(config.playlists);
  return (
    <>
      <CSSReset />
      <div style={estilosDaHome}>
        <Menu></Menu>
        <Header></Header>
        <Timeline playlists={config.playlists}></Timeline>
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }
const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" alt="" /> */}
      <section className="user-info">
        <img src={config.github} alt="" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(propriedades) {
  // console.log("dentro do componente", propriedades);
  const playlistsNames = Object.keys(propriedades.playlists);
  //retorno por expressao(react usa isso)
  //statement(nao aceita isso)

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsNames) => {
        const videos = propriedades.playlists[playlistsNames];
        // console.log(playlistsNames);
        // console.log(videos);
        return (
          <section key={section}>
            <h2>{playlistsNames}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url} key="urlKey">
                    <img src={video.thumb} />

                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
