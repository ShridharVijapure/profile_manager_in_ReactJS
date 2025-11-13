import { useState } from "react";
import profiles from "../data/profiles.json";
import ProfileCard from "../components/ProfileCard";
import MapView from "../components/MapView";

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">User Profiles</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((p) => (
          <div key={p.id} onClick={() => setSelectedProfile(p)}>
            <ProfileCard profile={p} />
          </div>
        ))}
      </div>

      {selectedProfile && (
        <MapView selectedProfile={selectedProfile} />
      )}
    </div>
  );
}
