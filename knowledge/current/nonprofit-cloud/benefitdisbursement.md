---
title: "BenefitDisbursement"
domain: nonprofit-cloud
topic: benefitdisbursement
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:01.963Z
estimatedTokens: 1127
keywords: [BenefitDisbursement, allocation, enrollee's, benefit, made, monetary, non-monetary, different, frequencies, Program, Management, API, version, 57.0, later]
---

# BenefitDisbursement

> Represents the allocation of an enrollee's benefit that can be made as
         monetary or non-monetary with different frequencies. This object is available with
      Program Management in API version 57.0 and later.

# BenefitDisbursement

Represents the allocation of an enrollee's benefit that can be made as monetary or non-monetary with different frequencies. This object is available with Program Management in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualCompletionDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the benefit disbursement was completed. |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the disbursement status of the benefit.Possible values are:ApprovedIn ReviewNot ApplicablePendingRejected |
| BenefitAssignmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe benefit assignment that's associated with the disbursement.This field is a relationship field.Relationship NameBenefitAssignmentRelationship TypeMaster-DetailRefers ToBenefitAssignment |
| BenefitSessionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit session that's associated with the benefit disbursement. This field is accessible if you enabled Data Protection and Privacy in Setup.This field is a relationship field.Relationship NameBenefitSessionRelationship TypeLookupRefers ToBenefitSession |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description about the benefit that is disbursed. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| DisbursedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the benefit that's disbursed. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| DisbursementStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the benefit disbursement.Possible values are:AbsentCompletedEnrolledExcusedThe default value is Enrolled.This field is accessible if you enabled Data Protection and Privacy in Setup. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the benefit period in every payment cycle. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the benefit disbursement. |
| ProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program enrollment record that's associated with the benefit disbursement. This field is accessible if you enabled Data Protection and Privacy in Setup.This field is a relationship field.Relationship NameProgramEnrollmentRelationship TypeLookupRefers ToProgramEnrollment |
| RecipientCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of recipients who received the benefit. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant who receives a benefit.This field is a polymorphic relationship field.Relationship NameRecipientRelationship TypeLookupRefers ToAccount, Contact |
| RecipientType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the recipient type of the benefit that's disbursed.Possible values are:AnonymousProgram EnrollmentWalk-inThe default value is ProgramEnrollment.This field is accessible if you enabled Data Protection and Privacy in Setup. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the benefit period in every payment cycle. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit type. This field is accessible if you enabled Data Protection and Privacy in Setup.This field is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
