---
title: "ApexTypeImplementor"
domain: sfFieldRef
topic: apextypeimplementor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.271Z
estimatedTokens: 328
namespace: ClassNamespacePrefix
keywords: [ApexTypeImplementor, Apex, classes, directly, indirectly, implement, SOQL, query, installed, managed, packages, API, version, 54.0, later]
---

# ApexTypeImplementor

> Represents Apex classes that directly or indirectly implement an interface.
         Using a SOQL query, this object gets information about public or global classes and only
         global classes for installed managed packages. This object is available in API version
      54.0 and later.

**Namespace:** `ClassNamespacePrefix`

# ApexTypeImplementor

Represents Apex classes that directly or indirectly implement an interface. Using a SOQL query, this object gets information about public or global classes and only global classes for installed managed packages. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexTypeImplementor](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextypeimplementor.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexClassId | Class ID | reference |  | 18 |  |  |
| ClassName | Class Name | string |  | 81 |  |  |
| ClassNamespacePrefix | Class Namespace Prefix | string |  | 15 |  |  |
| DurableId | Durable ID | string |  | 255 |  |  |
| Id | Apex Type Implementor ID | id |  | 18 |  |  |
| InterfaceApexClassId | Class ID | reference |  | 18 |  |  |
| InterfaceName | Interface Name | string |  | 81 |  |  |
| InterfaceNamespacePrefix | Interface Namespace Prefix | string |  | 15 |  |  |
| IsConcrete | Is Concrete | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
