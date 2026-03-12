---
title: "Organization Class"
domain: apex-reference
topic: organization-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.313Z
estimatedTokens: 265
namespace: ConnectApi
keywords: [Organization, Access, org, getSettings, API, Version, Requires, Chatter]
---

# Organization Class

> Access information about an org.

**Namespace:** `ConnectApi`

# Organization Class

Access information about an org.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Organization Methods

These methods are for Organization. All methods are static.

-   **[getSettings()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Organization_static_methods.htm#apex_ConnectAPI_Organization_getSettings)**
    Get information about the context user and the org, including which features are enabled.

### getSettings()

Get information about the context user and the org, including which features are enabled.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrganizationSettings getSettings()

#### Return Value

Type: [ConnectApi.OrganizationSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_organization.htm "Org settings.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getSettings() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Organization_static_methods.htm)
- ConnectApi.OrganizationSettings (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_organization.htm)
