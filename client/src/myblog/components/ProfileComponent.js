import React from 'react';

const ProfileComponent = ({id, username, email, my_commentaries}) => {
   return (
      <div className="col-md-2 m-5 mt-lg-5">
         <ul className="list-group">
            <li className="list-group-item text-muted">Профиль</li>
            <li className="list-group-item"><span className="pull-left"><strong
               className="">ID:{`\n`} </strong></span>
               {id}
            </li>
            <li className="list-group-item"><span className="pull-left"><strong className="">Логин:{`\n`}
            </strong></span>
               {username}
            </li>
            <li className="list-group-item"><span className="pull-left"><strong className="">Электронная почта:{`\n`}
            </strong></span>
               {email}
            </li>
            <li className="list-group-item"><span className="pull-left"><strong className="">Количество комментариев:{`\n`}
            </strong></span>
               {my_commentaries && my_commentaries.length}
            </li>
         </ul>
      </div>
   );
};
export default ProfileComponent;
