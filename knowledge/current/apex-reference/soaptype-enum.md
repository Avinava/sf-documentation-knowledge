---
title: "SOAPType Enum"
domain: apex-reference
topic: soaptype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.423Z
keywords: [SOAPType, Enum, Namespace, Usage]
---

# SOAPType Enum

# SOAPType Enum

A Schema.SOAPType enum value is returned by the field describe result getSoapType method.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

| Type Field Value | What the Field Object Contains |
| --- | --- |
| anytype | Any value of the following types: String, Boolean, Integer, Double, ID, Date or DateTime. |
| base64binary | Base64-encoded arbitrary binary data (of type base64Binary) |
| Boolean | Boolean (true or false) values |
| Date | Date values |
| DateTime | DateTime values |
| Double | Double values |
| ID | Primary key field for an object |
| Integer | Integer values |
| String | String values |
| Time | Time values |

## Usage

To programmatically retrieve the list of valid SOAPType enum values, use this code sample.

system.debug(SoapType.values().size()); //Gets the number of supported values for (SoapType st : SoapType.values()) system.debug(st);

For more information, see [SOAPTypes](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm#soaptype_topic "HTML (New Window)") in the SOAP API Developer Guide. For more information about the methods shared by all enums, see [Enum Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_enum.htm "An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Apex provides built-in enums, such as LoggingLevel, and you can define your own enum.").