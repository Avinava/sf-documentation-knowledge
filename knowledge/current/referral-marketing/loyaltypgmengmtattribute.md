---
title: "LoyaltyPgmEngmtAttribute"
domain: referral-marketing
topic: loyaltypgmengmtattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.162Z
estimatedTokens: 1296
keywords: [LoyaltyPgmEngmtAttribute, event, that’s, tracked, advocates, engagement, attributes, track, number, times, referred, their, friends, businesses, day]
---

# LoyaltyPgmEngmtAttribute

> Represents an event that’s tracked for advocates. For example,
         engagement attributes are used to track the number of times advocates have referred their
         friends or businesses in a day and the number of times advocates have been rewarded for
         successful referrals. This object is available in API version 59.0 and
      later.

# LoyaltyPgmEngmtAttribute

Represents an event that’s tracked for advocates. For example, engagement attributes are used to track the number of times advocates have referred their friends or businesses in a day and the number of times advocates have been rewarded for successful referrals. This object is available in API version 59.0 and later.

You can create engagement attributes to track long-term advocate and referral events based on your company’s requirements.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe default value of the engagement attribute. In the LoyaltyPgmMbrAttributeVal record that tracks an advocate’s progress towards the associated engagement attribute’s target, the current value is defaulted to the associated engagement attribute’s default value. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe description of the engagement attribute. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe date until which the engagement attribute is tracked for advocates. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the referral program associated with the engagement attribute.This field is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| MaximumResetCountPerPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe maximum number of times the current value for the engagement attribute can be reset during a period. The advocate's current value is reset when they achieve the target value. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the engagement attribute. |
| ResetValueOn | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe day on which the advocate’s current value in the LoyaltyPgmMbrAttributeVal record that tracks the advocate’s engagement attribute progress is reset to zero.If the reset frequency is Weekly, specify the day of the week when the current value is reset. To reset the current value on a Sunday, enter 1. To reset the current value on a Saturday, enter 7. If the reset frequency is Monthly, enter a value from 1 through 31. To reset the current value on the 15th of a month, enter 15. If the reset frequency is Yearly, enter a value from 1 through 12. To reset the current value on the first day of April month, enter 4. If the reset frequency is custom, enter the number of days after which the current value is reset. |
| ShouldOverwriteAttrCurrVal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether a single LoyaltyPgmMbrAttributeVal record is required to track the advocate's engagement across periods (true) or not (false). If you specify false, unique records are created to track advocate's engagement for each period individually, and ensures that you have the historical data for each period.The default value is false. |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRequired. The date from when the engagement attribute is tracked for advocates. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The status of the engagement attribute.Create a record in the Draft status. After you've created the record, you can move it to the Active or Inactive status.Possible values are:ActiveDraftInactiveThe default value is Draft. |
| TargetValue | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe target value that advocates have to achieve to be eligible for a reward or complete the engagement attribute’s target. |
| ValueResetFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecify the frequency at which the advocate’s current value in the LoyaltyPgmMbrAttributeVal record that tracks the advocate’s engagement attribute progress is reset to zero.Possible values are:CustomPeriodDailyMonthlyWeeklyYearly |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmEngmtAttributeHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPgmEngmtAttributeHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
