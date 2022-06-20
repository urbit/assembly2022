import Head from "next/head";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <div className="container items-center mx-auto">
        <Head>
          <title>Assembly 2022 - Urbit</title>
        </Head>
        {/* Hero + Nav */}
        <header
          className="flex items-center flex-col pt-14 space-y-16 pb-64 bg-cover sm:bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url('https://storage.googleapis.com/media.urbit.org/assembly/assembly-2022-hero.png')",
          }}
        >
          <Nav />
          <h1 className="text-center pt-32 text-6xl font-bold uppercase tracking-widest">
            Assembly
            <br />
            2022
          </h1>
          <p className="uppercase font-black">Sept 22-25 • Miami Beach, FL</p>
          <a className="button-lg bg-indigo-green text-white">Register Now</a>
        </header>
      </div>
      <section className="bg-black text-white flex flex-col items-center px-8 py-64 justify-center text-center antialiased">
        <div>
          <p className="font-semibold text-lg">as·sem·bly</p>
          <p className="font-medium text-lg">
            Gathering together as a group for a common purpose,
          </p>
          <p className="font-medium text-lg">
            fitting together the component parts of a machine.
          </p>
        </div>
      </section>
      <section
        className="bg-red flex flex-col space-y-16 py-32 items-center px-8 lg:px-0"
        id="about"
      >
        <h1 className="text-4xl font-semibold tracking-widest uppercase">
          About
        </h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-16 lg:space-y-0 justify-center">
          <div className="flex flex-col space-y-4 basis-1/3">
            <p className="">
              Assembly 2022 is the second ever Urbit confluence coming to you
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
          </div>
        </div>
      </section>
      <section
        className="bg-green py-32 px-8 lg:px-0 flex flex-col items-center justify-center"
        id="schedule"
      >
        <div className="max-w-screen-md w-full flex flex-col space-y-16 items-center">
          <h1 className="text-4xl font-semibold tracking-widest uppercase">
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
                  {day?.details && <p className="pt-4">More details soon.</p>}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="bg-yellow py-32 px-8 lg:px-0 flex flex-col space-y-16 items-center"
        id="speakers"
      >
        <h1 className="text-4xl font-semibold tracking-widest uppercase">
          Speakers
        </h1>
        <div className="flex flex-wrap max-w-screen-lg items-start">
          {speakers.map((speaker) => {
            return (
              <div className="basis-full lg:basis-1/4 text-center items-center justify-center p-8">
                <img className="rounded-xl" src={speaker.image} />
                <p className="font-semibold pt-2">{speaker.name}</p>
                <p
                  className="font-monospace my-1 text-sm font-semibold"
                  style={{ color: "#6F720A" }}
                >
                  {speaker.patp}
                </p>
                <span
                  id="team"
                  dangerouslySetInnerHTML={{ __html: speaker.about }}
                />
              </div>
            );
          })}
          <h1 className="text-lg text-center font-semibold self-center h-full w-full">
            More TBA
          </h1>
        </div>
      </section>
      <section
        className="bg-blue py-32 px-8 lg:px-0 flex flex-col space-y-16 items-center"
        id="contact"
      >
        <h1 className="text-4xl font-semibold tracking-widest uppercase">
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
    about: `<a href="https://twitter.com/balajis">@balajis</a>`,
    image: "https://media.urbit.org/assembly/balaji-srinivasan-tr35.png",
  },
  {
    name: "Riva Melissa Tez",
    patp: "~sonnel-malmec",
    about: `<a href="https://twitter.com/rivatez">@rivatez</a>`,
    image: "https://media.urbit.org/assembly/rivatez.png",
  },
  {
    name: "Tim Galebach",
    patp: "~timluc-miptev",
    about: `CEO, <a href="https://uqbar.network">Uqbar Network</a>`,
    image: "https://media.urbit.org/assembly/~timluc-miptev.png",
  },
  {
    name: "Trent Gillham",
    patp: "~lomder-librun",
    about: `CEO, <a href="https://www.holium.com">Holium</a>`,
    image: "https://media.urbit.org/assembly/~lomder-librun.png",
  },
  {
    name: "Brian Crain",
    patp: "~minwyc-dablen",
    about: `CEO, <a href="https://chorus.one">Chorus One</a>`,
    image: "https://media.urbit.org/assembly/crain.png",
  },
  {
    name: "Galen Wolfe-Pauly",
    patp: "~ravmel-ropdyl",
    about: `CEO, <a href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/galen.png",
  },
  {
    name: "Philip Monk",
    patp: "~wicdev-wisryt",
    about: `CTO, <a href="https://tlon.io">Tlon</a>`,
    image: "https://media.urbit.org/assembly/5553176.jpeg",
  },
  {
    name: "Neal Davis",
    patp: "~lagrev-nocfep",
    about: "Developer Experience, Urbit Foundation",
    image: "https://media.urbit.org/assembly/5VhAqOUI_400x400.jpg",
  },
  {
    name: "Josh Lehman",
    patp: "~wolref-podlex",
    about: "Executive Director, Urbit Foundation",
    image: "https://media.urbit.org/assembly/josh.png",
  },
];
