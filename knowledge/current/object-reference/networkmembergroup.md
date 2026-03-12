---
title: "NetworkMemberGroup"
domain: object-reference
topic: networkmembergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.252Z
estimatedTokens: 816
keywords: [NetworkMemberGroup, group, members, Experience, Cloud, site, either, users, internal, org, external, assigned, portal, profiles, administrator]
---

# NetworkMemberGroup

> Represents a group of members in an Experience Cloud site. Members can
   be either users in your internal org or external users assigned portal profiles. An administrator
   adds members to an Experience Cloud site by adding a profile or a permission set, and any user
   with the profile or permission set becomes a member of the site. This object is available in API
   version 26.0 and later.

# NetworkMemberGroup

Represents a group of members in an Experience Cloud site. Members can be either users in your internal org or external users assigned portal profiles. An administrator adds members to an Experience Cloud site by adding a profile or a permission set, and any user with the profile or permission set becomes a member of the site. This object is available in API version 26.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If a Chatter customer (from a customer group) is assigned a permission set that is also associated with an Experience Cloud site, the Chatter customer won’t be added to the site.

Prior to API version 27.0, this object was called NetworkProfile.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The upsert() call is not supported for this object.

## Special Access Rules

This object is available only when your org has digital experiences enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AssignmentStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of a profile or permission set within an Experience Cloud site. Values are:Add Calculated—The number of users that need to be added are calculated and the add operation is in progress.Added—Users with this profile or permission set are members.Failed Add—Users with this profile or permission set were not successfully made members.Failed Remove—Users with this profile or permission set were not successfully removed from membership.Remove Calculated—The number of users that need to be removed are calculated and the remove operation is in progress.Waiting for Add—The profile or permission set was added to the Experience Cloud site, but the async process hasn’t completed yet. After the process is complete, the status is updated to Added.Waiting for Remove—Use this status to remove all the members belonging to a profile or permission set and remove a profile or permission set from an Experience Cloud site. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Experience Cloud site that this group of members is associated with. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the profile or permission set associated with the Experience Cloud site. |

## Usage

Use this object to view the profiles or permission sets associated with a particular Experience Cloud site. Profiles and permission sets are added and removed asynchronously, so you can also check the status of a profile or permission set that was updated in a site.

If you have Modify All Data, View All Data, or Create and Set Up Experiences, you can view all profiles or permission sets for any Experience Cloud site in the org, regardless of your membership. If you have Modify All Data or Create and Set Up Experiences, you can also add profiles or permission sets. Users without these permissions can only find profiles and permission sets for Experience Cloud sites that they’re members of.

## Sample Code

```

```

## Code Examples

```
// Create a new NetworkMemberGroup with a profile as the ParentId
NetworkMemberGroup nmgInsert = new NetworkMemberGroup();
nmgInsert.setNetworkId('{enter your network ID : ODB...}');
nmgInsert.setParentId('enter the profile or permission set ID : 00e... or 0PS...');
SaveResult[] results = connection.create(new SObject[] { nmgInsert });

// Update an existing NetworkMemberGroup to be removed from the Network
NetworkMemberGroup nmgUpdate = new NetworkMemberGroup(); 
nmgUpdate.setId('enter your NetworkMemberGroup ID : 0DL...'); 
nmgUpdate.setAssignmentStatus('WaitingForRemove'); 
SaveResult[] results = connection.update(new SObject[] { nmgUpdate });
```

## Related Topics

- profile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm)
- permission set (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
