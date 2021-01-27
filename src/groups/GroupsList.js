import React from 'react';

// display both users groups and outside of users groups
export const GroupsList = ({ isLoading, groups, ListItemComponent }) =>
  isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {groups.map((group) => (
        <ListItemComponent key={group._id} group={group} />
      ))}
    </>
  );
