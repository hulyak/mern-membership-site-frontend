import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../auth';
import { postWithCredentials, useProtectedResource } from '../data';
import { MessagesList } from '../messages';
import { RequestsList } from '../requests';

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

  const acceptRequest = async (requestId) => {
    const response = await postWithCredentials(
      `/groups/${id}/requests/${requestId}/accept`
    );
    const updatedRequest = await response.json();
    // update the requests with the new request
    setGroup({ ...group, requests: updatedRequest });
  };

  const rejectRequest = async (requestId) => {
    const response = await postWithCredentials(
      `/groups/${id}/requests/${requestId}/reject`
    );
    const updatedRequest = await response.json();
    // update the requests with the deleted request
    setGroup({ ...group, requests: updatedRequest });
  };

  // create new message
  const postMessage = async () => {
      const response = await postWithCredentials(`/groups/${id}/messages`, {text: messageValue});
      const updatedMessages = await response.json();
      setGroup({ ...group, messages: updatedMessages});
      setMessageValue('')
  }

  return (
    <div className="centered-container">
      <h1>{group.name}</h1>
      <p>Owned by: {group.owner.fullName}</p>
      <MessagesList messages={group.messages} />
      <div className="new-message-form">
        <input
          type="text"
          placeholder="type your message here"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button onClick={postMessage}>Submit</button>
      </div>
      {group.ownerId === user.uid ? (
        <RequestsList
          requests={group.requests}
          onAccept={acceptRequest}
          onReject={rejectRequest}
        />
      ) : null}
    </div>
  );
};
