---
title: "SetupAuditTrail"
domain: sfFieldRef
topic: setupaudittrail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:13.751Z
estimatedTokens: 319
namespace: ResponsibleNamespacePrefix
keywords: [SetupAuditTrail, changes, admins, made, org’s, Setup, area, least, days]
---

# SetupAuditTrail

> Represents changes you or other admins made in
            your org’s Setup area for at least the last 180 days.

**Namespace:** `ResponsibleNamespacePrefix`

# SetupAuditTrail

Represents changes you or other admins made in your org’s Setup area for at least the last 180 days. This object is available in API version 15.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SetupAuditTrail](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_setupaudittrail.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Action | Action | string |  | 120 |  |  |
| CreatedByContext | Created By Context | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedByIssuer | Created By Issuer | string |  | 80 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DelegateUser | Delegate User | string |  | 80 |  |  |
| Display | Display | string |  | 1000 |  |  |
| Id | Setup Audit Trail ID | id |  | 18 |  |  |
| ResponsibleNamespacePrefix | Source Namespace Prefix | string |  | 15 |  |  |
| Section | Section | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
