---
title: "BrowserPolicyViolation"
domain: sfFieldRef
topic: browserpolicyviolation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.375Z
estimatedTokens: 405
keywords: [BrowserPolicyViolation, violation, occurred, seven, days, Trusted, URLs, External, Redirects, allowlists, violations, include, blocked, resource, requests]
---

# BrowserPolicyViolation

> Represents a violation that occurred within the last seven days
         related to the Trusted URLs and Trusted URLs for External Redirects allowlists. These
         violations include blocked resource requests based on your content security policy (CSP)
         and blocked redirections. This object is available in API version 61.0 and
      later.

# BrowserPolicyViolation

Represents a violation that occurred within the last seven days related to the Trusted URLs and Trusted URLs for External Redirects allowlists. These violations include blocked resource requests based on your content security policy (CSP) and blocked redirections. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BrowserPolicyViolation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_browserpolicyviolation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Violation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Violation Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UntrustedUrl | Untrusted URL | string |  | 255 |  |  |
| ViolationContext | CSP Context | picklist |  | 255 |  |  |
| ViolationImpact | Impact | picklist |  | 255 |  |  |
| ViolationType | Violation Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
