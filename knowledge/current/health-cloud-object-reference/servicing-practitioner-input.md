---
title: "Servicing Practitioner Input"
domain: health-cloud-object-reference
topic: servicing-practitioner-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.176Z
estimatedTokens: 114
keywords: [Servicing, Practitioner, Input, administering, service]
---

# Servicing Practitioner Input

> Practitioner administering the service.

# Servicing Practitioner Input

Practitioner administering the service.

Root XML tag

<servicingPractitioner>

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| healthCareProviderId | String | The provider associated with providing the service for this care request. This field is a lookup to HealthcareProviderId. | Yes | 55.0 |
| npi | String | Servicing practitioner’s NPI number. | Yes | 46.0 |
