---
title: "ServiceResourceInfo Class"
domain: salesforce-scheduler-developer-guide
topic: serviceresourceinfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.198Z
estimatedTokens: 1142
namespace: LxScheduler
keywords: [ServiceResourceInfo, service, resource, userId, userName, email, serviceResourceId, territoryIds, resourceType, getEmail, getResourceType, getServiceResourceId, getTerritoryIds, getUserId, getUserName]
---

# ServiceResourceInfo Class

> Contains information about a service resource.

**Namespace:** `LxScheduler`

# ServiceResourceInfo Class

Contains information about a service resource.

## Namespace

LxScheduler

-   **[ServiceResourceInfo Constructors](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_constructors)**

-   **[ServiceResourceInfo Methods](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_methods)**


## ServiceResourceInfo Constructors

The following are constructors for ServiceResourceInfo.

-   **[ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType)](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_ctor)**
    Creates a new instance of the lxscheduler.ServiceResourceInfo class using the specified service resource details.

### ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType)

Creates a new instance of the lxscheduler.ServiceResourceInfo class using the specified service resource details.

#### Signature

public ServiceResourceInfo(String userId, String userName, String email, String serviceResourceId, List<String\> territoryIds, String resourceType)

#### Parameters

userId

Type: String

The user ID of the service resource.

userName

Type: String

The user name of the service resource.

email

Type: String

The email ID of the service resource.

serviceResourceId

Type: String

The ID of the service resource.

territoryIds

Type: List<String>

A list of requested service territories for the service resource.

resourceType

Type: String

The type of the service resource such as Technician or Asset.

## ServiceResourceInfo Methods

The following are methods for ServiceResourceInfo.

-   **[getEmail()](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getEmail)**
    Returns the email ID of the service resource.
-   **[getResourceType()](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getResourceType)**
    Returns the type of the service resource such as Technician or Asset.
-   **[getServiceResourceId()](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getServiceResourceId)**
    Returns the ID of the service resource.
-   **[getTerritoryIds()](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getTerritoryIds)**
    Returns a list of requested service territories for the service resource.
-   **[getUserId()](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getUserId)**
    Returns the user ID of the service resource.
-   **[getUserName()](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm#apex_lxscheduler_ServiceResourceInfo_getUserName)**
    Returns the user name of the service resource.

### getEmail()

Returns the email ID of the service resource.

#### Signature

public String getEmail()

#### Return Value

Type: String

### getResourceType()

Returns the type of the service resource such as Technician or Asset.

#### Signature

public String getResourceType()

#### Return Value

Type: String

### getServiceResourceId()

Returns the ID of the service resource.

#### Signature

public String getServiceResourceId()

#### Return Value

Type: String

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

Type: String

### getUserName()

Returns the user name of the service resource.

#### Signature

public String getUserName()

#### Return Value

Type: String

## Related Topics

- ServiceResourceInfo Constructors (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- ServiceResourceInfo Methods (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- ServiceResourceInfo(userId, userName, email, serviceResourceId, territoryIds, resourceType) (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- getEmail() (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- getResourceType() (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- getServiceResourceId() (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- getTerritoryIds() (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- getUserId() (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
- getUserName() (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_ServiceResourceInfo.htm)
