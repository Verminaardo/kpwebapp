import React from 'react';
import {Link} from "react-router-dom";

const NewsListWithPagination = ({dataList, paginationRow, emptyText}) => {
   const newsList = [];

   if (dataList && dataList.length) {
      for (let i = 0; i < dataList.length; i++) {
         let item = dataList[i]
         newsList.push(
            <div className="mb-5 rounded-lg border-primary border p-3 justify-content-end align-items-end">
               <h2>{item.Header}</h2>
               {item.PreviewImage && <div className="d-flex justify-content-center m-5"> <img src={item.PreviewImage.url} alt="post img" width="512"
                                                                         className="img-responsive thumb margin10 img-thumbnail"/> </div>}
               <article>
                  <p>
                     {item.Description}
                  </p>
               </article>
               <hr className="m-3"/>
               <div className="d-flex flex-row-reverse mr-5">
               <Link className="btn btn-outline-primary" to={`/news/${item.id}`}>Подробнее...</Link>
               </div>
            </div>)
      }
   } else {
      return (
         <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
               <h3>{emptyText}</h3>
            </div>
         </div>
      );
   }
   return (
      <div>
         {newsList}
         {paginationRow && (
            <table className="mb-5">
               <tr key="pagination" className="bg-white">
                  <td>{paginationRow}</td>
               </tr>
            </table>
         )}
      </div>
   );
}

export default NewsListWithPagination;
