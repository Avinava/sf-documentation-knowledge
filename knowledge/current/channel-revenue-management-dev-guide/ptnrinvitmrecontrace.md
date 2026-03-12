---
title: "PtnrInvItmReconTrace"
domain: channel-revenue-management-dev-guide
topic: ptnrinvitmrecontrace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.618Z
estimatedTokens: 558
keywords: [PtnrInvItmReconTrace, source, partner's, calculated, unsold, inventory, specific, date, API, version, 64.0, later, Calls, Associated, Objects]
---

# PtnrInvItmReconTrace

> Represents the source of a partner's calculated unsold inventory on a
         specific date. This object is available in API version 64.0 and later.

# PtnrInvItmReconTrace

Represents the source of a partner's calculated unsold inventory on a specific date. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the partner's inventory. |
| PartnerUnsoldInventoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The partner unsold inventory associated with the partner inventory item reconciliation traceability.This field is a relationship field.Relationship NamePartnerUnsoldInventoryRefers ToPartnerUnsoldInventory |
| PtnrInvItmReconId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The partner inventory item reconciliation associated with the partner inventory item reconciliation traceability.Relationship NamePtnrInvItmReconRelationship TypeMaster-detailRefers ToPtnrInvItmRecon (the master object) |
| UnsoldQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The unsold quantity of the partner's inventory. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PtnrInvItmReconTraceHistory](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PtnrInvItmReconTraceHistory (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm)
