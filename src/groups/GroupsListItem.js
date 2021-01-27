import React from 'react';

// groups that user does not belong to
export const GroupsListItem = ({ group }) => {
  return (
    <div className="list-item">
      <div className="list-item-data">
        <h3>{group.name}</h3>
        <p>Owned by: {group.owner.fullName} </p>
        <p>{group.members.length} members</p>
      </div>
      <button>Ask to Join</button>
    </div>
  );
};
