---
title: "Introduction"
domain: salesforce-large-data-volumes-bp
topic: introduction
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:42.024Z
estimatedTokens: 751
keywords: [Introduction, paper, experienced, application, architects, work, Salesforce, deployments, contain, large, data, volumes, What’s, Big, Objects]
---

# Introduction

> This paper is for experienced application architects who work with Salesforce deployments that
    contain large data volumes.

# Introduction

## Who Should Read This

This paper is for experienced application architects who work with Salesforce deployments that contain large data volumes.

A “large data volume” is an imprecise, elastic term. If your deployment has tens of thousands of users, tens of millions of records, or hundreds of gigabytes of total record storage, you have a large data volume. Even if you work with smaller deployments, you can still learn something from these best practices.

To understand the parts of this paper that deal with details of Salesforce implementation, read [https://developer.salesforce.com/page/Multi\_Tenant\_Architecture](https://developer.salesforce.com/page/Multi_Tenant_Architecture "HTML (New Window)").

## Overview

Salesforce enables customers to easily scale up their applications from small to large amounts of data. This scaling usually happens automatically, but as data sets get larger, the time required for certain operations grows. The ways in which architects design and configure data structures and operations can increase or decrease those operation times by several orders of magnitude.

The main processes affected by differing architectures and configurations are:

-   Loading or updating of large numbers of records, either directly or with integrations
-   Extraction of data through reports and queries, or through views

The strategies for optimizing those main processes are:

-   Following industry-standard practices for accommodating schema changes and operations in database-enabled applications
-   Deferring or bypassing business rule and sharing processing
-   Choosing the most efficient operation for accomplishing a task

## What’s in This Paper

-   Techniques for improving the performance of applications with large data volumes
-   Salesforce mechanisms and implementations that affect performance in less-than-obvious ways
-   Salesforce mechanisms designed to support the performance of systems with large data volumes

## Salesforce Big Objects

Salesforce provides big data technology called Big Objects. A big object stores and manages massive amounts of data on the Salesforce platform. You can archive data from other objects or bring massive datasets from outside systems into a big object to get a full view of your customers. A big object provides consistent performance, whether you have 1 million records, 100 million, or even 1 billion. This scale gives a big object its power and defines its features.

This paper focuses on optimizing large data volumes stored in standard and custom objects, not big objects. For optimal performance and a sustainable long-term storage solution for even larger data sets, use Bulk API or Batch Apex to move your data into big objects.

#### See Also

-   [Salesforce Developers: Big Objects Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "Salesforce Developers: Big Objects Implementation Guide - HTML (New Window)")
