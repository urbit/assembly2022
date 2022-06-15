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
      <section
        className="bg-red flex flex-col space-y-16 py-32 items-center px-8 lg:px-0"
        id="about"
      >
        <h1 className="text-4xl font-semibold tracking-widest uppercase">
          About
        </h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-32 lg:space-y-0">
          <div className="flex flex-col space-y-8">
            <p className="text-lg">
              Assembly 2022 is our second annual unconference.
            </p>
            <ul className="list-['-'] pl-1">
              <li>Learn about building applications on Urbit.</li>
              <li>Work and create on a platform that is fully owned by you.</li>
              <li>
                Meet the growing ecosystem of communities and businesses built
                on Urbit.
              </li>
            </ul>
            <p>
              If you're simply into calm computing, there will be plenty of that
              too.
            </p>
          </div>
          <div className="flex flex-col space-y-8">
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
        <div className="max-w-screen-lg w-full flex flex-col space-y-16 items-center">
          <h1 className="text-4xl font-semibold tracking-widest uppercase">
            Schedule
          </h1>
          <hr className="border-4 w-full" />
          <h1 className="text-2xl font-bold">TBA</h1>
        </div>
      </section>
      <section
        className="bg-yellow py-32 px-8 lg:px-0 flex flex-col space-y-16 items-center"
        id="speakers"
      >
        <h1 className="text-4xl font-semibold tracking-widest uppercase">
          Speakers
        </h1>
        <h1 className="text-2xl font-bold">TBA</h1>
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
            2022. If you need financial assistance, please reach out via the
            following email form.
          </p>
          {/* Form needed */}
        </div>
      </section>
    </div>
  );
}
