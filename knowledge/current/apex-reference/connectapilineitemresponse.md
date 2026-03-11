---
title: "ConnectApi.LineItemResponse"
domain: apex-reference
topic: connectapilineitemresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.043Z
keywords: [ConnectApi.LineItemResponse]
---

# ConnectApi.LineItemResponse

# ConnectApi.LineItemResponse

Response class that stores information about a list of one or more line items on which the tax engine has calculated tax.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| addresses | ConnectApi.​TaxAddresses​Response | The Ship From, Ship To, and Sold To addresses used during tax calculation. | 55.0 |
| amountDetails | ConnectApi.​TaxAmount​DetailsResponse | Information about tax amount values on the line item. | 55.0 |
| effectiveDate | Datetime | The date that the tax calculation takes effect. | 55.0 |
| lineNumber | String | System-generated number used to identify the tax line. | 55.0 |
| productCode | String | Product code for the product related to the taxed line item. | 55.0 |
| quantity | Double | Quantity of the taxed line item. | 55.0 |
| taxCode | String | Tax code for the taxed line item. | 55.0 |
| taxes | List<ConnectApi.​TaxDetails​Response> | Tax details for each line item in a tax line item output. | 55.0 |