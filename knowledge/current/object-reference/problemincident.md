---
title: "ProblemIncident"
domain: object-reference
topic: problemincident
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.144Z
estimatedTokens: 782
keywords: [ProblemIncident, junction, relates, Problem, Incident, API, version, 53.0, later, Calls, Associated, Objects]
---

# ProblemIncident

> Represents a junction object that relates a Problem to an Incident. This
      object is available in API version 53.0 and later.

# ProblemIncident

Represents a junction object that relates a Problem to an Incident. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IssueId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA polymorphic relationship field that represents a related Problem or Incident.This field is a polymorphic relationship field.Relationship NameIssueRelationship TypeLookupRefers ToIncident, Problem |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated ID of the incident that's related to the problem. |
| RelatedEntityType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object type of the related entity.Possible values are:IncidentProblem |
| RelatedIssueId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA polymorphic relationship field that represents a related Problem or Incident.This field is a polymorphic relationship field.Relationship NameRelatedIssueRelationship TypeLookupRefers ToIncident, Problem |
| RelationshipType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionShows how the Problem and Incident records relate to each other.Possible values are:Caused BySimilarThe default value is Caused By. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProblemIncidentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProblemIncidentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProblemIncidentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProblemIncidentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProblemIncidentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProblemIncidentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
