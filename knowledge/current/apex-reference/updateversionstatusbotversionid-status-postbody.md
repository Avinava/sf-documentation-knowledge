---
title: "updateVersionStatus(botVersionId, status,
    postBody)"
domain: apex-reference
topic: updateversionstatusbotversionid-status-postbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.974Z
keywords: [updateVersionStatus, botVersionId, status, postBody, Update, specified, bot, version., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# updateVersionStatus(botVersionId, status,
    postBody)

> Update the status of the specified bot version.

### updateVersionStatus(botVersionId, status, postBody)

Update the status of the specified bot version.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BotVersionActivationInfo updateVersionStatus(String botVersionId, ConnectApi.BotVersionActivationStatus status, ConnectApi.BotVersionActivationInput postBody)

#### Parameters

botVersionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the bot version.

status

Type: [ConnectApi.BotVersionActivationStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#BotVersionActivationStatus)

Activation status of the bot version. Values are:

-   Active
-   Inactive

Activation status must be specified in the status or postBody parameter.

postBody

Type: [ConnectApi.BotVersionActivationInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bot_version_activation.htm "Activation status of the bot version.")

Parameters to update for the bot version. Activation status must be specified in the status or postBody parameter.

#### Return Value

Type: [ConnectApi.BotVersionActivationInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bot_version_activation_info.htm "Success or failure information of the bot version activation.")

#### Usage

To access this method, enable the bot feature, and the user must be an admin or have the Manage Bots or Manage Bots Training Data user permissions.