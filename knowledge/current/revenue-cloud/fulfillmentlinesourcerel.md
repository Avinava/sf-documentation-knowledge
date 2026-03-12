---
title: "FulfillmentLineSourceRel"
domain: revenue-cloud
topic: fulfillmentlinesourcerel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.422Z
estimatedTokens: 761
keywords: [FulfillmentLineSourceRel, relationship, fulfillment, order, line, decomposition, source, API, version, 61.0, later, Calls, Associated, Objects]
---

# FulfillmentLineSourceRel

> Represents the relationship between a fulfillment order line and its
         decomposition source. This object is available in API version 61.0 and
      later.

# FulfillmentLineSourceRel

Represents the relationship between a fulfillment order line and its decomposition source. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Action | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the action to be performed on the asset fulfillment decomposition record. This field is available in API version 66.0 and later.Possible values are:AddCancelNoChange—No Change |
| FulfilmentOrderLineId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the fulfillment order line.This field is a relationship field.Relationship NameFulfilmentOrderLineRefers ToFulfillmentOrderLineItem |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe relation between the two order line sources. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceItemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the decomposition source that's related to the fulfilment order line. This field is available in API version 64.0 and later. |
| SourceLineItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the source line item.This field is a polymorphic relationship field.Relationship NameSourceLineItemRefers ToFulfillmentOrderLineItem, OrderItem |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of source for the line item.Valid values are:SourceBundleRootSourceLineItem |
| SupplementalAction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe supplemental action that's applied to the line item based on the run-time changes made to the original fulfillment request. This field is available in API version 62.0 and later.Valid values are:AddAmendCancelNoChange |
| UniqueIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionFor internal use only. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentLineSourceRelShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FulfillmentLineSourceRelShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
