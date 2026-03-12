---
title: "ServiceChannel"
domain: metadata-api
topic: servicechannel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:42.123Z
estimatedTokens: 1785
keywords: [ServiceChannel, channel, work, items, received, organization—for, cases, chats, leads, File, Suffix, Directory, Location, Version, Special]
---

# ServiceChannel

> Represents a channel of work items that are received from
      your organization—for example, cases, chats, or leads.

# ServiceChannel

Represents a channel of work items that are received from your organization—for example, cases, chats, or leads.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ServiceChannel components have the suffix .serviceChannel and are stored in the serviceChannels folder.

## Version

ServiceChannel components are available in API version 44.0 and later.

## Special Access Rules

This type is available only if Omni-Channel is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| acwExtensionDuration | int | The maximum length of time, measured in seconds, an agent can spend on After Conversation Work (ACW) each time they extend the timer. You must set this field if hasAcwExtensionEnabled is set to true. Specify a value from 10 through 3600. Available only for service channels of type Messaging or Voice. |
| afterConvoMaxTime | int | The maximum length of time, measured in seconds, an agent has to complete After Conversation Work (ACW). You must set this field if hasAfterConvoWorkTimer is set to true. Specify a value from 10 through 3600. Available only for service channels of type Messaging or Voice.For service channels of type Voice, this field is available in API version 52.0 and later. For service channels of type Messaging, this field is available in API version 56.0 and later. |
| capacityModel | picklist | The method that determines when an agent's capacity for a work item is released. With the status-based capacity routing model, work remains assigned and applied to an agent’s capacity until the work is completed or reassigned to a different agent. In contrast, the tab-based capacity routing model releases an agent’s capacity when a work tab is closed in the service console. This field is available in API version 65.0 and later.Values are:STATUS_BASEDTAB_BASED |
| doesCheckCapOnOwnerChange | boolean | Indicates whether the override for capacity check is on (true) or not (false). If it is on, when work is reassigned to another agent it overrides it and keeps the work assigned to the specific agent. The default value is false.This field is available in API version 65.0 and later. |
| doesCheckCapOnStatusChange | boolean | Indicates whether the override for capacity check is on (true) or not (false). If it is on, when work is reopened it is re-assigned to a specific agent. The default value is false. This field is available in API version 65.0 and later. |
| doesMinimizeWidgetOnAccept | boolean | Automatically minimizes the Omni-Channel widget when an agent accepts work. This field is available in API version 48.0 and later. |
| hasAcwExtensionEnabled | Boolean | If set to true, agents can extend their After Conversation Work (ACW) time. Available only if hasAfterConvoWorkTimer is set to true. If set to true, you must also set the acwExtensionDuration and maxExtensions fields. The default value is false. Available only for service channels of type Messaging or Voice. This field is available in API version 56.0 and later. |
| hasAfterConvoWorkTimer | Boolean | If set to true, After Conversation Work (ACW) time can be configured for the channel. If set to true, you must also set the afterConvoWorkMaxTime field. The default value is false. Available only for service channels of type Messaging or Voice.For service channels of type Voice, this field is available in API version 52.0 and later. For service channels of type messaging, this field is available in API version 56.0 and later. |
| hasAutoAcceptEnabled | Boolean | Work items in a service channel open automatically in the agent’s workspace so that the agent doesn’t have to manually accept them. |
| interactionComponent | string | The custom console component to open in the footer when an agent accepts a work item from this service channel. |
| isInterruptible | boolean | Indicates whether a work item consumes interruptible or primary capacity. The default value is false. Available in API version 57.0 and later when the Interruptible Capacity feature is enabled. |
| label | string | Required. The label of the service channel. |
| maxExtensions | picklist | The maximum number of times an agent can extend their After Work Conversation (ACW) time. Specify a value from 1 through 10. You must set this field if hasAcwExtensionEnabled is set to true. Available only for service channels of type Messaging or Voice. This field is available in API version 56.0 and later. |
| relatedEntityType | string | Required. The type of object that’s associated with this service channel. |
| secondaryRoutingPriorityField | string | The name of the standard field or the ID of the custom field that is used for secondary routing priority. This field is available in API version 47.0 and later. |
| serviceChannelStatusFieldMappings | ServiceChannelFieldPriority | Represents the value to indicate completed and in-progress work item status in the Status-Based Capacity routing model. This field is available in API version 65.0 and later. |
| serviceChannelFieldPriorities | ServiceChannelFieldPriority[] | Required. A set of mappings between secondary routing priority field values and priorities. This field is available in API version 47.0 and later. |
| statusField | picklist | The field that you use to track work status in the Status-Based capacity routing model. Use ServiceChannelStatusField to specify the values that indicate completed and in-progress work-item status. This field is available in API version 65.0 and later. |

## ServiceChannelFieldPriority

Represents a secondary routing priority field value mapping. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| priority | int | Required. The priority number assigned to the mapped field value. |
| type | picklist | Required. The work item status assigned to the mapped field value. Possible types are IN_PROGRESS, PAUSED, COMPLETED. |
| value | string | Required. The value of Status Field defined in the parent ServiceChannel. |
| value | string | Required. The value of the secondaryRoutingPriorityField field defined in the parent ServiceChannel. |

## Declarative Metadata Sample Definition

The following is an example of a ServiceChannel component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ServiceChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <doesMinimizeWidgetOnAccept>true</doesMinimizeWidgetOnAccept>
    <interactionComponent>ConsoleComponent</interactionComponent>
    <label>Case</label>
    <relatedEntityType>Case</relatedEntityType>
    <secondaryRoutingPriorityField>Status</secondaryRoutingPriorityField>
    <serviceChannelFieldPriorities>
        <priority>1</priority>
        <value>Escalated</value>
    </serviceChannelFieldPriorities>
    <serviceChannelFieldPriorities>
        <priority>2</priority>
        <value>On Hold</value>
    </serviceChannelFieldPriorities>
</ServiceChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ServiceChannel</name>
    </types>
    <version>44.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
