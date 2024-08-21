import React from "react";
import TrackList from "../components/TrackList";

const CallForPapers = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap flex-col items-center justify-center mx-auto">
      {/* <p className="text-xl text-center font-semibold">
        <span className="text-blue-800">VICFCNT</span> invites you to submit
        your research work via the Online Submission Portal. Make sure the
        submitted paper should not have been submitted or published previously
        anywhere else. There are <span className="text-blue-800">7 Tracks</span>{" "}
        to choose from. All selected and presented papers in the conference will
        be published in{" "}
        <span className="text-blue-800">Scopus Indexed Publication</span>
      </p> */}

      <h1 className="mt-10 text-3xl font-bold uppercase text-[#35575a]">
        Tracks
      </h1>
      <div className="mt-2 h-0.5 w-[20%] sm:w-[10%] bg-[#35575a] rounded-md"></div>

      <TrackList />
    </div>
  );
};

export default CallForPapers;
