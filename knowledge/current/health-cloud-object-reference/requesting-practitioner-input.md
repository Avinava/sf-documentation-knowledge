---
title: "Requesting Practitioner Input"
domain: health-cloud-object-reference
topic: requesting-practitioner-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.163Z
estimatedTokens: 119
keywords: [Requesting, Practitioner, Input, Ordering, referring]
---

# Requesting Practitioner Input

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
