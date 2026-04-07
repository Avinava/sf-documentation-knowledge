---
title: "Requesting Practitioner Input"
domain: life-sciences-dev-guide
topic: requesting-practitioner-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:55.309Z
estimatedTokens: 119
keywords: [Requesting, Practitioner, Ordering, referring]
---

> Ordering or referring practitioner for the request.

# Requesting Practitioner Input

Ordering or referring practitioner for the request.

Root XML tag

<requestingPractitioner>

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| healthCareProviderId | String | The provider associated with request creation for this prior authorization. This field is a lookup to HealthcareProviderId. | Yes | 55.0 |
| npi | String | Requesting Practitioner‘s NPI number. | Yes | 46.0 |
