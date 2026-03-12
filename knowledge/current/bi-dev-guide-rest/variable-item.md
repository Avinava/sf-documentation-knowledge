---
title: "Variable Item"
domain: bi-dev-guide-rest
topic: variable-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.727Z
estimatedTokens: 249
keywords: [Variable, Item, panel, Analytics, template, wizard]
---

# Variable Item

> A variable item on a panel for an Analytics template wizard page.

# Variable Item

A variable item on a panel for an Analytics template wizard page.

## Properties

Inherits properties from [Panel Item](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_panel_item.htm "An item on a panel in a column layout for an Analytics template wizard page.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | The description of the variable. If not specified, defaults to the variable description set in the variable resource. | Small, 59.0 | 59.0 |
| label | String | The label of the variable. | Small, 56.0 | 56.0 |
| name | String | The name of the variable. | Small, 56.0 | 56.0 |
| tiles | Map<String, Variable​Item​Tile> | A map of the checkbox tile details for the Checkbox​Tiles variant. | Small, 59.0 | 59.0 |
| variant | String | The optional variable variant. The valid values are:Checkbox​TilesCentered​Checkbox​TilesSubHeader | Small, 59.0 | 59.0 |

## Related Topics

- Panel Item (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_panel_item.htm)
- Variable​Item​Tile (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_item_tile.htm)
