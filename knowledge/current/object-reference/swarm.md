---
title: "Swarm"
domain: object-reference
topic: swarm
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.669Z
estimatedTokens: 1351
keywords: [Swarm, team, agents, Salesforce, users, Slack, channel, thread, dedicated, solving, problem, support, case, incident, sales]
---

# Swarm

> Represents a team of agents, Salesforce users, or Slack users in a Slack
         channel or thread dedicated to solving a problem. This problem can be related to a support
         case, incident, sales opportunity, or change request. This object is available in API
      version 55.0 and later.

# Swarm

Represents a team of agents, Salesforce users, or Slack users in a Slack channel or thread dedicated to solving a problem. This problem can be related to a support case, incident, sales opportunity, or change request. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object for swarming in Salesforce, enable the Run Flows and Service Cloud User user permissions. For swarming in Slack, connect Salesforce to Slack and enable the Run Flows and Slack Service User user permissions.

## Fields

| Field | Details |
| --- | --- |
| CollaborationRoomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the collaboration room.This field is a relationship field.Relationship NameCollaborationRoomRelationship TypeLookupRefers ToCollaborationRoom |
| CollaborationTool | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionTool used for swarming.Possible values are:NoneSlackThe default value is None. |
| CollaborationUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL of the Slack channel or thread. |
| EndedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the swarm ended. |
| HelpNeeded | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionShort description of the problem that the swarm is trying to solve. |
| IsDedicatedChannel | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the swarm is happening in a dedicated channel (true) or in an existing channel (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MessageKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Slack thread or message. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the swarm. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the swarm owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the record the swarm’s problem is related to. The record can be of, for example, a case, incident, sales opportunity, or change request.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount, Case, ChangeRequest, Incident, Opportunity, Problem, User |
| StartedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the swarm started. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStatus of the swarm.Possible values are:ClosedIn ProgressNewWaiting (Custom)The default value is New. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of swarm.Possible values are:CareMgmt—Care CoordinationDealRoom—Sales ChannelPartnerChannel—Partner Account ChannelSwarmingThe default value is Swarming. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SwarmFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SwarmHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SwarmOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SwarmShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SwarmFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SwarmHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- SwarmOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SwarmShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
