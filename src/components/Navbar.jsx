function Navbar() {
  return (
    <>
      <div className="grid grid-col-3 grid-flow-col p-4">
        <img
          src="/logos/vitlogo-blue.jpg"
          alt="vit logo"
          className="w-44 h-20 rounded"
        />
        <div>
          <h1 className="text-center text-2xl font-semibold">
            VIRTUAL INTERNATIONAL CONFERENCE ON FUTURISTIC COMMUNICATION AND
            NETWORK TECHNOLOGIES
          </h1>
          <h1 className="text-center text-xl">
            (VICFCNT-2024) | December 10-11, 2024
          </h1>
          <p className="text-center">
            Vellore Institute of Technology (VIT, Chennai India) in joint
            collaboration with Universiti Tunku Abdul Rahman (UTAR, Sungai Long
            Campus Malaysia)
          </p>
        </div>
        <img src="/logos/Utar.jpg" alt="Utar logo" className="w-52" />
      </div>
    </>
  );
}

export default Navbar;
