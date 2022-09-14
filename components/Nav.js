export default function Header({ title }) {
  return (


    <nav className="flex bg-black w-full justify-center">
      <ul className="flex space-x-2 md:space-x-2 bg-black list-none self-center justify-center text-white py-4 ">
        <li className="text-sm md:text-lg self-center ">
          <a href="/#about ">About</a>
        </li>
        <li className="text-sm md:text-lg self-center">
          <a href="/#speakers">Speakers</a>
        </li>
        <li className="text-sm md:text-lg self-center ">
          <a href="/#contact">Contact</a>
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
          <a href="/schedule"
            className="text-sm md:text-lg py-2 px-4 rounded-md text-black bg-green">
            Schedule
          </a>
        </li>
      </ul>
    </nav>
  );
}
