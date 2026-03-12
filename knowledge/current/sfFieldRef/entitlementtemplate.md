---
title: "EntitlementTemplate"
domain: sfFieldRef
topic: entitlementtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.423Z
estimatedTokens: 366
namespace: NamespacePrefix
keywords: [EntitlementTemplate, predefined, terms, customer, support, product, Product2, API, version, 18.0, later]
---

# EntitlementTemplate

> Represents predefined terms of customer support for a product
      (Product2). This object is available in API version 18.0 and later.

**Namespace:** `NamespacePrefix`

# EntitlementTemplate

Represents predefined terms of customer support for a product (Product2). This object is available in API version 18.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EntitlementTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_entitlementtemplate.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessHoursId | Business Hours ID | reference |  | 18 |  |  |
| CasesPerEntitlement | Cases Per Entitlement | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Entitlement Template ID | id |  | 18 |  |  |
| IsPerIncident | Per Incident | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Entitlement Template Name | string |  | 120 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SlaProcessId | Entitlement Process ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Term | Term (Days) | int | 9 |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
