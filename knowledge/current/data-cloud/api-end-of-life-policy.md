---
title: "API End-of-Life Policy"
domain: data-cloud
topic: api-end-of-life-policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.300Z
keywords: [API, End-of-Life, Policy]
---

# API End-of-Life Policy

# API End-of-Life Policy

See which REST API versions are supported, unsupported, or unavailable.

Salesforce is committed to supporting each API version for a minimum of 3 years from the date of first release. To improve the quality and performance of the API, versions that are over 3 years old sometimes are no longer supported.

Salesforce notifies customers who use an API version scheduled for deprecation at least 1 year before support for the version ends.

| Salesforce API Versions | Version Support Status | Version Retirement Info |
| --- | --- | --- |
| Versions 31.0 through 62.0 | Supported. |  |
| Versions 21.0 through 30.0 | As of Summer ’22, these versions have been deprecated and no longer supported by Salesforce.Starting Summer ’25, these versions will be retired and unavailable. | Salesforce Platform API Versions 21.0 through 30.0 Retirement |
| Versions 7.0 through 20.0 | As of Summer ’22, these versions are retired and unavailable. | Salesforce Platform API Versions 7.0 through 20.0 Retirement |

If you request any resource or use an operation from a retired API version, REST API returns the 410:GONE error code.

To identify requests made from old or unsupported API versions, use the [API Total Usage](https://developer.salesforce.com/docs/atlas.en-us.252.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apitotalusage.htm) event type.