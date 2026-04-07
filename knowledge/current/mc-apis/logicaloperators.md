---
title: "LogicalOperators"
domain: mc-apis
topic: logicaloperators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.637Z
estimatedTokens: 119
keywords: [LogicalOperators, operators, join, simple, complex, filter, parts, together]
---

# LogicalOperators

> The LogicalOperators object specifies operators to join simple or complex filter parts together.

# LogicalOperators

The LogicalOperators object specifies operators to join simple or complex filter parts together.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AND | Enumeration | AND logical operator. When used in a ComplexFilterPart, AND indicates that the LeftCondition and the RightCondition must both evaluate to true for a record to be selected. |
| OR | Enumeration | Specifies to use this value or another specified value in a search. |
