---
title: "RegulatoryCodeViolation"
domain: psc-api
topic: regulatorycodeviolation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.485Z
estimatedTokens: 1291
keywords: [RegulatoryCodeViolation, transactional, violation, data, identified, inspection, entity, ties, question, violated, reason, regulatory, code, API, version]
---

# RegulatoryCodeViolation

> Represents the transactional violation data that has been identified during an inspection. This entity ties the inspection question that is violated, violation
		reason and the regulatory code details. This object is available in API version 49.0 and later.

# RegulatoryCodeViolation

Represents the transactional violation data that has been identified during an inspection. This entity ties the inspection question that is violated, violation reason and the regulatory code details. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| ComplianceDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDue date for regulatory code compliance. |
| CorrectiveActionDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of corrective action. |
| DateCreated | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate when the violation was created. |
| DateResolved | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the violation was resolved. |
| DaysOpen | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of days the violation was unresolved. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the violation. |
| InspectionAssmntIndId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionId of the inspection assessment indicator associated with the regulatory code violation. |
| InspectionId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionId of the inspection associated in which the violation was recorded. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the violation |
| OwnerId | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPriority of the violation.Possible values are:CriticalHighLowMedium |
| RecurrenceCount | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionNumber of times the violation has recurred. |
| RegulatoryCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the regulation code. |
| ResolutionNotes | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNotes related to violation resolution. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the violation.Possible values are:OpenResolved |
| ViolationTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the violation type. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[RegulatoryCodeViolationChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 58.0)

Change events are available for the object.

[RegulatoryCodeViolationFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RegulatoryCodeViolationHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[RegulatoryCodeViolationOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[RegulatoryCodeViolationShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RegulatoryCodeViolationChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- RegulatoryCodeViolationFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RegulatoryCodeViolationHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- RegulatoryCodeViolationOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- RegulatoryCodeViolationShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
