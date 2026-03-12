---
title: "SOAP API End-of-Life Policy"
domain: api
topic: soap-api-end-of-life-policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.677Z
estimatedTokens: 405
keywords: [SOAP, API, End-of-Life, Policy, versions, unsupported, unavailable]
---

# SOAP API End-of-Life Policy

> See which SOAP API versions are supported, unsupported, or unavailable.

# SOAP API End-of-Life Policy

See which SOAP API versions are supported, unsupported, or unavailable.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The SOAP API login() call is scheduled for retirement in Summer ‘27. The login() call will be supported in API versions 62.0, 63.0, and 64.0 for a minimum of two years following the release of the version.

Salesforce is committed to supporting each API version for a minimum of 3 years from the date of first release. To improve the quality and performance of the API, versions that are over 3 years old sometimes are no longer supported.

Salesforce notifies customers who use an API version scheduled for deprecation at least 1 year before support for the version ends.

| Salesforce API Versions | Version Support Status | Version Retirement Info |
| --- | --- | --- |
| Versions 31.0 through 66.0 | Supported. |  |
| Versions 21.0 through 30.0 | As of Summer ’25, these versions are retired and unavailable. | Salesforce Platform API Versions 21.0 through 30.0 Retirement |
| Versions 7.0 through 20.0 | As of Summer ’22, these versions are retired and unavailable. | Salesforce Platform API Versions 7.0 through 20.0 Retirement |

If you request any resource or use an operation from a retired API version, SOAP API returns 500:UNSUPPORTED\_API\_VERSION error code.

To identify requests made from old or unsupported API versions, use the [API Total Usage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apitotalusage.htm) event type.
