---
title: "Revenue Recognition Service Setup"
domain: blng-dev
topic: revenue-recognition-service-setup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.968Z
estimatedTokens: 329
keywords: [Revenue, Recognition, Service, Setup, Prepare, configuring, several, Salesforce, Billing]
---

# Revenue Recognition Service Setup

> Prepare the Revenue Recognition Service by configuring several revenue fields in
  Salesforce Billing.

# Revenue Recognition Service Setup

Prepare the Revenue Recognition Service by configuring several revenue fields in Salesforce Billing.

Your admins may already have configured objects and fields in your org for use with the revenue recognition service. If they haven’t, read the following information.

To successfully pass a revenue recognition rule to the revenue recognition service, the rule’s revenue distribution methods and revenue recognition treatments require several picklist fields to have a value of Other. This value indicates that Salesforce Billing should override the default revenue recognition process and use parameters passed to the APEX service instead. When you’re configuring a revenue recognition rule for use with the service, make sure that the following fields have a value of Other.

Revenue Distribution Method

Full Recognition Date

Revenue Term End Date (Needed only for daily or monthly recognition)

Revenue Term Start Date

Type

Revenue Recognition Treatment

Revenue Schedule Creation Action

Revenue Schedule Amount

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=blng_dev)

#### Note

If you’re upgrading to Salesforce Billing Spring ’20 from an earlier version, add Other as a picklist value to each of these fields before using the service.
