---
title: "ValTfrm"
domain: revenue-cloud
topic: valtfrm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.769Z
estimatedTokens: 753
keywords: [ValTfrm, mappings, attributes, Enrichment, rules, part, decomposition, rule, propagate, data, fulfillment, order, lines, API, version]
---

# ValTfrm

> Represents mappings between fields and attributes. Enrichment rules
         are part of a decomposition rule, and are used to propagate data to fulfillment order
         lines. This object is available in API version 61.0 and later.

# ValTfrm

Represents mappings between fields and attributes. Enrichment rules are part of a decomposition rule, and are used to propagate data to fulfillment order lines. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InputDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of value entry. |
| InputDatetime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time of value entry. |
| InputNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of input number. |
| InputPicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the input list of values.This field is a relationship field.Relationship NameInputPicklistValueRefers ToAttributePicklistValue |
| InputString | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of input text. |
| IsInputBoolean | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if a value was entered (true) or not (false).The default value is false. |
| IsOutputBoolean | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if there was an output value (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the related transformation group. |
| OutputDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of matched output. |
| OutputDatetime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time of matched output. |
| OutputNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of output number. |
| OutputPicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the output list of values.This field is a relationship field.Relationship NameOutputPicklistValueRefers ToAttributePicklistValue |
| OutputString | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of output text. |
| ValueTransformGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the related transformation group.This field is a relationship field.Relationship NameValueTransformGroupRelationship TypeMaster-detailRefers ToValTfrmGrp (the master object) |
