import React from 'react';

const NewsListWithPagination = ({dataList, paginationRow, emptyText}) => {
   const newsList = [];
   debugger
   if (dataList && dataList.length) {
      for (let i = 0; i < dataList.length; i++) {
         let item = dataList[i]
         newsList.push(
            <div className="rounded-lg border-danger border p-3 justify-content-end align-items-end">
               <h1>{item.Header}</h1>
               {item.PreviewImage && <img src={item.PreviewImage} alt="post img"
                                          className="pull-left img-responsive thumb margin10 img-thumbnail"/>}
               <article>
                  <p>
                     {item.Description}
                  </p>
               </article>
               <hr className="m-3"/>
               <div className="d-flex flex-row-reverse mr-5">
               <a className="btn btn-success" href={`/news/${item.id}`}>Подробнее...</a>
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
            <table>
               <tr key="pagination" className="bg-white">
                  <td>{paginationRow}</td>
               </tr>
            </table>
         )}
      </div>
   );
}

export default NewsListWithPagination;
