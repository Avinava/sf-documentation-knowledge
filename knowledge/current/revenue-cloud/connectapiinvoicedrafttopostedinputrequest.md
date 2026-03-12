---
title: "ConnectApi.InvoiceDraftToPostedInputRequest"
domain: revenue-cloud
topic: connectapiinvoicedrafttopostedinputrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.100Z
estimatedTokens: 169
keywords: [Input, representation, draft, invoice, that’s, posted]
---

# ConnectApi.InvoiceDraftToPostedInputRequest

> Input representation of the details of the draft invoice that’s posted.

# ConnectApi.InvoiceDraftToPostedInputRequest

Input representation of the details of the draft invoice that’s posted.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Splunk correlation ID to track the messages that are related to the request and are logged in Splunk by the different services involved in the request. If the ID isn’t specified, the service creates a random Universally Unique Identifier (UUID). | Optional | 62.0 |
| invoiceIds | List<String> | IDs of the invoice records in Draft status to be posted. You can post one draft invoice per API request. | Required | 62.0 |
