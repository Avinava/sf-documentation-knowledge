---
title: "Sharing"
domain: mc-apis
topic: sharing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.064Z
estimatedTokens: 682
keywords: [Sharing, share, assets, business, units, Content, Builder, enabled, Sample, Asset, sharedWith, sharingType, Items]
---

# Sharing

> You can share assets with one or more business units that have Content Builder Sharing enabled.

# Sharing

You can share assets with one or more business units that have Content Builder Sharing enabled.

Add sharing business units to the asset as an array, using the sharingProperties object. To share an asset, include the enterprise business unit's MID in the asset's sharedWith property.

## Sample Asset with Sharing Properties

```json
{
    "name": "NTO Welcome Series Email",
    "assetType": {
        "id": 207,
        "name": "templatebasedemail"
    },
    "sharingProperties" : {
        "sharedWith" : [333, 555],
        "sharingType" : "view"
    }
}
```

## sharedWith

An individual asset is shared with the same sharing settings and permissions in all business units. SharedWith is a list of up to 100 business unit MIDs that an asset is shared with.

-   In Enterprise 1.0 accounts, assets can only be shared down to child business units.
-   In Enterprise 2.0 accounts, assets can be shared to any business unit.
-   Sharing in agency accounts is not supported.
-   To share an asset with your entire enterprise, set sharedWith to 0.

    > Changes to the sharedWith property are asynchronous.


## sharingType

SharingType indicates the permission that you are granting to the list of MIDs in sharedWith. Asset sharing has three valid types.

-   view - Recipients can view the shared asset and select it to be sent in a message, but they cannot edit or move the content.
-   edit - Recipients can edit the shared asset, but they cannot move it. Any edit made in one business unit appears in the other business units that have access to the content.

    > Edit is the only sharing type allowed for categories.

-   local - This option is available for emails only. Recipients can create a local edit of the email, which appears only in their business unit as a separate asset with its own Customer Key and ID. This edit does not overwrite the shared email in other business units. When you create a local edit, the original shared email no longer appears in the recipient's business unit. However, if you delete the local edit, the original shared email appears again. If the business unit that shared the original email deletes or unshares the original, local edits are deleted.

## Related Items

-   [Asset Model](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
-   [Asset Model Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
-   [Create a Local Copy of a Shared Asset](atlas.en-us.noversion.mc-apis.meta/mc-apis/create-local-copy-sharing.htm)
-   [Shared Categories](atlas.en-us.noversion.mc-apis.meta/mc-apis/shared-categories.htm)
-   [Content Builder Sharing Content in Help](https://help.salesforce.com/articleView?id=mc_ceb_share_content.htm&type=5)

## Related Topics

- Asset Model (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
- Asset Model Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
- Create a Local Copy of a Shared Asset (atlas.en-us.noversion.mc-apis.meta/mc-apis/create-local-copy-sharing.htm)
- Shared Categories (atlas.en-us.noversion.mc-apis.meta/mc-apis/shared-categories.htm)
