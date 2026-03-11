---
title: "Deep Clone Response"
domain: revenue-cloud
topic: deep-clone-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.406Z
keywords: [Deep, Clone, Response]
---

# Deep Clone Response

# Deep Clone Response

Output representation of the details of the cloned record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​RecordList | Deep Clone Record Response[] | List of cloned related records of the main record. | Small, 63.0 | 63.0 |
| createdRoot​RecordId | String | ID of the created root record. | Small, 63.0 | 63.0 |
| error​List | Deep Clone Error[] | Details of errors, if any. | Small, 63.0 | 63.0 |
| error​Message | String | Error message if the API request fails. | Small, 63.0 | 63.0 |
| is​Successful | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 63.0 | 63.0 |