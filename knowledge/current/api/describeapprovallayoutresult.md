---
title: "DescribeApprovalLayoutResult"
domain: api
topic: describeapprovallayoutresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:40:44.552Z
estimatedTokens: 238
keywords: [DescribeApprovalLayoutResult, DescribeApprovalLayout, call, containing, top-level, record, passed-in, sObjectType]
---

> The describeApprovalLayout() call returns a DescribeApprovalLayoutResult object
  containing top-level record type information about the passed-in sObjectType.

# DescribeApprovalLayoutResult

The describeApprovalLayout() call returns a DescribeApprovalLayoutResult object containing top-level record type information about the passed-in sObjectType.

Your client application can traverse this object to retrieve detailed metadata about the approval layout.

| Name | Type | Description |
| --- | --- | --- |
| approvalLayouts | DescribeApprovalLayout[] | List of all the approval layouts in use by the object. |

## DescribeApprovalLayout

Represents an individual item in the [DescribeApprovalLayout](#describeapprovallayoutresult_describeApprovalLayout) list.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | Unique ID of this ApprovalLayout. For information on IDs, see ID Field Type. |
| label | string | Label of the approval layout. |
| layoutItems | DescribeLayoutItem[] | Array of one or more fields assigned to the approval layout. |
| name | string | API name of the approval layout. |

## Related Topics

- DescribeLayoutItem (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
