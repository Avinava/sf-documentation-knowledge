---
title: "DataSourceTypeEnum"
domain: mc-apis
topic: datasourcetypeenum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.448Z
estimatedTokens: 208
keywords: [DataSourceTypeEnum, source, originated]
---

> The DataSourceTypeEnum object indicates the type of list from which the data source originated.

# DataSourceTypeEnum

The DataSourceTypeEnum object indicates the type of list from which the data source originated.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CustomObject | Enumeration | Indicates that the data source comes from a data extension. |
| DomainExclusion | Enumeration | Indicates domains to be excluded from sends. |
| FilterDefinition | Enumeration | Defines filters to apply to an audience. |
| List | Enumeration | List associated with an object. |
| OptOutList | Enumeration | Defines audience that has opted out of receiving more sends; refers to a publication list in Marketing Cloud. |
| SalesForceCampaign | Enumeration | Indicates the data source comes from a Salesforce campaign. |
| SalesForceReport | Enumeration | Indicates the data source comes from a Salesforce report. |
