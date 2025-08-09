



// Updated BrandHeader.jsx
import { Link, useParams, useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Logo from "./Logo.jsx";
import { useEffect, useState } from "react";

const GET_BRAND = gql`
  query GetBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      image
      origin
      categories
    }
  }
`;

const GET_GUITAR = gql`
  query GetGuitar($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      image
      description
      price
    }
  }
`;

export default function BrandHeader() {
    // Change to use 'id' instead of 'brandId' to match your route
    const { id: brandId, modelId } = useParams();
    const location = useLocation();

    const { loading: brandLoading, error: brandError, data: brandData } = useQuery(GET_BRAND, {
        variables: { id: brandId },
        skip: !brandId,
    });

    const { loading: guitarLoading, error: guitarError, data: guitarData } = useQuery(GET_GUITAR, {
        variables: { brandId, modelId },
        skip: !modelId || !brandId,
    });

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (guitarData?.findUniqueModel?.image) {
            setImageSrc(guitarData.findUniqueModel.image);
        } else if (brandData?.findUniqueBrand?.image) {
            setImageSrc(brandData.findUniqueBrand.image);
        }
    }, [guitarData, brandData]);

    if (brandLoading || (modelId && guitarLoading)) {
        return <header style={{ height: "200px" }}>Loading header...</header>;
    }
    if (brandError || guitarError) {
        return <header>Error loading header</header>;
    }

    const brand = brandData?.findUniqueBrand;
    const guitar = guitarData?.findUniqueModel;

    const description = brand
        ? `${brand.name}, originating from ${brand.origin}, has earned a reputation for crafting exceptional ${
            brand.categories?.[0]?.toLowerCase() || "guitars"
        } that combine tradition with innovation. Whether you're a beginner or a seasoned musician, ${
            brand.name
        } instruments deliver performance, style, and sound that inspire.`
        : "";

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "#3D3D46",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    position: "relative",
                    top: "10px",
                }}
            >
                <span style={{ color: "#9292A3" }}>←</span> Back to Home
            </Link>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                }}
            >
                <Logo width={28} height={28} fSize="23px" />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: "508px",
                        marginLeft: "120px",
                        position: "relative",
                        marginTop: "80px",
                    }}
                >
                    <h1
                        style={{
                            marginBottom: "0px",
                            textAlign: "center",
                            fontSize: "56px",
                        }}
                    >
                        {modelId ? (
                            <>Explore the <span style={{ color: "#FF6428" }}>{guitar?.name || ""}</span></>
                        ) : (
                            <>Browse <span style={{ color: "#FF6428" }}>{brand?.name || ""}</span> Guitars</>
                        )}
                    </h1>

                    {!modelId && <p
                        style={{
                            color: "#666666",
                            height: "fit-content",
                            width: "398px",
                            textAlign: "center",
                        }}
                    >
                        {description}
                    </p>}
                </div>
            </div>

            <div
                style={{
                    width: "672px",
                    height: "459px",
                    borderRadius: "0 0 151px 360px",
                    background: "linear-gradient(to bottom, #FF8C60 , #FF5B1C )",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {imageSrc && (
                    <img
                        src={imageSrc}
                        alt={modelId ? guitar?.name : brand?.name}
                        style={{
                            maxWidth: "60%",
                            maxHeight: "80%",
                            objectFit: "contain",
                            opacity: 0.4,
                        }}
                    />
                )}
            </div>
        </header>
    );
}

