---
title: "PtnrInvItmRecon"
domain: channel-revenue-management-dev-guide
topic: ptnrinvitmrecon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.612Z
estimatedTokens: 1167
keywords: [PtnrInvItmRecon, partner, reported, inventory, reconciliation, product, location, particular, price, API, version, 64.0, later, Calls, Associated]
---

# PtnrInvItmRecon

> Represents a partner reported inventory reconciliation for a product at a
         location for a particular price. This object is available in API version 64.0 and
      later.

# PtnrInvItmRecon

Represents a partner reported inventory reconciliation for a product at a location for a particular price. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The account of the partner whose inventory is reconciled.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| ExecutionReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA reference number in an execution process, such as a data processing engine defintion, that's used to match the partner inventory item reconciliaiton with its related partner inventory item reconciliation traceabilities. |
| LastSynchronizationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most recent data and time when an execution process, such as a data processing engine definition, is launched to reconcile the partner's reported inventory with the calculated inventory. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location ID of the partner's inventory.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the partner's inventory. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The product ID for which the partner's inventory is reconciled.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| PtnrInvReconId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The partner inventory reconciliation ID that's associated with the partner inventory item reconciliation.This field is a relationship field.Relationship NamePtnrInvReconRelationship TypeMaster-detailRefers ToPtnrInvRecon (the master object) |
| QuantityDifference | TypedoublePropertiesFilter, Nillable, SortDescriptionThe difference between the total unsold quantity and the reported quantity.This field is a calculated field. |
| ReportedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity that's reported by the partner for a product in their inventory. The reported quantity is reconciled against the total unsold quantity. |
| SourceReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that's the source of the partner inventory item reconciliation.This field is a polymorphic relationship field.Relationship NameSourceReferenceRecordRefers ToPartnerStagedData |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the partner inventory item reconciliation.Possible values are:ClosedInProgressNewThe default value is New. |
| TotalUnsoldQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total unsold quantity of a product in the partner's inventory that's calculated based on the partner's sales transactions. The total unsold quantity is a sum of the unsold quantity in all partner inventory item reconciliation traceability associated with the partner inventory item reconciliation.This field is a calculated field. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe unit price of the product for which the partner's inventory is reconciled. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PtnrInvItmReconHistory](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PtnrInvItmReconHistory (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm)
