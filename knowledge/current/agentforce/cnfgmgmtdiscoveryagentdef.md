---
title: "CnfgMgmtDiscoveryAgentDef"
domain: agentforce
topic: cnfgmgmtdiscoveryagentdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.040Z
estimatedTokens: 343
keywords: [CnfgMgmtDiscoveryAgentDef, discovery, agents, installed, various, operating, systems, Acts, parent, groups, agent, instances, system, Captures, metadata]
---

# CnfgMgmtDiscoveryAgentDef

> Represents discovery agents installed on various operating systems. Acts as a
         parent object that groups agent instances by type and operating system. Captures metadata
         such as version and upgrade preferences. This object is available in API version 65.0
      and later.

# CnfgMgmtDiscoveryAgentDef

Represents discovery agents installed on various operating systems. Acts as a parent object that groups agent instances by type and operating system. Captures metadata such as version and upgrade preferences. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| IsAutoUpgradeEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndiciates whether the discovery agent gets upgraded automatically (true) or not (false).The default value is false. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the configuration management discovery agent definition. |
| OperatingSystem | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the operating system on which the discovery agent is installed.Possible values are:LINUX—LinuxMAC_OS—Mac osWINDOWS—Windows |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRefers to a unique identifier that designates the user.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Schedule | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the date and time when the scan gets executed by the discovery agent. |
