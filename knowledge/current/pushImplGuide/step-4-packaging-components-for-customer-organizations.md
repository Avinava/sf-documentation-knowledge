---
title: "Step 4. Packaging Components for Customer Organizations"
domain: pushImplGuide
topic: step-4-packaging-components-for-customer-organizations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.714Z
estimatedTokens: 192
keywords: [Step, Packaging, Components, Customer, Organizations, distribute, Apex, triggers, external, client, app, customers, partners, managed, package]
---

# Step 4. Packaging Components for Customer Organizations

> To distribute the Apex triggers and the external client app to customers, partners can
  create a managed package.

# Step 4. Packaging Components for Customer Organizations

To distribute the Apex triggers and the external client app to customers, partners can create a managed package.

When customers install your managed package, they will be able to send push notifications to the external client app from their organizations when certain events occur on Salesforce records, such as updating records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

Customers who install a managed package containing a external client app provided by a partner can’t write their own Apex triggers to send push notifications to the external client app.  This is to safeguard the partner’s registration with the mobile OS vendor from abuse.
