---
title: "DatacloudPurchaseUsage"
domain: object-reference
topic: datacloudpurchaseusage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.954Z
estimatedTokens: 550
keywords: [DatacloudPurchaseUsage, identify, track, Data.com, record, purchases, API, version, 30.0, later, Calls, Usage]
---

# DatacloudPurchaseUsage

> Represents an
				object used to identify and track Data.com record purchases. This object is
			available in API version 30.0 or later.

# DatacloudPurchaseUsage

Represents an object used to identify and track Data.com record purchases. This object is available in API version 30.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields are removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| DatacloudEntityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of Data.com record you want to purchase.0—indicates contact entity type.1—indicates company entity type. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn optional field. You can add a description for your purchase. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn optional field used to name your record. |
| PurchaseType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA read only field set by the API to identify the purchase type.AddedExportAPI |
| Usage | TypedoublePropertiesFilter, SortDescriptionA read only field set by the API. It is used to track the points used to purchase records. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionA read only field set by the API that identifies the user purchasing the records. |
| UserType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA read only field set by the API with 2 user types.Monthly UsageList Pool User |

## Usage

The DatacloudPurchaseUsage object allows you to track Data.com record purchases for CRM users.
