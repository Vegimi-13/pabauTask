import {Link, useParams} from "react-router-dom";
import {useQuery,gql} from "@apollo/client";
import {useState} from "react";
import BrandHeader from "../components/BrandHeader.jsx";
import Guitar from "../components/Guitar.jsx";
import SearchHeader from "../components/SearchHeader.jsx";
import Footer from "../components/Footer.jsx";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const  GET_BRAND_MODELS = gql`
    query GetBrandModels($id: ID!, $sortBy: sortBy!){
        findBrandModels(id: $id, sortBy: $sortBy){
            id
            name
            type
            image
            price
        }
        
        
      }
    `;

export default function BrandsModelPage() {
    const {id} = useParams();
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    // const [filterBy,setFilterBy] = useState("");

    const {loading, error, data} = useQuery(GET_BRAND_MODELS,{
        variables:{
            id: id,
            sortBy:{
                field:"name",
                order: "ASC"
            }
        }
    })

    if(loading){
        return <h1>Loading...</h1>
    }


    if(error){
        return <p>Error loading brands...</p>
    }

    const modeletFiltruara = data.findBrandModels.filter((model) =>
        model.name.toLowerCase().includes(search.toLowerCase())
    );
    const pagesTotal = Math.ceil(modeletFiltruara.length/6);
    const startIndex = (currentPage-1)* 6;
    const paginatedModels = modeletFiltruara.slice(startIndex,startIndex+6);
    console.log(startIndex);


    return(
        <div>
            <BrandHeader />
            <h2 style={{fontSize:'44px', textAlign:'center', marginTop:'7rem'}}>Check out the <span style={{color:"#FF6428"}}>Selection</span></h2>
            <SearchHeader
                search={search}
                setSearch={setSearch}
                setCurrentPage={setCurrentPage}
            />


            <div className={"guitarCard"} style={{
                width: '100%',
                maxWidth: '1350px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                // centers horizontally
            }}>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '5rem',
                }}>
                    {paginatedModels.map((model) => (
                        // <Link key={model.id}
                        //       to={`/brand/${id}/models/${model.id}`}
                        //       style={{ textDecoration: 'none', color: 'inherit' }}>

                            <Guitar
                                key={model.id}
                                imgSrc={model.image}
                                name={model.name}
                                price={model.price}
                            />



                    ))}
                </div>
            </div>



            <div className={"pagination"} style={{display:'flex', justifyContent:'space-between', maxWidth:'1350px',margin:'auto', marginTop:'50px',alignItems:'center'}}>

                <p style={{fontWeight:'400',letterSpacing:'1px',fontSize:'14px',textAlign:'center', color:'#9292A3'}}>SHOWING <span style={{color:'#3D3D46'}}>{paginatedModels.length}</span> OF <span style={{color:'#3D3D46'}}>{modeletFiltruara.length}</span></p>

                <Stack spacing={2} sx={{ alignItems: 'center' }}>
                    <Pagination
                        count={pagesTotal}
                        page={currentPage}
                        shape="rounded"
                        onChange={(event, page) => setCurrentPage(page)}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                borderColor: '#ccc',       // normal border grey
                                color: '#999',             // normal text grey
                                borderStyle: 'solid',
                                borderWidth: '1px',
                            },
                            '& .MuiPaginationItem-root.Mui-selected': {
                                borderColor: '#FF6428',    // selected border orange
                                color: '#FF6428',          // selected text orange
                                backgroundColor: 'transparent', // no bg change if you want
                            },
                            '& .MuiPaginationItem-root:hover': {
                                borderColor: '#FF6428',    // on hover border orange
                                color: '#FF6428',          // on hover text orange
                                backgroundColor: 'transparent',
                            },
                        }}
                    />
                </Stack>

            </div>


            {/*<div style={{marginTop: "1rem"}}>*/}
            {/*    <button disabled={currentPage === 1}*/}
            {/*            onClick={()=> setCurrentPage((prev) => prev-1)}*/}
            {/*    > Prev </button>*/}

            {/*    <span>Page {currentPage} of {pagesTotal}</span>*/}
            {/*    <button*/}
            {/*        disabled={currentPage === pagesTotal}*/}
            {/*        onClick={()=> setCurrentPage((prev) => prev+1)}*/}
            {/*    >Next</button>*/}


            {/*</div>*/}

            <Footer />
        </div>


    )



}


