---
title: "Queue Management Implementation Instructions"
domain: workdotcom-dev-guide
topic: queue-management-implementation-instructions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.508Z
estimatedTokens: 1036
keywords: [Queue, Management, Implementation, Instructions, process, creating, customized, visitor, experience, Salesforce, objects]
---

# Queue Management Implementation Instructions

> These instructions guide you through the process of creating a customized visitor
  experience using Queue Management Salesforce objects.

# Queue Management Implementation Instructions

These instructions guide you through the process of creating a customized visitor experience using Queue Management Salesforce objects.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=workdotcom_dev_guide)

#### Important

These steps are automatically performed when you install the [Queue Management Visitor Sign-Up Experience](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3u00000MRoEKEA1) package. To learn more, see [Create a Visitor Sign-Up Form](https://help.salesforce.com/articleView?id=que_mgmt_signup_next_steps.htm&type=5&language=en_US).

Before following the implementation instructions, review these prerequisites:

-   SMS is the only supported channel type for Broadcast Messaging.

-   You must have a Messaging channel for SMS text messages associated with a working phone number. You can use a short code, or toll free number. You must have access to the [MessagingChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingchannel.htm) record.

-   Your messaging channels must be associated with a queue.

-   You must create a queue (a [LocationWaitlist](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationwaitlist.htm) record) using the Digital Waitlist app.

-   You must create a form that asks for the necessary information to create a wait-list party. This form must include: a name, mobile number, party size, and that the person opts-in to receiving messages.


Once a person fills out the form with the relevant information, use the Salesforce API ([SOAP](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm), [REST](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_what_is_rest_api.htm), or [Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm)) to create a wait-list party.

1.  Using the ID of the [LocationWaitlist](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationwaitlist.htm) record, get the Status field. Check that the Status is "Open".
2.  Create a [MessagingEndUser](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingenduser.htm) record. This record contains the following relevant fields: MessageType (set to "text"), MessagingChannelId, MessagingConsentStatus (set to "ExplicitlyOptedIn" or "ImplicitlyOptedIn", depending on your workflow), MessagingPlatformKey (contains the phone number of the customer with the country code appended), Name (contains the name of the customer). This record is used by Digital Engagement for checking the consent when sending an SMS message.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=workdotcom_dev_guide)

    #### Important

    Be sure that the customer has opted in before creating this record with an opted-in consent status!

3.  Create a [LocationWaitlistedParty](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationwaitlistedparty.htm) record, which stores the wait-list party information. Relevant fields include: MobilePhone, Name, PartySize, PartyStatus (set to "waiting"), and the WaitlistId (set to the ID of the [LocationWaitlist](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationwaitlist.htm) record).

When the Status field of the [LocationWaitlistedParty](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_locationwaitlistedparty.htm) record changes, Salesforce uses the Messaging template and the Messaging channel to send an SMS message to the number specified. When the status changes to “canceled”, the customer is removed from the wait-list.
