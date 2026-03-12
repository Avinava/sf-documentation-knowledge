---
title: "Divisions"
domain: salesforce-large-data-volumes-bp
topic: divisions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.998Z
estimatedTokens: 167
keywords: [Divisions, means, partitioning, data, large, deployments, reduce, number, records, queries, reports, deployment, customer, EMEA, APAC]
---

# Divisions

> Divisions are a means of partitioning the data of large deployments to reduce the number
   of records returned by queries and reports. For example, a deployment with many customer records
   might create divisions called US, EMEA, and APAC to separate the customers into
   smaller groups that are l

# Divisions

*Divisions* are a means of partitioning the data of large deployments to reduce the number of records returned by queries and reports. For example, a deployment with many customer records might create divisions called US, EMEA, and APAC to separate the customers into smaller groups that are likely to have few interrelationships. Divisions are beneficial for organizations with large amounts of data. To use divisions, your organization must have over one million records in a single object and more than 35 licenses.

Salesforce provides special support for partitioning data by divisions, which you can enable by contacting Salesforce Customer Support.
