---
title: "BenefitAssignment"
domain: eu-developer-guide
topic: benefitassignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.109Z
estimatedTokens: 2181
keywords: [BenefitAssignment, enrollment, individual, business, captured, application, unemployed, raise, requesting, help, government, approved, enrolled, unemployment, insurance]
---

# BenefitAssignment

> Represents the enrollment information of an individual or business that is
         captured in an application. For example, an individual who is unemployed can raise an
         application requesting help from the government. If it is approved, the individual is
         enrolled into the unemployment insurance benefit. This object is available in API
      version 52.0 and later.

# BenefitAssignment

Represents the enrollment information of an individual or business that is captured in an application. For example, an individual who is unemployed can raise an application requesting help from the government. If it is approved, the individual is enrolled into the unemployment insurance benefit. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovalRejectionReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for rejecting the benefit amount requested by the enrollee. |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the benefit assignment has been approved or not.Possible values are:ApprovedPendingRejected |
| AssignmentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the benefit is assigned to the enrollee.Available in API version 66.0 and later. |
| BenefitAssignmentKeywords | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe keywords that are associated with the benefit assignment.Available in API version 66.0 and later. |
| BenefitAssignmentSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA summary of the benefit assignment.Available in API version 66.0 and later. |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Name of the benefit that is associated with the assignment.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| EarningThresholdAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum amount the enrollee can earn for a given period to be eligible for a benefit. |
| EligibilityDeterminationmethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the method used to determine the eligibility of the enrollee for the benefit.Available in API version 66.0 and later. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date up to when the assignment is valid. |
| EnrolleeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the individual being enrolled for the benefit.This field is a polymorphic relationship field.Relationship NameEnrolleeRelationship TypeLookupRefers ToAccount, Contact |
| EnrollmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the benefit is applicable to an individual. |
| EntitlementAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe benefit amount that an enrollee is eligible for. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MaximumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum amount that can be disbursed during an enrollment period. |
| MinimumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum amount that can be disbursed during an enrollment period. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the benefit assignment. |
| NextPayoutDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe due date for the next scheduled benefit payment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The parent record associated with the benefit assignment.This field is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToBusinessLicenseApplication, CarePlan, Claim, GoalAssignment, IndividualApplication, ProgramEnrollment |
| PayoutFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency of the benefit payment.Possible values are:AnnualBiWeeklyMonthlyOnDemandQuaterlyWeekly |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the benefit assignment.Possible values are:HighLowMedium |
| ProgramEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the program enrollment record that's associated with the benefit assignment.This field is a relationship field.Relationship NameProgramEnrollmentRelationship TypeLookupRefers ToProgramEnrollment |
| Quantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit quantity allocated to the enrollee. |
| RecertificationDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by when the enrolee must recertify eligibility to continue receiving the benefit.Available in API version 58.0 and later. |
| RecertificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the recertification status of the enrollee's eligibility for the benefit assignment.Possible values are:InProgress—Available in API version 61.0 and later.Lapsed—Available in API version 61.0 and later.PendingRecertifiedAvailable in API version 60.0 and later. |
| ReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference number used to indicate the enrollee's benefit request. |
| RemainingAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remainder benefit amount that is to be paid to the enrollee. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date from when the assignment begins. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the benefit assignment.Possible values are:ActiveCompletedEnrolledWaitlistedWithdrawnThe default value is Enrolled. |
| TaskJobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the task in the task queue.Possible values are:CompletedFailedInProgressSubmitted |
| TaskJobStatusMessage | TypetextareaPropertiesNillableDescriptionThe message that describes the status of the task in the queue. |
| TerminationNotificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the benefit termination notice was delivered.Available in API version 66.0 and later. |
| TerminationReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason for terminating the benefit assignment.Available in API version 66.0 and later. |
| TotalApprovedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total benefit amount approved for an enrollee. |
| TotalPaidAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total benefit amount that has already been paid to the enrollee. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the unit of measurement of the benefit allocated to the enrollee.This field is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

BenefitAssignmentFeed

Feed tracking is available for the object.

BenefitAssignmentHistory

History is available for tracked fields of the object.

BenefitAssignmentOwnerSharingRule

Sharing rules are available for the object.

BenefitAssignmentShare

Sharing is available for the object.
