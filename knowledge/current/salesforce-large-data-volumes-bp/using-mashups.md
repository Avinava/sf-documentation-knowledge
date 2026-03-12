---
title: "Using Mashups"
domain: salesforce-large-data-volumes-bp
topic: using-mashups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.036Z
estimatedTokens: 336
keywords: [Mashups, approach, reducing, amount, data, Salesforce, maintain, large, different, application, needed, refers, arrangement, mashup, because]
---

# Using Mashups

> One approach to reducing the amount of data in Salesforce is to maintain large data sets in
   a different application, and then make that application available to Salesforce as needed. Salesforce refers to such an arrangement as
   a mashup because it provides a quick, loosely coupled integration o

# Using Mashups

One approach to reducing the amount of data in Salesforce is to maintain large data sets in a different application, and then make that application available to Salesforce as needed. Salesforce refers to such an arrangement as a *mashup* because it provides a quick, loosely coupled integration of the two applications. Mashups use Salesforce presentation to display Salesforce-hosted data and externally hosted data.

Salesforce supports the following mashup designs.

External Website

The Salesforce UI displays an external website, and passes information and requests to it. With this design, you can make the website look like part of the Salesforce UI.

Callouts

Apex code allows Salesforce to use Web services to exchange information with external systems in real time.

Because of their real-time restrictions, mashups are limited to short interactions and small amounts of data.

See [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm).

## Advantages of Using Mashups

-   Data is never stale.
-   No proprietary method needs to be developed to integrate the two systems.

## Disadvantages of Using Mashups

-   Accessing data takes more time.
-   Functionality is reduced. For example, reporting and workflow do not work on the external data.
