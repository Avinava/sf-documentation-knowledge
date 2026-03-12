---
title: "Index Setting Update"
domain: revenue-cloud
topic: index-setting-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.792Z
estimatedTokens: 128
keywords: [Index, Setting, Update, Output, representation, details, updated, index, setting.]
---

# Index Setting Update

> Output representation of the details of the updated index setting.

# Index Setting Update

Output representation of the details of the updated index setting.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Output[] | List of errors, if any. | Small, 63.0 | 63.0 |
| setting | Setting[] | Setting that’s used in indexing and maintained for an org. | Small, 63.0 | 63.0 |
| statusCode | String | Code that indicates the status of the API request. | Small, 63.0 | 63.0 |

## Code Examples

```
{
   "setting" : {
        "supportedLanguages" : ["en_US","ja","es","nl_NL"],
        "id": "1JySG0000000GUb0AM",
        "defaultLanguage" : "en_US"
   },
   "errors" : [],
   "statusCode" : "200"
}
```

## Related Topics

- Error
                  Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_epc_error_output.htm)
- Setting (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_setting_output.htm)
