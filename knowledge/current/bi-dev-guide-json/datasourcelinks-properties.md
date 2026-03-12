---
title: "dataSourceLinks
    Properties"
domain: bi-dev-guide-json
topic: datasourcelinks-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.211Z
estimatedTokens: 233
keywords: [dataSourceLinks, key, data, source, connections, dashboard, separate, node, connection]
---

# dataSourceLinks
    Properties

> The dataSourceLinks key defines all data source
    connections for the dashboard. It contains a separate node for each connection. Each connection
    has properties about each data source.

# dataSourceLinks Properties

The dataSourceLinks key defines all data source connections for the dashboard. It contains a separate node for each connection. Each connection has properties about each data source.

| Property Name | Details |
| --- | --- |
| fields | TypeArrayExposed in the Dashboard Designer's User InterfaceYes.DescriptionList of data sources included in the connection. Each data source contains the following properties.dataSourceNameAPI name of the dataset or ID of the static step.dataSourceTypeThe type of data source: "dataset" for a dataset or "static" for a static step.fieldNameName of the field used to match records between the data sources. |
| label | TypeStringExposed in the Dashboard Designer's User InterfaceYes.DescriptionDisplay label for the data source connection. |
| name | TypeStringExposed in the Dashboard Designer's User InterfaceNo.DescriptionAPI name of the data source connection. |
