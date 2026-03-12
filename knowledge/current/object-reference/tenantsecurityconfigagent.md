---
title: "TenantSecurityConfigAgent"
domain: object-reference
topic: tenantsecurityconfigagent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.866Z
estimatedTokens: 497
keywords: [TenantSecurityConfigAgent, Stores, metric, implemented, Agentforce, Agents, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityConfigAgent

> Stores metric details related to implemented Agentforce Agents This
      object is available in API version 65.0 and later.

# TenantSecurityConfigAgent

Stores metric details related to implemented Agentforce Agents This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available for Security Center subscribers. This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe action taken on the configured agent within a tenant. |
| ActionBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user who made this change. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date this action was taken. |
| AgentName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the configured agent. |
| AgentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of agent. |
| AssignedTopics | TypetextareaPropertiesNillableDescriptionThe list of agent topics. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique across all tenants. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe API name of the agent. |
| Status | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status, active or inactive, of the agent version. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant. |
| TenantName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the tenant. |
| Version | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe version number. |
