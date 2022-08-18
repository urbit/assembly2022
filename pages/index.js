import Head from "next/head";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
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
            content="https://storage.googleapis.com/media.urbit.org/assembly/assembly-card.png"
          />
        </Head>
        {/* Hero + Nav */}

        <a
          href="https://urbit.org"
          className="absolute left-5 top-3 sm:left-8 sm:top-8"
        >
          <img
            src="https://media.urbit.org/assembly/urbit-sig-54.png"
            width="36"
            height="36"
          />
        </a>

        <header
          className="flex items-center flex-col pt-14 space-y-8 pb-64 bg-cover sm:bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url('https://storage.googleapis.com/media.urbit.org/assembly/assembly-2022-hero.png')",
          }}
        >
          <Nav />
          <h1 className="text-center uppercase pt-48 text-4xl md:text-6xl font-bold tracking-widest">
           Assembly 2022
          </h1>
          <p className="uppercase text-xl md:text-2xl pb-10 font-black text-center">Sept 22–25 • Miami Beach, FL</p>
          <a
            href="https://www.eventbrite.com/e/urbit-assembly-2022-tickets-370588930467"
            target="_blank"
            className="button-lg bg-indigo-green text-white"
          >
            Register Now
          </a>
        </header>
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
        className="bg-lavender flex flex-col space-y-16 py-32 items-center px-8 lg:px-0"
        id="sponsors"
      >
        <h1 className="text-3xl font-semibold tracking-widest uppercase text-center">
          Brought to you by
        </h1>

        <div className="flex items-center justify-center flex-wrap max-w-5xl">
            <div className="text-center items-center p-10 px-14">
              <a href="https://urbit.org"><img src="https://storage.googleapis.com/media.urbit.org/assembly/Urbit.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-14">
              <a href="https://tlon.io"><img src="https://storage.googleapis.com/media.urbit.org/assembly/Tlon.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-14">
              <a href="https://uqbar.network"><img src="https://storage.googleapis.com/media.urbit.org/assembly/Uqbar.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-14">
              <a href="https://holium.com"><img src="https://storage.googleapis.com/media.urbit.org/assembly/Holium.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-14">
              <a href="https://third.earth"><img src="https://storage.googleapis.com/media.urbit.org/assembly/thirdearth.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-14">
              <a href="https://sia.tech"><img src="https://storage.googleapis.com/media.urbit.org/assembly/Sia.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-14">
              <a href="https://assembly.capital"><img src="https://storage.googleapis.com/media.urbit.org/assembly/assembly-capital.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-10">
              <a href="https://reserve.org"><img src="https://storage.googleapis.com/media.urbit.org/assembly/reserve.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-10 w-56">
              <a href="https://foam.space"><img src="https://storage.googleapis.com/media.urbit.org/assembly/foam-logo.png"/></a>
            </div>
            <div className="text-center items-center p-10 px-10">
              <a href="https://tirrel.io"><img src="https://storage.googleapis.com/media.urbit.org/assembly/tirrel.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-10">
              <a href="https://ledger.co"><img src="https://storage.googleapis.com/media.urbit.org/assembly/ledger.svg"/></a>
            </div>
            <div className="text-center items-center p-10 px-10 opacity-40">
            <div className="p-4 border-dashed border border-black">
              <p className>to be announced</p>
              </div>
            </div>

        </div>
            <p className="center">
              Inquire regarding sponsorship opportunities at <a className="font-semibold border-b" href="mailto:assembly@urbit.org">assembly@urbit.org</a> 
            </p>
      </section>


      <section
        className="bg-red flex flex-col space-y-16 py-32 items-center px-8 lg:px-0"
        id="about"
      >
        <h1 className="text-3xl font-semibold tracking-widest uppercase">
          About
        </h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-16 lg:space-y-0 justify-center">
          <div className="flex flex-col space-y-4 basis-1/3">
            <p className="">
              Urbit Assembly 2022 is the second ever Urbit confluence coming to you
              this year from Miami Beach.
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
              As with last year, little of this will be recorded. You'll just
              have to be there.
            </p>
          </div>
          <div className="flex flex-col space-y-8 basis-1/4">
            <h2 className="text-3xl font-semibold">Location</h2>
            <p>
              1111 Lincoln Road
              <br />
              7th Floor
              <br />
              Miami Beach, FL 33139
            </p>
            <h2 className="text-3xl font-semibold">Dates</h2>
            <p>September 22nd, 23rd, 24th, and 25th</p>
            <p class="italic">Note on Covid-19: Do not come if you have Covid. No testing or proof-of-vaccine will be required for entry.</p>
          </div>
        </div>
      </section>
      <section
        className="bg-yellow py-32 px-8 lg:px-0 flex flex-col space-y-16 items-center"
        id="speakers"
      >
        <h1 className="text-3xl font-semibold tracking-widest uppercase">
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
                  style={{ color: "#6F720A" }}
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
          <h1 className="text-lg text-center font-semibold self-center h-full w-full pt-16">
            More TBA
          </h1>
        </div>
      </section>
      <section
        className="bg-green py-32 px-8 lg:px-0 flex flex-col items-center justify-center"
        id="schedule"
      >
        <div className="max-w-screen-md w-full flex flex-col space-y-16 items-center">
          <h1 className="text-3xl font-semibold tracking-widest uppercase">
            Schedule
          </h1>
          {Object.values(schedule).map((day, i) => {
            return (
              <div className="w-full">
                <div className="flex justify-between font-semibold uppercase pb-2">
                  <p>Day {i + 1}</p>
                  <p>{day.date}</p>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex flex-col space-y-2 pt-2">
                  {day.events.map((event) => {
                    return (
                      <div className="flex space-x-4">
                        <p className="w-20">{event.time}</p>
                        <p>{event.content}</p>
                      </div>
                    );
                  })}
                  {<p className="pt-4">More details soon.</p>}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="bg-blue py-32 px-8 lg:px-0 flex flex-col space-y-16 items-center"
        id="contact"
      >
        <h1 className="text-3xl font-semibold tracking-widest uppercase">
          Contact
        </h1>
        <div className="w-full max-w-screen-md flex flex-col space-y-8 items-left">
          <h3 className="font-bold">Questions?</h3>
          <p>
            Feel free to reach out if you have any questions regarding Assembly
            2022.
          </p>
          <h3 className="font-bold">Financial Assistance</h3>
          <p>
            We want anyone interested in Urbit to be able to attend Assembly
            2022. If you need financial assistance, please reach out via email.
          </p>
          <p>
            <a
              className="font-semibold border-b"
              href="mailto:assembly@urbit.org"
            >
              assembly@urbit.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

const schedule = {
  one: {
    date: "Thursday 9/22",
    events: [
      {
        time: "2:00pm",
        content:
          "Beach pre-registration — skip the lines on Friday and get your tan on, towels provided.",
      },
    ],
  },
  two: {
    date: "Friday 9/23",
    events: [
      { time: "1:00pm", content: "Doors open" },
      { time: "3:00pm", content: "Keynote" },
      { time: "4:00pm", content: "Panel" },
      { time: "7:00pm", content: "Cocktail Party" },
    ],
    details: true,
  },
  three: {
    date: "Saturday 9/24",
    events: [
      { time: "9:00am", content: "Doors open" },
      { time: "10am", content: "Talks / Demos" },
      { time: "12pm", content: "Lunch" },
      { time: "1:30pm", content: "Workshop & Lightning Talks" },
      { time: "4pm", content: "Panel" },
      { time: "9pm", content: "After Party" },
    ],
    details: true,
  },
  four: {
    date: "Sunday 9/25",
    events: [
      { time: "9:00am", content: "Doors open" },
      { time: "10am", content: "Talks / Demos" },
      { time: "12pm", content: "Lunch" },
      { time: "1:30pm", content: "Workshop & Lightning Talks" },
      { time: "4pm", content: "Closing Talk" },
      { time: "5pm", content: "End" },
    ],
    details: true,
  },
};

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
    name: "Trent Gillham",
    patp: "~lomder-librun",
    about: `CEO, <a target="_blank" href="https://www.holium.com">Holium</a>`,
    image: "https://media.urbit.org/assembly/~lomder-librun.png",
  },
  {
    name: "Brian Crain",
    patp: "~minwyc-dablen",
    about: `CEO, <a target="_blank" href="https://chorus.one">Chorus One</a>`,
    image: "https://media.urbit.org/assembly/crain.png",
  },
  {
    name: "Galen Wolfe-Pauly",
    patp: "~ravmel-ropdyl",
    about: `CEO, <a target="_blank" href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/galen.png",
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
    name: "Josh Lehman",
    patp: "~wolref-podlex",
    about: "Executive Director, Urbit Foundation",
    image: "https://media.urbit.org/assembly/josh.png",
  },
  {
    name: "Lucien Smith",
    patp: "~hodpel-witdyr",
    about: `Founder, <a target="_blank" href="https://stp.world">STP</a>`,
    image:
      "https://pbs.twimg.com/profile_images/1538300889072644098/XmjuvIo9_400x400.jpg",
  },
  {
    name: "Alex Lee Moyer",
    patp: "~nattul-podlec",
    about: `filmmaker<br /> <a target="_blank" href="https://alexswar.com">Alex's War</a> & TFW NO GF`,
    image: "https://media.urbit.org/assembly/alm.jpg",
  },

  {
    name: "Lane Rettig",
    patp: "~hocfur-modlex",
    about: `Core team, <a target="_blank" href="https://spacemesh.io">Spacemesh</a>`,
    image: "https://media.urbit.org/assembly/lanerettig.jpg",
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
    name: "Asher Penn",
    patp: "",
    about: `Founder &amp; Editor, <a target="_blank" href="http://sexmagazine.us/">Sex Magazine</a>`,
    image: "https://media.urbit.org/assembly/asherpenn.jpg",
  },

  {
    name: "Dryden Brown",
    patp: "",
    about: `CEO &amp; Co-founder, <a target="_blank" href="https://www.praxissociety.com/">Praxis</a>`,
    image: "https://media.urbit.org/assembly/drydenbrown.jpg",
  },
  {
    name: "Hamzat Raheem",
    patp: "",
    about: `Marble Sculptor, <a target="_blank" href="https://creativearchaeology.xyz/">creativearchaeology.xyz</a>`,
    image: "https://media.urbit.org/assembly/hamzatraheem.jpg",
  }
];
