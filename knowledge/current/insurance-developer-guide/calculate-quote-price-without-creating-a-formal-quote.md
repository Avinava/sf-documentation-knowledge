---
title: "Calculate Quote Price Without Creating a Formal Quote"
domain: insurance-developer-guide
topic: calculate-quote-price-without-creating-a-formal-quote
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.791Z
estimatedTokens: 277
keywords: [Calculate, Quote, Price, Creating, Formal, user, journey, customer, wants, estimated, their, requirements, having, save]
---

# Calculate Quote Price Without Creating a Formal Quote

> This user journey applies when a customer wants to see an estimated quote price based on
  their requirements without having to save a formal quote.

# Calculate Quote Price Without Creating a Formal Quote

This user journey applies when a customer wants to see an estimated quote price based on their requirements without having to save a formal quote.

Use the Quoting API if Quoting is managed within Salesforce. Use the Product Rating API when Quoting is not managed by Salesforce or when a third-party system handles the quoting process.

1.  Calculate the quote price by using one of these methods.
    -   **Quoting API**—Make a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm "HTML (New Window)") Connect API. Set the saveQuote parameter to false.
    -   **Product Rating API**—Make a POST request on the [Insurance Product Rating](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_product_rating.htm "HTML (New Window)") Connect API to generate a price-adjusted context based on user inputs without creating a formal quote.
