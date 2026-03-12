---
title: "BenefitDisbursement"
domain: psc-api
topic: benefitdisbursement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:33.161Z
estimatedTokens: 2167
keywords: [BenefitDisbursement, allocation, enrollee's, benefit, made, monetary, non-monetary, different, frequencies, API, version, 56.0, later, Calls, Special]
---

# BenefitDisbursement

> Represents the allocation of an enrollee's benefit that can be made as
         monetary or non-monetary with different frequencies. This object is available in API
      version 56.0 and later.

# BenefitDisbursement

Represents the allocation of an enrollee's benefit that can be made as monetary or non-monetary with different frequencies. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Program and Benefit Management or Benefit Disbursement is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| ActualCompletionDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date when the benefit disbursement was completed. |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount that's adjusted in the benefit disbursement. |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the disbursement status of the benefit.Possible values are:ApprovedIn ReviewNot ApplicablePendingRejected |
| BenefitAssignmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The benefit assignment that's associated with the disbursement.This field is a relationship field.Relationship NameBenefitAssignmentRelationship TypeLookupRefers ToBenefitAssignment |
| BenefitCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of the benefit that's allocated to the enrollee or the recipient.Possible values are:GoodsMonetaryServices |
| BenefitSessionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit session that's associated with the benefit disbursement. This field is accessible if you enabled Data Protection and Privacy in Setup.This field is a relationship field.Relationship NameBenefitSessionRelationship TypeLookupRefers ToBenefitSession |
| CodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set associated with the benefit disbursement record.This field is a relationship field.Available in API version 59.0 and later.Relationship NameCodeSetRelationship TypeLookupRefers ToCodeSet |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description about the benefit that is disbursed. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| DisbursedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the benefit that's disbursed. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| DisbursementMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the method for benefit disbursement.Available in API version 66.0 and later. |
| DisbursementStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the benefit disbursement.Possible values are:AbsentCompletedEnrolledExcusedThe default value is Enrolled.This field is accessible if you enabled Data Protection and Privacy in Setup. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the benefit period in every payment cycle. |
| EntitlementAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe benefit amount that an enrollee is eligible for. |
| ExternalPaymentReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the payment on an external system. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the benefit disbursement. |
| PaymentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the disbursement payment.Possible values are:CompletedFailedNot ApplicablePendingProcessing |
| PayoutAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe payout amount after adjustment that's to be paid to the enrollee or the recipient. |
| PractitionerFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner facility associated with the benefit session record.This field is a relationship field.Available in API version 59.0 and later.Relationship NamePractitionerFacilityRelationship TypeLookupRefers ToHealthcarePractitionerFacility |
| ProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program enrollment record that's associated with the benefit disbursement. This field is accessible if you enabled Data Protection and Privacy in Setup.This field is a relationship field.Relationship NameProgramEnrollmentRelationship TypeLookupRefers ToProgramEnrollment |
| ProviderFacilitySpecialtyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care specialty to be provided to the enrollee or the recipient at a particular care provider facility.This field is a relationship field.Relationship NameProviderFacilitySpecialtyRelationship TypeLookupRefers ToCareProviderFacilitySpecialty |
| RecipientCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of recipients who received the benefit. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The participant who receives a benefit.This field is a polymorphic relationship field.Relationship NameRecipientRelationship TypeLookupRefers ToAccount, Contact |
| RecipientType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the recipient type of the benefit that's disbursed.Possible values are:AnonymousProgramEnrollmentWalk-inThe default value is ProgramEnrollment.This field is accessible if you enabled Data Protection and Privacy in Setup. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the benefit period in every payment cycle. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit type. This field is accessible if you enabled Data Protection and Privacy in Setup.This field is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitDisbursementFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitDisbursementHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BenefitDisbursementOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BenefitDisbursementShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BenefitDisbursementFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitDisbursementHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BenefitDisbursementOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BenefitDisbursementShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
