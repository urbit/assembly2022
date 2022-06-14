export default function Header({ title }) {
  return (
    <nav className="type-ui list-none flex space-x-4 text-gray">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#schedule">Schedule</a>
      </li>
      <li>
        <a href="#speakers">Speakers</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </nav>
  );
}
