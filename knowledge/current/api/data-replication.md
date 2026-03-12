---
title: "Data Replication"
domain: api
topic: data-replication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.655Z
estimatedTokens: 384
keywords: [Data, Replication, API, supports, store, maintain, external, separate, copy, organization’s, pertinent, Salesforce, specialized, uses, warehousing]
---

# Data Replication

> The API supports data replication, which allows you to store and maintain an external, separate copy of your organization’s pertinent Salesforce data for specialized uses, such as
			data warehousing, data mining, custom reporting, analytics, and integration with other applications. Data replication

# Data Replication

The API supports data replication, which allows you to store and maintain an external, separate copy of your organization’s pertinent Salesforce data for specialized uses, such as data warehousing, data mining, custom reporting, analytics, and integration with other applications. Data replication provides you with local control and the ability to run large or ad hoc analytical queries across the entire data set without transmitting all that data across the network.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

To get real-time notifications of Salesforce record changes, use Change Data Capture instead. By subscribing to a Change Data Capture channel, you receive a stream of change event messages for record changes, including insertions, updates, deletions, and undeletions. With Change Data Capture, you get broad access to data and can perform updates in your target store using transaction boundaries. Change Data Capture provides a versioned event schema and retains change events temporarily for later retrieval. For more information, see the [Change Data Capture Basics Trailhead module](https://trailhead.salesforce.com/en/content/learn/modules/change-data-capture), or for a complete reference, see the [Change Data Capture Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_what.htm).

Use the topics in this section to better understand the best practices for data replication.
