---
title: "PartyPhilanthropicMilestone"
domain: edu-cloud-dev-guide
topic: partyphilanthropicmilestone
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:26.603Z
estimatedTokens: 1655
keywords: [PartyPhilanthropicMilestone, philanthropic, activities, financial, status, period, time, API, version, 63.0, later, Calls, Associated, Objects]
---

# PartyPhilanthropicMilestone

> Represents philanthropic activities and financial status for a period of
         time. This object is available in API version 63.0 and later.

# PartyPhilanthropicMilestone

Represents philanthropic activities and financial status for a period of time. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the milestone.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AssetLiquidationValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the party's assets that can be liquidated within a specified time period. |
| BusinessOwnershipValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFIXME: Add the description here. [Writers: - The following description was added by the developer when they created this field. - It may nor may not be correct, complete, or up to date. - It is visible to customers in Setup > Object Manager in the UI. If you need to change what is visible there, ask the developer to change it.] The value of private businesses owned by the party. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the milestone.This field is a relationship field.Relationship NameContactRefers ToContact |
| Date | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the milestone. |
| ExtendedSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA detailed summary of the milestone. |
| GivingLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party's giving level.Possible values are:$1,000,000-$4,999,999$1,000-$2,499$10,000,000-$24,999,999$10,000-$24,999$100,000-$249,999$100-$499$2,500-$4,999$25,000,000+$25,000-$49,999$250,000-$999,999$5,000,000-$9,999,999$5,000-$9,999$50,000-$99,999$500-$999Under $100 |
| GraduationCohort | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe person's graduation cohort.Possible values are:0-5 Years Since Graduation11-20 Years Since Graduation21-30 Years Since Graduation31-40 Years Since Graduation41-50 Years Since Graduation50+ Years Since Graduation6-10 Years Since Graduation |
| GraduationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe person's graduation status.Possible values are:Associate DegreeCertificate or AwardMultiple DegreesNon-GraduateOtherPostgraduate DegreeSecondary DiplomaUndergraduate Degree |
| Income | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe party's annual income. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated string or number assigned to the milestone. |
| OtherAssetsValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the party's assets not covered by other measures of net worth. |
| OtherNonprofitGiftAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe monetary value of the party's donations to other nonprofits. |
| OtherNonprofitGiftCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of the party's donations to other nonprofits. |
| OverallRating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overall rating of the milestone.Possible values are:HighLowMedium |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PtyPhilanthropicAsmtCnt | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of party philanthropic assessments within the milestone period. |
| PtyPhilanthropicIndCnt | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of party philanthropic indicators within the milestone period. |
| PtyPhilanthropicOccrCnt | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of party philanthropic occurrences within the milestone period. |
| RealEstateValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of real estate owned by the party. |
| ResponsiblePersonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe relationship officer assigned to the assessed party at the time the assessment milestone is generated.This field is a relationship field.Relationship NameResponsiblePersonRefers ToUser |
| RetirementSavingsAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe party's retirement savings. |
| ShortSummary | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA short summary of the milestone. |
| StockValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of public stock owned by the party. |
| StrengthsAndOpportunities | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe strengths and opportunities identified in the milestone. |
| WeaknessesAndDrawbacks | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe weaknesses and drawbacks identified in the milestone. |
| WealthAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe party's total wealth for the milestone. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

PartyPhilanthropicMilestoneHistory

History is available for tracked fields of the object.

PartyPhilanthropicMilestoneOwnerSharingRule

Sharing rules are available for the object.

PartyPhilanthropicMilestoneShare

Sharing is available for the object.
