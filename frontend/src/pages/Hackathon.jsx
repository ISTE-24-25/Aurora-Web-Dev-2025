import React, { useState } from "react";
import Teams from "../components/Teams";

const TeamManagementPage = () => {
  const [visibility, setVisibility] = useState("private");
  const [teamMembers] = useState([
    { id: 1, name: "John Doe", role: "Leader" },
    { id: 2, name: "Jane Smith", role: "Member" },
    { id: 3, name: "Alice Johnson", role: "Member" },
  ]);
  const [joinRequests] = useState([
    { id: 1, email: "abc@gmail.com" },
    { id: 2, email: "def@gmail.com" },
  ]);
  const [publicTeams] = useState([
    { id: 1, name: "Team Aurora", leader: "Souvik" },
    { id: 2, name: "Team Orion", leader: "Alex" },
  ]);

  const [showTeams, setShowTeams] = useState(false);

  const handleClose = () => {
    setShowTeams(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#1B1033] to-[#451A7A] text-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {!showTeams ? (
          <>
            <section>
              <h1 className="text-3xl font-bold mb-6 pt-20">Team Management</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  className="bg-gray-100 text-black rounded-lg shadow-md px-6 py-4 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() => setShowTeams(true)}
                >
                  <div>
                    <h2 className="text-xl font-bold">Create a Team</h2>
                    <p className="text-sm">
                      Bring your vision to life! Click here to assemble a team
                      and start collaborating towards your goals.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                </button>
                <button
                  className="bg-gray-100 text-black rounded-lg shadow-md px-6 py-4 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() => setShowTeams(true)}
                >
                  <div>
                    <h2 className="text-xl font-bold">Join a Team</h2>
                    <p className="text-sm">
                      Bring your vision to life! Click here to join a team and
                      start collaborating towards your goals.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Team</h2>
              <div className="flex gap-4 mb-4">
                <button
                  className={`px-4 py-2 rounded-lg text-white ${
                    visibility === "private"
                      ? "bg-[#6932E2]"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setVisibility("private")}
                >
                  Private
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-white ${
                    visibility === "public"
                      ? "bg-[#6932E2]"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setVisibility("public")}
                >
                  Public
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-[#1E1E2E] text-white rounded-xl p-4 flex flex-col items-center gap-4 shadow-md"
                  >
                    <div className="w-16 h-16 bg-[#FFFFFF20] rounded-full"></div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                    {member.role === "Leader" ? (
                      <button className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Leave
                      </button>
                    ) : (
                      <button className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Join Request</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {joinRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-[#1E1E2E] text-white rounded-xl p-4 flex flex-col items-center gap-4 shadow-md"
                  >
                    <div className="w-16 h-16 bg-[#FFFFFF20] rounded-full"></div>
                    <p className="text-sm text-center text-gray-400">
                      {request.email} would like to join your team.
                    </p>
                    <div className="flex gap-2">
                      <button className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Accept
                      </button>
                      <button className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Public Teams</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {publicTeams.map((team) => (
                  <div
                    key={team.id}
                    className="bg-[#1E1E2E] text-white rounded-xl p-4 flex flex-col items-center gap-4 shadow-md"
                  >
                    <div className="w-16 h-16 bg-[#FFFFFF20] rounded-full"></div>
                    <h3 className="text-lg font-bold">{team.name}</h3>
                    <p className="text-sm text-gray-400">
                      Leader: {team.leader}
                    </p>
                    <p className="text-sm text-gray-400">Visibility: Public</p>
                    <button className="bg-[#6932E2] text-white px-4 py-2 rounded-lg hover:bg-[#361c6e]">
                      Join Team
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <Teams onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

export default TeamManagementPage;
