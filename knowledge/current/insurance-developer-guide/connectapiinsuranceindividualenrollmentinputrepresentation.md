---
title: "ConnectApi.InsuranceIndividualEnrollmentInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceindividualenrollmentinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.268Z
estimatedTokens: 114
keywords: [Input, representation, enrolling, individual, member]
---

# ConnectApi.InsuranceIndividualEnrollmentInputRepresentation

> Input representation for enrolling an individual member.

# ConnectApi.InsuranceIndividualEnrollmentInputRepresentation

Input representation for enrolling an individual member.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowName | String | API name of an optional flow to run as part of the enrollment process. | Optional | 65.0 |
| plan | String | Comma-separated string of contract group plan IDs to enroll the member in. | Required | 65.0 |
