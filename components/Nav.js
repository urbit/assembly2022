export default function Header({ title }) {
  return (


    <nav className="flex bg-black w-full justify-center">
      <ul className="flex space-x-.5 md:space-x-2 bg-black list-none self-center justify-center text-white py-4 ">

        <li className="hidden sm:inline text-sm md:text-lg self-center ">
          <a href="/#about ">About</a>
        </li>
        <li className="hidden sm:inline text-sm md:text-lg self-center">
          <a href="/#speakers">Speakers</a>
        </li>
        <li className="hidden sm:inline text-sm md:text-lg self-center ">
          <a href="/#contact">Contact</a>
        </li>

        <li className="text-sm sm:hidden md:text-lg self-center ">
          <a href="/"
            className="text-sm md:text-lg py-2 px-4 rounded-md text-black bg-lavender">
            Index
          </a>
        </li>

        <li className="text-sm md:text-lg self-center">
          <a
            href="https://www.eventbrite.com/e/urbit-assembly-2022-tickets-370588930467"
            target="_blank"
            className="text-sm md:text-lg py-2 px-4 rounded-md text-black bg-melon">
            Register
          </a>
        </li>
        <li className="text-sm md:text-lg self-center">
          <a href="/schedule?day=0"
            className="text-sm md:text-lg py-2 px-4 rounded-md text-black bg-green">
            Schedule
          </a>
        </li>
      </ul>
    </nav>
  );
}
