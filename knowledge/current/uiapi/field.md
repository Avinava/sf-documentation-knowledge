---
title: "Field"
domain: uiapi
topic: field
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.825Z
estimatedTokens: 1615
keywords: [field's, metadata]
---

# Field

> A field's metadata.

# Field

A field's metadata.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=uiapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing the often-used term master-detail can break customer implementations, we maintained this reference.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name for this field. | Small, 41.0 | 41.0 |
| calculated | Boolean | Indicates whether the field is a custom formula field. | Small, 41.0 | 41.0 |
| compound | Boolean | Indicates whether the field is a top-level compound field.If the dataType is Location, this value is usually false. | Small, 41.0 | 41.0 |
| compoundComponentName | String | If this field is a component field of a compound field, the value is the normalized component name, otherwise the value is null. For example, if the field represents "BillingStreet" of an Address compound field, this property contains "Street". | Small, 41.0 | 41.0 |
| compoundFieldName | String | If this field is a component field of a compound field, this property contains the top-level compound field. Otherwise, the value of this property is null. | Small, 41.0 | 41.0 |
| controllerName | String | If this field is a dependent picklist, this property is the name of the field that controls the values of the picklist. | Small, 41.0 | 41.0 |
| controllingFields | String[] | If this field is a dependent picklist, this property is a collection of fields that control the values in the picklist. When there’s a hierarchy of controlling fields, the collection starts with the immediate parent and moves up the tree. | Small, 42.0 | 42.0 |
| createable | Boolean | Indicates whether the field can be created. | Small, 41.0 | 41.0 |
| custom | Boolean | Indicates whether the field is custom. | Small, 41.0 | 41.0 |
| dataType | String | Field type. One of these values:AddressAnytypeBase64BooleanComboBoxComplexValue—Complex Value Type (CVT).CurrencyDateDateTimeDoubleEmailEncryptedStringIntJunctionIdListLocationLongMultiPicklist—To populate the multi-select picklist, Get Values for a Picklist Field or Get Values for All Picklist Fields of a Record Type.PercentPhonePicklist—To populate the picklist, Get Values for a Picklist Field or Get Values for All Picklist Fields of a Record Type.ReferenceStringTextAreaTimeUrl | Small, 41.0 | 41.0 |
| defaultValue | String | Default value for the field. | Small, 66.0 | 66.0 |
| defaultedOnCreate | Boolean | Indicates whether the field is defaulted when created. | Small, 66.0 | 66.0 |
| digits | Integer | For integer fields, the maximum number of digits that an integer can have. | Small, 65.0 | 65.0 |
| externalId | String | External ID of the field. | Small, 60.0 | 60.0 |
| extraTypeInfo | String | More data type information. One of these values:ExternalLookup—External lookupImageUrl—Image urlIndirectLookup—Indirect lookupPersonName—Person namePlainTextArea—Plain text areaRichTextArea—Rich text areaSwitchablePersonName—Switchable person name | Small, 41.0 | 41.0 |
| filterable | Boolean | Indicates whether the field is filterable. If true, then this field can be specified in the WHERE clause of a SOQL statement. | Small, 41.0 | 41.0 |
| filteredLookupInfo | Filtered Lookup Info | If the field is a reference field type with a lookup filter, this value contains the lookup information. | Small, 41.0 | 41.0 |
| highScaleNumber | Boolean | Indicates whether the field stores numbers to 8 decimal places regardless of what's specified in the field details. | Small, 41.0 | 41.0 |
| htmlFormatted | Boolean | Indicates whether the field is formatted for HTML and should be encoded for display in HTML. Also indicates whether a field is a custom formula field that has an IMAGE text function. | Small, 41.0 | 41.0 |
| inlineHelpText | String | The text that appears in the field-level help hover text. | Medium, 41.0 | 41.0 |
| label | String | Text label that appears next to the field in the Salesforce user interface. This label may be localized. | Small, 41.0 | 41.0 |
| length | Integer | For string fields, the maximum number of Unicode characters. | Small, 41.0 | 41.0 |
| maskType | String | Mask type of the field. | Small, 60.0 | 60.0 |
| nameField | Boolean | Indicates whether the field is a name field. | Small, 41.0 | 41.0 |
| polymorphicForeignKey | Boolean | Indicates whether the field is a foreign key over a domain of multiple objects. | Small, 41.0 | 41.0 |
| precision | Integer | For double fields, indicates the maximum number of digits that can be stored, on both sides of the decimal point. | Small, 41.0 | 41.0 |
| reference | Boolean | Indicates whether the field is a foreign key to another record.A reference field contains an ID value that points to a unique record (usually the parent record) on another object. | Small, 41.0 | 41.0 |
| referenceTargetField | String | For indirect lookup relationships on external objects, this property is the target custom field of the referenced object. | Medium, 41.0 | 41.0 |
| referenceToInfos | Reference to Info[] | For fields that refer to other objects, this list includes information about the object types and name fields of the referenced objects. | Small, 41.0 | 41.0 |
| relationshipName | String | The name of the relationship, if this relationship is a master-detail relationship field. | Small, 41.0 | 41.0 |
| required | Boolean | Indicates whether the field is required when creating or editing a record.To determine which fields are required in a layout, use the RecordLayoutItem.required property. | Small, 41.0 | 41.0 |
| scale | Integer | For double fields, indicates the number of digits to the right of the decimal point. | Small, 41.0 | 41.0 |
| searchPrefilterable | Boolean | Indicates whether a foreign key (relationship field) can be included in a SOSL WHERE clause. | Big, 41.0 | 41.0 |
| sortable | Boolean | Indicates whether the field is sortable. If true, then this field can be specified in a SOQL ORDER BY clause. | Small, 41.0 | 41.0 |
| unique | Boolean | Indicates whether a field’s value must be unique. | Small, 41.0 | 41.0 |
| updateable | Boolean | Indicates whether the field can be edited. | Small, 41.0 | 41.0 |

#### See Also

-   [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm "The metadata for an object.")

## Related Topics

- Get Values
                      for a Picklist Field (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)
- Get Values
                      for All Picklist Fields of a Record Type (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
- Filtered Lookup
                  Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_filtered_lookup_info.htm)
- Reference to
                  Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_reference_to_info.htm)
- RecordLayoutItem.required (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_item.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
