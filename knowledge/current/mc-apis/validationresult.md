---
title: "ValidationResult"
domain: mc-apis
topic: validationresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:21.092Z
estimatedTokens: 181
keywords: [ValidationResult, specific, results, validation, call]
---

> The ValidationResult object contains specific results of validation call.

# ValidationResult

The ValidationResult object contains specific results of validation call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CheckTime | xsd:dateTime | Time of validation result check. |
| CheckTimeUTC | xsd:dateTime | Time of validation result check expressed in UTC format. |
| IsResultValid | xsd:boolean | Indicates whether an error message is present. |
| IsSpam | xsd:boolean | Indicates whether message reviewed exceeds spam threshold as part of SpamAssassin evaluation |
| Message | xsd:string | Contains contents of results message. |
| Score | xsd:double | Contains score of SpamAssassin validation call. |
| Subscriber | Subscriber | Identifies subscriber used in call. |
