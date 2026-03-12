---
title: "BriefcaseAssignment"
domain: object-reference
topic: briefcaseassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.628Z
estimatedTokens: 447
keywords: [BriefcaseAssignment, assignment, briefcase, definition, selected, users, user, groups, API, version, 50.0, later, Calls, Associated, Objects]
---

# BriefcaseAssignment

> Represents the assignment of a briefcase definition to selected users and user
      groups. This object is available in API version 50.0 and later.

# BriefcaseAssignment

Represents the assignment of a briefcase definition to selected users and user groups. This object is available in API version 50.0 and later.

Use this object to assign selected records for users and groups to view offline. Briefcase objects are available in orgs that have Briefcase Builder and Field Service enabled.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BriefcaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the briefcase definition. Label is Briefcase Definition ID. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the user or group requiring access to the briefcase. Label is User or Group ID. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BriefcaseAssignmentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

## Related Topics

- BriefcaseAssignmentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
