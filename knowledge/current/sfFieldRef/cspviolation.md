---
title: "CspViolation"
domain: sfFieldRef
topic: cspviolation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.155Z
estimatedTokens: 412
namespace: NamespacePrefix
keywords: [CspViolation, content, security, policy, CSP, directive, that’s, impacted, upcoming, change, system-defined, trusted, URLs]
---

# CspViolation

> Represents a content security policy (CSP) directive that’s impacted
         by an upcoming change to system-defined trusted URLs.

**Namespace:** `NamespacePrefix`

# CspViolation

Represents a content security policy (CSP) directive that’s impacted by an upcoming change to system-defined trusted URLs.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CspViolation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_CspViolation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BlockedUrl | URL | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Violation ID | id |  | 18 |  |  |
| IsConnectSrcViolated | Connects | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFontSrcViolated | Fonts | boolean |  |  |  |  |
| IsFrameSrcViolated | IFrames | boolean |  |  |  |  |
| IsImageSrcViolated | Images | boolean |  |  |  |  |
| IsMediaSrcViolated | Media | boolean |  |  |  |  |
| IsStyleSrcViolated | Styles | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Violation Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ViolationContext | Context | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
