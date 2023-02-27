import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ArtifactDetails = () => {
  const [artifact, setArtifact] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getArtifact = async () => {
      try {
        const response = await axios.get(
          `https://archaeologs-barc6.ondigitalocean.app/api/artifacts/${id}`
        );
        setArtifact(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getArtifact();
  }, [id]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {artifact ? (
        <>
        <div className="artdetails">
        <div className="imageart"><img className="artifact-image"  src={artifact.photos[0].url} alt="artifactimage" /></div>
        <div className="detail-div">
        <h1 className="text-2xl font-bold mb-4">{artifact.name}</h1>
        <p>Category: {artifact.category_id}</p>
        <p>Country: {artifact.country_id}</p>
        <p>Location: {artifact.location}</p>
        <p>Artifact Number: {artifact.artifact_number}</p>
        <p>Dimension: {artifact.dimension}</p>
        <p>Artifact Date: {artifact.artifact_date}</p>
        <p>Approvals: {artifact.approvals}</p>
        <p>Published: {artifact.published ? "Yes" : "No"}</p>
        <p>Latitude: {artifact.lat}</p>
        <p>Longitude: {artifact.lng}</p>
        <p>Deleted At: {artifact.deleted_at}</p>
        </div>
        <div className="artifact-details">
        <p>{artifact.detail}</p>
        </div>
          
        </div>
      
        </>
      ) : (
        <p>Loading artifact details...</p>
      )}
    </div>
  );
};

export default ArtifactDetails;