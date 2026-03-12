---
title: "CoverageBenefit"
domain: health-cloud-object-reference
topic: coveragebenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.912Z
estimatedTokens: 4684
keywords: [CoverageBenefit, benefits, provided, covered, member, purchaser’s, plan, Calls, Associated, Objects]
---

# CoverageBenefit

> Represents the benefits provided to a covered member by a
			purchaser’s plan.

# CoverageBenefit

Represents the benefits provided to a covered member by a purchaser’s plan.

## Supported Calls

create(),  delete(),  describeLayout(),  describeSObjects(),  getDeleted(),  getUpdated(),  query(),  retrieve(),  search(),  undelete(),  update(),  upsert()

## Fields

| Field Name | Details |
| --- | --- |
| BenefitNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the benefits available to the member under this plan’s coverage. |
| BenefitPeriodEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast day of the coverage benefit period. |
| BenefitPeriodStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst day of the coverage benefit period. |
| CareBenefitVerifyRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care benefit verify request associated with the coverage benefit.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameCareBenefitVerifyRequestRelationship TypeLookupRefers ToCareBenefitVerifyRequest |
| CoinsuranceNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the contribution the member makes towards treatment. |
| CopayNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information on the copayment amounts members contributes. |
| CoverageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGeneral category of service covered.Possible values are:DentalMedicalVisionHome Health - This picklist value is available for the Home Health feature in API version 59.0 and later.Pharmacy - This picklist value is available for the Pharmacy Benefits Verification feature in API version 63.0 and later. See Activate Picklist Value for Coverage Benefit to activate this value. |
| DeductibleNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the member’s deductibles under this plan. |
| Disclaimer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOverall plan benefit disclaimers. |
| EmergencyDepartmentCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member contributes towards emergency treatment. |
| FamilyInNetworkDeductibleApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has paid for health care provided by the health plan’s preferred providers for all family members. |
| FamilyInNetworkDeductibleLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member is required to pay for health care provided by the health plan’s preferred providers for all family members. When this amount is reached, the plan starts to contribute towards treatment. |
| FamilyInNetworkDeductibleRemaining | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining amount the member still has to pay for health care provided by the health plan’s preferred providers for all family members. When this amount is reached, the plan starts to contribute towards treatment. |
| FamilyInNetworkOutofPocketApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the member has paid in this coverage year for health care provided by the health plan’s preferred providers for all family members. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| FamilyInNetworkOutofPocketLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most the member pays during the coverage year for health care provided by the health plan’s preferred providers for all family members. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| FamilyInNetworkOutofPocketRemaining | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining amount for the member to pay during this coverage year for care provided by the plan’s preferred providers for all family members. When this amount is reached, the plan starts to contribute towards treatment. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| FamilyOutofNetworkDeductibleApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has paid for health care provided by non-preferred providers for all family members. |
| FamilyOutofNetworkDeductibleLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount the member has to pay for health care provided by non-preferred providers for all family members. When this amount is reached, the plan starts to contribute towards treatment. |
| FamilyOutofNetworkDeductibleRemaining | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member still has to pay for health care provided by non-preferred providers for all family members. When this amount is reached, the plan starts to contribute towards treatment. |
| FamilyOutofNetworkOutofPocketApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the member has paid in this coverage year for health care provided by non-preferred providers for all family members. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| FamilyOutofNetworkOutofPocketLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most the member pays during the coverage year for health care provided by non-preferred providers for all family members. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| FamilyOutofNetworkOutofPocketRemaining | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining amount for the member to pay during this coverage period for health care provided by non-preferred providers for all family members. When this amount is reached, the plan starts to contribute towards treatment. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| FinalCoverageStatusCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code that's determined after considering the restrictions and other status types that apply to the coverage benefit.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameFinalCoverageStatusCodeRelationship TypeLookupRefers ToCodeSet |
| FrequencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency type of the coverage benefit associated with the home healthcare visit.Possible values are:DailyFortnightlyMonthlyQuarterlyWeeklyYearlyThis field is available in API version 66.0 and later with the Home Health add-on license. |
| IndividualInNetworkDeductibleApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has paid for health care provided by the health plan’s preferred providers to the most costly family member. |
| IndividualInNetworkDeductibleLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has to pay for health care provided by the plan’s preferred providers for any family member. When this amount is reached, the plan starts to contribute towards treatment. |
| IndividualInNetworkDeductibleRemaining | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining amount the member has to pay for care during the coverage year provided by the plan’s preferred providers for any family member. When this amount is reached, the plan starts to contribute towards treatment. |
| IndividualInNetworkOutofPocketApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the member has paid in this coverage year for health care provided by the plan’s preferred providers to any one family member. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| IndividualInNetworkOutofPocketLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most the member pays during the coverage year for health care provided by the health plan’s preferred providers for any family member. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| IndividualInNetworkOutofPocketRemaining | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount remaining for the member to pay during the coverage year for care provided by the plan’s preferred providers for any family member. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| IndividualOutofNetworkDeductibleApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has paid for health care provided by non-preferred providers to the most costly family member. |
| IndividualOutofNetworkDeductibleLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has to pay for health care provided by non-preferred providers to any one family member. When this amount is reached, the plan starts to contribute towards treatment. |
| IndividualOutofNetworkDeductibleRemain | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining amount the member has to pay for health care during the coverage year provided by non-preferred providers to any family member. When this amount is reached, the plan starts to contribute towards treatment. |
| IndividualOutofNetworkOutofPocketApplied | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the member has paid in this coverage period for health care provided by non-preferred providers to any family members. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| IndividualOutofNetworkOutofPocketLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most the member pays during the coverage year for health care provided by non-preferred providers to any family member. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| IndividualOutofNetworkOutofPocketRemain | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount remaining for the member to pay during the coverage year for health care provided by non-preferred providers to any family member. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| InNetworkCoinsuranceAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member contributes towards treatment undertaken by the health plan’s preferred providers. |
| InNetworkCoinsurancePercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of treatment cost the member pays for treatment undertaken by the health plan’s preferred providers. |
| InNetworkLifetimeMaximum | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has to pay during lifetime coverage under this plan after which the provider covers all costs for treatment provided by its preferred providers. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the coverage benefit is currently in force.The default value is 'false'. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LifetimeMaximumNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information on the lifetime maximum payments the member Will be expected to make. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the member receiving these benefits. |
| MemberPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the member plan receiving these benefits. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of these coverage benefits. |
| OutcomeStatusCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outcome code set associated with the coverage benefit.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameOutcomeStatusCodeRelationship TypeLookupRefers ToCodeSet |
| OutofNetworkCoinsuranceAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member contributes towards treatment undertaken by non-preferred providers. |
| OutofNetworkCoinsurancPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of treatment cost the member pays for treatment undertaken by non-preferred providers. |
| OutofNetworkLifetimeMaximum | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member has to pay during lifetime coverage under this plan after which the plan provider covers all costs for treatment provided by its non-preferred providers. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| OutofPocketNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the out-of-pocket payment the member makes. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PharmaCopayAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member contributes towards the pharma products.This field is available in API version 62.0 and later with the Manage Financial Assistance Program permission set. |
|  |  |
| PrimaryCareCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member contributes towards primary care treatment. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this benefits record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this benefits record on its source system. |
| SourceSystemModified | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which these benefits were last changed on their source system. |
| SpecialistCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member contributes towards specialist consultations. |
| StatusCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status code set associated with the coverage benefit.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameStatusCodeRelationship TypeLookupRefers ToCodeSet |
| TotalBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the coverage benefit associated with the home healthcare visit.This field is available in API version 66.0 and later with the Home Health add-on license. |
| UrgentCareCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the member contributes towards urgent care. |
| VerificationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate on which the benefit was verified. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CoverageBenefitChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[CoverageBenefitFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CoverageBenefitHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CoverageBenefitOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CoverageBenefitShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CoverageBenefitChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CoverageBenefitFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CoverageBenefitHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CoverageBenefitOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CoverageBenefitShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
