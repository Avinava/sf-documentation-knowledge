---
title: "OpportunityLineItemSchdActual"
domain: media-developer-guide
topic: opportunitylineitemschdactual
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.898Z
estimatedTokens: 1104
keywords: [OpportunityLineItemSchdActual, different, amounts, recognized, across, lifecycle, opportunity, line, item, API, version, 64.0, later, Calls, Associated]
---

# OpportunityLineItemSchdActual

> Represents the information about the different amounts that are recognized
         across the lifecycle of an opportunity line item. This object is available in API
      version 64.0 and later.

# OpportunityLineItemSchdActual

Represents the information about the different amounts that are recognized across the lifecycle of an opportunity line item. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the readjusted amount for the line item schedule. This field is available in API version 65.0 and later. |
| BilledAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the amount that's invoiced for payment for the line item schedule. |
| BookedActual | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the amount that's committed for the line item schedule. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the record. Available only for organizations with the multicurrency feature enabled.Possible values are:ARS—Argentine PesoCNY—Chinese YuanKRW—Korean WonRUB—Russian RoubleUSD—U.S. DollarThe default value is USD. |
| DeliveredAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the amount that's actually delivered for the line item schedule. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The end date of the line item schedule. This field is available in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OpportunityLineItemScheduleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique ID of line item schedule associated with the line item schedule actual.This field is a relationship field.Relationship NameOpportunityLineItemScheduleRefers ToOpportunityLineItemSchedule |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this recordThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record type associated to the record.This field is a relationship field.Relationship NameRecordTypeRefers ToRecordType |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The start date of the line item schedule. This field is available in API version 65.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OpportunityLineItemSchdActualFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[OpportunityLineItemSchdActualHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[OpportunityLineItemSchdActualShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: OpportunityLineItemSchedule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitemschedule.htm)
