---
title: "UserProvisioningLog Class"
domain: apex-reference
topic: userprovisioninglog-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.341Z
estimatedTokens: 1279
namespace: UserProvisioning
keywords: [UserProvisioningLog, Provides, writing, messages, monitor, outbound, user, provisioning, requests., Example, log, userProvisioningRequestId, details, status, externalUserId, externalUserName, userId]
---

# UserProvisioningLog Class

> Provides methods for writing messages to monitor outbound user
  provisioning requests.

**Namespace:** `UserProvisioning`

# UserProvisioningLog Class

Provides methods for writing messages to monitor outbound user provisioning requests.

## Namespace

[UserProvisioning](atlas.en-us.apexref.meta/apexref/apex_namespace_UserProvisioning.htm "The UserProvisioning namespace provides methods for monitoring outbound user provisioning requests.")

## Example

This example writes the user account information sent to a third-party system for a provisioning request to the UserProvisioningLog object.

```

```

-   **[UserProvisioningLog Methods](atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm#apex_UserProvisioning_UserProvisioningLog_methods)**


## UserProvisioningLog Methods

The following are methods for UserProvisioningLog. All methods are static.

-   **[log(userProvisioningRequestId, details)](atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm#apex_UserProvisioning_UserProvisioningLog_log_3)**
    Writes a specific message, such as an error message, to monitor the progress of a user provisioning request.
-   **[log(userProvisioningRequestId, status, details)](atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm#apex_UserProvisioning_UserProvisioningLog_log_2)**
    Writes a specific status and message, such a status and detailed error message, to monitor the progress of a user provisioning request.
-   **[log(userProvisioningRequestId, externalUserId, externalUserName, userId, details)](atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm#apex_UserProvisioning_UserProvisioningLog_log)**
    Writes a specific message, such as an error message, to monitor the progress of a user provisioning request associated with a specific user.

### log(userProvisioningRequestId, details)

Writes a specific message, such as an error message, to monitor the progress of a user provisioning request.

#### Signature

public void log(String userProvisioningRequestId, String details)

#### Parameters

userProvisioningRequestId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique identifier for the user provisioning request.

details

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text for the message.

#### Return Value

Type: void

### log(userProvisioningRequestId, status, details)

Writes a specific status and message, such a status and detailed error message, to monitor the progress of a user provisioning request.

#### Signature

public void log(String userProvisioningRequestId, String status, String details)

#### Parameters

userProvisioningRequestId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique identifier for the user provisioning request.

status

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A description of the current state. For example, while invoking a third-party API, the status could be invoke.

details

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text for the message.

#### Return Value

Type: void

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

## Code Examples

```
String inputParamsStr = 'Input parameters: uprId=' + uprId + ', ​
endpointURL=' + endpointURL + ', adminUsername=' + adminUsername + ', ​
email=' + email + ', username=' + username + ', defaultPassword=' + defaultPassword + ', ​
defaultRoles =' + defaultRoles;
UserProvisioning.UserProvisioningLog.log(uprId, inputParamsStr);
```

## Related Topics

- UserProvisioning (atlas.en-us.apexref.meta/apexref/apex_namespace_UserProvisioning.htm)
- UserProvisioningLog Methods (atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm)
- log(userProvisioningRequestId, details) (atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm)
- log(userProvisioningRequestId, status, details) (atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm)
- log(userProvisioningRequestId, externalUserId, externalUserName, userId, details) (atlas.en-us.apexref.meta/apexref/apex_class_userprovisioning_userprovisioninglog.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
