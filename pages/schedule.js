import Nav from '@components/Nav';
import Head from 'next/head';
import cn from 'classnames';
import { useState } from 'react';

export default function Schedule() {
    const [current, setCurrent] = useState(0);

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
                    className="w-100 left-2 top-1 flex sm:block sm:absolute"
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
            className="bg-purple w-full text-white py-32 px-8 lg:px-0 flex flex-col items-center justify-center"
            id="schedule"
        >
            <div className="max-w-screen-md w-full flex flex-col space-y-16 items-center">
                <h1 className="text-3xl font-regular tracking-widest uppercase">
                    Schedule
                </h1>
                <div className="flex space-x-4 overflow-x-auto">
                    {["THUR 22", "FRI 23", "SAT 24", "SUN 25"].map((day, i) => (
                        <div className={cn("shrink-0 uppercase font-bold border-2 border-white rounded-xl px-4 py-2 cursor-pointer",
                            "hover:bg-white hover:text-purple",
                            {
                                "bg-white text-purple": i === current
                            })}
                            onClick={() => setCurrent(i)}>
                            {day}
                        </div>
                    ))}
                </div>
                {Object.values(schedule).filter((day, i) => i === current).map((day) => {
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
                                                    { event.type && (
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

                                                { event.description && (

                                                <div className="w-full grid grid-cols-3 pb-8 items-top justify-center border-white">
                                                    <p></p>
                                                    <div className="flex flex-col col-span-3 sm:col-span-2">
                                                        <p className="pb-4">{event.description}</p>
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                                ) }

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
                time: "2pm",
                content:
                    "Beach pre-registration",
                location: ""
            },
        ],
    },
    {
        date: "Friday 23rd",
        events: [
            { time: "12 - 2pm", content: "Registration and Coffee" },
            {
                time: "2 – 2:15pm",
                content: "Opening",
                location: "Galaxy Stage",
                speaker: ["Josh Lehman"]
            },
            {
                time: "2:15 – 3pm",
                content: "Keynote",
                location: "Galaxy Stage",
                speaker: ["Riva Tez"]
            },
            {
                time: "3:15 – 4pm",
                content: "Hardware Talks",
                location: "Star Stage"
            },
            {
                time: "3:15 – 3:30pm",
                content: "DAOs in El Salvador",
                location: "Universe Stage",
                speaker: ["Stephen Galebach"]
            },
            {
                time: "3:30 – 4pm",
                content: "%flappy-bird workshop",
                location: "Universe Stage",
                speaker: ["N E Davis"]
            },
            {
                time: "4 – 4:30pm",
                type: "Panel",
                content: "Hardware",
                location: "Star Stage",
                speaker: ["Ryan King",
                    "~hodzod-walrus",
                    "~mopfel-winrux",
                    "~lomped-firser"]
            },
            {
                time: "5 – 6pm",
                type: "Panel",
                content: "New Institutions in the Network Age",
                description: "Blockchains, DAOs, and Urbit seek to re-architect networked computing with foundational software primitives.  What does this mean for the Information Age? If 90% of all data in the world was created in the last two years, is big data being diluted by its own accumulation? As artists and creators gravitate towards hyper-local networks, is a more provincial internet possible or preferable?",
                location: "Galaxy Stage",
                speaker: ["Riva Tez",
                    "Dryden Brown",
                    "Aaron Wright",
                    "Samo Burja"]
            },
            {
                time: "6 – 6:15pm",
                content: "Day 1 Closing",
                location: "Galaxy Stage",
                speaker: ["Josh Lehman"]
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
                content: "Holium Presentation",
                location: "Galaxy Stage",
                speaker: ["Trent Gillham"]
            },
            {
                time: "12 – 1pm",
                content: "Lunch"
            },
            {
                time: "1 – 2pm",
                type: "Panel",
                content: "Forking the American Codebase",
                location: "Star Stage",
                speaker: ["Justin Murphy",
                    "Josh Rosenthal",
                    "Soryu Forall",
                    "~nilrun-mardux"]
            },
            {
                time: "1 – 1:30pm",
                content: "How to Overthrow the Government using Vienna Hypertext",
                location: "Universe Stage"
            },
            {
                time: "1:30 – 2pm",
                content: "Dalten talk",
            },
            {
                time: "2 – 3pm",
                type: "Panel",
                content: "Art After Everything",
                location: "Star Stage",
                description: "Artists and intellectuals are exiting universities, museums, and other sanctified institutional spaces en masse. In an age of aesthetic poverty, can the timeless principles of truth and beauty be re-imagined through digital self-sovereignty?  Why do the majority of art institutions still reject the existence and visual language of internet culture? Is beauty a public good? Should artists attempt to disentangle morality from aesthetics? And If the world is really ending, why not let the children touch the paintings?",
                speaker: ["Galen Wolfe-Pauly",
                    "Petra Cortright",
                    "Asher Penn",
                    "Hamzat Raheem"]
            },
            {
                time: "2 – 2:45pm",
                content: "The Clash of the US Regulators",
                location: "Universe Stage",
                speaker: ["Daniel Stabile", "Kim Prior"]
            },
            {
                time: "2:45 – 3:15pm",
                content: "The Sovereign Family",
                location: "Universe Stage",
                speaker: ["Stephen Galebach"]
            },
            {
                time: "3:15 – 3:45pm",
                content: "Long-term lockout: Renter economies in the smart home",
                location: "Universe Stage",
                speaker: ["~pilwyc-fastec"]
            },
            {
                time: "3 – 4pm",
                content: "Hackathon Demo Projects",
                location: "Star Stage"
            },
            {
                time: "4:15 – 4:45pm",
                content: "The Future of Building UI on Urbit",
                location: "Universe Stage",
                speaker: ["~nocsyx-lassul"]
            },
            {
                time: "4:45 – 5:15pm",
                content: "Listening to Urbit Data",
                location: "Universe Stage"
            },
            {
                time: "5:15 – 5:45pm",
                content: "poetrygrifting + voiding",
                location: "Universe Stage",
                speaker: ["@poetrygrifter","@vincentevoid"]
            },
            {
                time: "4:15 – 6pm",
                type: "Panel",
                content: "The Medium is the Message",
                description: "The public sphere has fragmented into walled gardens, some quite beautiful, owned by corporations like Reddit, Substack, Patreon, and legacy media companies. Can truly new subcultures and ideas grow in this soil, or are open new protocols needed? Does a healthy public discourse require a secure network for private discussion? What can and can't we say out loud today?",
                location: "Galaxy Stage",
                speaker: ["Sam Frank",
                    "Walter Kirn",
                    "Anna Khachiyan",
                    "Alex Lee Moyer",
                    "Noah Kumin"]
            },
            {
                time: "6 – 6:15pm",
                content: "Day 2 Closing",
                location: "Galaxy Stage",
                speaker: ["Josh Lehman"]
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
                    "Joe Bryan",
                    "~palfun-foslup"]
            },
            {
                time: "12 – 12:30pm",
                content: "Uqbar Presentation",
                location: "Galaxy Stage"
            },
            { time: "12:30 – 1:30pm", content: "Lunch" },
            {
                time: "1:30 – 2:30pm",
                type: "Panel",
                content: "Web3 Darwin Awards",
                description: "An exploration of the dumbest-of-all-time uses for Blockchain, circling toward an exploration of what Blockchain is actually useful for. Is 365 million dollars for two large cheese pizzas overpriced? Was Jack Dorsey’s first tweet NFT underpriced?",
                location: "Galaxy Stage",
                speaker: ["Brian Crain",
                    "Lane Rettig",
                    "Jake Brukhman",
                    "Matt Condon"]
            },
            {
                time: "1:30 – 2pm",
                content: "Communal Computing",
                location: "Universe Stage",
                speaker: ["Chris Butler"]
            },
            {
                time: "2 – 2:30pm",
                content: "Doccords – Docstrings for Hoon",
                location: "Universe Stage",
                speaker: ["~datnut-pollen"]
            },
            {
                time: "2:30 – 3pm",
                content: "Tirrel Presentation",
                location: "Star Stage"
            },
            {
                time: "2:30 – 3pm",
                content: "The Sovereign Tech Stack by Odysseas",
                location: "Universe Stage"
            },
            {
                time: "3 – 3:15pm",
                content: "Dalten Announcement",
                location: "Star Stage"
            },
            {
                time: "3:15 – 4pm",
                content: "Sponsor Keynote",
                location: "Galaxy Stage",
                speaker: ["Nevin Freeman"]
            },
            {
                time: "3:15 – 4pm",
                content: "Getting Involved with Urbit",
                location: "Star Stage",
                speaker: ["~sarlev-sarsen"]
            },
            {
                time: "3:15 – 4pm",
                content: "Writing Uqbar Smart Contracts",
                location: "Universe Stage"
            },
            {
                time: "4 – 4:30pm",
                content: "Hackathon Awards",
                location: "Star Stage"
            },
            {
                time: "4 – 4:30pm",
                content: "God Posting",
                location: "Universe Stage"
            },
            {
                time: "4:30 – 5:30pm",
                content: "Assembly Closing",
                location: "Galaxy Stage",
                speaker: ["Josh Lehman"]
            }
        ],
    }
]