---
title: "BenefitAssignment"
domain: nonprofit-cloud
topic: benefitassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.951Z
estimatedTokens: 1025
keywords: [BenefitAssignment, enrollment, individual, benefit, Program, Management, API, version, 57.0, later, Calls]
---

# BenefitAssignment

> Represents the enrollment information of an individual to a
         benefit. This object is available with Program Management in API version 57.0 and
      later.

# BenefitAssignment

Represents the enrollment information of an individual to a benefit. This object is available with Program Management in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the benefit that is associated with the assignment.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date up to when the assignment is valid. |
| EnrolleeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the benefit assignee.This field is a polymorphic relationship field.Relationship NameEnrolleeRelationship TypeLookupRefers ToAccount, Contact |
| EnrollmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the benefit is applicable to an individual. |
| EntitlementAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe benefit amount that an enrollee is eligible for. |
| MaximumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum amount that can be disbursed for a period. |
| MinimumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum amount that can be disbursed for a period. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the benefit assignment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The parent record associated with the benefit assignment.This field is a polymorphic relationship field. Use CarePlan if the benefit is part of a structured care plan, GoalAssignment if it supports a specific goal, IndividualApplication if assigned during intake, and ProgramEnrollment if the participant is only using program management features.Relationship NameParentRecordRelationship TypeLookupRefers ToCarePlan, GoalAssignment, IndividualApplication, ProgramEnrollment |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the benefit assignment.Possible values are:HighLowMedium |
| ProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the program enrollment record that's associated with the benefit assignment.This field is a relationship field.Relationship NameProgramEnrollmentRelationship TypeLookupRefers ToProgramEnrollment |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date from when the assignment begins. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the benefit assignment.Possible values are:ActiveCompletedEnrolledWaitlistedWithdrawnThe default value is Enrolled. |
| TaskJobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the task in the task queue.Possible values are:CompletedFailedInProgress - In ProgressSubmitted |
| TaskJobStatusMessage | TypetextareaPropertiesNillableDescriptionThe message that describes the status of the task in the queue. |
| UnitofMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit type.This field is a relationship field.Relationship NameUnitofMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
