---
title: "EventSubscription"
domain: metadata-api
topic: eventsubscription
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:39.405Z
estimatedTokens: 630
keywords: [EventSubscription, Represents, subscription, event, type., Removed, API, version, 46.0., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location]
---

# EventSubscription

> Represents a subscription to an event type. Removed in
      API version 46.0.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# EventSubscription

Represents a subscription to an event type. Removed in API version 46.0. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EventSubscription components have the suffix file path .subscription, and are stored in the eventSubscriptions folder.

## Version

Event subscription components are available in API versions 41.0 to 45.0.

## Limits

Your org can have a maximum of:

-   4,000 total event subscriptions
-   2,000 active event subscriptions

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | If the subscription isn’t active, it never receives any events. |
| eventParameters | EventParameterMap[] | An array of parameters that must be true for published events. |
| eventType | string | Required. The name of the platform event. |
| referenceData | string | Required. If the subscriber is a flow of type CustomEvent, referenceData is flowName_versionNumber. For example, Printer_Management_2. |

## EventParameterMap

An array of parameters that must be true for published events. For example, subscribe to Vendor Response events only if Status\_\_c is Shipped.

Each event subscription can have up to 10 parameters.

| Field Name | Field Type | Description |
| --- | --- | --- |
| parameterName | string | Required. The published event’s field name. |
| parameterValue | string | The value that must be true. |

## Declarative Metadata Sample Definition

The following is an example of an active event subscription.

```

```

The following is an example of an inactive event subscription that sets event parameters.

```

```

The following is an example package.xml that deploys or retrieves all the available event subscription metadata in your org.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EventSubscription xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <eventType>Printer_Status__e</eventType>
    <referenceData>Printer_Management</referenceData>
</EventSubscription>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<EventSubscription xmlns="http://soap.sforce.com/2006/04/metadata">
   <name>MySubscription</name>
   <active>false</active>
   <eventParameters>
      <parameterName>Ink_Status__c</parameterName>
      <parameterValue>low</parameterValue> 
   </eventParameters>
   <eventParameters>
      <parameterName>Serial_Number__c</parameterName>
      <parameterValue>00123456789</parameterValue>
   </eventParameters>
   <eventType>Printer_Status__e</eventType>
   <referenceData>My_Event_Based_Process_1</referenceData>
</EventSubscription>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>EventSubscription</name>
   </types>
   <version>41.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
