---
title: "ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType)"
domain: apex-reference
topic: serviceresourceinfouserid-username-email-serviceresourceid-territoryids-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.581Z
keywords: [ServiceResourceInfo, userId, userName, email, serviceResourceId, territoryIds, resourceType, Creates, new, instance, lxscheduler.ServiceResourceInfo, class, specified, service, resource, details., Signature, Parameters]
---

# ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType)

> Creates a new instance of the lxscheduler.ServiceResourceInfo class using the specified service resource
      details.

### ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType)

Creates a new instance of the lxscheduler.ServiceResourceInfo class using the specified service resource details.

#### Signature

public ServiceResourceInfo(String userId, String userName, String email, String serviceResourceId, List<String\> territoryIds, String resourceType)

#### Parameters

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user ID of the service resource.

userName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user name of the service resource.

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The email ID of the service resource.

serviceResourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the service resource.

territoryIds

Type: List<String>

A list of requested service territories for the service resource.

resourceType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The type of the service resource such as Technician or Asset.