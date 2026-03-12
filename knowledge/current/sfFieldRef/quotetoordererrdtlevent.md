---
title: "QuoteToOrderErrDtlEvent"
domain: sfFieldRef
topic: quotetoordererrdtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.299Z
estimatedTokens: 318
keywords: [QuoteToOrderErrDtlEvent, any, errors, occurred, processing, actions, standard, createOrderFromQuote, REST, record, created, error, included, QuoteToOrderCompletedEvent, message]
---

# QuoteToOrderErrDtlEvent

> Contains information about any errors that occurred while processing
			the /actions/standard/createOrderFromQuote REST
			request. One QuoteToOrderErrDtlEvent record is
			created for each error that occurred. This object is included in an QuoteToOrderCompletedEvent message. You can't subscribe to
			QuoteToOrderErrDtlEvent directly. This object is
		available in API version 56.0 and later.

# QuoteToOrderErrDtlEvent

Contains information about any errors that occurred while processing the /actions/standard/createOrderFromQuote REST request. One QuoteToOrderErrDtlEvent record is created for each error that occurred. This object is included in an QuoteToOrderCompletedEvent message. You can't subscribe to QuoteToOrderErrDtlEvent directly. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see QuoteToOrderErrDtlEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | textarea |  | 2000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| PrimaryRecordId | Primary Record ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RevenueTransactionErrLogId | Revenue Transaction Error Log ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
