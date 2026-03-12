---
title: "PlanBenefit"
domain: life-sciences-dev-guide
topic: planbenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.646Z
estimatedTokens: 2682
keywords: [PlanBenefit, standard, benefits, under, plan, purchaser, offers, their, members, Calls, Associated, Objects]
---

# PlanBenefit

> Represents the standard benefits available under a plan that the
			purchaser offers to their members.

# PlanBenefit

Represents the standard benefits available under a plan that the purchaser offers to their members.

## Supported Calls

create(),  delete(),  describeLayout(),  describeSObjects(),  getDeleted(),  getUpdated(),  query(),  retrieve(),  search(),  undelete(),  update(),  upsert()

## Fields

| Field Name | Details |
| --- | --- |
| BenefitNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the benefits available to members under this plan’s coverage. |
| CoinsuranceNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation about the contribution a member makes towards treatment. |
| CopayNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information on the copayment amounts that members contribute. |
| DeductibleNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about a member’s deductibles. |
| DocumentLocation | TypeurlPropertiesCreate, Nillable, UpdateDescriptionHyperlink to internal or external resources. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which these benefits are communicated to plan members. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which these benefits become effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which these benefits ceased to be effective. |
| EmergencyDepartmentCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPatient's portion of payment for using emergency department services. |
| FamilyInNetworkDeductible | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member pays for health care provided by the health plan’s preferred providers for all family members. When this amount is reached, the plan starts to contribute towards treatment. |
| FamilyInNetworkOutofPocket | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most a member pays during a coverage year for health care provided by the health plan’s preferred providers for all family members. It includes deductibles, copayments, and coinsurance, but is in addition to premiums. |
| FamilyOutofNetworkDeductible | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member pay for health care provided by non-preferred providers for all family members before this plan starts to contribute towards treatment. |
| FamilyOutofNetworkOutofPocket | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most a member pays during a coverage year for health care provided by non-preferred providers for all family members. It includes deductibles, copayments, and coinsurance, but is in addition to premiums. |
| FrequencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency type of the plan benefit associated with the home healthcare visit.Possible values are:DailyFortnightlyMonthlyQuarterlyWeeklyYearlyThis field is available in API version 66.0 and later with the Home Health add-on license. |
| IndividualInNetworkDeductible | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member pays for health care provided by the health plan’s preferred providers to any one family member. When this amount is reached, the plan starts to contribute towards treatment. |
| IndividualInNetworkOutofPocket | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most a member pays during a coverage year for health care provided by the health plan’s preferred providers for any one family member. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| IndividualOutofNetworkDeductible | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member pays for health care provided by non-preferred providers to any one family member before this plan starts to contribute towards treatment. |
| IndividualOutofNetworkOutofPocket | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most a member pays during a coverage year for health care provided by non-preferred providers for any one family member. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| InNetworkCoinsuranceAmount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member contributes towards each treatment undertaken by the health plan’s preferred providers. |
| InNetworkCoinsurancePercentage | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of treatment cost the member pays for each treatment undertaken by the health plan’s preferred providers. |
| InNetworkLifetimeMaximum | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most a member pays during the lifetime membership on this plan for health care provided by the health plan’s preferred providers. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LifetimeMaximumNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about a member’s maximum lifetime payments. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of these plan coverage benefits. |
| OutofNetworkCoinsuranceAmount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member contributes towards treatment undertaken by non-preferred providers. |
| OutofNetworkCoinsurancePercentage | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of treatment cost the member pays for treatment undertaken by non-preferred providers. |
| OutofNetworkLifetimeMaximum | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most a member pays during the lifetime membership on this plan for health care provided by non-preferred providers. It includes deductibles, copayments, and coinsurance, but excludes premiums. |
| OutofPocketNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the out-of-pocket payment a member makes. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PrimaryCareCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member contributes towards primary care treatment. |
| PurchaserPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the purchaser plan offering these benefits. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this benefits record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this benefits record on its source system. |
| SourceSystemModified | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which these benefits were last changed on their source system. |
| SpecialistCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member contributes towards specialist consultations. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of these benefits. The default the picklist values are:ActiveInactive |
| TotalBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the plan benefit associated with the home healthcare visit.This field is available in API version 66.0 and later with the Home Health add-on license. |
| UrgentCareCopay | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount a member contributes towards urgent care. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PlanBenefitChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[PlanBenefitFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PlanBenefitHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PlanBenefitOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PlanBenefitShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PlanBenefitChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- PlanBenefitFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PlanBenefitHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PlanBenefitOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- PlanBenefitShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
