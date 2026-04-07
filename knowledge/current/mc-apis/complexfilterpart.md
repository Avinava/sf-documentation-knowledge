---
title: "ComplexFilterPart"
domain: mc-apis
topic: complexfilterpart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.694Z
estimatedTokens: 161
keywords: [ComplexFilterPart, multiple, filter, parts, Items]
---

> The ComplexFilterPart object specifies multiple filter parts.

# ComplexFilterPart

The ComplexFilterPart object specifies multiple filter parts.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AdditionalOperands | FilterPart[] | Reserved for future use. |
| LeftOperand | FilterPart | Specifies condition on left in filter part. |
| LogicalOperator | LogicalOperators | Specifies AND or OR for complex filter parts. |
| RightOperand | FilterPart | Specifies condition on right in filter part. |

## Related Items

[Retrieve the Status of Programs Using AsyncActivityStatus](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_status_of_programs_using_asyncactivitystatus.htm)

## Related Topics

- Retrieve the Status of Programs Using AsyncActivityStatus (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_status_of_programs_using_asyncactivitystatus.htm)
