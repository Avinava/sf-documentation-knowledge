---
title: "Engagement Interaction"
domain: health-cloud-object-reference
topic: engagement-interaction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:34.049Z
estimatedTokens: 602
keywords: [Engagement, Interaction, data, model, stores, start, date, end, time, topic, attendees, customer, customer-authorized, representative, service]
---

# Engagement Interaction

> The engagement data
                model stores details, such as start date and end date, time, topic, and attendees,
                about an interaction between a customer or a customer-authorized representative and
                a customer service
                representative
                (CSR) or contact center agent (CCA). You can add up to 50 custom fields each in the
                EngagementAttendee, EngagementInteraction, and EngagementTopic objects. The
                engagement objects also support quick actions that help CCAs to perform routine
                actions quickly without navigating to multiple pages. CCAs can also create
                personalized list views for engagement objects by using the My engagement attendees,
                My engagement interactions, and My engagement topics filters.

# Engagement Interaction

The engagement data model stores details, such as start date and end date, time, topic, and attendees, about an interaction between a customer or a customer-authorized representative and a customer service representative (CSR) or contact center agent (CCA). You can add up to 50 custom fields each in the EngagementAttendee, EngagementInteraction, and EngagementTopic objects. The engagement objects also support quick actions that help CCAs to perform routine actions quickly without navigating to multiple pages. CCAs can also create personalized list views for engagement objects by using the My engagement attendees, My engagement interactions, and My engagement topics filters.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


-   **[EngagementInteraction](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_engagementinteraction.htm)**
    Represents information about an interaction between a service representative or any other specialist in an organization and the organization’s customer. Engagement interactions can be initiated through communication channels and can cover one or more topics. For example, a customer can initiate an engagement interaction by calling a service representative to inquire about an insurance claim. This object is available in API version 55.0 and later.
-   **[EngagementAttendee](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_engagementattendee.htm)**
    Represents information about an attendee of an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, this object stores information about the customer and the service representative. This object is available in API version 55.0 and later
-   **[EngagementTopic](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_engagementtopic.htm)**
    Represents information about the topics discussed by a customer and other attendees during an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, the topic of the engagement is Claim. This object is available in API version 55.0 and later.

## Related Topics

- EngagementInteraction (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_engagementinteraction.htm)
- EngagementAttendee (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_engagementattendee.htm)
- EngagementTopic (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_engagementtopic.htm)
