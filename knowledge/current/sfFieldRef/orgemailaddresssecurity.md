---
title: "OrgEmailAddressSecurity"
domain: sfFieldRef
topic: orgemailaddresssecurity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.116Z
estimatedTokens: 231
keywords: [OrgEmailAddressSecurity, assignment, user, profile, org-wide, email, address, API, version, 58.0, later]
---

# OrgEmailAddressSecurity

> Defines the assignment of a user profile to an org-wide email address.
      This object is available in API version 58.0 and later.

# OrgEmailAddressSecurity

Defines the assignment of a user profile to an org-wide email address. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrgEmailAddressSecurity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orgemailaddresssecurity.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Id | Organization Email Address Security ID | id |  | 18 |  |  |
| OrgWideEmailAddressId | Organization-wide From Email Address ID | reference |  | 18 |  |  |
| ParentId | Profile ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
