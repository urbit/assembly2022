import Head from "next/head";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col relative">
      {/* Hero + Nav */}
      <header
        className="flex items-center flex-col bg-cover sm:bg-contain bg-no-repeat bg-center sticky top-0"
      >

        <div className="w-full flex text-center justify-center bg-black">
          <a
            href="https://urbit.org"
            className="w-100 left-1 sm:left-2 top-1 sm:top-2 flex block absolute"
          >
            <img
              src="https://media.urbit.org/assembly/urbit-sig-108.png"
              width="48"
              height="48"
            />
          </a>
        </div>


        <Nav />
      </header>
      <video autoPlay muted loop playsInline id="heroVideo" className="aspect-video">
        <source src="https://storage.googleapis.com/media.urbit.org/assembly/16-9_landing.mp4" type="video/mp4" />
      </video>
      <div className="container items-center mx-auto">
        <Head>
          <title>Urbit Assembly 2022</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@urbit" />
          <meta name="twitter:creator" content="@urbit" />
          <meta name="twitter:title" content="Urbit Assembly 2022" />
          <meta
            name="twitter:description"
            content="The second ever Urbit confluence, coming to you this year from Miami Beach."
          />
          <meta
            name="twitter:image"
            content="https://storage.googleapis.com/media.urbit.org/assembly/assembly-card-2.png"
          />
        </Head>





      </div>
      <section className="flex flex-col items-center px-8 py-32 justify-center text-left antialiased bg-silver">
        <div>
          <p className="font-bold text-lg mb-8 text-center">as·sem·bly</p>
          <ol>
            <li className="pb-2 text-lg">
              gathering together as a group for a common purpose.
            </li>
            <li className=" pb-2 text-lg">
              fitting together the component parts of a machine.
            </li>
            <li className=" pb-2 text-lg">
              the conversion of instructions in low-level code to machine code.
            </li>
          </ol>
        </div>
      </section>

    

      <section
        className="bg-green flex flex-col space-y-16 py-32 items-center px-8 lg:px-0"
        id="about"
      >
        <h1 className="text-3xl font-regular tracking-widest uppercase">
          About
        </h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-16 lg:space-y-0 justify-center">
          <div className="flex flex-col space-y-4 basis-1/3">
            <p className="">
              Urbit Assembly 2022 is the second ever Urbit confluence coming to
              you this year from Miami Beach.
            </p>
            <p>
              Last year we showcased the release of software distribution which
              enabled other developers to use Urbit as infrastructure for their
              creations. This year we’ll be showcasing an entire ecosystem of{" "}
              <b>New World Energy.</b>
            </p>
            <p>Expect to find:</p>
            <ul className="list-disc list-inside">
              <li>Product and tech launches from the bleeding edge</li>
              <li>
                Panels from visionary technologists and unhinged cultural
                critics
              </li>
              <li>Talks from the most distinctive voices in technology</li>
              <li>Beach hangouts</li>
              <li>Developer workshops</li>
              <li>Parties, of course</li>
            </ul>
            <p>
              Nothing will be livestreamed. Recordings of talks will be released following 
              the event at our discretion.
            </p>
          </div>
          <div className="flex flex-col space-y-8 basis-1/4">
            <h2 className="text-3xl font-regular">Location</h2>
            <p>
              1111 Lincoln Road
              <br />
              7th Floor
              <br />
              Miami Beach, FL 33139
            </p>
            <h2 className="text-3xl font-regular">Dates</h2>
            <p>September 22nd, 23rd, 24th, and 25th</p>
            <p class="italic">
              Note on Covid-19: Do not come if you have Covid. No testing or
              proof-of-vaccine will be required for entry.
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-melon py-32 px-8 lg:px-0 flex flex-col space-y-16 items-center"
        id="speakers"
      >
        <h1 className="text-3xl font-regular tracking-widest uppercase">
          Speakers
        </h1>
        <div className="flex flex-wrap max-w-screen-lg items-start">
          {speakers.map((speaker) => {
            return (
              <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 center text-center items-center justify-center p-8">
                <img className="rounded-xl w-full" src={speaker.image} />
                <p className="font-semibold pt-2">{speaker.name}</p>
                <p
                  className="font-monospace my-1 text-sm font-semibold"
                  style={{ color: "#853738" }}
                  dangerouslySetInnerHTML={{
                    __html: `<a target="_blank" href=https://urbit.org/ids/${speaker.patp}>${speaker.patp}</a>`,
                  }}
                ></p>
                <span
                  id="team"
                  dangerouslySetInnerHTML={{ __html: speaker.about }}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="bg-grey text-melon py-32 px-8 lg:px-0 flex flex-col space-y-16 items-center"
        id="contact"
      >
        <h1 className="text-3xl font-regular tracking-widest uppercase">
          Contact
        </h1>
        <div className="w-full max-w-screen-md flex flex-col space-y-8 items-left">
          <h3 className="font-bold">Questions?</h3>
          <p>
            Feel free to reach out if you have any questions regarding Assembly
            2022.
          </p>
          <p>
            <a
              className="font-semibold border-b"
              href="mailto:assembly@urbit.org"
            >
              assembly@urbit.org
            </a>
          </p>

          <h3 className="font-bold pt-8">Financial Assistance</h3>
          <p>
            We're concluded the submission period for financial assistance requests.</p><p>We hope to see you next year!
          </p>

        </div>
      </section>

  <section
        className="bg-lavender flex flex-col space-y-16 py-32 items-center px-8 lg:px-0"
        id="sponsors"
      >
        <h1 className="text-3xl font-regular tracking-widest uppercase text-center">
          Brought to you by
        </h1>

        <div className="flex items-center justify-center flex-wrap max-w-5xl">
          <div className="text-center items-center p-8 sm:p-10 px-14">
            <a href="https://urbit.org">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/Urbit.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10 px-14">
            <a href="https://tlon.io">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/Tlon.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10 px-14">
            <a href="https://uqbar.network">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/Uqbar.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10 px-14">
            <a href="https://holium.com">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/Holium.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-14">
            <a href="https://third.earth">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/thirdearth.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-14">
            <a href="https://sia.tech">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/Sia.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-14">
            <a href="https://assembly.capital">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/assembly-capital.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-10">
            <a href="https://reserve.org">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/reserve.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-10 w-56">
            <a href="https://foam.space">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/foam-logo4.png" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-10">
            <a href="https://tirrel.io">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/tirrel.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-10">
            <a href="https://ledger.co">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/ledger.svg" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-10 w-56">
            <a href="https://coinfund.io">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/coinfund.png" />
            </a>
          </div>
          <div className="text-center items-center p-8 sm:p-10  px-10 w-56">
            <a href="https://vienna.earth">
              <img src="https://storage.googleapis.com/media.urbit.org/assembly/vienna.svg" />
            </a>
          </div>
          {/*
                    <div className="text-center items-center p-8 sm:p-10  px-10 opacity-40">
            <div className="p-4 border-dashed border border-black">
              <p className>to be announced</p>
            </div>
          </div>
          */}
        </div>

        {/*
        <p className="center">
          Inquire regarding sponsorship opportunities at{" "}
          <a
            className="font-semibold border-b"
            href="mailto:assembly@urbit.org"
          >
            assembly@urbit.org
          </a>
        </p>

      */}
      </section>
    </div>
  );
}

const speakers = [
  {
    name: "Balaji Srinivasan",
    patp: "~hadmul-lavsep",
    about: `<a target="_blank" href="https://twitter.com/balajis">@balajis</a>`,
    image: "https://media.urbit.org/assembly/balaji-srinivasan-tr35.png",
  },
  {
    name: "Riva Melissa Tez",
    patp: "~sonnel-malmec",
    about: `<a target="_blank" href="https://twitter.com/rivatez">@rivatez</a>`,
    image: "https://media.urbit.org/assembly/rivatez.png",
  },
  {
    name: "Galen Wolfe-Pauly",
    patp: "~ravmel-ropdyl",
    about: `CEO, <a target="_blank" href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/galen.png",
  },
  {
    name: "Josh Lehman",
    patp: "~wolref-podlex",
    about: "Executive Director, Urbit Foundation",
    image: "https://media.urbit.org/assembly/josh.png",
  },
  {
    name: "Walter Kirn",
    patp: "~linmul-pitlex",
    about: `<a target="_blank" href="https://twitter.com/walterkirn">@walterkirn</a><br>Writer`,
    image: "https://media.urbit.org/assembly/walterkirn.jpg",
  },
  {
    name: "Alex Lee Moyer",
    patp: "~sogmut-nomwed",
    about: `filmmaker<br /> <a target="_blank" href="https://alexswar.com">Alex's War</a> & TFW NO GF`,
    image: "https://media.urbit.org/assembly/alm.jpg",
  },
  {
    name: "Anna Khachiyan",
    patp: "~nilnep-hashep",
    about: `<a target="_blank" href="https://twitter.com/annakhachiyan">@annakhachiyan</a><br/> co-host, <a target="_blank" href="http://redscarepodcast.com">Red Scare</a>`,
    image:
      "https://storage.googleapis.com/media.urbit.org/assembly/s200_anna.khachiyan.jpg",
  },
  {
    name: "Samo Burja",
    patp: "~??????-??????",
    about: `<a target="_blank" href="https://twitter.com/samoburja">@samoburja</a><br>Founder, <a target="_blank" href="https://www.bismarckanalysis.com/">Bismarck Analysis</a>`,
    image: "https://media.urbit.org/assembly/samoburja.jpg",
  },
  {
    name: "Petra Cortright",
    patp: "~folnel-simdur",
    about: `Artist`,
    image: "https://media.urbit.org/assembly/petra.jpg",
  },
  {
    name: "Katherine Dee",
    patp: "~hapnyx-tamnex",
    about: `<a target="_blank" href="https://twitter.com/default_friend">@default_friend</a><br>Writer, <a target="_blank" href="https://defaultfriend.substack.com/">Default Wisdom</a>`,
    image: "https://media.urbit.org/assembly/defaultfriend.jpg",
  },
  {
    name: "Brian Crain",
    patp: "~minwyc-dablen",
    about: `CEO, <a target="_blank" href="https://chorus.one">Chorus One</a>`,
    image: "https://media.urbit.org/assembly/crain.png",
  },
  {
    name: "Jake Brukhman",
    patp: "~ranter-tapper",
    about: `Founder, <a target="_blank" href="https://coinfund.io">Coinfund</a>`,
    image: "https://media.urbit.org/assembly/jakebrukhman.jpg",
  },
  {
    name: "Nevin Freeman",
    patp: "~dirrut-tanrem",
    about: `CEO &amp; Co-founder, <a target="_blank" href="https://reserve.org">Reserve</a>`,
    image: "https://media.urbit.org/assembly/nevin.png",
  },
  {
    name: "Lane Rettig",
    patp: "~hocfur-modlex",
    about: `Core team, <a target="_blank" href="https://spacemesh.io">Spacemesh</a>`,
    image: "https://media.urbit.org/assembly/lanerettig.jpg",
  },
  {
    name: "Dryden Brown",
    patp: "~fitrum-fotnym",
    about: `CEO &amp; Co-founder, <a target="_blank" href="https://www.praxissociety.com/">Praxis</a>`,
    image: "https://media.urbit.org/assembly/drydenbrown.jpg",
  },
  {
    name: "Aaron Wright",
    patp: "~??????-??????",
    about: `Co-founder &amp; CEO, <a target="_blank" href="https://tributelabs.xyz">Tribute Labs</a>`,
    image: "https://media.urbit.org/assembly/aaronwright.jpg",
  },
  {
    name: "Asher Penn",
    patp: "~??????-??????",
    about: `Founder &amp; Editor, <a target="_blank" href="http://sexmagazine.us/">Sex Magazine</a>`,
    image: "https://media.urbit.org/assembly/asherpenn.jpg",
  },
  {
    name: "Lucien Smith",
    patp: "~hodpel-witdyr",
    about: `Founder, <a target="_blank" href="https://stp.world">STP</a>`,
    image:
      "https://pbs.twimg.com/profile_images/1538300889072644098/XmjuvIo9_400x400.jpg",
  },
  {
    name: "Matt Condon",
    patp: "~littel-fodrex",
    about: `Creator, <a target="_blank" href="https://themanymatts.lol/">The Many Matts</a>`,
    image: "https://media.urbit.org/assembly/mattcondon.jpg",
  },
  {
    name: "Hamzat Raheem",
    patp: "~bonpun-hacmyn",
    about: `Marble Sculptor, <a target="_blank" href="https://creativearchaeology.xyz/">creativearchaeology.xyz</a>`,
    image: "https://media.urbit.org/assembly/hamzatraheem.jpg",
  },

  {
    name: "Philip Monk",
    patp: "~wicdev-wisryt",
    about: `CTO, <a target="_blank" href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/5553176.jpeg",
  },
  {
    name: "Neal Davis",
    patp: "~lagrev-nocfep",
    about: "Director of Developer Experience, Urbit Foundation",
    image: "https://media.urbit.org/assembly/5VhAqOUI_400x400.jpg",
  },
  {
    name: "Sam Frank",
    patp: "~todset-partug",
    about: `Writer, Board Member, Urbit Foundation`,
    image: "https://media.urbit.org/assembly/samfrank.jpg",
  },
  {
    name: "Trent Gillham",
    patp: "~lomder-librun",
    about: `CEO, <a target="_blank" href="https://www.holium.com">Holium</a>`,
    image: "https://media.urbit.org/assembly/trent.png",
  },
  {
    name: "Ted Blackman",
    patp: "~rovnys-ricfer",
    about: `Engineering Manager, <a target="_blank" href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/tedblackman.jpg",
  },
  {
    name: "Luke Stiles",
    patp: "~famhut-wolpyx",
    about: `VP Engineering, <a target="_blank" href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/lukestiles.jpg",
  },
  {
    name: "Mark",
    patp: "~palfun-foslup",
    about: `\"Engineer\", <a target="_blank" href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/palfun.png",
  },
  {
    name: "Justin Murphy",
    patp: "~hatryx-lastud",
    about: `Host, <a target="_blank" href="https://www.otherlife.co/">Other Life</a>`,
    image: "https://media.urbit.org/assembly/justinmurphy.jpg",
  },
  {
    name: "Josh Rosenthal, PhD",
    patp: "~??????-??????",
    about: `Partner, <a target="_blank" href="https://www.go6ixthevent.com/">Sixth Event</a> &amp; <a target="_blank" href="https://www.https://www.gonarwhalventures.com/.com/">Narwhal Ventures</a>`,
    image: "https://media.urbit.org/assembly/joshrosenthal.jpg",
  },
  {
    name: "Philip Galebach",
    patp: "~nilrun-mardux",
    about: `CEO, <a target="_blank" href="https://twitter.com/AlephDao">@AlephDAO</a>`,
    image: "https://media.urbit.org/assembly/alephdao.jpg",
  },
  {
    name: "Soryu Forall",
    patp: "~??????-??????",
    about: `Founder and Head Teacher, <a target="_blank" href="https://www.centerformindfullearning.org/">Center for Mindful Learning</a>`,
    image: "https://media.urbit.org/assembly/soryu.jpg",
  },
  {
    name: "Finn Brown",
    patp: "~fitrum-fotnym",
    about: `Co-founder, <a target="_blank" href="https://www.vienna.earth/">Vienna Hypertext</a>`,
    image: "https://media.urbit.org/assembly/finn.jpg",
  },
  {
    name: "Casey Caruso",
    patp: "~??????-??????",
    about: `Investment Partner, <a target="_blank" href="https://www.paradigm.xyz/">Paradigm</a>`,
    image: "https://media.urbit.org/assembly/caseycaruso.jpg",
  },
];
