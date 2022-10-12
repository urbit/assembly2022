export default function Header({ title }) {
  return (


    <nav className="flex bg-black w-full justify-center">
      <ul className="flex space-x-.5 md:space-x-2 bg-black list-none self-center justify-center text-white py-4 ">

        <li className="sm:inline text-sm md:text-lg self-center">
          <img src="/assembly_type.svg" />
        </li>
      </ul>
    </nav>
  );
}
