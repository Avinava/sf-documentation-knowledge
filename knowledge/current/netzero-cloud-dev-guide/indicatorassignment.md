---
title: "IndicatorAssignment"
domain: netzero-cloud-dev-guide
topic: indicatorassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.232Z
estimatedTokens: 375
keywords: [IndicatorAssignment, assignment, indicator, definition, that's, measure, performance, activity, API, version, 59.0, later, Calls]
---

# IndicatorAssignment

> Represents the assignment of an indicator definition that's used to
         measure the performance of a related activity. This object is available in API version
      59.0 and later.

# IndicatorAssignment

Represents the assignment of an indicator definition that's used to measure the performance of a related activity. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program enrollment that the indicator assignment measures.This field is a relationship field.Relationship NameProgramEnrollmentRelationship TypeLookupRefers ToProgramEnrollment |
| ProgramInitiativeEnrlId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe initiative enrollment that the indicator assignment measures.This field is a relationship field.Relationship NameProgramInitiativeEnrlRelationship TypeLookupRefers ToProgramInitiativeEnrl |
| ProgramInitiativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe initiative that the indicator assignment measures.This field is a relationship field.Relationship NameProgramInitiativeRelationship TypeLookupRefers ToProgramInitiative |

For more information, see [IndicatorAssignment in Outcome Management](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/outcome_management_apis_indicatorassignment.htm).
