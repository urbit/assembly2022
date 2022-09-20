import Nav from '@components/Nav';
import Head from 'next/head';
import { useRouter } from 'next/router';
import cn from 'classnames';

export default function Schedule() {
  const router = useRouter();
  const { day } = router.query;

  return <div className="min-h-screen bg-purple min-w-screen flex flex-col items-center">
    <Head>
      <title>Schedule - Urbit Assembly 2022</title>
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
    <header
      className="flex items-center flex-col bg-cover sm:bg-contain bg-no-repeat bg-center w-full sticky top-0"
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
    <section
      className="bg-purple w-full text-white py-32 px-4 lg:px-0 flex flex-col items-center justify-center"
      id="schedule"
    >
      <div className="max-w-screen-md w-full flex flex-col space-y-16 items-center">
        <h1 className="text-3xl font-regular tracking-widest uppercase">
          Schedule
        </h1>

        <div className="bg-purple sticky top-[52px] sm:top-[60px] flex py-4 w-full flex flex-col justify-center items-center">
          <div className="flex space-x-3 sm:space-x-4 overflow-x-auto ">
            {["THUR 22", "FRI 23", "SAT 24", "SUN 25"].map((each, i) => (
              <div className={cn("shrink-0 uppercase font-bold border-2 text-sm sm:text-md border-white rounded-xl px-4 py-2 cursor-pointer",
                "hover:bg-white hover:text-purple",
                {
                  "bg-white text-purple": i === Number(day)
                })}
                onClick={() => router.push({
                  query: { day: i }
                })}>
                {each}
              </div>
            ))}
          </div>
        </div>
        {Object.values(schedule).filter((each, i) => i === Number(day)).map((day) => {
          return (
            <div className="w-full flex flex-col justify-center">
              <div className="flex justify-between font-semibold pb-4">
                <p className="text-xl">{day.date}</p>
              </div>
              <DottedRule />
              <div className="w-full flex flex-col">
                {day.events.map((event) => {
                  return (
                    <>
                      <div className="">
                        <div className="w-full grid grid-cols-3 py-6 items-top justify-center border-white">
                          <p>{event.time}</p>
                          <div className="flex flex-col items-top">
                            {event.type && (
                              <p className="pb-4">{event.type}</p>
                            )}
                            <p>{event.content}</p>
                            {event.location && (
                              <p className={cn({
                                "text-melon": event.location === "Star Stage",
                                "text-green": event.location === "Galaxy Stage",
                                "text-lavender": event.location === "Universe Stage"
                              })}>{event.location}</p>
                            )}
                          </div>
                          {event.speaker && (
                            <ul>
                              {event.speaker.map((each) => (
                                <li>{each}</li>
                              ))}
                            </ul>)}
                        </div>

                        {event.description && (

                          <div className="w-full grid grid-cols-3 pb-8 items-top justify-center border-white">
                            <p></p>
                            <div className="flex flex-col col-span-3 sm:col-span-2">
                              <p className="pb-4">{event.description}</p>
                            </div>
                            <div>
                            </div>
                          </div>
                        )}

                      </div>



                      <DottedRule />
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>
}

const DottedRule = () => <div className="h-[2px] w-full bg-repeat" style={{ backgroundImage: "url('/rule.png')", backgroundSize: "contain" }}></div>


const schedule = [
  {
    date: "Thursday 22nd",
    events: [
      {
        time: "9am",
        content:
          "Muscle Beach Meetup",
        location: "Muscle Beach South Beach",
        description: "Come hang out, lift weights, and get some sun. Everything is free, non-gigachads are welcome."
      },
      {
        time: "2pm",
        content:
          "Beach pre-registration",
        location: ""
      },
      {
        time: "6–8:30pm",
        content:
          "Cardano Meetup",
        location: "300 NE 2nd Ave, Miami FL",
        description: "Join ~lagrev-nocfep, ~ripnyt-ripynt, and Cardano-side contributors like Adam Rusch (ADAO) and Thomas DiMatteo to discuss Structures of Decentralized Governance and Computing at Miami-Dade University.  Parking is available at Miami Dade Wolfson Student Parking, 500 NE 2nd Ave, Miami, FL 33130.  Inform attendant that you are attending a meetup at the MDC BIT Center."
      }

    ],
  },
  {
    date: "Friday 23rd",
    events: [
      { time: "12 - 2pm", content: "Registration and Coffee" },
      {
        time: "2 – 2:30pm",
        content: "Welcome to Assembly",
        location: "Galaxy Stage",
        speaker: ["Josh Lehman"]
      },
      {
        time: "3:00 – 3:15pm",
        content: "DAOs in El Salvador",
        location: "Star Stage",
        speaker: ["Stephen Galebach"]
      },
      {
        time: "3:15 – 4pm",
        content: "Hardware Talks",
        location: "Star Stage",
        description: "Several hardware companies give lightning talks that showcase what they've been working on."
      },
      {
        time: "3:15 – 4:15pm",
        type: "Workshop",
        content: "%flap",
        description: "Learn how to take an off-the-shelf JS browser game and connect it to an Urbit backend for score retention and leaderboard among %pals.",
        location: "Universe Stage",
        speaker: ["N E Davis"]
      },
      {
        time: "4 – 4:45pm",
        type: "Panel",
        content: "New World Hardware",
        location: "Star Stage",
        speaker: ["Ryan King",
          "~pilwyc-fastec",
          "~hodzod-walrus",
          "~mopfel-winrux",
          "~lomped-firser"],
        description: "Software alone won't save us. Hardware enthusiasts, unite!"
      },
      {
        time: "4:15 – 4:45pm",
        content: "Urbit Foundation Presentation",
        location: "Universe Stage",
        speaker: ["Josh Lehman"]
      },
      {
        time: "5 – 6pm",
        type: "Panel",
        content: "New Institutions in the Network Age",
        description: "Blockchains, DAOs, and Urbit seek to re-architect networked computing with foundational software primitives.  What does this mean for the Information Age?",
        location: "Galaxy Stage",
        speaker: ["Riva Tez",
          "Dryden Brown",
          "Aaron Wright",
          "Samo Burja",
          "Casey Caruso"]
      },
      {
        time: "6 – 6:15pm",
        content: "Closing Remarks",
        location: "Galaxy Stage",
        speaker: ["Josh Lehman"]
      },
      {
        time: "6:15 - 8:15pm",
        content: "Downtime"
      },
      {
        time: "8:15 – 11pm",
        content: "Cocktail Party",
        location: "1111 Lincoln Road"
      }
    ],
  },
  {
    date: "Saturday 24th",
    events: [
      { time: "9 – 10am", content: "Registration and Coffee" },
      {
        time: "10:15 – 11am",
        content: "Tlon Presentation",
        location: "Galaxy Stage",
        speaker: ["Galen Wolfe-Pauly"]
      },
      {
        time: "11:15 – 12pm",
        content: "The Next Frontier",
        location: "Galaxy Stage",
        speaker: ["Trent Gillham"]
      },
      {
        time: "12 – 1pm",
        content: "Lunch",
        description: "(provided)"
      },
      {
        time: "1 – 2pm",
        type: "Panel",
        content: "Forking the American Codebase",
        location: "Star Stage",
        speaker: ["Justin Murphy",
          "Josh Rosenthal",
          "Soryu Forall",
          "~nilrun-mardux",
          "Mystery guest"],
        description: "​Can we reboot the American miracle on the digital plane? The Founding Fathers of the USA designed the most economically generative institutions in the history of government, but today American meatspace has been captured by an extractive geriatric class. Crypto is generating tremendous value and dynamism, but not yet new countries or national revolutions. What would it take to re-run the American experiment on digital rails?"
      },
      {
        time: "1 – 1:30pm",
        content: "How to Overthrow the Government with Vienna Hypertext",
        location: "Universe Stage",
        speaker: ["Finn Brown"],
        description: "Learn how small online communities can use Vienna for brainstorming, collaboration and idea discovery, now augmented by Urbit."
      },
      {
        time: "1:30 – 2pm",
        content: "Agent Transformers",
        speaker: ["~wicrum-wicrun"],
        location: "Universe Stage",
        description: "When adding functionality that is orthogonal to the core logic of an agent, extending it with off-the shelf middleware is often both conceptually simpler and more flexible than editing the code to support the new feature. But Gall currently lacks native support for this, and so many pitfalls and problems exist in practice. Come and learn how to avoid these, see examples of new middleware recently shipped by Quartus, and get a glimpse of where native support could take us in the future!",
      },
      {
        time: "2 – 3pm",
        type: "Panel",
        content: "Art After Everything",
        location: "Star Stage",
        description: "Great works of art pioneer and define what is beautiful. To truly go beyond our conventional ideas of what is ‘pretty’ or ‘attractive’ the artist has to push themselves into new territory and go beyond the familiar. In a world that is universally connected how does the artist carve out the space to meditate on what is beautiful? Where do new ways of seeing take shape?",
        speaker: ["Galen Wolfe-Pauly",
          "Petra Cortright",
          "Asher Penn",
          "Hamzat Raheem",
          "Lucien Smith"]
      },
      {
        time: "2 – 2:45pm",
        content: "The Clash of the US Regulators",
        location: "Universe Stage",
        speaker: ["Daniel Tramel Stabile", "Phillip Leon Euell", "Kim Prior"],
        description: "United States regulators are engaged in a turf war that ultimately will determine who has dominant jurisdiction over digital asset businesses. This talk will examine the current regulatory state of affairs, and what we can expect for the future. "
      },
      {
        time: "2:45 – 3:15pm",
        content: "The Sovereign Family",
        location: "Universe Stage",
        speaker: ["Stephen Galebach"]
      },
      {
        time: "3 – 4pm",
        content: "Hackathon Demo Projects",
        location: "Star Stage",
        description: "A new cohort of Urbit developers have been busy building for the last six weeks. See what they've made and vote for best in show!"
      },
      {
        time: "3:15 – 3:45pm",
        content: "Long-term lockout: Renter economies in the smart home",
        speaker: ["~pilwyc-fastec"],
        location: "Universe Stage",
        description: "Smart home device makers are trying to turn people into tenants of their own homes. Sharecropping for data, these new landlords are using the yield to power systems used for surveillance and coercion. In this talk ~pilwyc-fastec will show how services work in today’s homes and what we could do to make the future less bleak with Urbit."
      },
      {
        time: "4:15 – 4:45pm",
        content: "The Future of Building UI on Urbit",
        location: "Universe Stage",
        speaker: ["~nocsyx-lassul"],
        description: "An open forum to discuss and discover what we can do to bring better UI primitives and tooling to Urbit. The goal is to come away with a handful of paths for people to start chasing. Please come with questions, points of discussion, and any thoughts you have in this domain."
      },
      {
        time: "4:45 – 5:15pm",
        content: "Listening to Urbit Data",
        location: "Universe Stage",
        speaker: ["~witfyl-ravped"]
      },
      {
        time: "5:15 – 5:45pm",
        content: "poetrygrifting + voiding",
        location: "Universe Stage",
        speaker: ["@poetrygrifter", "@vincentevoid"],
        description: "poems about being highly online interspersed with music"
      },
      {
        time: "4:15 – 6pm",
        type: "Panel",
        content: "The Medium is the Message",
        description: "The public sphere has fragmented into walled gardens, some quite beautiful, owned by corporations like Reddit, Substack, Patreon, and legacy media companies. Can truly new subcultures and ideas grow in this soil, or are open new protocols needed?",
        location: "Galaxy Stage",
        speaker: ["Sam Frank",
          "Walter Kirn",
          "Anna Khachiyan",
          "Alex Lee Moyer",
          "Katherine Dee",
          "Noah Kumin"]
      },
      {
        time: "6 – 6:15pm",
        content: "Closing Remarks",
        location: "Galaxy Stage",
        speaker: ["Josh Lehman"]
      },
      {
        time: "8 – 10pm",
        content: "Alex's War",
        location: "Galaxy Stage",
        type: "Film"
      }
    ],
  },
  {
    date: "Sunday 25th",
    events: [
      { time: "9 – 10am", content: "Registration and Coffee" },
      {
        time: "10 – 10:30am",
        content: "Keynote",
        location: "Galaxy Stage",
        speaker: ["Balaji Srinivasan"]
      },
      {
        time: "10:45 – 11:45am",
        type: "Panel",
        content: "The Timeless Way of Building",
        location: "Galaxy Stage",
        speaker: ["Luke Stiles",
          "Philip Monk",
          "Ted Blackman",
          "~palfun-foslup"],
        description: "The Core Devs weigh in on building Urbit."
      },
      {
        time: "12 – 12:30pm",
        content: "Uqbar, Crypto's Execution Layer",
        location: "Galaxy Stage",
        speaker: ["~hocwyn-tipwex"],
        description: "The Uqbar Network combines ZK verification of smart contracts with the robust power of programming in a functional p2p operating system. This demo will unveil Uqbar's testnet, where smart contracts running Urbit's native Hoon language will give cryptocurrency the power of Urbit execution, and give all Urbit apps native blockchain access."
      },
      { time: "12:30 – 1:30pm", content: "Lunch", description: "(provided)" },
      {
        time: "1:30 – 2:30pm",
        type: "Panel",
        content: "Web3 Darwin Awards",
        description: "An exploration of the dumbest-of-all-time uses for Blockchain, circling toward an exploration of what Blockchains are actually useful for and what's still needed.",
        location: "Galaxy Stage",
        speaker: ["Brian Crain",
          "Lane Rettig",
          "Jake Brukhman",
          "Matt Condon"]
      },
      {
        time: "2 – 2:30pm",
        content: "Doccords: Docstrings for Hoon",
        location: "Universe Stage",
        description: "This is a preview of a new Hoon feature which allows you to attach formal comments to arbitrary Hoon expressions.",
        speaker: ["~datnut-pollen"]
      },
      {
        time: "2:30 – 3pm",
        content: "Tirrel Presentation",
        location: "Star Stage",
        speaker: ["Logan Allen", "Christian Langalis"]
      },
      {
        time: "2:30 – 3pm",
        content: "The Sovereign Tech Stack",
        location: "Universe Stage",
        speaker: ["~sipsen-pilser"]
      },
      {
        time: "3 – 3:15pm",
        content: "Dalten Collective: A Journey on Mars",
        location: "Star Stage",
        speaker: ["Kenny Rowe"],
        description: "The Dalten Collective is one of Urbit's oldest groups. Formed in early 2020, the collective has been experimenting and learning how to organize in the network age. Come and learn what it means to live a life of fellowship, sustainability, and sovereignty."
      },
      {
        time: "3:15 – 4pm",
        content: "Keeping software on Urbit human-friendly for the next century ",
        location: "Galaxy Stage",
        speaker: ["Nevin Freeman"]
      },
      {
        time: "3:15 – 4pm",
        content: "Getting Involved with Urbit",
        location: "Star Stage",
        speaker: ["~sarlev-sarsen", "~lagrev-nocfep"],
        description: "Excited by what you've seen throughout Assembly? Learn about the next steps you can take to join the Urbit ecosystem."
      },
      {
        time: "3:15 – 4pm",
        content: "Writing Uqbar Smart Contracts",
        location: "Universe Stage",
        speaker: ["~hodzod-walrus"],
        description: "gm au, Uqbar's testnet is now live. Learn how to write smart contracts in Hoon directly from an Uqbar engineer."
      },
      {
        time: "4 – 4:30pm",
        content: "Hackathon Awards",
        location: "Star Stage",
        description: "The votes are in, let's see who won."
      },
      {
        time: "4 – 4:30pm",
        content: "God Posting",
        location: "Universe Stage"
      },
      {
        time: "4:45 – 5:30pm",
        content: "Closing Keynote",
        location: "Galaxy Stage",
        speaker: ["Riva Tez"]
      }
    ],
  }
]
