import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world!",
    imageUrl: "https://images.unsplash.com/photo-1772551403022-58288ec55944?q=80&w=1170&auto=format&fit=crop",
    address: "20 W 34th St, New York, NY 10001, United States",
    coordinates: { lat: 40.7484405, lng: -73.9878584 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    description: "A colossal neoclassical sculpture on Liberty Island.",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c1b8c69fb8?w=1200&auto=format&fit=crop&q=80",
    address: "Liberty Island, New York, NY 10004, United States",
    coordinates: { lat: 40.689247, lng: -74.044502 },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return loadedPlaces.length === 0 
    ? <h2>No places found for this user.</h2>
    : <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;