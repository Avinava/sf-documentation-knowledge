---
title: "CnfgMgmtDiscoveryAgent"
domain: agentforce
topic: cnfgmgmtdiscoveryagent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.035Z
estimatedTokens: 452
keywords: [CnfgMgmtDiscoveryAgent, installed, discovery, agent, system, Serves, child, tracks, individual, instances, across, environment, API, version, 65.0]
---

# CnfgMgmtDiscoveryAgent

> Represents an installed discovery agent on a system. Serves as a child object
         of Discovery Agent and tracks individual agent instances across the environment. This
      object is available in API version 65.0 and later.

# CnfgMgmtDiscoveryAgent

Represents an installed discovery agent on a system. Serves as a child object of Discovery Agent and tracks individual agent instances across the environment. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AgentIdentifier | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the unique identifier (UUID) for the discovery agent instance. |
| CnfgMgmtDiscoveryAgentDefId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the unique identifier (UUID) for the discovery agent.This field is a relationship field.Relationship NameCnfgMgmtDiscoveryAgentDefRefers ToCnfgMgmtDiscoveryAgentDef |
| CnfgMgmtDiscoveryAppId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the unique identifier (UUID) for the discovery application instance.This field is a relationship field.Relationship NameCnfgMgmtDiscoveryAppRefers ToCnfgMgmtDiscoveryApp |
| HostIpAddress | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the IP address of the host running the discovery agent. |
| HostName | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the hostname of the server where the discovery agent instance is installed. |
| InstalledVersionNumber | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the version number of the installed discovery agent. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the discovery agent. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRefers to a unique identifier that designates the user.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
