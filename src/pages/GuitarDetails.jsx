// import { useParams } from "react-router-dom";
// import { useQuery, gql } from "@apollo/client";
// import BrandHeader from "../components/BrandHeader.jsx";
//
// const GET_MODEL = gql`
//   query GetModel($brandId: ID!, $modelId: ID!) {
//     findUniqueModel(brandId: $brandId, modelId: $modelId) {
//       id
//       name
//       type
//       image
//       description
//       price
//       specs {
//         bodyWood
//         neckWood
//         fingerboardWood
//         pickups
//         tuners
//         scaleLength
//         bridge
//       }
//       musicians {
//         name
//         musicianImage
//         bands
//       }
//     }
//   }
// `;
//
// export default function GuitarDetails() {
//     const { brandId, modelId } = useParams();
//
//     const { data, loading, error } = useQuery(GET_MODEL, {
//         variables: { brandId, modelId }
//     });
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error fetching guitar</p>;
//
//     const guitar = data.findUniqueModel;
//     if (!guitar) return <p>Guitar not found</p>;
//
//     return ( <>
//
//         <BrandHeader />
//         <div>
//
//             <h1>{guitar.name}</h1>
//             <img src={guitar.image} alt={guitar.name} />
//             <p>{guitar.description}</p>
//             <p>Type: {guitar.type}</p>
//             <p>Price: ${guitar.price}</p>
//
//             <h2>Specifications</h2>
//             <ul>
//                 <li>Body: {guitar.specs.bodyWood}</li>
//                 <li>Neck: {guitar.specs.neckWood}</li>
//                 <li>Fingerboard: {guitar.specs.fingerboardWood}</li>
//                 <li>Pickups: {guitar.specs.pickups}</li>
//                 <li>Tuners: {guitar.specs.tuners}</li>
//                 <li>Scale Length: {guitar.specs.scaleLength}</li>
//                 <li>Bridge: {guitar.specs.bridge}</li>
//             </ul>
//
//             <h2>Famous Musicians</h2>
//             {guitar.musicians.map((m, i) => (
//                 <div key={i}>
//                     <img src={m.musicianImage} alt={m.name} width={80} />
//                     <p>{m.name}</p>
//                     <p>Bands: {m.bands.join(", ")}</p>
//                 </div>
//             ))}
//         </div>
//
//         </>
//     );
// }
