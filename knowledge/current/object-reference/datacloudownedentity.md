---
title: "DatacloudOwnedEntity"
domain: object-reference
topic: datacloudownedentity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.947Z
estimatedTokens: 533
keywords: [DatacloudOwnedEntity, tracks, user-purchased, records, API, version, 30.0, later, Calls, Usage]
---

# DatacloudOwnedEntity

> Represents
				fields in the DatacloudOwnedEntity object. The DatacloudOwnedEntity object tracks
				user-purchased records. This object is available in API version 30.0 or
		later.

# DatacloudOwnedEntity

Represents fields in the DatacloudOwnedEntity object. The DatacloudOwnedEntity object tracks user-purchased records. This object is available in API version 30.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields are removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| DataDotComKey | TypestringPropertiesCreate, Filter, SortDescriptionThe Data.com contact or company record identification number used by the DatacloudPurchaseUsage object to keep track of purchased records. This is equivalent to the Data.com record ID for a contact or company. |
| DatacloudEntityType | TypepicklistPropertiesCreate, Filter, Restricted picklist, SortDescriptionThe type of Data.com record you want to purchase.0—contact1—company |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn optional field used to name your record. |
| PurchaseType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionA read only field set by the API to identify the purchase type.AddedExportAPI |
| PurchaseUsageId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique identification number for the DatacloudPurchaseUsage object created by making a REST POST request.0—contact1—company |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionA unique identifier for the user making the purchase. |

## Usage

The Datacloud object that tracks records that are purchased and owned by a specific user.
