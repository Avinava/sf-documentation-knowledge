---
title: "DescribeDataCategoryGroupResult"
domain: api
topic: describedatacategorygroupresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.013Z
estimatedTokens: 167
keywords: [DescribeDataCategoryGroupResult, describeDataCategoryGroups, call, containing, category, groups, associated, objects]
---

# DescribeDataCategoryGroupResult

> The describeDataCategoryGroups() call returns a DescribeDataCategoryGroupResult object
    containing the list of the category groups associated with the specified objects.

# DescribeDataCategoryGroupResult

The describeDataCategoryGroups() call returns a DescribeDataCategoryGroupResult object containing the list of the category groups associated with the specified objects.

| Name | Type | Description |
| --- | --- | --- |
| categoryCount | int | The number of visible data categories in the data category group. |
| description | string | The description of the data category group. |
| label | string | Label for the data category group in the Salesforce user interface. |
| name | string | The unique name used for API access to the data category group . |
| sobject | string | The object associated with the data category group. |
