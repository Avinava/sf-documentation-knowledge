---
title: "Implement Quote Update Functionality for Insurance Representatives"
domain: insurance-developer-guide
topic: implement-quote-update-functionality-for-insurance-representatives
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:53.386Z
estimatedTokens: 177
keywords: [Implement, Quote, Functionality, Insurance, Representatives, user, journey, policyholder, wants, adding, deleting, editing, line, items]
---

> This user journey applies when a policyholder wants to update an existing quote, such
    as adding, deleting, or editing quote line items.

# Implement Quote Update Functionality for Insurance Representatives

This user journey applies when a policyholder wants to update an existing quote, such as adding, deleting, or editing quote line items.

**Assumption**

It’s assumed that the insurance representative has collected the policyholder's requirements to update a quote.

Use the quote ID to update the quote.

1.  Make a PATCH request on the [Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm "HTML (New Window)") Connect API to update the quote.

    This request returns a new price-adjusted quote ID in the response.
