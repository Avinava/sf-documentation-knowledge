---
title: "Page Specification Input"
domain: health-cloud-object-reference
topic: page-specification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.098Z
estimatedTokens: 148
keywords: [Specification, Input, representation]
---

# Page Specification Input

> Input representation of the page specification
    details.

# Page Specification Input

Input representation of the page specification details.

Root XML tag

<PageSpecification>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addToTargetFile | Boolean | Indicates whether the page must to be added to the target file (true) or not (false). | Required | 55.0 |
| page | Integer | The page number of the document to be split. | Required | 55.0 |
| rotation | Integer | The angle at which the page needs to be rotated.Valid values are: 0, 90, 180, 270, or 360. | Required | 55.0 |
