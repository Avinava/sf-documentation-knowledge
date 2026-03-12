---
title: "Omniscripts for Enterprise Sales Management"
domain: esm-developer-guide
topic: omniscripts-for-enterprise-sales-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.972Z
estimatedTokens: 504
keywords: [Omniscripts, Enterprise, Sales, Management, uses, implement, key, business, processes, quote, generate, proposal, document]
---

# Omniscripts for Enterprise Sales Management

> Enterprise Sales Management uses Omniscripts to implement
      key business processes, such as to create a quote or generate a proposal document.

# Omniscripts for Enterprise Sales Management

Enterprise Sales Management uses Omniscripts to implement key business processes, such as to create a quote or generate a proposal document.

| Omniscript | Description | Called By |
| --- | --- | --- |
| b2bExpress/CreateQuote | This Omniscript is used to create a quote by choosing the account, opportunity, and price list. | Create Quote button in Account and Opportunity |
| b2bExpress/generateProposalDocument | This Omniscript is used to generate a proposal from a quote. | Custom button in Quote as well as in Enterprise Sales Management |
| b2bExpress/generateProposalDocumentLWC | This Omniscript is used to generate a proposal from a quote using LWC. | Custom button in Quote as well as in Enterprise Sales Management |
| ESM/QuoteEnrichForAll | This Omniscript is used to update the billing details, connect date, and phone number for all the selected line items in an enterprise quote. | Enrich Quote button on Enterprise Sales Management Summary page. This Omniscript is called when All is selected in Displaying on the Summary page. |
| ESM/QuoteEnrichForInstallation | This Omniscript is used to update the connect date for all the selected line items in an enterprise quote. | Enrich Quote button on Enterprise Sales Management Summary page. This Omniscript is called when Installation is selected in Displaying on the Summary page. |
| ESM/QuoteEnrichForNumberAssignment | This Omniscript is used to update the phone numbers for all the selected line items in an enterprise quote. | Enrich Quote button on Enterprise Sales Management Summary page. This Omniscript is called when Number Assignment is selected in Displaying on the Summary page. |
| ESM/QuoteEnrichForPayment | This Omniscript is used to update the billing account associated with all the selected line items in an enterprise quote. | Enrich Quote button on Enterprise Sales Management Summary page. This Omniscript is called when Payment is selected in Displaying on the Summary page. |
