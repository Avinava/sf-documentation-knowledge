---
title: "ConnectApi Utilities"
domain: apex-reference
topic: connectapi-utilities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.454Z
keywords: [ConnectApi, Utilities, Example]
---

# ConnectApi Utilities

# ConnectApi Utilities

The ConnectApi namespace contains a utility class.

| Utility | Description |
| --- | --- |
| ConnectApi.ConnectUtilities.unwrapApexWrapper() | Unwraps obfuscated, Apex-wrapped objects into known types such as Map<String, Object>. Example from Apex Debug log: core.connect.apex.ApexMapWrapper@7270879d |

## Example

This example calls [getManagedContentForSite(siteId, contentKeyOrId, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForSite_4 "Get a piece of published content for an Experience Cloud site.") to get a custom content type with an image reference and uses the ConnectApi.ConnectUtilities.unwrapApexWrapper() utility.

```

```