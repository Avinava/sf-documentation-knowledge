---
title: "UserProvisioningLog Class"
domain: apex-reference
topic: userprovisioninglog-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.122Z
keywords: [UserProvisioningLog, Class, Writes, specific, message, such, error, monitor, progress, user, provisioning, request, associated, user., log, userProvisioningRequestId, externalUserId, externalUserName, userId, details]
---

# UserProvisioningLog Class

> Writes a specific message, such as an error message, to monitor the
      progress of a user provisioning request associated with a specific user.

### log(userProvisioningRequestId, externalUserId, externalUserName, userId, details)

Writes a specific message, such as an error message, to monitor the progress of a user provisioning request associated with a specific user.

#### Signature

public void log(String userProvisioningRequestId, String externalUserId, String externalUserName, String userId, String details)

#### Parameters

userProvisioningRequestId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique identifier for the user provisioning request.

externalUserId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier for the user in the target system.

externalUserName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The username for the user in the target system.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Salesforce ID of the user making the request.

details

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text for the message.

#### Return Value

Type: void