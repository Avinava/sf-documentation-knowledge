---
title: "PartyPhilanthropicAssessment"
domain: nonprofit-cloud
topic: partyphilanthropicassessment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.421Z
estimatedTokens: 2217
keywords: [PartyPhilanthropicAssessment, formalized, assessment, wealth, rating, place, third-party, valuation, financial, asset, internal, API, version, 63.0, later]
---

# PartyPhilanthropicAssessment

> Represents a formalized assessment of wealth when a rating takes place, such
         as a third-party wealth assessment, a property valuation, a financial asset assessment, or
         an internal assessment. This object is available in API version 63.0 and later.

# PartyPhilanthropicAssessment

Represents a formalized assessment of wealth when a rating takes place, such as a third-party wealth assessment, a property valuation, a financial asset assessment, or an internal assessment. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the assessment.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AssessmentOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization performing the assessment.This field is a relationship field.Relationship NameAssessmentOrganizationRefers ToAccount |
| AssessmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of assessment, such as executive summary, donor brief, or third-party assessment.Possible values are:Donor BriefExecutive SummaryThird Party Assessment |
| AssetLiquidationValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the party's assets that can be liquidated within a specified time period. |
| AttributedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person the research is attributed to.This field is a relationship field.Relationship NameAttributedUserRefers ToUser |
| BusinessOwnershipValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of private businesses owned by the party. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case that delivers the research.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the assessment.This field is a relationship field.Relationship NameContactRefers ToContact |
| Date | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the assessment. |
| ExtendedSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA detailed summary of the assessment. |
| GivingLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party's giving level.Possible values are:$1,000,000-$4,999,999$1,000-$2,499$10,000,000-$24,999,999$10,000-$24,999$100,000-$249,999$100-$499$2,500-$4,999$25,000,000+$25,000-$49,999$250,000-$999,999$5,000,000-$9,999,999$5,000-$9,999$50,000-$99,999$500-$999Under $100 |
| GraduationCohort | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe party's graduation cohort, if the party is a person.Possible values are:0-5 Years Since Graduation11-20 Years Since Graduation21-30 Years Since Graduation31-40 Years Since Graduation41-50 Years Since Graduation50+ Years Since Graduation6-10 Years Since Graduation |
| GraduationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe party's graduation status, if the party is a person.Possible values are:Associate DegreeCertificate or AwardMultiple DegreesNon-GraduateOtherPostgraduate DegreeSecondary DiplomaUndergraduate Degree |
| Income | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe party's annual income. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated string or number assigned to the assessment. |
| OtherAssetsValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the party's assets not covered by other measures of net worth. |
| OtherNonprofitGiftAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe monetary value of the party's donations to other nonprofits. |
| OtherNonprofitGiftCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of the party's donations to other nonprofits. |
| OverallRating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overall rating determined by the assessment.Possible values are:HighLowMedium |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PartyPhilanthropicRsrchPrflId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe research profile associated with the research.This field is a relationship field.Relationship NamePartyPhilanthropicRsrchPrflRelationship TypeLookupRefers ToPartyPhilanthropicRsrchPrfl |
| RealEstateValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of real estate owned by the party. |
| ResearchEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the research, used to measure the research period and assess the efficiency of the research. |
| ResearchHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total hours spent on research for the assessment, used to track resource allocation and time spent on researching each prospect. |
| ResearchSharedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the completed research is shared with the relationship officer, used to ensure transparency and track the flow of information in prospect engagement. |
| ResearchStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the research, used to create a timeline for the research process and track the duration of the research phase. |
| ResponsiblePersonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe relationship officer assigned to the party.This field is a relationship field.Relationship NameResponsiblePersonRefers ToUser |
| RetirementSavingsAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe party's retirement savings. |
| ShortSummary | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA short summary of the assessment. |
| StockValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of public stock owned by the party. |
| StrengthsAndOpportunities | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe strengths and opportunities identified in the assessment. |
| WeaknessesAndDrawbacks | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe weaknesses and drawbacks identified in the assessment. |
| WealthAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe party's total wealth. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyPhilanthropicAssessmentHistory](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyPhilanthropicAssessmentOwnerSharingRule](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyPhilanthropicAssessmentShare](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyPhilanthropicAssessmentHistory (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)
- PartyPhilanthropicAssessmentOwnerSharingRule (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)
- PartyPhilanthropicAssessmentShare (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)
