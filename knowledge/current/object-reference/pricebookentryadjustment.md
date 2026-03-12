---
title: "PricebookEntryAdjustment"
domain: object-reference
topic: pricebookentryadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.039Z
estimatedTokens: 320
keywords: [PricebookEntryAdjustment, Read-only, junction, created, associate, price, adjustment, schedule, book, entry, API, version, 47.0, later, Calls]
---

# PricebookEntryAdjustment

> Read-only junction object created when you associate a price adjustment
      schedule with a price book entry. This object is available in API version 47.0 and later.

# PricebookEntryAdjustment

Read-only junction object created when you associate a price adjustment schedule with a price book entry. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
| PriceAdjustmentScheduleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the price book entry adjustment. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the price book entry that this price book entry adjustment is associated with. |

#### See Also

-   [PriceAdjustmentSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentschedule.htm "Represents a series of discounts offered depending on your product's configuration, quantity, and when they’re purchased in combination with other products. This object is available in API version 47.0 and later.")

## Related Topics

- PriceAdjustmentSchedule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentschedule.htm)
