---
title: "Index Setting"
domain: revenue-cloud
topic: index-setting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.461Z
estimatedTokens: 147
keywords: [Index, Setting, Output, representation, retrieved, settings]
---

# Index Setting

> Output representation of the retrieved index settings.

# Index Setting

Output representation of the retrieved index settings.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Output[] | List of errors, if any. | Small, 63.0 | 63.0 |
| metadata | Setting Metadata[] | Metadata associated with the setting. | Small, 63.0 | 63.0 |
| setting | Setting[] | Setting that’s used in indexing and maintained for an org. | Small, 63.0 | 63.0 |
| status​Code | String | Code that indicates the status of the request. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "errors": [],
  "metadata": {
    "activeLanguages": ["en_US","ja","es","nl_NL"]
  },
  "setting": {
    "defaultLanguage": "en_US",
    "id": "1JySG0000000GUb0AM",
    "supportedLanguages": ["en_US","ja","es","nl_NL"]
  },
  "statusCode": "200"
}
```

## Related Topics

- Error
                  Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_epc_error_output.htm)
- Setting Metadata (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_setting_metadata_output.htm)
- Setting (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_setting_output.htm)
