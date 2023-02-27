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
          <h1 className="text-2xl font-bold mb-4">{artifact.name}</h1>
          <p>{artifact.description}</p>
          {/* render other details of the artifact */}
        </>
      ) : (
        <p>Loading artifact details...</p>
      )}
    </div>
  );
};

export default ArtifactDetails;