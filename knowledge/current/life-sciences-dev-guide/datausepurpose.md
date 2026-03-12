---
title: "DataUsePurpose"
domain: life-sciences-dev-guide
topic: datausepurpose
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.046Z
estimatedTokens: 245
keywords: [DataUsePurpose, Standard, custom, extend, Data, Purpose, represent, reason, contacting, prospect, customer, API, version, 65.0, later]
---

# DataUsePurpose

> Standard and custom fields extend the standard Data Use Purpose object to
         represent information about the reason for contacting a prospect or customer. This object
         is available in API version 65.0 and later.

# DataUsePurpose

Standard and custom fields extend the standard Data Use Purpose object to represent information about the reason for contacting a prospect or customer. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| PurposeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of an object containing data specific to the data use purpose.This field is a polymorphic relationship field.Relationship NamePurposeRefers ToAsset, CareProgram, CareRegisteredDevice, LifeSciMarketableProduct, Product2 |

#### See Also

-   [*Object Reference for the Salesforce Platform*: DataUsePurpose](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_datausepurpose.htm)
