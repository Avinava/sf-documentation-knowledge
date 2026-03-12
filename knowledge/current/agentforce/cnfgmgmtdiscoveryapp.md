---
title: "CnfgMgmtDiscoveryApp"
domain: agentforce
topic: cnfgmgmtdiscoveryapp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.047Z
estimatedTokens: 602
keywords: [CnfgMgmtDiscoveryApp, definition, discovery, application, agentless, applications, installed, customer, network, hosts, scan, devices, environment, API, version]
---

# CnfgMgmtDiscoveryApp

> Represents the definition of a discovery application used for agentless
         discovery. These applications are installed on customer network hosts and are used to scan
         other devices in the environment.  This object is available in API version 65.0 and
      later.

# CnfgMgmtDiscoveryApp

Represents the definition of a discovery application used for agentless discovery. These applications are installed on customer network hosts and are used to scan other devices in the environment. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| ApplicationIdentifier | TypestringPropertiesFilter, Group, SortDescriptionUnique identifier (UUID) for the discovery application instance. |
| ApplicationPublicCert | TypetextareaPropertiesNillable, UpdateDescriptionRefers to the public key component of a digital certificate used to establish secure communication and authenticate the identity of an application or client interacting with an API. |
| ApplicationPublicKey | TypestringPropertiesFilter, SortDescriptionPublic key used to encrypt credentials during scans. The related private key is held by the application. |
| ClientSecretPath | TypestringPropertiesFilter, Group, SortDescriptionPath where the client secret is stored. Client secret is a random, auto-generated token used by the discovery application to request an access token. |
| HostIpAddress | TypestringPropertiesFilter, Group, SortDescriptionIP address of the host running this discovery application |
| HostName | TypestringPropertiesFilter, Group, SortDescriptionHostname of the server where the discovery application instance is installed. |
| InstalledVersionNumber | TypestringPropertiesFilter, Group, SortDescriptionVersion number of the installed discovery application. |
| IsAutoUpgradeEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the discovery application must be auto-upgraded (true) or not (false).The default value is false. |
| IsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an active discovery application instance is enabled (true) or not (false).The default value is false. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionName of the discovery application instance. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionRefers to a unique identifier that designates the user.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
