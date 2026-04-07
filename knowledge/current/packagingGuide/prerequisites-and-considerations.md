---
title: "Prerequisites and Considerations"
domain: packagingGuide
topic: prerequisites-and-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:38:47.238Z
estimatedTokens: 493
keywords: [Prerequisites, Considerations, There, few, review, setting, Partner, Marketplace]
---

> There are a few prerequisites and considerations to review before setting up the Partner
  Marketplace.

# Prerequisites and Considerations

There are a few prerequisites and considerations to review before setting up the Partner Marketplace.

## Prerequisites

-   Be an existing ISVForce Salesforce partner who is enrolled in the AgentExchange Partner Program.
-   Have a seat-based managed package that is associated with your Salesforce org.
-   Set up USD as a currency in your Partner Business org. Private offers contain currency fields, which must be in USD.
-   Execute a Partner Application Distribution Agreement (PADA), or update your existing distribution agreement, with Salesforce that incorporates the [Partner Marketplace App Terms](https://www.salesforce.com/company/legal/partner-agreements/).

## Considerations

-   US Customers: The Partner Marketplace is available to US-based customers only.
-   New Customers: The Partner Marketplace can only be used to transact with customers that are new to the partner. You can’t sell new products to existing customers.
-   Seat-based: Only seat-based managed packages, native to the Salesforce Platform, are supported in the Partner Marketplace. Layered and consumption-based pricing options aren’t supported.
-   Permission set licenses requirements: Permission set licenses (PSL) are only supported in second-generation packaging (2GP) managed packages.
-   Contracts: 12-month contracts are required. To prevent issues, make sure that the customer has an active Salesforce contract for more than 12 months, or intends to renew the contract for the underlying required Salesforce product.
-   Payment terms: The default and supported payment term is NET30. Invoices are sent to the customer one day before the order start date. Payment for the entire value of the order is due upfront. ACH debit is the supported payment method.
-   Renewals, cancelations, refunds: Customer orders won’t automatically renew. Offer and order cancellations, and partner-initiated refunds to customers, aren't supported currently.
