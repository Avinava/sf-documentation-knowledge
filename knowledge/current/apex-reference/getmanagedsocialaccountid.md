---
title: "getManagedSocialAccount(id)"
domain: apex-reference
topic: getmanagedsocialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [getManagedSocialAccount, Get, managed, social, account, org, assigned, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedSocialAccount(id)

> Get a managed social account that is in the org and assigned to the user.

### getManagedSocialAccount(id)

Get a managed social account that is in the org and assigned to the user.

#### API Version

44.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedSocialAccount getManagedSocialAccount(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description: Internal SFDC ID for this managed social account.

#### Return Value

Type: [ConnectApi.ManagedSocialAccount](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_social_account_output.htm#apex_connectapi_output_managed_social_account_output "Information describing a managed social account or fan page of a social network.")