---
title: "Slots"
domain: mc-apis
topic: slots
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.094Z
estimatedTokens: 328
keywords: [Slots, allow, control, manipulate, restrict, content, blocks, move, different, enforce, block, number, restrictions, limited, recursion]
---

# Slots

> Slots allow you to control, manipulate, and restrict content blocks. You can create slots, move slots to different blocks, and enforce block number and type restrictions within slots. Blocks within slots are limited to 2x recursion, with a maximum depth of 4 objects.

# Slots

Slots allow you to control, manipulate, and restrict content blocks. You can create slots, move slots to different blocks, and enforce block number and type restrictions within slots. Blocks within slots are limited to 2x recursion, with a maximum depth of 4 objects.

Add slots to the asset as an object under slots and to the content as a placeholder, where the object keys match the placeholder's data-key attribute. In this example, the partner uses slots with one initial block per slot and no number or type restrictions.

## Sample Asset with Slots

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
        "firstslot": {},
        "secondslot": {}
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
