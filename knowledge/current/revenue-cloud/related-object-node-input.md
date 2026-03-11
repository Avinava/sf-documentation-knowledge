---
title: "Related Object Node Input"
domain: revenue-cloud
topic: related-object-node-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.211Z
keywords: [Related, Object, Node, Input]
---

# Related Object Node Input

# Related Object Node Input

Input representation of the details of a related object node.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | Criteria[] | Criteria to filter records. The supported properties are:StartDateEndDateStatusThe supported operators are:eqgtelteThe supported related object is ProductUsageGrant.If multiple criteria are specified, then the resultant criteria are combined by using the and operator. | Optional | 62.0 |
| offSet | Integer | Number of records to skip. The default value is 0. | Optional | 62.0 |
| pageSize | Integer | Number of records per page. Valid values are from 1 through 100. If unspecified, the default value is 100. | Optional | 62.0 |
| relatedObject​APIName | String | API name of the related object to return the records for. The supported related objects are ProductRampSegment and ProductUsageGrant. | Required | 62.0 |