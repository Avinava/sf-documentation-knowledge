---
title: "CaseRelatedIssue"
domain: object-reference
topic: caserelatedissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.309Z
estimatedTokens: 807
keywords: [CaseRelatedIssue, acts, junction, customer, issue, Case, Incident, Problem, associated, service, failure, API, version, 53.0, later]
---

# CaseRelatedIssue

> This object acts as a junction between a customer issue (Case) and the
         Incident or Problem that represents an associated service failure. This object is
      available in API version 53.0 and later.

# CaseRelatedIssue

This object acts as a junction between a customer issue (Case) and the Incident or Problem that represents an associated service failure. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA relationship field that represents the case you're linking a Problem or Incident to.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA brief description of the related case. |
| RelatedEntityType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionShows what type of object the related entity is.Possible values are:IncidentProblem |
| RelatedIssueId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA polymorphic relationship field that represents a related Problem or Incident.Relationship NameRelatedIssueRelationship TypeLookupRefers ToIncident, Problem |
| RelationshipType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionShows how two records relate to each other.Possible values are:Root CauseSimilarThe default value is 'Root Cause'. |
| UniqueKeyIndex | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThis field is unique within your organization. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CaseRelatedIssueChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[CaseRelatedIssueFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CaseRelatedIssueHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CaseRelatedIssueChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CaseRelatedIssueFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CaseRelatedIssueHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
