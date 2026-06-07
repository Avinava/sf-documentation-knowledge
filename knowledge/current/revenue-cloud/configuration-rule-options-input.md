---
title: "Configuration Rule Options Input"
domain: revenue-cloud
topic: configuration-rule-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:37.448Z
estimatedTokens: 151
keywords: [Configuration, Rule, Options]
---

> Input representation of the details of the configuration rule options.

# Configuration Rule Options Input

Input representation of the details of the configuration rule options.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isUpdateContextRequired | Boolean | Indicates whether context update is required with the capability to automatically add or delete a product and its components (true) or not (false).If Place Sales Transaction API is invoked with configuration enabled, set this property to false to avoid any redundant execution of context logic. | Optional | 67.0 |

## Code Examples

```
{
  "ruleOptions": {
    "isUpdateContextRequired": false
  }
}
```
