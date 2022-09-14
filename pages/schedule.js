import Nav from '@components/Nav';
import cn from 'classnames';
import { useState } from 'react';

export default function Schedule() {
    const [current, setCurrent] = useState(0);

    return <div className="min-h-screen bg-purple min-w-screen flex flex-col items-center">
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
                                <p>{day.date}</p>
                            </div>
                            <DottedRule />
                            <div className="w-full flex flex-col">
                                {day.events.map((event) => {
                                    return (
                                        <>
                                            <div className="w-full grid grid-cols-3 py-8 items-center justify-center border-white">
                                                <p>{event.time}</p>
                                                <div className="flex flex-col">
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
                location: "?"
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
                time: "3:15 – 4pm",
                content: "Flappy Bird",
                location: "Universe Stage",
                speaker: ["N E Davis"]
            },
            {
                time: "4 – 4:30pm",
                content: "Panel: Hardware",
                location: "Star Stage",
                speaker: ["Ryan King",
                    "~hodzod-walrus",
                    "~mopfel-winrux",
                    "~lomped-firser"]
            },
            {
                time: "4 – 4:30pm",
                content: "Long-term lockout: Renter economies in the smart home",
                location: "Universe Stage"
            },
            {
                time: "5 – 6pm",
                content: "Panel: New Institutions in the Network Stage",
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
                content: "Cocktail Party"
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
                content: "Panel: Forking the American Codebase",
                location: "Star Stage",
                speaker: ["Justin Murphy",
                    "Josh Rosenthal",
                    "Soryu Forall",
                    "~nilrun-mardux"]
            },
            {
                time: "1 – 1:30pm",
                content: "Vienna Hypertext Presentation",
                location: "Universe Stage"
            },
            {
                time: "1:30 – 2pm",
                content: "Dalten talk",
            },
            {
                time: "2 – 3pm",
                content: "Panel: Art After Everything",
                location: "Star Stage",
                speaker: ["Galen Wolfe-Pauly",
                    "Petra Cortright",
                    "Asher Penn",
                    "Hamzat Raheem"]
            },
            {
                time: "2 – 2:45pm",
                content: "The Clash of the US Regulators",
                location: "Universe Stage"
            },
            {
                time: "2:45 – 3:15pm",
                content: "The Sovereign Family",
                location: "Universe Stage",
                speakers: ["Stephen Galebach"]
            },
            {
                time: "3 – 4pm",
                content: "Hackathon Demo Projects",
                location: "Star Stage"
            },
            {
                time: "4:15 – 4:45pm",
                content: "The Future of Building UI on Urbit",
                location: "Universe Stage"
            },
            {
                time: "4:45 – 5:15pm",
                content: "Listening to Urbit Data",
                location: "Universe Stage"
            },
            {
                time: "5:15 – 5:45pm",
                content: "poetrygrifting + voiding",
                location: "Universe Stage"
            },
            {
                time: "4:15 – 6pm",
                content: "Panel: The Medium is the Message",
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
                content: "Panel: The Timeless Way of Building",
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
                content: "Panel: Web3 Darwin Awards",
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
                content: "Doccords – “Docstrings for Hoon”",
                location: "Universe Stage"
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
                time: "3 – 3:15pm",
                content: "El Salvador DAO Law",
                location: "Universe Stage"
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