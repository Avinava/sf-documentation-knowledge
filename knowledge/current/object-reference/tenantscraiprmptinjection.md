---
title: "TenantScrAIPrmptInjection"
domain: object-reference
topic: tenantscraiprmptinjection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.810Z
estimatedTokens: 600
keywords: [TenantScrAIPrmptInjection, Stores, generative, prompt, injection, data, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# TenantScrAIPrmptInjection

> Stores generative AI prompt injection data. This object is available in
      API version 65.0 and later.

# TenantScrAIPrmptInjection

Stores generative AI prompt injection data. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available for Security Center subscribers. This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique across all tenants. |
| InputSource | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe origin of this prompt. |
| Language | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLanguage of the prompt. |
| MaskedPrompt | TypetextareaPropertiesNillableDescriptionMasked prompt or input text. |
| MaskedResponse | TypetextareaPropertiesNillableDescriptionThe generated response from the LLM. If masking is enabled, this may contain placeholder text. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| PlannerLlm | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe LLM being used by the Planner. |
| Prompt | TypetextareaPropertiesNillableDescriptionThe hydrated version of prompt text before data masking is applied. The actual prompt sent to the LLM will mask sensitive data if data masking is enabled. |
| PromptTimestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when this prompt injection happened. |
| PromptTokens | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of tokens used in the prompt. |
| Response | TypetextareaPropertiesNillableDescriptionThe generated response after unmasking. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant with this triggered Transaction Security Policy event. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant where this triggered Transaction Security Policy happened. |
