---
title: "CollaborationGroupMemberRequest"
domain: object-reference
topic: collaborationgroupmemberrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.585Z
estimatedTokens: 618
keywords: [CollaborationGroupMemberRequest, join, Chatter, group, API, version, 21.0, later, Calls, Usage]
---

# CollaborationGroupMemberRequest

> Represents a request to join a
        private Chatter group.
    This object is available in API version 21.0 and later.

# CollaborationGroupMemberRequest

Represents a request to join a private Chatter group. This object is available in API version 21.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CollaborationGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the private Chatter group.This is a relationship field.Relationship NameCollaborationGroupRelationship TypeLookupRefers ToCollaborationGroup |
| RequesterId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user requesting to join the group; must be the ID of the context user.This is a relationship field.Relationship NameRequesterRelationship TypeLookupRefers ToUser |
| ResponseMessage | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionOptional message to be included in the notification email when Status is Declined. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the request. Available values are:AcceptedDeclinedPending |

## Usage

This object represents a request to join a private Chatter group, and can be used to accept or decline requests to join private groups you own or manage. On create, an email is sent to the owner and managers of the private group to be accepted or declined. When the Status is Accepted or Declined, an email is sent to notify the requester. When the Status is Declined, a ResponseMessage is optionally included to provide additional details.

Note the following when working with requests:

-   Users with the “Modify All Data” or “View All Data” permission can view records for all groups, regardless of membership.
-   A user can be a member of 300 groups. Requests to join groups count against this limit.
-   Status can't be specified on create.
-   You can only update a request when the Status is Pending.
-   You can't delete or update a request with a Status of Accepted or Declined.

#### See Also

-   [CollaborationGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroup.htm "Represents a Chatter group. This object is available in API version 19.0 and later.")

-   [CollaborationGroupMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmember.htm "Represents a member of a Chatter group. This object is available in API version 19.0 and later.")

## Related Topics

- CollaborationGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroup.htm)
- CollaborationGroupMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmember.htm)
