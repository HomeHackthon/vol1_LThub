const Header = () => {
  return (
    <header className="text-white body-font bg-wineRed">
      <div className="container mx-auto flex py-5 flex-row justify-between">
        <a className="flex title-font font-medium items-center">
          <span className="ml-3 text-3xl md:ml-0">LThub</span>
        </a>
        <div className="mr-3 flex flex-row ">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-wineRed">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
