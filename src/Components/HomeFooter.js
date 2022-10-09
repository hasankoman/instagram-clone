export default function HomeFooter() {
  return (
    <footer className="flex text-[#c7c7c7] flex-col text-xs gap-5 items-start mt-6">
      <ul className=" flex flex-wrap gap-y-1">
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            <span>About</span>
          </a>
        </li>
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            Help
          </a>
        </li>
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            Press
          </a>
        </li>
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            API
          </a>
        </li>
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            Jobs
          </a>
        </li>
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            Privacy
          </a>
        </li>
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            Terms
          </a>
        </li>
        <li className="after:content-['\00B7'] after:mx-1">
          <a href="#!" className="hover:underline">
            Locations
          </a>
        </li>
        <li>
          <a href="#!">Language</a>
        </li>
      </ul>

      <div className="flex">
        <span>© 2022 INSTAGRAM FROM META</span>
      </div>
    </footer>
  );
}
