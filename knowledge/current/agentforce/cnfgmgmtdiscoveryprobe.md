---
title: "CnfgMgmtDiscoveryProbe"
domain: agentforce
topic: cnfgmgmtdiscoveryprobe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.872Z
keywords: [CnfgMgmtDiscoveryProbe, Supported, Calls, Fields]
---

# CnfgMgmtDiscoveryProbe

# CnfgMgmtDiscoveryProbe

Represents the definition of probe types that determine which commands or scripts are executed during a discovery scan. For example, deep host scan, basic host scan, or vcenter scan. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionCategory to which this group probe belongs. For example, network scans or cloud scans.Possible values are:CLOUD_VIRTUALISATION_AND_INFRA—Cloud virtualisation and infraNETWORK_SCAN—Network scanPRESCAN_AND_UTILITIES—Prescan and utilities |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDescription of the group probe. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionName of the group probe. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRefers to a unique identifier that designates the user.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProbeType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStores the type of the group probe. Possible values include:Possible values are:awsCloudDiscovery—Aws Cloud DiscoveryazureCloudDiscovery—Azure Cloud DiscoverybasicDataScanWithCredential—Basic Data Scan With CredentialbasicHostScan—Basic Host ScanbasicScan—Basic ScandeepHostScanSshSnmpWindowsPowershell—Deep Host Scan (SSH, SNMP, PowerShell)deepHostScanWmicSshSnmp—Deep Host Scan (WMIC, SSH, SNMP)hostPingScan—Host Ping ScanhostTypeScan—Host Type ScaninternalDebugWorkflow—Internal Debug WorkflowpaexecCleanup—Paexec CleanupportScan—Port ScanvcenterScan—Vcenter Scan |