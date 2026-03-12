---
title: "Queue"
domain: metadata-api
topic: queue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.019Z
estimatedTokens: 1432
keywords: [Queue, Represents, holding, area, items, before, they, processed., Declarative, Metadata, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, QueueMembers]
---

# Queue

> Represents a holding area for items before they are
            processed.

# Queue

Represents a holding area for items before they are processed.

## Declarative Metadata File Suffix and Directory Location

The file suffix for queue components is .queue and components are stored in the queues directory of the corresponding package directory. This component supports cases, leads, service contracts (if Entitlements are enabled), and custom objects.

## Version

Queue components are available in API version 24.0 and later.

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this type.

## Fields

This metadata type represents the valid values that define a queue:

| Field Name | Field Type | Description |
| --- | --- | --- |
| doesSendEmailToMembers | boolean | Indicates whether emails are sent to queue members (true) or not (false) when a new record is added to the queue. |
| email | string | The email address of the queue owner. |
| name | string | Required. The name of the queue. Corresponds to Label in the user interface. |
| queueMembers | QueueMembers[] | Represents queue members added to the queue. Members can be added directly or selected by roles and public groups they belong to. Available in API version 42.0 and later. |
| queueRoutingConfig | string | Routing configuration name. Applies to orgs that use Omni-Channel with a routing configuration. Available in API version 42.0 and later. |
| queueSobject | QueueSobject[] | Indicates the supported entity types. |

## QueueMembers

Represents queue members added to the queue. Members can be added directly as users or selected by the roles and public groups they belong to. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| publicGroups | PublicGroups[] | Represents public groups in the org. Public groups are optionally used to add queue members. |
| roleAndSubordinates | RoleAndSubordinates[] | Represents roles and their subordinates in the org’s role hierarchy, including customer and partner roles. Roles and their subordinate hierarchy are optionally used to add queue members. |
| roleAndSubordinatesInternal | RoleAndSubordinatesInternal[] | Represents internal roles and their subordinates in the org’s role hierarchy, excluding customer and partner roles. Roles and their subordinate hierarchy are optionally used to add queue members. |
| roles | Roles[] | Represents roles in the org. Roles are optionally used to add queue members. |
| users | Users[] | Represents users in the org. Users can be added directly as queue members. |

## PublicGroups

Represents public groups in the org. Public groups are optionally used to add queue members. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| publicGroup | string | Represents a public group. |

## RoleAndSubordinates

Represents roles and their subordinates in the org’s role hierarchy, including customer and partner roles. Roles and their subordinate hierarchy can be used to add queue members. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| roleAndSubordinate | string | Represents a role and its subordinates, including customer and partner roles. Only available when digital experiences is enabled for your org and Experience Cloud site users are created with external account roles other than a shared person account role. |

## RoleAndSubordinatesInternal

Represents internal roles and their subordinates in the org’s role hierarchy, excluding customer and partner roles. Roles and their subordinate hierarchy can be used to add queue members. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| roleAndSubordinateInternal | string | Represents a role and its subordinates, excluding customer and partner roles. |

## Roles

Represents roles in the org. Roles can be used to add queue members. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| role | string | Represents a role. |

## Users

Represents users in the org. Users can be added directly as queue members. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| user | string | Represents a user. Specify the user’s username. |

## QueueSobject

QueueSobject represents an entity type that the queue supports.

| Field Name | Field Type | Description |
| --- | --- | --- |
| sobjectType | string | Valid values are:CaseContactRequestLeadServiceContractTask (Available in API version 48.0 and later.)Custom objects (such as ObjA_c) |

## Declarative Metadata Sample Definition

The following is the definition of a queue, which supports Case, Lead, and a custom object named ObjA.

```

```

Here’s another definition of a queue containing queue members added directly or via public groups and roles. Queries retrieve values using the DeveloperName field, not the Name field, so that the returned names are unique. The query also appends letters to the end of duplicate names, so these groups and roles can be referred to independently.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Queue xmlns="http://soap.sforce.com/2006/04/metadata">
    <doesSendEmailToMembers>true</doesSendEmailToMembers>
    <email>member@company.com</email>
    <fullName>Your Name</fullName>
    <name>memberQueue</name>
    <queueSobject>
        <sobjectType>Case</sobjectType>
    </queueSobject>
    <queueSobject>
        <sobjectType>Lead</sobjectType>
    </queueSobject>
    <queueSobject>
        <sobjectType>ObjA__c</sobjectType>
    </queueSobject>
</Queue>
```

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Queue xmlns="http://soap.sforce.com/2006/04/metadata">
    <doesSendEmailToMembers>false</doesSendEmailToMembers>
    <name>queue1</name>
    <queueMembers>
        <publicGroups>
            <publicGroup>All Internal Users</publicGroup>
        <publicGroups>
        <queueRoleAndSubordinates>
            <queueRoleAndSubordinate>role1</queueRoleAndSubordinate>
            <queueRoleAndSubordinate>role2</queueRoleAndSubordinate>
            <queueRoleAndSubordinate>role3</queueRoleAndSubordinate>
        </queueRoleAndSubordinates>
        <roles>
            <role>role1</role>
        </roles>
        <users>
            <user>s@sm.com</user>
            <user>std@sm.com</user>
        </users>
    </queueMembers>
    <queueRoutingConfig>my_omni_routing_config</queueRoutingConfig>
    <queueSobject>
        <sobjectType>Case</sobjectType>
    </queueSobject>
    <queueSobject>
        <sobjectType>Lead</sobjectType>
    </queueSobject>
</Queue>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
