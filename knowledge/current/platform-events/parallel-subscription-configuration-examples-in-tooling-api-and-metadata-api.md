---
title: "Parallel Subscription Configuration Examples in Tooling API and Metadata API"
domain: platform-events
topic: parallel-subscription-configuration-examples-in-tooling-api-and-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.931Z
estimatedTokens: 787
keywords: [Parallel, Subscription, Configuration, Examples, Tooling, API, Metadata, Configure, subscriptions, Apex, trigger, PlatformEventSubscriberConfig, EventUuid, Partition, Key]
---

# Parallel Subscription Configuration Examples in Tooling API and Metadata API

> Configure parallel subscriptions for an Apex trigger by using
        PlatformEventSubscriberConfig in Tooling API or Metadata API.

# Parallel Subscription Configuration Examples in Tooling API and Metadata API

Configure parallel subscriptions for an Apex trigger by using PlatformEventSubscriberConfig in Tooling API or Metadata API.

Each PlatformEventSubscriberConfig corresponds to one Apex trigger subscriber. To configure parallel subscriptions, use these fields in PlatformEventSubscriberConfig: NumPartitions and PartitionKey.

-   The NumPartitions field is the number of parallel subscriptions, or partitions, that are created internally for an Apex trigger. It can be a number from 1 through 10.
-   The PartitionKey field value is hashed. Based on the generated hash value, the system determines which partition to send the event to. PartitionKey can be the standard EventUuid field or a required custom field of the platform event that the Apex trigger subscribes to. For the standard EventUuid field, the partition key format is the field name without the event name: EventUuid. For a custom field, the partition key includes the event name as a prefix in this format: EventName\_\_e.FieldName\_\_c.

## Example: Tooling API Request for the EventUuid Partition Key Field

This example shows the body of a REST request for PlatformEventSubscriberConfig in Tooling API. It specifies the EventUuid partition key and three partitions. PlatformEventConsumerId references the ID of the Apex trigger.

```

```

## Example: Tooling API Request for a Custom Partition Key Field

This example shows the body of a REST request for PlatformEventSubscriberConfig in Tooling API. It specifies the name of a custom event field in PartitionKey and three partitions. PlatformEventConsumerId references the ID of the Apex trigger.

```

```

## Example: Metadata API for the EventUuid Partition Key Field

This example shows the definition of PlatformEventSubscriberConfig in Metadata API for the EventUuid standard field specified in partitionKey and three partitions specified in numPartitions. The platformEventConsumer field is the name of the Apex trigger.

```

```

This package.xml manifest file references the PlatformEventSubscriberConfig component.

```

```

## Example: Metadata API for a Custom Partition Key Field

This example shows the definition of PlatformEventSubscriberConfig in Metadata API for the Order\_Number\_\_c custom field that is specified in partitionKey and three partitions specified in numPartitions. The platformEventConsumer field is the name of the Apex trigger.

```

```

This package.xml manifest file references the PlatformEventSubscriberConfig component.

```

```

#### See Also

-   [*Metadata API Developer Guide*: PlatformEventSubscriberConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventsubscriberconfig.htm "Metadata API Developer Guide: PlatformEventSubscriberConfig - HTML (New Window)")

-   [*Tooling API Developer Guide*: PlatformEventSubscriberConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventsubscriberconfig.htm "Tooling API Developer Guide: PlatformEventSubscriberConfig - HTML (New Window)")

## Code Examples

```
{
    "DeveloperName":"MyOrderEventTriggerConfig",
    "MasterLabel":"MyOrderEventTriggerConfig",
    "PlatformEventConsumerId": "Apex_Trigger_Id",
    "PartitionKey": "EventUuid",
    "NumPartitions": "3"
}
```

```
{
    "DeveloperName":"MyOrderEventTriggerConfig",
    "MasterLabel":"MyOrderEventTriggerConfig",
    "PlatformEventConsumerId": "Apex_Trigger_Id",
    "PartitionKey": "Order_Event__e.Order_Number__c",
    "NumPartitions": "3"
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventSubscriberConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>MyOrderEventTriggerConfig</masterLabel>
    <platformEventConsumer>MyOrderEventTrigger</platformEventConsumer>
    <numPartitions>3</numPartitions>
    <partitionKey>EventUuid</partitionKey>
</PlatformEventSubscriberConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <name>PlatformEventSubscriberConfig</name>
        <members>MyOrderEventTriggerConfig</members>
    </types>
    <version>62.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventSubscriberConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>MyOrderEventTriggerConfig</masterLabel>
    <platformEventConsumer>MyOrderEventTrigger</platformEventConsumer>
    <numPartitions>3</numPartitions>
    <partitionKey>Order_Event__e.Order_Number__c</partitionKey>
</PlatformEventSubscriberConfig>
```
