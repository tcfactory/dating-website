import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              {/* <div>We built</div> */}
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-fuchsia-400">Join</span> and{" "}
                <span className="text-fuchsia-400">Match</span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="pinkpanda.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="image1"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              {/* <div>We made</div> */}
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-fuchsia-400">Like</span> and{" "}
                <span className="text-fuchsia-400">Message</span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="steakwallet.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="image2"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              {/* <div>We helped</div> */}
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-fuchsia-400">Chat</span> and{" "}
                <span className="text-fuchsia-400">Meet</span>!
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="showtime.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="image3"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
