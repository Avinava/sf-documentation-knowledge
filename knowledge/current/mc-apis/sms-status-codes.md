---
title: "SMS Status Codes"
domain: mc-apis
topic: sms-status-codes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.328Z
estimatedTokens: 445
keywords: [SMS, Status, Codes, includes, MobileConnect, API, locations, evaluate, troubleshoot]
---

> This table includes status codes returned from MobileConnect API calls for all locations. Use these codes to evaluate and troubleshoot your SMS sends.

# SMS Status Codes

This table includes status codes returned from MobileConnect API calls for all locations. Use these codes to evaluate and troubleshoot your SMS sends.

| Code | Status | Definition |
| --- | --- | --- |
| 1000 | QueuedToSfmcSendService | Message queued to internal send service. |
| 1500 | QueueFailureToSfmcSendService | Message failed to queue to internal send service. Retry your send. |
| 1501 | ValidationError | Internal validation error. Retry your send. |
| 2000 | DeliveredToAggregator | Message delivered to aggregator. Status will be updated when delivery confirmation comes from carrier or mobile device. For shared codes, this is the final status. |
| 2500 | FailedToAggregator | Message not delivered to aggregator. Retry your send. |
| 2501 | UnknownToAggregator | Unknown aggregator error. |
| 2600 | ThrottledToAggregator | Message not accepted by aggregator due to capacity issues. Salesforce exhausted the retry process. |
| 3000 | Enroute | Message is en route to carrier. Waiting on carrier confirmation. |
| 3001 | SentToCarrier | Message sent to carrier. Waiting to be accepted by carrier. |
| 3002 | AcceptedByCarrier | Message accepted by carrier. Waiting for delivery confirmation. |
| 3400 | Unknown | Unknown error |
| 4000 | Delivered | Message delivered to mobile device. |
| 4500 | Undeliverable | Message not delivered to mobile device. |
| 4501 | Expired | Message expired. Message exhausted the carrier retry process. Mobile device may be out of carrier range. |
| 4502 | Deleted | Message deleted by the carrier. |
| 4503 | Rejected | Message rejected. Carrier may have detected a loop or assumed that message is spam. This status can indicate an administrative or financial problem between the operator and the end users. |
