---
title: "getVersionActivationInfo(botVersionId)"
domain: apex-reference
topic: getversionactivationinfobotversionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.974Z
keywords: [getVersionActivationInfo, botVersionId, Get, active, inactive, status, bot, version., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getVersionActivationInfo(botVersionId)

> Get the active or inactive status of the bot
    version.

### getVersionActivationInfo(botVersionId)

Get the active or inactive status of the bot version.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BotVersionActivationInfo getVersionActivationInfo(String botVersionId)

#### Parameters

botVersionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the bot version.

#### Return Value

Type: [ConnectApi.BotVersionActivationInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bot_version_activation_info.htm "Success or failure information of the bot version activation.")

#### Usage

To access this method, enable the bot feature, and the user must be an admin or have the Manage Bots or Manage Bots Training Data user permissions.