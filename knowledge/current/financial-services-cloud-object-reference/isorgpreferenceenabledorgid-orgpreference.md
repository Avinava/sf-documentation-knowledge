---
title: "isOrgPreferenceEnabled(orgId, orgPreference)"
domain: financial-services-cloud-object-reference
topic: isorgpreferenceenabledorgid-orgpreference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.108Z
estimatedTokens: 131
keywords: [isOrgPreferenceEnabled, orgId, orgPreference, accepts, Org, Preference, permission, enabled, API, Version]
---

# isOrgPreferenceEnabled(orgId, orgPreference)

> This method accepts Org ID and Org Preference values and returns true if the preference or permission is enabled in the
    org.

# isOrgPreferenceEnabled(orgId, orgPreference)

This method accepts Org ID and Org Preference values and returns true if the preference or permission is enabled in the org.

## API Version

60.0

## Signature

public static Boolean IsOrgPreferenceEnabled(String orgId, String orgPreference)

## Parameters

orgId

Type: String

The ID of the org.

orgPreference

Type: String

The name of the org preference or permission.

## Return Value

Type: Boolean

Returns true if the preference or permission is enabled in the org.
