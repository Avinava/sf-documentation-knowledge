---
title: "Engagement"
domain: omnistudio
topic: engagement
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:49.785Z
estimatedTokens: 548
keywords: [Engagement, objects, store, customer, service, representative]
---

# Engagement

> Use the engagement objects to store details about an engagement between a customer and a
  customer service representative.

# Engagement

Use the engagement objects to store details about an engagement between a customer and a customer service representative.

-   **[Engagement Data Model](atlas.en-us.industries_reference.meta/industries_reference/engagement_data_model.htm)**
    The engagement data model stores details, such as start date and end date, time, topic, and attendees, about an interaction between a customer or a customer-authorized representative and a customer service representative (CSR) or contact center agent (CCA). You can add up to 50 custom fields each in the EngagementAttendee, EngagementInteraction, and EngagementTopic objects. The engagement objects also support quick actions that help CCAs to perform routine actions quickly without navigating to multiple pages. CCAs can also create personalized list views for engagement objects by using the My engagement attendees, My engagement interactions, and My engagement topics filters. You can give Experience Cloud users in Industries clouds access to these objects so they can use Engagement objects.
-   **[Engagement Connect APIs](atlas.en-us.industries_reference.meta/industries_reference/engagement_connect_apis.htm)**
    With the Engagement Connect REST APIs, you can create, delete, and get Engagement Interaction, Engagement Attendee, and Engagement Topic records.
-   **[Apex Reference](atlas.en-us.industries_reference.meta/industries_reference/service_excellence_apex_reference.htm)**
    This Apex reference goes into detail about the built-in Apex ConnectApi classes and interfaces.
-   **[Integrate the Engagement Objects Into Your CTI System](atlas.en-us.industries_reference.meta/industries_reference/integrate_your_cti_system_with_the_engagement_objects.htm)**
    Modify your CTI adapter so that when a customer service representative (CSR) accepts an incoming call using the softphone, an engagement interaction record for the call is created. Engagement Interaction is part of the Engagement data model, which has two other objects, Engagement Attendee and Engagement Topic. These objects store details such as the start and end date and time of an interaction, what an interaction is about, and attendee details.

## Related Topics

- Engagement Data Model (atlas.en-us.industries_reference.meta/industries_reference/engagement_data_model.htm)
- Engagement Connect APIs (atlas.en-us.industries_reference.meta/industries_reference/engagement_connect_apis.htm)
- Apex Reference (atlas.en-us.industries_reference.meta/industries_reference/service_excellence_apex_reference.htm)
- Integrate the Engagement Objects Into Your CTI System (atlas.en-us.industries_reference.meta/industries_reference/integrate_your_cti_system_with_the_engagement_objects.htm)
