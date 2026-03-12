---
title: "PlatformEventSubscriberConfig"
domain: metadata-api
topic: platformeventsubscriberconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.794Z
estimatedTokens: 1412
keywords: [PlatformEventSubscriberConfig, Represents, configuration, settings, platform, event, Apex, trigger, including, batch, size, trigger’s, running, user., Important, File, Suffix, Directory, Location, Version]
---

# PlatformEventSubscriberConfig

> Represents configuration settings for a platform event Apex
      trigger, including the batch size and the trigger’s running user.

# PlatformEventSubscriberConfig

Represents configuration settings for a platform event Apex trigger, including the batch size and the trigger’s running user.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

PlatformEventSubscriberConfig components have the suffix .platformEventSubscriberConfig and are stored in the PlatformEventSubscriberConfigs folder.

## Version

PlatformEventSubscriberConfig components are available in API version 51.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| batchSize | int | A custom batch size, from 1 through 2,000, for the platform event Apex trigger. The batch size corresponds to the maximum number of event messages that can be sent to a trigger in one execution. The default batch size is 2,000 for platform event triggers.We don't recommend setting the batch size to 1 to process one event at a time. Small batch sizes can slow down the processing of event messages. |
| isProtected | boolean | (Inherited field.) Indicates whether this component is protected (true) or not (false). Protected components can’t be linked to or referenced by components created in a subscriber org. A developer can delete a protected component in a future release without worrying about failing installations. However, once a component is marked as unprotected and is released globally, the developer can’t delete it. |
| masterLabel | string | Required. The label for the PlatformEventSubscriberConfig component. |
| numPartitions | int | Specifies the number of parallel subscriptions, or partitions, that are created internally for an Apex trigger. Use this field to set up parallel subscriptions for the platform event Apex trigger. It can be an integer from 1 through 10. See Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers in the Platform Events Developer Guide.The default value is 1. This field is available in API version 62.0 and later. |
| partitionKey | string | Can be the standard EventUuid field or a required custom field of the custom platform event that the Apex trigger subscribes to. For the standard EventUuid field, the partition key format is the field name without the event name: EventUuid. For a custom field, the partition key includes the event name as a prefix in this format: EventName__e.FieldName__c. Based on the field’s generated hash value, the system determines which partition to send the event to. Use this field to specify the platform event field that is used as a partition key for parallel subscriptions. See Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers in the Platform Events Developer Guide.The default value is EventUuid. This field is available in API version 62.0 and later. |
| platformEventConsumer | string | Required. The full name of the platform event Apex trigger to configure. |
| user | string | The username of the user that the platform event Apex trigger runs as. By default, the platform event trigger runs as the Automated Process entity. Setting the running user to a specific user has these benefits:Records are created or modified as this user.Records with OwnerId fields have their OwnerId fields populated to this user when created or modified.Debug logs for the trigger execution are created by this user.You can send email from the trigger, which isn’t supported with the default Automated Process user. |

## Declarative Metadata Sample Definition

This PlatformEventSubscriberConfig component has the label OrderEventTriggerConfig. It contains the configuration of a platform event trigger, OrderEventTrigger, and specifies the batch size and user.

```

```

PlatformEventSubscriberConfig references an Apex trigger, which depends on a platform event. If the referenced items exist in the Salesforce org, you can deploy the PlatformEventSubscriberConfig component. This package.xml specifies the PlatformEventSubscriberConfig component.

```

```

If the referenced trigger and platform event don’t exist in the org, include their definitions in the package. Otherwise, the deployment fails. This example package.xml includes all the referenced components.

-   CustomObject represents the platform event.
-   CustomField represents a custom field defined on the platform event.
-   ApexTrigger represents the platform event trigger.
-   PlatformEventSubscriberConfig represents the configuration options for the platform event trigger.

```

```

To specify all PlatformEventSubscriberConfig components, use the wildcard character, as shown in this example.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventSubscriberConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <platformEventConsumer>OrderEventTrigger</platformEventConsumer>
    <batchSize>200</batchSize>
    <masterLabel>OrderEventTriggerConfig</masterLabel>
    <user>user@example.com</user>
    <isProtected>false</isProtected>
</PlatformEventSubscriberConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <name>PlatformEventSubscriberConfig</name>
        <members>OrderEventTriggerConfig</members>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <name>CustomObject</name>
        <members>PlatformEvent__e</members>
    </types>
    <types>
        <name>CustomField</name>
        <members>PlatformEvent__e.Message__c</members>
    </types>
    <types>
        <name>ApexTrigger</name>
        <members>OrderEventTrigger</members>
    </types>
    <types>
        <name>PlatformEventSubscriberConfig</name>
        <members>OrderEventTriggerConfig</members>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <name>PlatformEventSubscriberConfig</name>
        <members>*</members>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
