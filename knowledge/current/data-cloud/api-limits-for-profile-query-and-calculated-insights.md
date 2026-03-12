---
title: "API Limits for Profile, Query, and Calculated Insights"
domain: data-cloud
topic: api-limits-for-profile-query-and-calculated-insights
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:12.375Z
estimatedTokens: 308
keywords: [API, Limits, Profile, Query, Calculated, Insights, There, three, distinct, classes, APIs, used, extract, data, Data, Cloud, formerly, Customer, Platform, Insights.]
---

# API Limits for Profile, Query, and Calculated Insights

> There are three distinct classes of APIs used to extract data from Data Cloud (formerly
  Customer Data Platform): Profile, Query, and Calculated Insights.

# API Limits for Profile, Query, and Calculated Insights

There are three distinct classes of APIs used to extract data from Data Cloud (formerly Customer Data Platform): Profile, Query, and Calculated Insights.

Profile, Query, and Calculated Insights API limits for Data Cloud (formerly Customer Data Platform) orgs are based on the org’s Data Cloud edition, not its Salesforce edition, except when running Data Cloud on a Developer org.

These limits don't apply to new Data Cloud orgs.

| Data Cloud Editions | Profile API Queries Per Day | Query API and Insights API Per Day | Query API and Insights API Concurrent Inbound Requests |
| --- | --- | --- | --- |
| Data Cloud (formerly Customer Data Platform) Corporate Edition | 10,000 | 1,000 | 15 |
| Data Cloud (Customer Data Platform) Enterprise and Enterprise Editions Plus | 50,000 | 1,000 | 15 |
| Any edition, when running on a Salesforce Developer org | 1,000 | 100 | 15 |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

To understand what other limits impact your org, review [Data Cloud Limits and Guidelines](https://help.salesforce.com/s/articleView?id=sf.c360_a_limits_and_guidelines.htm&type=5&language=en_US).
