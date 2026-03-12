---
title: "MobileSecurityPolicy"
domain: sfFieldRef
topic: mobilesecuritypolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.460Z
estimatedTokens: 437
namespace: NamespacePrefix
keywords: [MobileSecurityPolicy, mobile, security, policies, Salesforce, app, Enhanced, API, version, 50.0, later]
---

# MobileSecurityPolicy

> Enables mobile security policies on the Salesforce mobile app with
         Enhanced Mobile Security. This object is available in API version 50.0 and
      later.

**Namespace:** `NamespacePrefix`

# MobileSecurityPolicy

Enables mobile security policies on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MobileSecurityPolicy](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mobilesecuritypolicy.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| Id | Mobile Security Policy ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnabled | Is Enabled | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MobilePlatform | Mobile Platform | picklist |  | 255 |  |  |
| MobileSecurityAssignmentId | Mobile Assignment ID | reference |  | 18 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| RuleValue | Rule Value | string |  | 255 |  |  |
| RuleValueType | Rule Value Type | picklist |  | 255 |  |  |
| SeverityLevel | Severity Level | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
