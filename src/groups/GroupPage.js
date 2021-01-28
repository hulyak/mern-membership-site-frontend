import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../auth';
import { useProtectedResource } from '../data';

export const GroupPage = () => {
  const [messageValue, setMessageValue] = useState('');
  const { id } = useParams();
  const { user } = useUser();
  const { data: group, setData: setGroup } = useProtectedResource(
    `/groups/${id}`,
    {
      owner: {},
      messages: [],
      requests: [],
    }
  );

  return (
    <div className="centered-container">
      <h1>{group.name}</h1>
      <p>Owned by: {group.owner.fullName}</p>
    </div>
  );
};
