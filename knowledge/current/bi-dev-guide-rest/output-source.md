---
title: "Output Source"
domain: bi-dev-guide-rest
topic: output-source
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.462Z
estimatedTokens: 176
keywords: [Output, Source, Analytics, replicated, dataset, known, connected]
---

# Output Source

> The output source for an Analytics replicated dataset, also known as a connected
  object.

# Output Source

The output source for an Analytics replicated dataset, also known as a connected object.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| input​Rows | Integer | The number of input rows for the sync out operation. | Small, 50.0 | 50.0 |
| is​Sync​Out | Boolean | Indicates whether this object represents a sync out connection (true) or a recipe output connection (false). | Small, 50.0 | 50.0 |
| next​Scheduled​Date | Date | The next scheduled run time for the output source. | Small, 50.0 | 50.0 |
| output​Rows | Integer | The number of output rows for the sync out operation. | Small, 50.0 | 50.0 |
