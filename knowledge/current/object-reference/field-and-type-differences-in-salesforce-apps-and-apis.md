---
title: "Field and Type Differences in Salesforce Apps and APIs"
domain: object-reference
topic: field-and-type-differences-in-salesforce-apps-and-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.138Z
estimatedTokens: 630
keywords: [Differences, Salesforce, Apps, APIs, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any]
---

# Field and Type Differences in Salesforce Apps and APIs

> Where possible, we changed noninclusive terms to align with our company
   value of Equality. We maintained certain terms to avoid any effect on customer
   implementations.

# Field and Type Differences in Salesforce Apps and APIs

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Generally, API data types and field types in the user interface have the same names. For example, a date field is represented by a date data type in the API. However, some field types are represented differently depending on whether you inspect an object via the API or the user interface. This table contains the mapping for field types and data types that are different.

| API Data Type | Corresponding Field Types in the User Interface |
| --- | --- |
| ID | Lookup relationship, master-detail relationship |
| string | Auto number, email, phone, picklist, multi-select picklist, text, text area, long text area, rich text area, data category group reference, and URL. Different maximum lengths are specified in the WSDL for text, text area, and long text area. |
| boolean | Checkbox |
| double | Currency, formula, number, percent, and roll-up summary |
| Varies by type | When formula fields are created in the user interface, a type must be specified. This type corresponds to the API data type of the same name: currency, date, date/time, number, percent, or text. |

All other fields that you can create in the user interface fall into one of these categories.

-   The field isn’t available in both the user interface and the API. For example, the BusinessHours object has fields of API data type time, but you can’t create a custom field of this type.
-   Field types are the same as their corresponding API data type. For example, if you create a date field in the user interface, that field is the date data type in the API.

Additionally, the user interface allows you to change the labels on some fields and tabs. Although you can’t relabel fields or tabs using the API, you can retrieve the current values. To do so, issue a describeSObjects() call and inspect the label field of the returned DescribeSObjectResult.

For more information about API data types, see [Primitive Data Types](atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm) and [Field Types](atlas.en-us.object_reference.meta/object_reference/field_types.htm "In addition to the primitive data types, the API defines the following data types for fields.").

## Related Topics

- Primitive Data Types (atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm)
- Field Types (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
