---
title: "CnfgMgmtCredential"
domain: agentforce
topic: cnfgmgmtcredential
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.028Z
estimatedTokens: 613
keywords: [CnfgMgmtCredential, authentication, needed, access, interact, various, devices, systems, discovery, processes, SSH, key, API, version, 65.0]
---

# CnfgMgmtCredential

> Represents authentication information needed to access and interact with
         various IT devices and systems during the discovery processes. For example, SSH key.
      This object is available in API version 65.0 and later.

# CnfgMgmtCredential

Represents authentication information needed to access and interact with various IT devices and systems during the discovery processes. For example, SSH key. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CredentialType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of credentials that are used to connect to the configuration management database.Possible values are:AWS_ACCOUNT—AWS AccountAZURE_ACCOUNT—Azure AccountEMC_VNX—EMC VNXKUBERNETES—KubernetesMERAKI—MerakiMICROSOFT_INTUNE—Microsoft IntuneSCCM_HOST—SCCM HostSNMPSNMP_V3—SNMP V3SQL_SERVER—SQL ServerSSHSSH_PRIVATE_KEY—SSH Private KeyVMWARE—VMwareV_CENTER—V CenterWINDOWS—WindowsWINDOWS_AD_DOMAIN_CONTROLLER—Windows AD Domain ControllerXTREM_IO—Xtrem IOThe default value is SSH. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of credentials that are used to connect to the configuration management database. |
| NamedCredentialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe named credential mapped to the credentials used to connect with a configuration management database.This field is a relationship field.Relationship NameNamedCredentialRefers ToNamedCredential |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the credential that determines whether the credentials are used during asset discovery scans or not.Possible values are:ACTIVE—ActiveEXPIRED—ExpiredINACTIVE—InactiveThe default value is ACTIVE. |
