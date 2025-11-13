import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function MapView({ selectedProfile }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <p className="text-center mt-4">Loading map...</p>;

  return (
    <div className="h-96 w-full mt-6 rounded-xl overflow-hidden shadow-md">
      <GoogleMap
        center={{
          lat: selectedProfile?.lat || 0,
          lng: selectedProfile?.lng || 0,
        }}
        zoom={10}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {selectedProfile && (
          <Marker
            position={{
              lat: selectedProfile.lat,
              lng: selectedProfile.lng,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}
