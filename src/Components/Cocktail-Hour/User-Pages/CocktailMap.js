// import { useState, useEffect } from 'react'
// import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api'
// import axios from 'axios'

// const CocktailMap = () => {

//     const cocktail = process.env.NEXT_PUBLIC_API_COCKTAIL_HOUR

//     const [locations, setLocations] = useState([])
//     const [selectedLocation, setSelectedLocation] = useState(null)
//     const [editedNotes, setEditedNotes] = useState('')

//     const getLocationsPoints = async () => {
//         try {
//             const response = await axios.get(`${cocktail}/locations`)
//             selectedLocation(response.data)
//             console.log(response.data)
//         } catch (error) {
//             console.log('error in getLocationsPoints', error)
//         }
//     }

//     useEffect(() => {
//         getLocationsPoints()
//     }, [])

//     const handleInfoWindowClose = (e) => {
//         setEditedNotes(e.target.value)
//     }

//     const handleEditNotes = (e) => {
//         setEditedNotes(e.target.value)
//     }

//     // const handleSaveNotes = async () => {
//     //     try {
//     //         const response = await axios.put(`${cocktail}/users/${selectedLocation.user_id}`, {notes: editedNotes})
//     //     } catch (error) {
//     //         console.log('error in saveNotes', error)
//     //     }
//     // }

//     const mapContainerStyle = {
//         width: '100%',
//         height: '100vh'
//     }

//     const center = {
//         lat: 32.7767,
//         lng: -96.7970
//     }

//     return (
//         <div className="hero min-h-screen" style={{backgroundColor: 'black'}}>
//             <div>
//                 <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY} >
//                     <GoogleMap
//                         mapContainerStyle={mapContainerStyle}
//                         center={center}
//                         zoom={12}
//                     >
//                     {locations.map((location, index) => (
//                         <Marker
//                             key={index}
//                             position={{
//                                 lat: location.lat,
//                                 lng: location.long
//                             }}
//                             onClick={() => {
//                                 selectedLocation(location)
//                                 console.log('success on the marker onClick', location)
//                             }}
//                         >
//                             {selectedLocation === location && (
//                                 <InfoWindow onCloseClick={handleInfoWindowClose}>
//                                     <div>
//                                         <h3>Notes:</h3>
//                                         <p>{location.notes}</p>
//                                         <textarea
//                                             value={editedNotes}
//                                             onChange={handleEditNotes}
//                                         />
//                                         <button onClick={handleSaveNotes}>Save</button>
//                                     </div>
//                                 </InfoWindow>
//                             )}
//                         </Marker>
//                     ))}
//                     </GoogleMap>
//                 </LoadScript>
//             </div>
//         </div>
//     )
// }

// export default CocktailMap


// import { useState, useEffect } from "react";
// import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
// import axios from "axios";

// function MapView() {
//     const [locations, setLocations] = useState([]);
//     const [selectedLocation, setSelectedLocation] = useState(null); // To track selected location for info window
//     const [editedNotes, setEditedNotes] = useState(""); // To track edited notes

//     const getLocationsPoints = async () => {
//         try {
//             const response = await axios.get('http://localhost:1234/locations');
//             setLocations(response.data);
//             console.log(response.data)
//         } catch (err) {
//             console.log('error in get axios', err);
//         }
//     }

//     useEffect(() => {
//         getLocationsPoints();
//     }, []);

//     const handleInfoWindowClose = () => {
//         setSelectedLocation(null);
//     };

//     const handleEditNotes = (event) => {
//         setEditedNotes(event.target.value);
//     };

//     const handleSaveNotes = async () => {
//         try {
//             const response = await axios.put(`http://localhost:1234/users/${selectedLocation.user_id}`, {
//                 notes: editedNotes
//             });
//             // Handle successful update (e.g., show a notification)
//             console.log("Notes updated:", response.data);
//         } catch (err) {
//             console.log('error in put axios', err);
//         }
//     };

//     const mapContainerStyle = {
//         width: "100%",
//         height: "100vh"
//     };

//     const center = {
//         lat: 32.7767,
//         lng: -96.7970
//     };

//     return (
//         <div>
//             <h2>Google Map View</h2>
//             <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 center={center}
//                 zoom={12}
//             >
//                 {locations.map((location, index) => (
//                     <Marker
//                         key={index}
//                         position={{
//                             lat: location.lat,
//                             lng: location.long
//                         }}
//                         onClick={() => {
//                             setSelectedLocation(location)
//                             console.log('line 73', location)
//                         }}
//                     >
//                         {/* Check if this marker is the selected one */}
//                         {selectedLocation === location && (
//                             <InfoWindow onCloseClick={handleInfoWindowClose}>
//                                 <div>
//                                     <h3>Notes:</h3>
//                                     <p>{location.notes}</p>
//                                     <textarea
//                                         value={editedNotes}
//                                         onChange={handleEditNotes}
//                                     />
//                                     <button onClick={handleSaveNotes}>Save</button>
//                                 </div>
//                             </InfoWindow>
//                         )}
//                     </Marker>
//                 ))}
//             </GoogleMap>
//         </div>
//     );
// }

// export default MapView;