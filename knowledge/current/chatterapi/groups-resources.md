---
title: "Groups Resources"
domain: chatterapi
topic: groups-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.508Z
estimatedTokens: 760
keywords: [Groups, Resources, group's, members, photo, organization, group, add, change]
---

# Groups Resources

> Information about groups, such as the group's members, photo,
            and the groups in the organization. Create and delete a group, add members to a group,
            and change the group photo.

# Groups Resources

Information about groups, such as the group's members, photo, and the groups in the organization. Create and delete a group, add members to a group, and change the group photo.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The groups resource is not a feed. To view the feed for a group, or post to it, use the [record feed resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm "The feed of the specified record, which could be a group, person, object, file and so on. You can post feed items to the record feed. You can get another user’s record feed.") with a groupId.

Available resources:

| Resource | Description |
| --- | --- |
| /chatter/group-membership-requests/requestId | Update the status of a request by a user to join a private group or get information about a request to join a private group. |
| /chatter/group-memberships/membershipId | Access information about a member of a group, remove a member from a group, and update a group member’s role. |
| /chatter/group-memberships/batch/membershipIds | Access information about a list of group members. |
| /chatter/group-records/groupRecordId | Get information about a group record or remove the association between a record and a group. |
| /chatter/groups/ | A list of all the groups in the organization. Get information about groups or create a group. |
| /chatter/groups/batch/group_list | Get information about more than one group at the same time. |
| /chatter/groups/groupId | Get information about a Chatter group. |
| /chatter/groups/groupId/announcements | Information about the announcements posted to the specified group. Get information or post an announcement to a group. |
| /chatter/groups/groupId/banner-photo | Get, create, or delete the banner photo for a group. |
| /chatter/groups/groupID/files | Get information about the files posted to the specified group. |
| /chatter/groups/groupId/members | Members of a specified group. Get the members and add a member to a group. To add a member, the context user must be the group owner or moderator. |
| /chatter/groups/groupId/members/requests | Request membership in a private group or get the status of requests to a join a private group. |
| /chatter/groups/groupId/my-settings | Get information about the context user’s Chatter settings for the specified group. |
| /chatter/groups/groupId/photo | The photo for the specified group. Get, post, crop, and delete the photo. |
| /chatter/groups/groupId/records | Get the list of records associated with a group. Associate a record with a group. |
| /chatter/groups/groupId/topics | Get up to five topics most recently used in a group. |
| /chatter/groups/group/groupId/invite | Invite internal and external users to join a group. |

#### See Also

-   [Groups Feed Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_groups.htm "A feed containing all feed elements from all groups the context user either owns or is a member of.")

## Related Topics

- record feed resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm)
- /chatter/group-membership-requests/requestId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_group_membership_requests.htm)
- /chatter/group-memberships/membershipId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_group_memberships.htm)
- /chatter/group-memberships/batch/membershipIds (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_group_memberships.htm)
- /chatter/group-records/groupRecordId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_group_records.htm)
- /chatter/groups/ (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_ListOfGroups.htm)
- /chatter/groups/batch/group_list (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_BatchGroupInformation.htm)
- /chatter/groups/groupId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupInformation.htm)
- /chatter/groups/groupId/announcements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupAnnouncements.htm)
- /chatter/groups/groupId/banner-photo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_BannerPhoto.htm)
