---
title: "Previous Assessment Responses Input"
domain: health-cloud-object-reference
topic: previous-assessment-responses-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.116Z
estimatedTokens: 220
keywords: [Previous, Assessment, Responses, Input, representation, fetch, past, Discovery, Framework, MCG, assessments]
---

# Previous Assessment Responses Input

> The request representation to fetch past assessment responses for both Discovery Framework and MCG assessments.

# Previous Assessment Responses Input

The request representation to fetch past assessment responses for both Discovery Framework and MCG assessments.

Properties

| Property Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| assessment​Statuses | String[] | The list of assessment statuses used to filter assessments, such as In Progress or Completed. | Yes | 66.0 |
| assessment​Type | String | The type of assessment to retrieve. Valid values are DiscoveryFramework and MCG. | Yes | 66.0 |
| contextId | String | The ID of the Account, Case, or Clinical Service Request context record associated with the assessment. | Yes | 66.0 |
| question​Identifiers | String[] | The list of assessment question identifiers to retrieve. Use question developer names for internal assessments and question names for MCG assessments. | Yes | 66.0 |
