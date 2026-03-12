---
title: "RedirectWhitelistUrl"
domain: sfFieldRef
topic: redirectwhitelisturl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.886Z
estimatedTokens: 444
namespace: NamespacePrefix
keywords: [RedirectWhitelistUrl, trusted, URL, external, user, redirections, different, Salesforce, org, including, publicly, served, pages, content, allowed]
---

# RedirectWhitelistUrl

> Represents a trusted URL for external user redirections.
    Redirections to a different Salesforce org, including its publicly served pages and content, are
    allowed from your Salesforce org only when the URL is a RedirectWhitelistUrl. For non-Salesforce
    URLs, a session setting controls whether redirections from pages and components built in
    Salesforce Classic are restricted to RedirectWhitelistUrl objects. Except for cross-org
    redirections, you can’t restrict redirections that originate from pages and components built
    with Lightning Experience. This object is available in API version 48.0 and later.

**Namespace:** `NamespacePrefix`

# RedirectWhitelistUrl

Represents a trusted URL for external user redirections. Redirections to a different Salesforce org, including its publicly served pages and content, are allowed from your Salesforce org only when the URL is a RedirectWhitelistUrl. For non-Salesforce URLs, a session setting controls whether redirections from pages and components built in Salesforce Classic are restricted to RedirectWhitelistUrl objects. Except for cross-org redirections, you can’t restrict redirections that originate from pages and components built with Lightning Experience. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RedirectWhitelistUrl](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_redirectwhitelisturl.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Allow URL for Redirects ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Url | URL | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
