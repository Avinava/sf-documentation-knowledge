---
title: "Message Templates List"
domain: omnistudio
topic: message-templates-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.594Z
keywords: [Message, Templates, List]
---

# Message Templates List

# Message Templates List

Output representation of the list of explainability message templates.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The API response code when there’s a failure in retrieving the list of explainability message templates. | Small, 56.0 | 56.0 |
| isSuccess | Boolean | Identifies whether the request is successful (true) or not (false). | Small, 56.0 | 56.0 |
| message | String | The error message when there’s a failure in retrieving the list of explainability message templates. | Small, 56.0 | 56.0 |
| message​Templates | Message Template Detail [] | The list of explainability message templates. | Small, 56.0 | 56.0 |