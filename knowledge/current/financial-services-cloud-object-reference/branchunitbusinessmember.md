---
title: "BranchUnitBusinessMember"
domain: financial-services-cloud-object-reference
topic: branchunitbusinessmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.614Z
estimatedTokens: 899
keywords: [BranchUnitBusinessMember, user, contact, perform, specific, role, branch, API, version, 51.0, later, Calls, Associated, Objects]
---

# BranchUnitBusinessMember

> Represents a user or contact who can perform a specific role for a branch.
    This object is available in API version 51.0 and later.

# BranchUnitBusinessMember

Represents a user or contact who can perform a specific role for a branch. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BranchUnitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the branch unit associated with this assignment. |
| BusinessUnitMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA user or contact with a predefined role that can be performed at this branch. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that this person stopped fulfilling this role for this branch unit. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this role assignment can be used for this branch unit.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this branch unit business member assignment. |
| ServiceTerritoryMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a service territory member record for the same user who can be assigned to service appointments in a service territory. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that this person was assigned this role for this branch unit. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BranchUnitBusinessMemberChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BranchUnitBusinessMemberFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BranchUnitBusinessMemberHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BranchUnitBusinessMemberChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- BranchUnitBusinessMemberFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- BranchUnitBusinessMemberHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
