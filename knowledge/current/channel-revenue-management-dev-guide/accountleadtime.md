---
title: "AccountLeadTime"
domain: channel-revenue-management-dev-guide
topic: accountleadtime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.257Z
estimatedTokens: 937
keywords: [AccountLeadTime, estimated, lead, time, account, specific, activity, business, indicate, needed, API, version, 65.0, later, Calls]
---

# AccountLeadTime

> Represents the estimated lead time for an account for a specific activity
         type. The business specifies this value to indicate the time needed to complete the
         activity. This object is available in API version 65.0 and later.

# AccountLeadTime

Represents the estimated lead time for an account for a specific activity type. The business specifies this value to indicate the time needed to complete the activity. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Represents the account associated with this specific lead time record.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| Duration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The time taken for the inventory to be shipped from the source to the destination. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies how the duration is measured.Possible values are:DaysMonthsWeeksThe default value is Days. |
| LeadTimeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the purpose of the lead time, such as transit, service, or fulfillment, for this record.Possible values are:ServiceTransitThe default value is Transit. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account lead time record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the account lead time record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the record.Possible values are:ActiveInactiveThe default value is Active. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountLeadTimeHistory](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AccountLeadTimeOwnerSharingRule](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AccountLeadTimeShare](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AccountLeadTimeHistory (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm)
- AccountLeadTimeOwnerSharingRule (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- AccountLeadTimeShare (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm)
