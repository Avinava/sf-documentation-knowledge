---
title: "Database Statistics"
domain: salesforce-large-data-volumes-bp
topic: database-statistics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.997Z
estimatedTokens: 155
keywords: [Database, Statistics, Modern, databases, gather, amount, data, stored, inside, they, execute, queries, efficiently, Because, Salesforce’s]
---

# Database Statistics

> Modern databases gather statistics on the amount and types of data stored inside of them, and
   they use this information to execute queries efficiently. Because of Salesforce’s multitenant
   approach to software architecture, the platform must keep its own set of statistical information
   to hel

# Database Statistics

Modern databases gather statistics on the amount and types of data stored inside of them, and they use this information to execute queries efficiently. Because of Salesforce’s multitenant approach to software architecture, the platform must keep its own set of statistical information to help the database understand the best way to access the data. As a result, when large amounts of data are created, updated, or deleted using the API, the database must gather statistics before the application can efficiently access data. Currently, this statistics-gathering process runs on a nightly basis.
