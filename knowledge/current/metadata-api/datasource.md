---
title: "DataSource"
domain: metadata-api
topic: datasource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.721Z
keywords: [DataSource, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields]
---

# DataSource

# DataSource

Used to represent the system where the data was sourced. This object is always needed when creating a Data Stream Definition.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

DataSource components have the suffix dataSource and are stored in the mktDataSources folder.

## Version

DataSource components are available in API version 50.0 and later.

## Special Access Rules

You need the Salesforce CustomizeApplication permission to access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| masterLabel | string | Required. The UI name for the Data Source. |
| prefix | string | Required. Prefix for the Data Source to make Data Source Object records unique. |