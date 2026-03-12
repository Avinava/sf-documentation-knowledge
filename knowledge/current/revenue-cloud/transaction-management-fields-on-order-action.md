---
title: "Transaction Management Fields on Order Action"
domain: revenue-cloud
topic: transaction-management-fields-on-order-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.161Z
estimatedTokens: 213
keywords: [Transaction, Management, Fields, Order, Action, Standard, custom, fields, extend, standard, Management., API, version, 55.0, later., Special, Access, Rules]
---

# Transaction Management Fields on Order Action

> Standard and custom fields extend the standard Order Action object for use in
         Transaction Management. This object is available in API version 55.0 and
      later.

# Transaction Management Fields on Order Action

Standard and custom fields extend the standard Order Action object for use in Transaction Management. This object is available in API version 55.0 and later.

## Special Access Rules

To view these fields, you must have the Revenue Cloud Advanced license. See [Order Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderaction.htm) for fields on the Salesforce platform object.

## Fields

| Field | Details |
| --- | --- |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe business action that created the order product.Valid values are:AddAmendCancelNo Change—A child product was added to the bundle, but the top-level product in the bundle was otherwise unchanged.Renew |
