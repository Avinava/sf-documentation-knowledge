---
title: "load"
domain: bi-dev-guide-saql
topic: load
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.806Z
estimatedTokens: 143
keywords: [load, Loads, dataset, SAQL, queries, start, statement, Usage]
---

# load

> Loads a dataset. All SAQL queries start with a load statement.

# load

Loads a dataset. All SAQL queries start with a load statement.

## Syntax

```

```

If you’re working in Dashboard JSON, dataset must be the dataset name from the UI. Use of the dataset name (also called an alias) means the app can substitute it with the correct version of the dataset.

If you’re working in the Analytics REST API, dataset must be the containerId/versionId.

## Usage

After being loaded, the data is not grouped. The columns are the columns of the loaded dataset.

## Example

Load the Accounts dataset to the stream 'b'.

b = load "Accounts";

## Code Examples

```
result = load dataset;
```
