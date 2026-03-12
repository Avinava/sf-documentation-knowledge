---
title: "Salesforce Maps Apex Requirements"
domain: maps-developer-guide
topic: salesforce-maps-apex-requirements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.825Z
estimatedTokens: 353
keywords: [Salesforce, Maps, Apex, Requirements, introduces, perform, operations]
---

# Salesforce Maps Apex Requirements

> This guide introduces you to the Apex methods you can use to perform Salesforce Maps
    operations without using the UI.

# Salesforce Maps Apex Requirements

This guide introduces you to the Apex methods you can use to perform Salesforce Maps operations without using the UI.

Before using Apex methods, ensure that you have:

-   Access to Apex classes using Enterprise, Unlimited, or Developer Editions
-   Salesforce Maps installed
-   A license for Salesforce Maps or Salesforce Maps Advanced. Methods to get current location and location history also require a license for Salesforce Maps Live Tracking
-   Access to Salesforce Maps objects and Apex classes granted through a permission set: SF Maps, SF Maps Advanced, SF Maps Live Admin, Maps User, or Maps Admin

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.
