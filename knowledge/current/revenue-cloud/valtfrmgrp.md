---
title: "ValTfrmGrp"
domain: revenue-cloud
topic: valtfrmgrp
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:12.777Z
estimatedTokens: 700
keywords: [ValTfrmGrp, rule, determines, how, order, broken, sub-orders, specific, technical, help, fulfillment, applied, commercial, product, API]
---

# ValTfrmGrp

> Represents a rule that determines how an order is broken into
         sub-orders with specific technical details that help in order fulfillment. The rule can be
         applied to a commercial or a technical product. This object is available in API
      version 61.0 and later.

# ValTfrmGrp

Represents a rule that determines how an order is broken into sub-orders with specific technical details that help in order fulfillment. The rule can be applied to a commercial or a technical product. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DestinationPrimitiveType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe data type of the output value.Valid values are:BooleanCurrencyDateDatetimeNumberPercent—Picklist ValuePicklistText |
| IsDestinationEnumerated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the output is a list of values (true) or not (false).The default value is false. |
| IsSourceEnumerated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the input is from a list of values (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the list mapping. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourcePrimitiveType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe data type of the input value.Valid values are:BooleanCurrencyDateDatetimeNumberPercent—Picklist ValuePicklistText |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe data mapping feature that uses this value transformation group.Valid value is DFOListMapping. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ValTfrmGrpShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ValTfrmGrpShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
