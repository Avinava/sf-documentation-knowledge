---
title: "MktDataTranObject"
domain: metadata-api
topic: mktdatatranobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.571Z
keywords: [MktDataTranObject, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, MktDataTranField]
---

# MktDataTranObject

# MktDataTranObject

An entity that is used to deliver (aka transport) information from the source to a target (target will be called a landing entity).This can be the schema of a file, API, Event, or other means of transporting data, such as SubscriberFile1.csv, or SubscriberCDCEvent.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

MktDataTranObject components have the suffix mktDataTranObject and are stored in the mktDataTranObjects folder.

## Version

MktDataTranObject components are available in API version 50.0 and later.

## Special Access Rules

You need the Salesforce CustomizeApplication permission to access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| connector | string | Required. Data 360 connector name that allows you to connect the data source to Data 360. |
| creationType | DefinitionCreationType | Required. Describe whether this object was added as the result of the Customer or as part of a Standard Taxonomy.Valid values available in API version 62.0 and later are:ADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalSemanticTransformVector_Embedding |
| dataSource | string | Required. Your reference to the data source from which the data originated (source of that data such as the name of a CRM Org. Example: MC Enterprise. |
| dataSourceObject | string | Required. Represents the object name from where the data is sourced. Example: ecommerce-OrderItem. |
| masterLabel | string | Required. The UI name for the Data Transport Object. |
| objectCategory | string | Required. Reference to the Object Category. For Transport, these are Profile, Engagement, or Other. |

## MktDataTranField

This is a sub-type to MktDataTranObject.

| Field Name | Field Type | Description |
| --- | --- | --- |
| creationType | DefinitionCreationType | Optional: Was this object added as a result of the Customer, part of a Standard Taxonomy.Valid values available in API version 62.0 and later are:ADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalSemanticTransformVector_Embedding |
| datatype | string | Required. Phone, currency, number, or other assigned type. |
| dateFormat | string | Optional: The Date format of date, time, date/time fields in this Transport field. |
| externalName | string | Optional. Name of the object in the external system (different from Developer Name). |
| isDataRequired | boolean | Optional. If true, data is required for this field. |
| length | int | Optional. Length of a string column |
| masterLabel | string | Optional? Field label. |
| precision | int | Optional. Used for currency and numeric accuracy. |
| primaryIndexOrder | int | Optional. If supplied, indicates this field is part of the primary key where the number value (starting at 1) indicates the order of attributes if this happens to be a compound primary key. Missing value means this field is not part of the primary key. |
| scale | int | Optional. Used for currency and numeric accuracy. |
| sequence | int | Optional. The sequence of this source schema. |