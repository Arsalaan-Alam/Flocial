export default function FeaturesPage(){
    return (
        <section className="max-w-8xl mx-auto container bg-white dark:bg-gray-900 pt-5">
  <div>
    <div role="contentinfo" className="flex items-center flex-col">
     
    <span className=" text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Features</span>
    </div>
    <div
      tabIndex={0}
      aria-label="group of cards"
      className="focus:outline-none mt-10 flex flex-wrap justify-center gap-10 px-4"
    >
      <div
        tabIndex={0}
        aria-label="card 1"
        className="focus:outline-none flex sm:w-full md:w-5/12 pb-10"
      >
        <div className="w-20 h-20 relative mr-5">
          <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
          <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
              alt="drawer"
            />
          </div>
        </div>
        <div className="w-10/12">
          <h2
            tabIndex={0}
            className="focus:outline-none text-lg font-bold leading-tight text-gray-800 dark:text-white"
          >
            Standardized Uniformity
          </h2>
          <p
            tabIndex={0}
            className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
          >
            Flocial establishes a decentralized social networking protocol for Flow, ensuring consistency and uniformity across games, apps, and assets within the Flow ecosystem. Any dApp interested in flocial, can easily integrate it's protocol by interacting with our open sourced smart contract.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        aria-label="card 2"
        className="focus:outline-none flex sm:w-full md:w-5/12 pb-10"
      >
        <div className="w-20 h-20 relative mr-5">
          <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
          <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
              alt="check"
            />
          </div>
        </div>
        <div className="w-10/12">
          <h2
            tabIndex={0}
            className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white"
          >
            Efficient Profile Management
          </h2>
          <p
            tabIndex={0}
            className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
          >
             Flocial's client dApp allows users to connect their wallet addresses and manage their profile details, such as name, username, email, description, and avatar. This information is securely stored on the blockchain, enabling seamless integration with other dApps that utilize Flocial's protocol.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        aria-label="card 3"
        className="focus:outline-none flex sm:w-full md:w-5/12 pb-10"
      >
        <div className="w-20 h-20 relative mr-5">
          <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
          <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
              alt="html tag"
            />
          </div>
        </div>
        <div className="w-10/12">
          <h2
            tabIndex={0}
            className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white"
          >
            Enhanced Discoverability & Networking
          </h2>
          <p
            tabIndex={0}
            className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
          >
          Flocial incorporates an explore feature that enables users to browse registered profiles, facilitating social interactions, networking, and collaboration within the Web3 community. Additionally, Flocial's advanced search mechanism allows users to find individuals with specific keywords, fostering efficient collaborations and knowledge sharing.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        aria-label="card 4"
        className="focus:outline-none flex sm:w-full md:w-5/12 pb-10"
      >
        <div className="w-20 h-20 relative mr-5">
          <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
          <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
              alt="monitor"
            />
          </div>
        </div>
        <div className="w-10/12">
          <h2
            tabIndex={0}
            className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white"
          >
           Redefining Social dApps on Flow
          </h2>
          <p
            tabIndex={0}
            className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
          >
            Flocial establishes independent social graphs for users on the platform, redefining social networking in the flowverse. Future updates will introduce features such as post publishing, comments, user following, and more, enabling decentralized social interactions and community building on the Flow blockchain.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}