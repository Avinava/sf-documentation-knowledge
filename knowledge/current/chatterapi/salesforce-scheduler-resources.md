---
title: "Salesforce Scheduler Resources"
domain: chatterapi
topic: salesforce-scheduler-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.626Z
estimatedTokens: 393
keywords: [Salesforce, Scheduler, Resources, service, territories, appointments]
---

# Salesforce Scheduler Resources

> Get service territories and create service appointments
  using Salesforce Scheduler resources.

# Salesforce Scheduler Resources

Get service territories and create service appointments using Salesforce Scheduler resources.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/scheduling/available-territory-slots | Get consolidated availability of each service resource within specified territories. |
| /connect/scheduling/engagement-channel-types | Retrieve a list of the engagement channel types from your Salesforce org. |
| /connect/scheduling/group-appointments | Get a list of group appointments along with the remaining attendee limit. |
| /connect/scheduling/service-appointments | Create and update service appointment records, assign resources, and generate leads, including group appointments with multiple participants. |
| /connect/scheduling/service-territories | Get service territories for a workTypeId or workTypeGroupId. Filter and sort the service territories using the radius, latitude, longitude, sortBy, and sortOrder properties. |
| /connect/scheduling/waitlists | Get waitlist details with the list of participants. A waitlist is a queue that includes participants without a scheduled appointment. |
| /connect/scheduling/waitlist-checkin | Check in or register a participant to a waitlist who arrives at the service territory for a drop-in appointment. |

#### See Also

-   [*REST API Developer Guide*: Lightning Scheduler Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_ls_intro.htm " REST API Developer Guide: Lightning Scheduler Resources  - HTML (New Window)")

## Related Topics

- /connect/scheduling/available-territory-slots (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_available_territory_slots.htm)
- /connect/scheduling/engagement-channel-types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_engagement_channel_types.htm)
- /connect/scheduling/group-appointments (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_group_appointments_post.htm)
- /connect/scheduling/service-appointments (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_service_appointments.htm)
- /connect/scheduling/service-territories (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_service_territories.htm)
- /connect/scheduling/waitlists (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_scheduling_waitlists.htm)
- /connect/scheduling/waitlist-checkin (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_scheduling_waitlist_checkin.htm)
