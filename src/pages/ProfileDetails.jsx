import { useParams, Link } from "react-router-dom";
import profiles from "../data/profiles.json";
import MapView from "../components/MapView";

export default function ProfileDetails() {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === Number(id));

  if (!profile) return <p className="p-6 text-center">Profile not found.</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 underline">← Back</Link>
      <div className="mt-4 bg-white shadow-lg p-6 rounded-xl">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-2 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600 mt-1">{profile.description}</p>
            <p className="mt-2 font-medium text-gray-800">{profile.address}</p>
          </div>
        </div>
        <MapView selectedProfile={profile} />
      </div>
    </div>
  );
}