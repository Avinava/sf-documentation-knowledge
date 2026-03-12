---
title: "Field Schema Details Available Using  $ObjectType"
domain: pages
topic: field-schema-details-available-using-objecttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.408Z
estimatedTokens: 1741
keywords: [Schema, $ObjectType, variable, access, variety, objects, organization, labels, data]
---

# Field Schema Details Available Using  $ObjectType

> The $ObjectType global variable provides access to a variety
         of schema information about the objects in your organization. Use it to reference names,
         labels, and data types of fields on an object, for example.

# Field Schema Details Available Using $ObjectType

The $ObjectType global variable provides access to a variety of schema information about the objects in your organization. Use it to reference names, labels, and data types of fields on an object, for example.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The information available using $ObjectType parallels but is a subset of the details available using the Apex describe result, the DescribeFieldResult object. This table describes the attributes available from the $ObjectType global variable.

| Name | Data Type | Description |
| --- | --- | --- |
| byteLength | Integer | For variable-length fields (including binary fields), the maximum size of the field, in bytes. |
| calculatedFormula | String | The formula specified for this field. |
| controller | Schema.sObjectField (as a string) | The controlling field, if this is a dependent field. |
| defaultValueFormula | String | The default value specified for this field if a formula isn’t used. |
| digits | Integer | The maximum number of digits specified for the field, or zero for non-numeric fields. |
| inlineHelpText | String | The content of the field-level help. |
| label | String | The text label that’s displayed next to the field in the Salesforce user interface. This label can be localized. |
| length | Integer | For string fields, the maximum size of the field in Unicode characters (not bytes). |
| localName | String | The name of the field. |
| name | String | The field name used in Apex. |
| picklistValues | List <Schema.PicklistEntry> | A list of the field’s picklist items, or an empty list if the field is not a picklist. |
| precision | Integer | For fields of type Double, the maximum number of digits that can be stored, including all numbers to the left and to the right of the decimal point (but excluding the decimal point character). |
| referenceTo | List <Schema.sObjectType> | A list of the parent objects of this field. If the namePointing attribute is true, there’s more than one entry in the list, otherwise there’s only one. |
| relationshipName | String | The name of the relationship. For more information about relationships and relationship names, see Understanding Relationship Names in the SOQL and SOSL Reference. |
| relationshipOrder | Integer | This attribute is 1 if the field is a child, 0 otherwise. For more information about relationships and relationship names, see Understanding Relationship Names in the SOQL and SOSL Reference. |
| scale | Integer | For fields of type Double, the number of digits to the right of the decimal point. Any extra digits to the right of the decimal point are truncated. |
| soapType | Schema.SOAPType (as a string) | One of the SoapType enum values, depending on the type of field. For more information, see SOAPType Enum in the Apex Developer Guide. |
| sObjectField | Schema.sObjectField (as a string) | A reference to this field. |
| type | Schema.DisplayType (as a string) | One of the DisplayType enum values, depending on the type of field. For more information, see DisplayType Enum in the Apex Developer Guide. |
| accessible | Boolean | true if the current user can see this field, false otherwise. |
| autoNumber | Boolean | true if the field is an Auto Number field, false otherwise. |
| calculated | Boolean | true if the field is a custom formula field, false otherwise. |
| cascadeDelete | Boolean | true if the child object is deleted when the parent object is deleted, false otherwise. |
| caseSensitive | Boolean | true if the field is case sensitive, false otherwise. |
| createable | Boolean | true if the field can be created by the current user, false otherwise. |
| custom | Boolean | true if the field is a custom field, false if it’s a standard object. |
| defaultedOnCreate | Boolean | true if the field receives a default value when created, false otherwise. |
| dependentPicklist | Boolean | true if the picklist is a dependent picklist, false otherwise. |
| externalId | Boolean | true if the field is used as an external ID, false otherwise. |
| filterable | Boolean | true if the field can be used as part of the filter criteria of a WHERE statement, false otherwise. |
| groupable | Boolean | true if the field can be included in the GROUP BY clause of a SOQL query, false otherwise. |
| htmlFormatted | Boolean | true if the field has been formatted for HTML and should be encoded for display in HTML, false otherwise. One example of a field that is true for this attribute is a hyperlink custom formula field. Another example is a custom formula field that has an IMAGE text function. |
| idLookup | Boolean | true if the field can be used to specify a record in an upsert method, false otherwise. |
| nameField | Boolean | true if the field is a name field, false otherwise. This method is used to identify the name field for standard objects (such as AccountName for an Account object) and custom objects. Objects can only have one name field, except where the FirstName and LastName fields are used instead (such as on the Contact object). |
| namePointing | Boolean | true if the field can have multiple types of objects as parents. For example, a task can have both the Contact/Lead ID (WhoId) field and the Opportunity/Account ID (WhatId) field be true for this attribute because either of those objects can be the parent of a particular task record. This attribute is false otherwise. |
| nillable | Boolean | true if the field is nillable, false otherwise. |
| permissionable | Boolean | true if field permissions can be specified for the field, false otherwise. |
| restrictedDelete | Boolean | true if the parent object can’t be deleted because it’s referenced by a child object, false otherwise. |
| restrictedPicklist | Boolean | true if the field is a restricted picklist, false otherwise. |
| sortable | Boolean | true if a query can sort on the field, false otherwise. |
| unique | Boolean | true if the value for the field must be unique, false otherwise. |
| updateable | Boolean | true if:The field can be edited by the current user, orChild records in a master-detail relationship field on a custom object can be reparented to different parent recordsfalse otherwise. |
| writeRequiresMasterRead | Boolean | true if writing to the detail object requires read sharing instead of read/write sharing of the parent. |

#### See Also

-   [Dynamic References to Schema Details Using $ObjectType](atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals_objecttype.htm "The $ObjectType global variable provides access to a variety of schema information about the objects in your organization. Use it to reference names, labels, and data types of fields on an object, for example.")

## Related Topics

- Dynamic References to Schema Details Using $ObjectType (atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals_objecttype.htm)
