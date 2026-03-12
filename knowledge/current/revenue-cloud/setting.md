---
title: "Setting"
domain: revenue-cloud
topic: setting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.500Z
estimatedTokens: 116
keywords: [Setting, Output, representation, setting, that’s, used, indexing.]
---

# Setting

> Output representation of the setting that’s used in indexing.

# Setting

Output representation of the setting that’s used in indexing.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| default​Language | String | Default language for the API. | Small, 63.0 | 63.0 |
| id | String | ID of the setting. | Small, 63.0 | 63.0 |
| supported​Languages | String[] | List of supported language locales for indexing. | Small, 63.0 | 63.0 |

## Code Examples

```
"setting": {
    "defaultLanguage": "en_US",
    "id": "1JySG0000000GUb0AM",
    "supportedLanguages": ["en_US","ja","es","nl_NL"]
  }
```
