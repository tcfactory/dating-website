import React from 'react'
import Member from './member'

const AboutUs: React.FC = () => {
    return (
      <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
        <div className="container mx-auto px-11">
          <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
            <strong className="text-fuchsia-600">
              Crush in my Backyard is a platform for adults, with thousands of
              members signing up everyday!
            </strong>{" "}
            Our team of expert engineers has created the best user experience
            and a secure environment for members worldwide to flirt online.
          </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
          <h2>Features</h2>
          {/* <div className="mt-2">the &ldquo;spec-ops&rdquo;</div> */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
            <Member
              id="profile"
              name="Profile"
              description="A well-thought-out profile creator"
              width={1000}
              height={1000}
            />
            <Member
              id="matchmaking"
              name="Efficient Matchmaking"
              description="Effective matchmaking algorithms"
              width={1000}
              height={1000}
            />
            <Member
              id="chat"
              name="Instant Chat"
              description="An easy and fun messaging interface"
              width={800}
              height={800}
            />
            <Member
              id="localization"
              name="Localized"
              description="Localized dating features to find matches near you"
              width={1000}
              height={1000}
            />
            <Member
              id="search"
              name="Advanced Search"
              description="Tagging and advanced search filters"
              width={1000}
              height={1000}
            />
            <Member
              id="video-sharing"
              name="Media sharing "
              description="Share photos, videos and audio"
              width={1000}
              height={1000}
            />
            <Member
              id="security"
              name="Safe & Secure"
              description="Advanced security and privacy features"
              width={1000}
              height={1000}
            />
            <Member
              id="community"
              name="Balanced Community"
              description="A large community of real people"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    );
}

export default AboutUs
