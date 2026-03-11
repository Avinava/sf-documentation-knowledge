---
title: "ConnectApi.FieldMetadata"
domain: apex-reference
topic: connectapifieldmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.850Z
keywords: [ConnectApi.FieldMetadata, See]
---

# ConnectApi.FieldMetadata

# ConnectApi.FieldMetadata

Search metadata for the field of an object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| domain | String | The object that the field is associated with. | 63.0 |
| field | String | Field path through the object. | 63.0 |
| fieldApiName | String | API name of the field. | 63.0 |
| fieldType | ConnectApi.​FieldType | Field type. Values are:AddressAnyTypeBase64BooleanComboboxComplexValueCurrencyDataCategoryGroupReferenceDateDateTimeDoubleEmailEncryptedStringExtensionEntityLookupExternalLookupFloatArrayIdImageUrlIndirectLookupIntegerJsonLocationLongMultiPicklistPercentPersonNamePhonePicklistPlainTextAreaReferenceRichTextAreaSobjectStringSwitchablePersonNameTextAreaTimeUrl | 63.0 |
| filterable | Boolean | Specifies whether the field is filterable (true) or not (false). | 63.0 |
| highlightable | Boolean | Specifies whether the field is highlightable (true) or not (false). | 63.0 |
| label | String | Label of the field. | 63.0 |
| sortable | Boolean | Specifies whether the field is sortable (true) or not (false). | 63.0 |

#### See Also

-   [ConnectApi.ObjectMetadata](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_object_metadat.htm "Search metadata related to the object.")