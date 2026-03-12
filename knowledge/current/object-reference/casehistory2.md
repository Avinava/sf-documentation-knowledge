---
title: "CaseHistory2"
domain: object-reference
topic: casehistory2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.286Z
estimatedTokens: 559
keywords: [CaseHistory2, historical, owner, status, changes, made, associated, Case, API, version, 59.0, later, Calls, Special, Access]
---

# CaseHistory2

> Represents historical information about owner and status changes that have
         been made to the associated Case. This object is available in API version 59.0 and
      later.

# CaseHistory2

Represents historical information about owner and status changes that have been made to the associated Case. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object is always read-only.

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Case associated with this record.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the contact who owns the case.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreviousUpdate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the case was last updated. |
| Status | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status of the case, such as New, Closed, or Escalated. |

## Usage

CaseHistory2 entries are intended for case history reports.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CaseHistory2ChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 60.0 or later.

## Related Topics

- CaseHistory2ChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
