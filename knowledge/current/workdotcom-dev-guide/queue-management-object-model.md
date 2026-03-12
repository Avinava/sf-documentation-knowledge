---
title: "Queue Management Object Model"
domain: workdotcom-dev-guide
topic: queue-management-object-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.513Z
estimatedTokens: 707
keywords: [Queue, Management, Model, uses, combination, Salesforce, objects]
---

# Queue Management Object Model

> Queue Management uses a combination of Salesforce objects.

# Queue Management Object Model

Queue Management uses a combination of Salesforce objects.

The following diagram highlights the key objects involved in the queue management process.

![Queue management object model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fworkdotcom%2Fimages%2Fqueue_management_erd.png&folder=workdotcom_dev_guide)

## Queue Management Objects

-   [LocationWaitlist](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationwaitlist.htm): Represents a queue created for a specific location. Multiple queues can be created for a single location. For example, you can have a queue for each sales agent or a standard queue and a queue for vulnerable groups. The specific party of people in a queue is represented by LocationWaitlistedParty.
-   [LocationWaitlistedParty](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationwaitlistedparty.htm): Represents a specific party of people waiting in a queue.
-   [LocWaitlistMsgTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locwaitlistmsgtemplate.htm): Represents a junction object connecting LocationWaitlist to MessagingTemplate.

## Other Objects

-   [BusinessHours](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_businesshours.htm): Specifies the business hours of your support organization.
-   [Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_location.htm): Represents a physical organization location, with extra custom fields added by Work.com.
-   [MessagingChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingchannel.htm): Represents a communication channel that an end user can use to send a message to an agent. A communication channel can be an SMS number, a Facebook page, or another supported messaging channel. For Queue Management, we exclusively use the SMS text messaging channel.
-   [MessagingEndUser](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingenduser.htm): Represents a single address—such as a phone number or Facebook page—communicating with a single Messaging channel.
-   [MessagingTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingtemplate.htm): Represents a Messaging template used to send pre-formatted messages. For queue management, the admin should create at least one template before implementing this visitor experience.
