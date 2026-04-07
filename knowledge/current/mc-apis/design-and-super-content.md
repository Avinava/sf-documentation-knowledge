---
title: "Design and Super Content"
domain: mc-apis
topic: design-and-super-content
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.536Z
estimatedTokens: 827
keywords: [Design, Super, Content, attribute, displays, editing, asset, Marketing, Cloud, thumbnails, previews, there, actual, Once, published]
---

# Design and Super Content

> Design content is a default for the content attribute that displays when editing an asset in Marketing Cloud or as content thumbnails or previews when there is no actual content. Once the asset is published, design content is ignored. Design is only supported when used with blocks and slots.

# Design and Super Content

Design content is a default for the content attribute that displays when editing an asset in Marketing Cloud or as content thumbnails or previews when there is no actual content. Once the asset is published, design content is ignored. Design is only supported when used with blocks and slots.

Super content is realistic content that displays when editing an asset. Like design content, super content is only used when editing and is ignored once the asset is published. Super content can be used to show human readable content instead of code, valid URLs and images instead of broken ones, markup that will be resolved at publishing time, or images that don't exist yet. Super content is only supported when used with slots.

Add design content to the asset as a string, using the design attribute.

Add super content to the asset as a string, using the superContent attribute. In this example, the partner uses !!!attribute to identify placeholders they later replace using their API.

## Sample Asset with Design and Super Content

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
          "design": "<div>Drag blocks here to start editing them!</div>",
          "blocks": {
            "block1": {
              "content": "123",
              "design": "click here to start editing this block",
              "assetType": {
                "name": "freeformblock",
                "id": 195
              }
            },
            "block2": {
              "content": "234",
              "design": "click here to start editing this block",
              "assetType": {
                "name": "htmlblock",
                "id": 197
              }
            }
          }
        },
        "secondslot": {
          "content": "<div data-type="block" data-key="block3"></div><div data-type="block" data-key="block4"></div>",
          "design": "<div>Drag blocks here to start editing them!</div>",
          "minBlocks": 1,
          "maxBlocks": 1,
          "allowedBlocks": [
            "textblock"
          ],
          "blocks": {
            "block3": {
              "superContent": "Some ampscript or custom markup or http://www.valid.url/likeThis",
              "content": "Some %%ampscript%% or !!!customMarkup or http://www.invalid.url/%%likeThis%%",
              "design": "click here to start editing this block",
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
