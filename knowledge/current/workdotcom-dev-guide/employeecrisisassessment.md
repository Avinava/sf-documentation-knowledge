---
title: "EmployeeCrisisAssessment"
domain: workdotcom-dev-guide
topic: employeecrisisassessment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.279Z
estimatedTokens: 772
keywords: [EmployeeCrisisAssessment, crisis, assessment, Employee, API, version, 48.0, later, 49.0, supports, reports, criteria-based, sharing, rules, history]
---

# EmployeeCrisisAssessment

> Represents a crisis assessment of an Employee. This object is available in
    API version 48.0 and later. In API version 49.0 and later, this object supports reports,
    criteria-based sharing rules, and history tracking, plus you can exclude individual fields from
    custom page layouts.

# EmployeeCrisisAssessment

Represents a crisis assessment of an Employee. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.

For Work.com, when an employee responds to a wellness survey, an EmployeeCrisisAssessment record is created based on an employee's answers.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access this object, you must be assigned a Workplace Command Center permission set license and the Provides access to Workplace Command Center features system permission.

## Fields

| Field | Details |
| --- | --- |
| Assessment | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s COVID-19 status at the time of the assessment.Possible values are:COVID-19 Immune or RecoveredCOVID-19 No SymptomsCOVID-19 Symptoms or ExposedCOVID-19 Test NegativeCOVID-19 Test PositiveDeclined |
| AssessmentDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date of the assessment. Required |
| AssessmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe assessment record number. |
| CrisisId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Crisis that this assessment is associated with. |
| EmployeeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The Employee that this assessment is associated with. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create operation. |
| SourceAssessment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record in the source system that drove this assessment. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system that drove this assessment. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

EmployeeCrisisAssessmentHistory (API version 49.0)

History is available for tracked fields of the object.

EmployeeCrisisAssessmentOwnerSharingRule

Sharing rules are available for the object.

EmployeeCrisisAssessmentShare (API version 49.0)

Sharing is available for the object.
