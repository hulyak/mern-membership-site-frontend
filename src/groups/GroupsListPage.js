import React from 'react';
import { Link } from 'react-router-dom';
import { GroupsList } from './GroupsList';
import { GroupsListItem } from './GroupsListItem';
import { MyGroupsListItem } from './MyGroupsListItem';
// custom hooks
import { useGroups } from './useGroups';
import { useUserGroups } from './useUserGroups';

export const GroupsListPage = () => {
  // load from server with custom hook, mock out UI
  const { isLoading: isLoadingAllGroups, groups: allGroups } = useGroups();
  const { isLoading: isLoadingUserGroups, userGroups } = useUserGroups();

  const notUserGroups = allGroups.filter((group) =>
    userGroups.every((userGroup) => userGroup.id !== group.id)
  );

  const isLoading = isLoadingAllGroups || isLoadingUserGroups;

  console.log(allGroups);
  return (
    <div className="centered-container">
      <h1 className="section-heading">My Groups</h1>
      <GroupsList
        isLoading={isLoading}
        groups={userGroups}
        // pass Component
        ListItemComponent={MyGroupsListItem}
      />
      <h1 className="section-heading">Other Groups</h1>
      <GroupsList
        isLoading={isLoading}
        groups={notUserGroups}
        ListItemComponent={GroupsListItem}
      />
      <Link to="/create-group">
        <button>Create New Group</button>
      </Link>
    </div>
  );
};
