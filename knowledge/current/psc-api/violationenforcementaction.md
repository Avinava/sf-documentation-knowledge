---
title: "ViolationEnforcementAction"
domain: psc-api
topic: violationenforcementaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.592Z
estimatedTokens: 948
keywords: [ViolationEnforcementAction, action, regulatory, authority, address, violations, API, version, 49.0, later, Calls, Associated, Objects]
---

# ViolationEnforcementAction

> Represents the action that a regulatory authority takes to address violations. This object is available in API version 49.0 and later.

# ViolationEnforcementAction

Represents the action that a regulatory authority takes to address violations. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Field | Details |
| --- | --- |
| CaseProceedingResultId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outcome of a legal case for a participant.This field is a relationship field.Relationship NameCaseProceedingResultRelationship TypeLookupRefers ToCaseProceedingResult |
| ComplianceDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLast date for compliance. |
| ComplianceDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLast date for compliance. |
|  |
| DateCreated | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate when the action was created. |
| DateResolved | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the action was resolved. |
| DaysOpen | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of days the action was open. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the enforcement action. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the enforcement action. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPriority of the enforcement action.Possible values are:CriticalHighLowMedium |
| ResolutionNotes | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNotes related to the action resolution. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the enforcement action.Possible values are:OpenResolved |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionType of the enforcement action.Possible values are:CitationCitation warningCivil PenaltyCorrected During InspectionNotice of Violation |
| ViolationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the violation.This field is a relationship field.Relationship NameViolationRelationship TypeMaster-detailRefers ToRegulatoryCodeViolation |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ViolationEnforcementActionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ViolationEnforcementActionHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- ViolationEnforcementActionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ViolationEnforcementActionHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
