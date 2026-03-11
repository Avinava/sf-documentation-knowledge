---
title: "getUsage(userId)"
domain: apex-reference
topic: getusageuserid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.070Z
keywords: [getUsage, userId, Get, purchase, usage, information, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUsage(userId)

> Get purchase usage information for a user.

### getUsage(userId)

Get purchase usage information for a user.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudPurchaseUsage getUsage(String userId)

#### Parameters

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a user.

#### Return Value

Type: [ConnectApi.DatacloudPurchaseUsage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_purchase_usage.htm#apex_connectapi_output_datacloud_purchase_usage "Information about Data.com point usage for monthly and list pool users.")