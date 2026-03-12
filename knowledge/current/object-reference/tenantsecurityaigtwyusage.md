---
title: "TenantSecurityAIGtwyUsage"
domain: object-reference
topic: tenantsecurityaigtwyusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.834Z
estimatedTokens: 664
keywords: [TenantSecurityAIGtwyUsage, Stores, Einstein, generative, gateway, usage, data, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityAIGtwyUsage

> Stores Einstein generative AI gateway usage data. This object is
      available in API version 65.0 and later.

# TenantSecurityAIGtwyUsage

Stores Einstein generative AI gateway usage data. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available for Security Center subscribers. This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Cloud | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionCost cloud ID. |
| DetailIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the individual detail record. This field is unique across all tenants. |
| Feature | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe AI feature for which the gateway request was made. |
| MaskedPrompt | TypetextareaPropertiesNillableDescriptionMasked prompt or input text. |
| MaskedResponse | TypetextareaPropertiesNillableDescriptionThe generated response from the LLM. If masking is enabled, this may contain placeholder text. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. This field is unique within your organization. |
| MetricsType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of data collected. |
| Model | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the model to which the request was sent. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| ObjectName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionName of the Salesforce object is referenced in the prompt. |
| Prompt | TypetextareaPropertiesNillableDescriptionThe hydrated version of prompt text before data masking is applied. The actual prompt sent to the LLM will mask sensitive data if data masking is enabled. |
| PromptTemplateDevName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the prompt template. |
| PromptTemplateVersionNo | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the prompt template. |
| PromptTokens | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe number of tokens used in the prompt. |
| Response | TypetextareaPropertiesNillableDescriptionThe generated response after unmasking. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant of this AI gateway usage event. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant of this AI gateway usage event. |
