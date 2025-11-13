import { Link } from "react-router-dom";

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:shadow-xl transition-all duration-200">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 rounded-full mb-3 border-2 border-blue-500"
      />
      <h2 className="font-semibold text-lg">{profile.name}</h2>
      <p className="text-gray-600 text-sm text-center mb-2">{profile.description}</p>
      <Link
        to={`/profile/${profile.id}`}
        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
      >
        View Summary
      </Link>
    </div>
  );
}
