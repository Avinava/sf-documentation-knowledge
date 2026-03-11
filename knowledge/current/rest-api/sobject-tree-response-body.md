---
title: "sObject Tree Response Body"
domain: rest-api
topic: sobject-tree-response-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.806Z
keywords: [sObject, Tree, Response, Body]
---

# sObject Tree Response Body

# sObject Tree Response Body

Describes the result of an sObject Tree request.

Properties

| Name | Type | Description |
| --- | --- | --- |
| hasErrors | Boolean | true if an error occurred while creating a record; false otherwise. |
| results | Collection | Upon success, results contains the reference ID of each requested record and its new record ID. Upon failure, it contains only the reference ID of the record that caused the error, error status code, error message, and fields related to the error. In the case of duplicate reference IDs, results contains one item for each instance of the duplicate ID. |

JSON example upon success

```

```

XML example upon success

```

```

JSON example upon failure

```

```

XML example upon failure

```

```