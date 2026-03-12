---
title: "Field Metadata"
domain: chatterapi
topic: field-metadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.831Z
estimatedTokens: 406
keywords: [Metadata, Search]
---

# Field Metadata

> Search metadata for the field of an object.

# Field Metadata

Search metadata for the field of an object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| domain | String | The object that the field is associated with. | Small, 63.0 | 63.0 |
| field | String | Field path through the object. | Small, 63.0 | 63.0 |
| fieldApiName | String | API name of the field. | Small, 63.0 | 63.0 |
| fieldType | String | Field type. Values are:AddressAnyTypeBase64BooleanComboboxComplexValueCurrencyDataCategoryGroupReferenceDateDateTimeDoubleEmailEncryptedStringExtensionEntityLookupExternalLookupFloatArrayIdImageUrlIndirectLookupIntegerJsonLocationLongMultiPicklistPercentPersonNamePhonePicklistPlainTextAreaReferenceRichTextAreaSobjectStringSwitchablePersonNameTextAreaTimeUrl | Small, 63.0 | 63.0 |
| filterable | Boolean | Specifies whether the field is filterable (true) or not (false). | Small, 63.0 | 63.0 |
| highlightable | Boolean | Specifies whether the field is highlightable (true) or not (false). | Small, 63.0 | 63.0 |
| label | String | Label of the field | Small, 63.0 | 63.0 |
| sortable | Boolean | Specifies whether the field is sortable (true) or not (false). | Small, 63.0 | 63.0 |

#### See Also

-   [Object Metadata](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_object_metadat.htm "Search metadata related to the object.")

-   [Connect REST API Architecture](atlas.en-us.chatterapi.meta/chatterapi/intro_architecture.htm "To use Connect REST API, understand a few characteristics of its architecture, like how to authenticate, and which data formats it supports.")

## Related Topics

- Object Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_object_metadat.htm)
- Connect REST API Architecture (atlas.en-us.chatterapi.meta/chatterapi/intro_architecture.htm)
