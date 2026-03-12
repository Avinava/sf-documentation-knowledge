---
title: "DisplayType Enum"
domain: apex-reference
topic: displaytype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.540Z
estimatedTokens: 693
namespace: Schema
keywords: [DisplayType, Schema.DisplayType, returned, field, describe, result's, getType, method., Usage]
---

# DisplayType Enum

> A Schema.DisplayType enum value is returned by the field describe result's getType method.

**Namespace:** `Schema`

# DisplayType Enum

A Schema.DisplayType enum value is returned by the field describe result's getType method.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

| Type Field Value | What the Field Object Contains |
| --- | --- |
| ADDRESS | Address values |
| ANYTYPE | Any value of the following types: String, Picklist, Boolean, Integer, Double, Percent, ID, Date, DateTime, URL, or Email. |
| BASE64 | Base64-encoded arbitrary binary data (of type base64Binary) |
| BOOLEAN | Boolean (true or false) values |
| COMBOBOX | Comboboxes, which provide a set of enumerated values and allow the user to specify a value not in the list |
| COMPLEXVALUE | Complex Value Type (CVT) |
| CURRENCY | Currency values |
| DATACATEGORYGROUPREFERENCE | Reference to a data category group or a category unique name |
| DATE | Date values |
| DATETIME | DateTime values |
| DOUBLE | Double values |
| EMAIL | Email addresses |
| ENCRYPTEDSTRING | Encrypted string |
| FLOATARRAY | Array of float values, reserved for future use. |
| ID | Primary key field for an object |
| INTEGER | Integer values |
| JSON | JSON format |
| LOCATION | Location values, including latitude and longitude. |
| LONG | Long values |
| MULTIPICKLIST | Multi-select picklists, which provide a set of enumerated values from which multiple values can be selected |
| PERCENT | Percent values |
| PHONE | Phone numbers. Values can include alphabetic characters. Client applications are responsible for phone number formatting. |
| PICKLIST | Single-select picklists, which provide a set of enumerated values from which only one value can be selected |
| REFERENCE | Cross-references to a different object, analogous to a foreign key field |
| SOBJECT | An sObject variable represents a row of data and can only be declared in Apex using the SOAP API name of the object. |
| STRING | String values |
| TEXTAREA | String values that are displayed as multiline text fields |
| TEXTARRAY | Array of text values, reserved for future use. |
| TIME | Time values |
| URL | URL values that are displayed as hyperlinks |

## Usage

For more information, see [Field Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm "html (New Window)") in the Object Reference for Salesforce. For more information about the methods shared by all enums, see [Enum Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_enum.htm "An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Apex provides built-in enums, such as LoggingLevel, and you can define your own enum.").

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- Enum Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_enum.htm)
