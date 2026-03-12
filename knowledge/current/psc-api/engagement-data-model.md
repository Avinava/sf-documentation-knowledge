---
title: "Engagement Data Model"
domain: psc-api
topic: engagement-data-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:31.473Z
estimatedTokens: 645
keywords: [Engagement, Data, Model, stores, start, date, end, time, topic, attendees, interaction, customer, customer-authorized, representative, service]
---

# Engagement Data Model

> The engagement data model
  stores details, such as start date and end date, time, topic, and attendees, about an interaction
  between a customer or a customer-authorized representative and a customer service representative
  (CSR) or contact center agent (CCA). You can add up to 50 custom fields each in the
  EngagementAttendee, EngagementInteraction, and EngagementTopic objects. The engagement objects
  also support quick actions that help CCAs to perform routine actions quickly without navigating to
  multiple pages. CCAs can also create personalized list views for engagement objects by using the
  My engagement attendees, My engagement interactions, and My engagement topics filters. You can
  give Experience Cloud users in Industries clouds access to these objects so they can use
  Engagement objects.

# Engagement Data Model

The engagement data model stores details, such as start date and end date, time, topic, and attendees, about an interaction between a customer or a customer-authorized representative and a customer service representative (CSR) or contact center agent (CCA). You can add up to 50 custom fields each in the EngagementAttendee, EngagementInteraction, and EngagementTopic objects. The engagement objects also support quick actions that help CCAs to perform routine actions quickly without navigating to multiple pages. CCAs can also create personalized list views for engagement objects by using the My engagement attendees, My engagement interactions, and My engagement topics filters. You can give Experience Cloud users in Industries clouds access to these objects so they can use Engagement objects.

-   **[EngagementAttendee](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_engagementattendee.htm)**
    Represents information about an attendee of an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, this object stores information about the customer and the service representative. This object is available in API version 55.0 and later
-   **[EngagementInteraction](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_engagementinteraction.htm)**
    Represents information about an interaction between a service representative or any other specialist in an organization and the organization’s customer. Engagement interactions can be initiated through communication channels and can cover one or more topics. For example, a customer can initiate an engagement interaction by calling a service representative to inquire about an insurance claim. This object is available in API version 55.0 and later.
-   **[EngagementTopic](atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_engagementtopic.htm)**
    Represents information about the topics discussed by a customer and other attendees during an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, the topic of the engagement is Claim. This object is available in API version 55.0 and later.

#### See Also

-   [Create Object-Specific Quick Actions](https://help.salesforce.com/s/articleView?id=platform.creating_object_specific_actions.htm&type=5&language=en_US)

-   [Create a List View](https://help.salesforce.com/s/articleView?id=xcloud.customviews_create_parent.htm&type=5&language=en_US)

## Related Topics

- EngagementAttendee (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_engagementattendee.htm)
- EngagementInteraction (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_engagementinteraction.htm)
- EngagementTopic (atlas.en-us.psc_api.meta/psc_api/sforce_api_objects_engagementtopic.htm)
