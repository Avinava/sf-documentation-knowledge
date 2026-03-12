---
title: "Context Attribute Hydration Details Input"
domain: omnistudio
topic: context-attribute-hydration-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.138Z
estimatedTokens: 206
keywords: [Context, Attribute, Hydration, Details, Input, representation, context, attribute, hydration, detail.]
---

# Context Attribute Hydration Details Input

> Input representation of context attribute hydration detail.

# Context Attribute Hydration Details Input

Input representation of context attribute hydration detail.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| childDetails | Context Attribute Hydration Details Input[] | Child of hydration details. | Required | 59.0 |
| contextAttrHydrationDetailId | String | ID of the hydration detail record. This field is required for the update request. | Optional | 59.0 |
| parentAttributeMappingId | String | ID of the parent context attribute mapping record. | Required | 59.0 |
| parentDetailId | String | ID of the parent context attribute hydration detail record. | Required | 59.0 |
| queryAttribute | String | Query attribute. | Optional | 59.0 |
| sObjectDomain | String | SObject domain. | Optional | 59.0 |
