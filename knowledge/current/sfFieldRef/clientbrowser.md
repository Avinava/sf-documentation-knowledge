---
title: "ClientBrowser"
domain: sfFieldRef
topic: clientbrowser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.180Z
estimatedTokens: 251
keywords: [ClientBrowser, cookie, added, browser, upon, login, includes, application, inserted, version, 28.0, later]
---

# ClientBrowser

> Represents a cookie added to the browser upon login, and also includes
   information about the browser application where the cookie was inserted. This object is
  available in version 28.0 and later.

# ClientBrowser

Represents a cookie added to the browser upon login, and also includes information about the browser application where the cookie was inserted. This object is available in version 28.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ClientBrowser](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_clientbrowser.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FullUserAgent | Full User Agent | string |  | 1024 |  |  |
| Id | Client Browser ID | id |  | 18 |  |  |
| LastUpdate | Last Update | datetime |  |  |  |  |
| ProxyInfo | Proxy Info | string |  | 1024 |  |  |
| UsersId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
