---
title: "AuthenticationCapability Enum"
domain: apex-reference
topic: authenticationcapability-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.336Z
keywords: [AuthenticationCapability, Enum, Usage, Values]
---

# AuthenticationCapability Enum

# AuthenticationCapability Enum

Specifies the types of authentication that can be used to access the external system.

## Usage

The DataSource.Provider class returns DataSource.AuthenticationCapability enum values. The returned values determine which authentication settings are available on the external data source definition in Salesforce.

If you set up callouts in your DataSource.Connection class, you can specify the callout endpoints as named credentials instead of URLs. If you do so for all callouts, return ANONYMOUS as the sole entry in the list of data source authentication capabilities. That way, the external data source definition doesn’t require authentication settings. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to.

## Enum Values

The following are the values of the DataSource.AuthenticationCapability enum.

| Value | Description |
| --- | --- |
| ANONYMOUS | No credentials are required to authenticate to the external system. |
| BASIC | A username and password can be used to authenticate to the external system. |
| CERTIFICATE | A security certificate can be supplied when establishing each connection to the external system. |
| OAUTH | OAuth can be used to authenticate to the external system. |