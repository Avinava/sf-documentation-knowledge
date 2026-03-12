---
title: "PackageLicense"
domain: sfFieldRef
topic: packagelicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.366Z
estimatedTokens: 314
namespace: NamespacePrefix
keywords: [PackageLicense, license, installed, managed, package, API, version, 31.0, later]
---

# PackageLicense

> Represents a license for an installed managed
        package.
    This object is available in API version 31.0 and later.

**Namespace:** `NamespacePrefix`

# PackageLicense

Represents a license for an installed managed package. This object is available in API version 31.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PackageLicense](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packagelicense.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllowedLicenses | Allowed Licenses | int | 9 |  |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| Id | Package License ID | id |  | 18 |  |  |
| IsAvailableForIntegrations | Enabled for Platform Integrations | boolean |  |  |  |  |
| IsProvisioned | Is Provisioned | boolean |  |  |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsedLicenses | Used Licenses | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
