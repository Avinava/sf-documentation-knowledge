---
title: "Index Setting Input"
domain: revenue-cloud
topic: index-setting-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.156Z
estimatedTokens: 76
keywords: [Index, Setting, Input, representation, index, setting.]
---

# Index Setting Input

> Input representation of the index setting.

# Index Setting Input

Input representation of the index setting.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| setting | Setting Input[] | Object containing the setting-related details. | Required | 63.0 |

## Code Examples

```
{
    "setting" : {
        "supportedLanguages" : ["en_US","ja","es","nl_NL"],
        "defaultLanguage" : "en_US",
        "productsGrouping": "GROUPING_VARIATION"
   }
}
```

## Related Topics

- Setting Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_setting_input.htm)
