---
title: "SwarmMember"
domain: object-reference
topic: swarmmember
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.678Z
estimatedTokens: 1090
keywords: [SwarmMember, Salesforce, member, agent, swarm, API, version, 55.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# SwarmMember

> Represents a Salesforce member, such as an agent, of a swarm. This
      object is available in API version 55.0 and later.

# SwarmMember

Represents a Salesforce member, such as an agent, of a swarm. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object for swarming in Salesforce, enable the Run Flows and Service Cloud User user permissions. For swarming in Slack, connect Salesforce to Slack and enable the Run Flows and Slack Service User user permissions.

## Fields

| Field | Details |
| --- | --- |
| AssignedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the member is added to the swarm. |
| CompletedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the member exits the swarm or the swarm closes. |
| HelpNeeded | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionShort description of the problem that the swarm is trying to solve. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the swarm or record number. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the Salesforce user assigned to a swarm.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the record the swarm’s problem is related to. The record can be of, for example, a case, incident, sales opportunity, or change request.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount, Case, ChangeRequest, Incident, Opportunity, Problem, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStatus of the swarm member or swarm.Possible values are:ClosedIn ProgressNewThe default value is New. |
| SwarmId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the swarm the member belongs to.This field is a relationship field.Relationship NameSwarmRelationship TypeLookupRefers ToSwarm |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SwarmMemberFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SwarmMemberHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SwarmMemberOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SwarmMemberShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SwarmMemberFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SwarmMemberHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- SwarmMemberOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SwarmMemberShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
