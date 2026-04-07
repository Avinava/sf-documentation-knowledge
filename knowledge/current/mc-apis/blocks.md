---
title: "Blocks"
domain: mc-apis
topic: blocks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.485Z
estimatedTokens: 681
keywords: [Blocks, simplest, form, sub-content, asset, their, own, nested, inside, content, design, They, saved, loaded, independently]
---

# Blocks

> Blocks are the simplest form of sub-content in an asset. Blocks have their own asset type, can be nested inside an asset, and have their own content and design. They can also be saved or loaded independently in Content Builder. Each block's assetType matches the individual block editing experience.

# Blocks

Blocks are the simplest form of sub-content in an asset. Blocks have their own asset type, can be nested inside an asset, and have their own content and design. They can also be saved or loaded independently in Content Builder. Each block's assetType matches the individual block editing experience.

Add blocks to the asset as an object under blocks and to the content as a placeholder, where the object keys match the placeholder's data-key attribute. All blocks must be loaded inside of slots.

## Min, max, allowed blocks

An asset can specify the minimum and maximum number of blocks, as well as the type of blocks allowed to live under it.

Add block attributes to the asset under as number, number, and array of strings under the minBlocks, maxBlocks, and allowedBlocks attributes, respectively. The array holds assetType names for the allowed blocks. This example requires exactly one follow-up link of the textblock type and at least one author.

## Sample Asset with Blocks

```json
{
  "name": "NTO Welcome Series Email",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {
      "content": "<!DOCTYPE html><body><div><div>Some header content</div><div data-type="slot" data-key="firstslot"></div><br /><div data-type="slot" data-key="secondslot"></div></div></body></html>",
      "slots": {
        "firstslot": {
          "content": "<div data-type="block" data-key="block1"></div><div data-type="block" data-key="block2"></div>",
          "blocks": {
            "block1": {
              "content": "123",
              "assetType": {
                "name": "freeformblock",
                "id": 195
              }
            },
            "block2": {
              "content": "234",
              "assetType": {
                "name": "htmlblock",
                "id": 197
              }
            }
          }
        },
        "secondslot": {
          "content": "<div data-type="block" data-key="block3"></div><div data-type="block" data-key="block4"></div>",
          "minBlocks": 1,
          "maxBlocks": 1,
          "allowedBlocks": [
            "textblock"
          ],
          "blocks": {
            "block3": {
              "content": "345",
              "assetType": {
                "name": "textblock",
                "id": 196
              }
            }
          }
        }
      }
    },
    "text": {},
    "subjectline": {},
    "preheader": {}
  },
  "assetType": {
    "name": "templatebasedemail",
    "id": 207
  }
}
```

## Related Items

-   [Asset Model](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
-   [Asset Model Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)

## Related Topics

- Asset Model (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
- Asset Model Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
