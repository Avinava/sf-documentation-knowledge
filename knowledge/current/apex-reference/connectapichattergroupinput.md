---
title: "ConnectApi.ChatterGroupInput"
domain: apex-reference
topic: connectapichattergroupinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.982Z
keywords: [ConnectApi.ChatterGroupInput, See]
---

# ConnectApi.ChatterGroupInput

# ConnectApi.ChatterGroupInput

Chatter group input.

| Property | Type | Description | Available |
| --- | --- | --- | --- |
| announcement | String | The 18-character ID of an announcement.An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement. | 31.0 |
| canHave​ChatterGuests | Boolean | true if this group allows Chatter customers, false otherwise. After this property is set to true, it cannot be set to false. | 29.0 |
| description | String | The “Description” section of the group. | 29.0 |
| information | ConnectApi.​GroupInformation​Input | The “Information” section of a group. If the group is private, this section is visible only to members. | 28.0 |
| isArchived | Boolean | true if the group is archived, false otherwise. Defaults to false. | 29.0 |
| isAuto​ArchiveDisabled | Boolean | true if automatic archiving is turned off for the group, false otherwise. Defaults to false. | 29.0 |
| name | String | The name of the group. | 29.0 |
| owner | String | The ID of the group owner. This property is available for PATCH requests only. | 29.0 |
| visibility | ConnectApi.​GroupVisibilityType | Group visibility type.PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | 29.0 |

#### See Also

-   [createGroup(communityId, groupInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_createGroup "Create a group.")
    
-   [updateGroup(communityId, groupId, groupInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_updateGroup "Update the settings of a group.")