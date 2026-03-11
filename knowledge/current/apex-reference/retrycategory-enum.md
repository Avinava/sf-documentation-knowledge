---
title: "RetryCategory Enum"
domain: apex-reference
topic: retrycategory-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.473Z
keywords: [RetryCategory, Enum, Values]
---

# RetryCategory Enum

# RetryCategory Enum

Specifies the retry category.

## Enum Values

The following are the values of the commercepayments.RetryCategory enum.

| Value | Description |
| --- | --- |
| CardLimit | Insufficient funds, exceeded spending limits, or other restrictions on the card. |
| GatewayConnection | Connectivity or communication errors between systems, including upstream gateway errors. |
| PaymentInformation | Missing or incorrect data such as incorrect card numbers, addresses, or currencies. |
| PaymentProcessing | Payment account is invalid, closed, restricted, or the transaction was declined for reasons other than insufficient funds. |
| Security | Security violations or issues such as fraud, risk, authentication, verification, and authorization. |
| Unknown | The payment gateway error code isn't recognized or isn't mapped to a specific category. |