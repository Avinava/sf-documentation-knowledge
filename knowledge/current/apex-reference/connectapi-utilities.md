---
title: "ConnectApi Utilities"
domain: apex-reference
topic: connectapi-utilities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.049Z
estimatedTokens: 196
namespace: ConnectApi
keywords: [ConnectApi, Utilities, contains, utility, class., Example]
---

# ConnectApi Utilities

> The ConnectApi namespace contains a
                utility class.

**Namespace:** `ConnectApi`

# ConnectApi Utilities

The ConnectApi namespace contains a utility class.

| Utility | Description |
| --- | --- |
| ConnectApi.ConnectUtilities.unwrapApexWrapper() | Unwraps obfuscated, Apex-wrapped objects into known types such as Map<String, Object>. Example from Apex Debug log: core.connect.apex.ApexMapWrapper@7270879d |

## Example

This example calls [getManagedContentForSite(siteId, contentKeyOrId, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForSite_4 "Get a piece of published content for an Experience Cloud site.") to get a custom content type with an image reference and uses the ConnectApi.ConnectUtilities.unwrapApexWrapper() utility.

```

```

## Code Examples

```apex
ConnectApi.ManagedContentDeliveryDocument res = 
    ConnectApi.ManagedContentDelivery.getManagedContentForSite ('0DMXXXXXXXXXXXXXXX','MCLXXXXXXXXXXXXXXXXXXXXXXXXX',true);

//before contentBody field ApexWrapper is unwrapped 
system.debug(res.contentBody); 

//unwrap contentBody field in res
Map<String,Object> contentBody = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(res.contentBody);

//after contentBody field ApexWrapper is unwrapped, but image field still wrapped
system.debug(contentBody);

//before image field ApexWrapper is unwrapped 
system.debug(contentBody.get('Image')); 

//unwrap Image field in contentBody
Map<String,Object> Image = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(contentBody.get('Image'));

//after image field ApexWrapper is unwrapped 
system.debug(Image); 

//replace wrapped primary_image in contentBody with unwrapped version
contentBody.put('Image', Image);

//after contentBody field ApexWrapper is unwrapped, with image field also unwrapped
system.debug(contentBody);
```

## Related Topics

- getManagedContentForSite(siteId, contentKeyOrId,
                                                showAbsoluteUrl) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
