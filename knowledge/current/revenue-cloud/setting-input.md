---
title: "Setting Input"
domain: revenue-cloud
topic: setting-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.502Z
estimatedTokens: 100
keywords: [Setting, Input, representation, details, index, setting.]
---

# Setting Input

> Input representation of the details of the index setting.

# Setting Input

Input representation of the details of the index setting.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| default​Language | String | Default language for the API. | Required | 63.0 |
| supported​Languages | String[] | List of supported language locales for indexing. | Required | 63.0 |

## Code Examples

```
"setting" : {
        "supportedLanguages" : ["en_US","ja","es","nl_NL"],
        "defaultLanguage" : "en_US"
   }
```
