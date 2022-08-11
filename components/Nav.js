export default function Header({ title }) {
  return (

      <nav className="list-none flex space-x-4 text-gray relative justify-center">
        <li className="text-sm md:text-lg ">
          <a href="#about">About</a>
        </li>
        <li className="text-sm md:text-lg ">
          <a href="#schedule">Schedule</a>
        </li>
        <li className="text-sm md:text-lg ">
          <a href="#speakers">Speakers</a>
        </li>
        <li className="text-sm md:text-lg ">
          <a href="#contact">Contact</a>
        </li>
      </nav>
  );
}
