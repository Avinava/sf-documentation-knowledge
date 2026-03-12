---
title: "MobSecurityCertPinConfig"
domain: sfFieldRef
topic: mobsecuritycertpinconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.438Z
estimatedTokens: 455
namespace: NamespacePrefix
keywords: [MobSecurityCertPinConfig, Configuration, mobile, security, certificate, pinning, Salesforce, app, Enhanced, API, version, 53.0, later]
---

# MobSecurityCertPinConfig

> Configuration of mobile security certificate pinning on the
         Salesforce mobile app with Enhanced Mobile Security. This object is available in API
      version 53.0 and later.

**Namespace:** `NamespacePrefix`

# MobSecurityCertPinConfig

Configuration of mobile security certificate pinning on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MobSecurityCertPinConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mobsecuritycertpinconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CertificateHash | Certificate Hash | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DomainName | Domain Name | string |  | 255 |  |  |
| Id | Mobile Security Certicate Pinning Configuration ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnabled | Is Enabled | boolean |  |  |  |  |
| IsSubdomainIncluded | Is Subdomain Included | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MobilePlatform | Mobile Platform | picklist |  | 255 |  |  |
| MobileSecurityAssignmentId | Mobile Assignment ID | reference |  | 18 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
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
