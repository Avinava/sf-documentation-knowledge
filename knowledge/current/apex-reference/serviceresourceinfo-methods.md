---
title: "ServiceResourceInfo Methods"
domain: apex-reference
topic: serviceresourceinfo-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.581Z
keywords: [ServiceResourceInfo, Methods, Returns, email, service, resource., getEmail, Signature, Return, Value, getResourceType, getServiceResourceId, getTerritoryIds, getUserId, getUserName]
---

# ServiceResourceInfo Methods

> Returns the email ID of the service resource.

## ServiceResourceInfo Methods

The following are methods for ServiceResourceInfo.

-   **[getEmail()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getEmail)**  
    Returns the email ID of the service resource.
-   **[getResourceType()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getResourceType)**  
    Returns the type of the service resource such as Technician or Asset.
-   **[getServiceResourceId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getServiceResourceId)**  
    Returns the ID of the service resource.
-   **[getTerritoryIds()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getTerritoryIds)**  
    Returns a list of requested service territories for the service resource.
-   **[getUserId()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getUserId)**  
    Returns the user ID of the service resource.
-   **[getUserName()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getUserName)**  
    Returns the user name of the service resource.

### getEmail()

Returns the email ID of the service resource.

#### Signature

public String getEmail()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getResourceType()

Returns the type of the service resource such as Technician or Asset.

#### Signature

public String getResourceType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getServiceResourceId()

Returns the ID of the service resource.

#### Signature

public String getServiceResourceId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTerritoryIds()

Returns a list of requested service territories for the service resource.

#### Signature

public List<String\> getTerritoryIds()

#### Return Value

Type: List<String>

### getUserId()

Returns the user ID of the service resource.

#### Signature

public String getUserId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserName()

Returns the user name of the service resource.

#### Signature

public String getUserName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")