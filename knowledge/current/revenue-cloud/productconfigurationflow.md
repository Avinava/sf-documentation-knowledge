---
title: "ProductConfigurationFlow"
domain: revenue-cloud
topic: productconfigurationflow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.103Z
estimatedTokens: 297
keywords: [ProductConfigurationFlow, many-to-many, relationship, Product, Classification, Flow, Definition, objects, configure, standalone, bundled, products, specific, along, attributes]
---

# ProductConfigurationFlow

> Specifies the many-to-many relationship between Product Classification,
         Product, and Flow Definition objects. The flow definition is used to configure standalone
         and bundled products of a specific product classification along with the product
         attributes, quantities, and product selling models. This object is available in API
      version 60.0 and later.

# ProductConfigurationFlow

Specifies the many-to-many relationship between Product Classification, Product, and Flow Definition objects. The flow definition is used to configure standalone and bundled products of a specific product classification along with the product attributes, quantities, and product selling models. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FlowIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionStores the flow API name. |
| IsDefault | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the default configurator flow.The default value is false. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the status of the product configuration flow. Possible values include Draft, Active, and InactivePossible values are:ActiveDraftInactiveThe default value is Draft. |
