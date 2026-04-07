---
title: "Create Local Copy of a Shared Asset"
domain: mc-apis
topic: create-local-copy-of-a-shared-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.780Z
estimatedTokens: 369
keywords: [Local, Copy, Shared, Asset, edit, locally, share, original, retain, sharing, associate]
---

# Create Local Copy of a Shared Asset

> To edit an existing asset locally, share the asset, then create a local copy. The original asset and local copy retain sharing properties that associate them with each other.

# Create Local Copy of a Shared Asset

To edit an existing asset locally, share the asset, then create a local copy. The original asset and local copy retain sharing properties that associate them with each other.

1.  Share an asset to a set of MIDs. In this example, the asset is shared with business units 333 and 555.
    ```
    {
     ...
     "sharingProperties" : {
         "sharedWith" : [ 333, 555 ],
         "sharingType" : "local"
     }
    }
    ```

2.  Retrieve the original asset using GET /asset/v1/content/assets/{id}.
3.  Create a new asset with the original asset's payload plus the sharingProperties using POST /asset/v1/content/assets.
    -   sharedFrom is the asset ID of the original asset.
    -   sharedFromMID is MID the asset came from.
        ```
        {
        ...
        "sharingProperties" : {
          "sharedFrom" : 12345,
          "sharedFromMID" : 333
        }
        }
        ```

4.  If you retrieve the original asset again, notice that the sharingProperties are updated with the local edit created by business unit 333. The read-only localAssets property stores the MID and asset ID for the local edit in the recipient MID.
    ```
    {
     "sharingProperties" : {
         "sharedWith" : [ 333, 555 ],
         "sharingType" : "local",
         "localAssets" : {
             "333" : "98765"
         }
     }
    }
    ```

    ## Related Items

    [Sharing](atlas.en-us.noversion.mc-apis.meta/mc-apis/sharing.htm)

## Code Examples

```
{
 ...
 "sharingProperties" : {
     "sharedWith" : [ 333, 555 ],
     "sharingType" : "local"
 }
}
```

```
{
...
"sharingProperties" : {
  "sharedFrom" : 12345,
  "sharedFromMID" : 333
}
}
```

```
{
 "sharingProperties" : {
     "sharedWith" : [ 333, 555 ],
     "sharingType" : "local",
     "localAssets" : {
         "333" : "98765"
     }
 }
}
```

## Related Topics

- Sharing (atlas.en-us.noversion.mc-apis.meta/mc-apis/sharing.htm)
