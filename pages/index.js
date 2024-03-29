import Head from "next/head";
import Nav from "@components/Nav";

const talks = [
  {
    title: "Uqbar: Crypto's Execution Layer",
    youTubeId: "0TvIqmvHqGU",
    description: "Uqbar co-founder ~hocwyn-tipwex discusses how Uqbar is using Urbit to realize the dream of crypto."
  },
  {
    title: "Urbit and The Network State",
    youTubeId: "nAmSj5JpHNo",
    description: "Entrepreneur, investor, and author of The Network State, Balaji Srinivasan delivers a keynote on how decentralized protocols will shape the future of the state."
  },

  {
    title: "Holium: The Next Frontier",
    youTubeId: "Q-MtMu-Jbf4",
    description: "Holium Founder and CEO Trent Gilham shares his vision for the possibilities of Urbit and offers a preview of Holium's flagship product."
  },

  {
    title: "The Elephant in the Room",
    youTubeId: "vCu9FoNnmWg",
    description: "Lane Rettig, Brian Crain, Jake Brukhman, and Matt Condon discuss the state of the blockchain world and how it's all connected to Urbit."
  },
  {
    title: "New Institutions in the Network Age",
    youTubeId: "Srl9tHz9OQA",
    description: "Riva Tez moderates a discussion on the state of existing institutions and the opportunities for technologies like Urbit to create and shape new ones.  Featuring Samo Burja, Aaron Wright, Dryden Brown, and Casey Caruso."
  },

  {
    title: "The Medium is the Message",
    youTubeId: "7g72HUbk_0Q",
    description: "Sam Frank moderates a discussion on the purpose and potential of communications technologies in the current sociocultural landscape.  Featuring Alex Lee Moyer, Walter Kirn, Katherine Dee and Walter Kirn."
  },

  {
    title: "Urbit Core Development: The Timeless Way of Building",
    youTubeId: "RIMJ0kZM1DY",
    description: "Urbit's core development team discusses the state of Urbit and what can be expected in the near and not-so-near future."
  },

  {
    title: "Tlon: A New Landscape",
    youTubeId: "3K3D9LGzvBA",
    description: "Galen Wolfe-Pauly, CEO of Tlon Corporation, presents a brief history of computing, examines the problems with social software as it exists today, and offers a vision of the future where we own our digital tools. He's joined on stage by Marisa Rowland, Tlon's VP of Product, to demo the upcoming renovations to Landscape, an OS for Urbit."
  },

  {
    title: "Human-friendly Software on Urbit",
    youTubeId: "bTNAtgfRaUc",
    description: "Reserve CEO and co-founder Nevin Freeman discusses the social and technological conditions that make software unfriendly today, and the vision that Urbit and cryptocurrencies like Reserve offer for friendlier computers, software, and networks."
  },

  {
    title: "Opening Talk: Make Computers Personal Again",
    youTubeId: "zDuaGi6Jbrk",
    description: "Josh Lehman, Executive Director of the Urbit Foundation, opens Assembly 2022 with a review of the extraordinary developments of the past year and a call to make computing more personal again."
  }


];

const articles = [
  {
    title: "The New Cyberpunk",
    description: "The old cyberpunk builds an artificial womb under the glow of Tokyo neon. The new cyberpunk builds a boring personal computer in an Austin garage before Latin Mass.",
    image: "https://storage.googleapis.com/media.urbit.org/assembly/articles/P1000046.jpeg",
    publication: "Other Life",
    url: "https://www.otherlife.co/cyberpunk/"
  },
  {
    title: "Three Things #37: October 2, 2022",
    description: "Lane Rettig reflects on his experience at Assembly 2022 and the offers his view on the key takeaways.",
    image: "https://media.urbit.org/assembly/threethings.png",
    publication: "Three Things",
    url: "https://rettig.substack.com/p/three-things-37-october-2-2022"
  },
  {
    title: "My Weekend With the Martians",
    description: "At the Assembly, a conference of Urbit denizens, Ruby Sutton discovers a community of eccentrics who dare to dream of a different internet.",
    image: "https://media.urbit.org/assembly/articles/astramag.png",
    publication: "Astra",
    url: "https://astra-mag.com/articles/my-weekend-with-the-martians/"
  },
  {
    title: "User Error: A More Beautiful Computer",
    description: "From Dimes Square to the Network State, new frontiers are in the making. Adina Glickstein attends Urbit Assembly and considers the politics of tech-augmented exit.",
    image: "https://media.urbit.org/assembly/articles/spikeart.png",
    publication: "SpikeArt",
    url: "https://www.spikeartmagazine.com/?q=articles/user-error-more-beautiful-computer"
  },
  {
    title: "Urbit Assembly: If We’re All Here, Who’s Watching The Internet?",
    description: "Forever Magazine founder and Zora Zine contributor Madeline Cash reports on secret societies, subjective idealism, and digital intimacy in her dispatch from Urbit Assembly in Miami",
    image: "https://media.urbit.org/assembly/articles/9daba4d3452ea2587b8acc232ef1a4c4cf3bb011-1650x1213.jpg",
    publication: "Zora Zine",
    url: "https://zine.zora.co/urbit-assembly-miami-dispatch"
  },
  {
    title: "The Dream of Digital Homesteading",
    description: "Compact Managing Editor Geoff Schullenberger attends Assembly 2022 and chronicles his impressions and thoughts.",
    image: "https://media.urbit.org/assembly/articles/homesteading.png",
    publication: "Compact",
    url: "https://compactmag.com/article/the-dream-of-digital-homesteading"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col relative">
      <Head>
        <title>Urbit Assembly 2022</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@urbit" />
        <meta name="twitter:creator" content="@urbit" />
        <meta name="twitter:title" content="Urbit Assembly 2022" />
        <meta
          name="twitter:description"
          content="The second ever Urbit confluence."
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/media.urbit.org/assembly/assembly-card-2.png"
        />
      </Head>
      {/* Hero + Nav */}
      <header
        className="flex items-center flex-col bg-cover sm:bg-contain bg-no-repeat bg-center sticky top-0"
      >
        <div className="w-full flex text-center justify-center bg-black">
          <a
            href="https://urbit.org"
            className="w-100 left-1 sm:left-2 top-1 sm:top-2 block absolute"
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
      {/* Talks */}
      <section id="talks" className="bg-dark-purple text-white flex flex-col space-y-16 py-32 items-center px-8 xl:px-0">
        <h2 className="text-3xl font-regular tracking-widest uppercase text-center">Talks &amp; Panels</h2>
        {talks.map((talk) => {
          return (
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-8 lg:flex-row items-center">
              <img className="max-h-[256px] h-auto w-auto min-w-0 min-h-0" src={`https://img.youtube.com/vi/${talk.youTubeId}/maxresdefault.jpg`} />
              <div className="flex flex-col space-y-4 max-w-prose">
                <h1 className="text-xl pb-0">{talk.title}</h1>
                <p className="pb-4">{talk.description}</p>
                <a target="_blank" className="button-lg uppercase font-roboto border-white w-fit border-2" href={`https://www.youtube.com/watch?v=${talk.youTubeId}`}>
                  <img src="/play.svg" className="pr-2" />
                  Play on YouTube
                </a>
              </div>
            </div>
          )
        })}
      </section>
      {/* Articles */}
      <section id="articles" className="bg-green flex flex-col space-y-16 py-32 items-center px-8 xl:px-0">
        <h2 className="text-3xl font-regular tracking-widest uppercase text-center">Articles</h2>
        {articles.map((article) => {
          return (
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-8 lg:flex-row items-center">
              <div className="aspect-video max-h-[256px] min-w-0 min-h-0 items-center overflow-hidden lg:basis-1/3">
                <img className="h-full w-full object-cover min-h-0 min-w-0" src={article.image} />
              </div>
              <div className="flex flex-col space-y-4 max-w-prose">
                <h1 className="text-xl pb-0">{article.title}</h1>
                <p className="pb-4">{article.description}</p>
                <a target="_blank" className="button-lg w-fit font-roboto border-2" href={article.url}>Read on {article.publication}</a>
              </div>
            </div>
          )
        })}
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
        </div>
      </section>
    </div>
  );
}
