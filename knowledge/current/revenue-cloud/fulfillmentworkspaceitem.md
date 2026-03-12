---
title: "FulfillmentWorkspaceItem"
domain: revenue-cloud
topic: fulfillmentworkspaceitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.390Z
estimatedTokens: 404
keywords: [FulfillmentWorkspaceItem, Represents, information, attributes, used, definition, fulfillment, step, group., API, version, 61.0, later., Important, Supported, Calls, Fields]
---

# FulfillmentWorkspaceItem

> Represents information about the attributes that are used in the
         definition for a fulfillment step group. This object is available in API version 61.0
      and later.

# FulfillmentWorkspaceItem

Represents information about the attributes that are used in the definition for a fulfillment step group. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FulfillmentStepDefinitionGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionFor internal use only.This field is a relationship field.Relationship NameFulfillmentStepDefinitionGroupRelationship TypeMaster-detailRefers ToFulfillmentStepDefinitionGroup (the detail object) |
| FulfillmentWorkspaceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent fulfillment workspace that's related to this record.This field is a relationship field.Relationship NameFulfillmentWorkspaceRelationship TypeMaster-detailRefers ToFulfillmentWorkspace (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the fulfillment workspace item. |
| ShowOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display sequence value of the fulfillment workspace item. |
