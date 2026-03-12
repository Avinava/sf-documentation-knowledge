---
title: "OpportunityLineItemSplit"
domain: object-reference
topic: opportunitylineitemsplit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.574Z
estimatedTokens: 994
keywords: [OpportunityLineItemSplit, opportunity, product, split, including, percentages, amounts, owner, API, version, 58.0, later, Calls, Special, Access]
---

# OpportunityLineItemSplit

> Represents information about an opportunity product split, including percentages,
      amounts, and owner. This object is available in API version 58.0 and later.

# OpportunityLineItemSplit

Represents information about an opportunity product split, including percentages, amounts, and owner. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Before creating OpportunityLineItemSplit records, enable Team Selling, set up opportunity splits, and enable product splits on at least one opportunity split type in Setup.

## Fields

| Field | Details |
| --- | --- |
| ArchivedTerritoryName | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the associated territory that’s on an archived territory model. If the OpportunityLineItemSplit isn’t associated with a territory on an archived territory model, the field value is null. This field is available in API version 62.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization.If the organization has multicurrency enabled, and a Pricebook2 is specified on the opportunity (that is, the Pricebook2Id field isn’t blank on the opportunity referenced by this object’s OpportunityId), then the value of this field must match the currency of the CurrencyIsoCode field on the PricebookEntry records that are associated with this object.Possible values are:BRL—Brazilian RealCAD—Canadian DollarEUR—EuroUSD—U.S. DollarThe default value is USD. |
| OpportunityLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the associated parent OpportunityLineItem. This field is a relationship field.Relationship NameOpportunityLineItemRelationship TypeLookupRefers ToOpportunityLineItem |
| Split | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRead-only. Automatically generated number identifying the split within the opportunity. |
| SplitAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount or value of the split. |
| SplitNote | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional text about the split. |
| SplitOwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user who is the owner of the split. This field is a relationship field.Relationship NameSplitOwnerRelationship TypeLookupRefers ToUser |
| SplitPercentage | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionThe percentage of the OpportunityLineItem's value that the split represents. |
| SplitTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated OpptyLineItemSplitType. This field is a relationship field.Relationship NameSplitTypeRelationship TypeLookupRefers ToOpptyLineItemSplitType |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated territory. This field is a relationship field, and is available in API version 62.0 and later.Relationship NameTerritory2Relationship TypeLookupRefers ToTerritory2 |

## Usage

Use the OpportunityLineItemSplit object to manage opportunity product splits for an opportunity.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OpportunityLineItemSplitHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 59.0)

History is available for tracked fields of the object.

## Related Topics

- OpportunityLineItemSplitHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
