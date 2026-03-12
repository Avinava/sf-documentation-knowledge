---
title: "ProductServiceCampaignItemStatus"
domain: field-service
topic: productservicecampaignitemstatus
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:54.573Z
estimatedTokens: 606
keywords: [ProductServiceCampaignItemStatus, status, product, service, campaign, item, API, version, 51.0, later, Calls, Special, Access, Rules, Usage]
---

# ProductServiceCampaignItemStatus

> Represents a status for a product service campaign item in field service.
    This object is available in API version 51.0 and later.

# ProductServiceCampaignItemStatus

Represents a status for a product service campaign item in field service. This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe API name of the status value. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the status value is the default status on product service campaign items when true. Only one status value can be the default. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the picklist value in the UI. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe value’s position in the dropdown list in the UI. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status category that the value corresponds to. The Status Category field has seven values that are identical to the default Status values. |

## Usage

The Status field on product service campaign items comes with the following values:

-   New—Product service campaign item created, but there hasn’t been any activity.
-   In Progress—Work has begun.
-   On Hold—Work is paused.
-   Completed—Work is complete.
-   Cannot Complete—Work couldn’t be completed.
-   Closed—All work and associated activity is complete.
-   Canceled—Work is canceled, typically before any work began.

The ProductServiceCampaignItemStatus object corresponds to the Status field. Adding a value to the Status field—for example, Canceled By Supplier—creates a product service campaign item status record, and vice versa.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Product service campaign items also come with a Status Category field whose values are identical to the default status values. If you create custom status values, you must indicate which category it belongs to. For example, if you create a Customer Absent value, add it to the Cannot Complete category. To learn which processes reference StatusCategory, see [How are Status Categories Used?](https://help.salesforce.com/articleView?id=fs_status_categories.htm&language=en_US)
