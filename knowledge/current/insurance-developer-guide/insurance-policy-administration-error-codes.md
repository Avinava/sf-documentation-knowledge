---
title: "Insurance Policy Administration Error Codes"
domain: insurance-developer-guide
topic: insurance-policy-administration-error-codes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.931Z
estimatedTokens: 260
keywords: [Insurance, Policy, Administration, Error, Codes, code, messages, applicable, APIs]
---

# Insurance Policy Administration Error Codes

> Contains the error codes and error code messages that are applicable to the
      Insurance Policy Administration APIs.

# Insurance Policy Administration Error Codes

Contains the error codes and error code messages that are applicable to the Insurance Policy Administration APIs.

| Error Code | HTTP Response Code | Message |
| --- | --- | --- |
| SF-0003-0001 | 400 | The cancellation effective date can’t be on or after {cancellationEffectiveDate}. |
| SF-0003-0002 | 400 | Specify a cancellation effective date that is after {originalEffectiveFromDate} and before {originalEffectiveToDate}. |
| SF-0003-0003 | 400 | The policy ID {insurancePolicyId} does not exist. Specify a valid policy ID and try again. |
| SF-0003-0004 | 400 | We couldn’t find the accountId in the context. Specify an accountId. |
| SF-0003-0005 | 400 | Specify an endorsement date that's between {effectiveFromDate} and {effectiveToDate}. |
| SF-0003-0006 | 400 | The field set IDs {invalidIds} aren’t associated with the entities {entitiesList}. Specify valid field set IDs and try again. |
| SF-0003-0007 | 400 | Specify only one field set ID for {entitiesList} and try again. |
