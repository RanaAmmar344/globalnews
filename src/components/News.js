import React, { useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import NewsSection from './NewsSection'
import Spinner from './Spinner'

import InfiniteScroll from 'react-infinite-scroll-component';



const News=(props)=>{
  
  
  const [articles, setArticles ]= useState([])
  const [loading, setLoading ]= useState(true)
  const [page, setPage ]= useState(1)
  const [totalresult, setTotalResult ]= useState(0)
  
  
  
  
        
      
     
    const updateNews =async()=>{
let url  = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3ef479e76b0d44c39aea9931ce3f4115&page=${page}&pagesize=${props.pageSize}`;
setLoading(true)
let data=  await fetch(url);
let parsedData = await data.json()
setArticles(parsedData.articles)
setTotalResult(parsedData.totalresult)
setLoading(false)
    }
    useEffect(() => {
      document.title=`${props.category}-GlobalNews`;
      updateNews();
    },[]);

    //  const handleNextClick=async()=>{
    //    updateNews();
    //    setPage(page+1)
       

    //  }
    //  const handlebackClick= async()=>{
    //    updateNews();
    //    setPage(page-1)
      
    //  }
    const fetchMoreData=async()=>{
      setPage(page+1)
      let url  = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3ef479e76b0d44c39aea9931ce3f4115&page=${page}&pagesize=${props.pageSize}`;
setLoading(true)
let data=  await fetch(url);
let parsedData = await data.json()
setArticles (articles.concat(parsedData.articles))
setTotalResult(parsedData.totalresult)
setLoading(false)

     }
     
  
     
    


    return (
      <>
        
          <h2 className=' text-center' style={{marginTop:"100px"}}  > Global Top {`${props.category}`} News HeadLines...!</h2>
          <hr />
          { loading && <Spinner />}
          <InfiniteScroll
         dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length!==totalresult}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Please Wait  Data is Loading ...</b>
            </p>}
            
          
           >
             <div className="container">
          <div className="row my-3" >
            
           { articles.map((element)=>{  
           return <div className="col-md-4" key={element.url}>
        <NewsSection  title={element.title} description= {element.description} imageUrl={element.urlToImage} newsUrl={element.url} 
        author={element.author} date={element.publishedAt} />
        </div>
            })}
           
        </div>
        </div>
        </InfiniteScroll>


        {/* <div className="container d-flex   justify-content-between mb-3">

        <button  disabled={page<=1} type="button" class="btn btn-dark"  onClick={handlebackClick} > 	&#8592; Back</button>
        <button  disabled={page===5}   type="button" class="btn btn-dark" onClick={handleNextClick}  >Next 	&#8594;</button>
        </div> */}
        
      </>
    )
          }
  

  News.defaultProps={
  country: 'us',
  pageSize:8,
  category:"general"

}
   News.propTypes = {
  country :  PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News
