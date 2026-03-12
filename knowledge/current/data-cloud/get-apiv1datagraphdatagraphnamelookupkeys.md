---
title: "GET /api/v1/dataGraph/{dataGraphName}?lookupKeys=[]"
domain: data-cloud
topic: get-apiv1datagraphdatagraphnamelookupkeys
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.522Z
estimatedTokens: 171
keywords: [api, dataGraph, dataGraphName, lookupKeys=, secondary, lookup, keys, data, graph, one-to-one, lookups]
---

# GET /api/v1/dataGraph/{dataGraphName}?lookupKeys=[]

> Use secondary lookup keys to request data from a data graph. The lookup keys can be used for one-to-one lookups

# GET /api/v1/dataGraph/{dataGraphName}?lookupKeys=\[\]

Use secondary lookup keys to request data from a data graph. The lookup keys can be used for one-to-one lookups

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataGraphName | string | The data graph's API name. |
| lookupKeys | string[] | The API name of the related object included in the data graph and a field name and field ID of that related object, limited to the individual ID field on a specific related data model object. |
