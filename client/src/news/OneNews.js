import React from 'react';

const OneNews = ({dataList, paginationRow, emptyText, header, description, href, buttonName}) => {
   const newsList = [];
   if (dataList && dataList.length) {
      for (let i = 0; i < dataList.length; i++) {
         newsList.push(
            <div className="jumbotron">
               <h1>{header}</h1>
               <p className="lead">{description}</p>
               <a className="btn btn-lg btn-primary" href={href} role="button">{buttonName}</a>
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
   } else {
      return (
         <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
               <h3>{emptyText}</h3>
            </div>
         </div>
      );
   }
};

export default OneNews;
