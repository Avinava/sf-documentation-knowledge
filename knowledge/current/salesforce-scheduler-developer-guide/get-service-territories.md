---
title: "Get Service Territories"
domain: salesforce-scheduler-developer-guide
topic: get-service-territories
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.995Z
estimatedTokens: 431
keywords: [Service, Territories, territory, branch, office, location, resources, appointment, attendees, operate, meet, customers, Show, users, territorieson, website, service-territories, Connect, API, work]
---

# Get Service Territories

> A service territory represents a branch or office location where your service
   resources (appointment attendees) operate from or meet customers. Use the service-territories Connect API to fetch a list of service
   territories based on a work type group or work type.

# Get Service Territories

A service territory represents a branch or office location where your service resources (appointment attendees) operate from or meet customers. Use the service-territories Connect API to fetch a list of service territories based on a work type group or work type.

1.  Create a page where you can provide users an option to search for service territories.

    Here’s how a Select Service Territory page can look.

    ![A representation of the Select Service Territory screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_service_territory1.png&folder=salesforce_scheduler_developer_guide)

2.  Make a GET request on the [service-territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_service_territories.htm "Get service territories for a workTypeId or workTypeGroupId. Filter and sort the service territories using the radius, latitude, longitude, sortBy, and sortOrder properties.") Connect API by passing the user-entered search values and the selected work type group ID as the input parameters in the query string. You can also use a combination of the radius, latitude, longitude, sortBy, and sortOrder parameters to filter and sort the service territories.

    Resource URI

    ```

    ```

    Sample Request

    This sample GET request specifies the query string on the service territories Connect API.

    ```

    ```

    Sample Response

    The API returns the available service territories based on the passed work type group ID and search criteria.

    ```

    ```

3.  Parse the JSON response, and show the available service territories on the Select Service Territory page so that the user can select a service territory.

    Here’s a Select Service Territory page showing the available service territories.

    ![A representation of the Select Service Territory screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_service_territory3.png&folder=salesforce_scheduler_developer_guide)

    Here’s how the service territory details are displayed when the user selects a service territory.

    ![A representation of the Select Service Territory screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_service_territory2.png&folder=salesforce_scheduler_developer_guide)


On the next page in your app, you can show the available service resources so that the user can select a primary resource for the appointment.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_engagement_channel_types.htm "Get Engagement Channels")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_candidates.htm "Get Appointment Candidates")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling​​​/service-territories?workTypeGroupId=0VSS70000004DvWOAU
```

```
{
  "result": {
    "serviceTerritories": [
      {
        "city": "Hyderabad",
        "country": "India",
        "id": "0HhS70000004F9zKAE",
        "name": "ServiceTerritory1",
        "operatingHoursId": "0OHS70000004FIxOAM",
        "postalCode": "500032",
        "state": "TG"
      }
    ]
  }
}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling​​​/service-territories?workTypeGroupId=0VSS700000000sVOAQ
```

```
{
  "result": {
    "serviceTerritories": [
      {
        "city": "Charlotte",
        "country": "United States",
        "id": "0HhS700000001DYKAY",
        "name": "Spear Street Branch",
        "operatingHoursId": "0OHS700000001HlOAI",
        "postalCode": "05445",
        "state": "VT",
        "street": "121 Spear Street"
      }
    ]
  }
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/scheduling/service-territories
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_channel_types.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_appointment_candidates.htm)
- service-territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_service_territories.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_engagement_channel_types.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_available_territory_slot.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_engagement_channel_types.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_candidates.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_enable_location_services.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_work_type_groups.htm)
