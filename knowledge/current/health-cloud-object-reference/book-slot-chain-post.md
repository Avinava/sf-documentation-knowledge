---
title: "Book Slot Chain (POST)"
domain: health-cloud-object-reference
topic: book-slot-chain-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.240Z
estimatedTokens: 291
keywords: [Book, Slot, Chain, POST, service, appointments, care, program, enrollee, advanced, therapy, management, provided, appointment, slots]
---

# Book Slot Chain (POST)

> Create service appointments for a care program enrollee in advanced therapy management
    based on the provided appointment slots.

# Book Slot Chain (POST)

Create service appointments for a care program enrollee in advanced therapy management based on the provided appointment slots.

This API takes both the published and unpublished slots as inputs. If the provided slots are published, the API calls the Salesforce Scheduler API to book the slots.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| careProgramEnrolleeId | String | ID of the care program enrollee for whom the service appointments must be created. | Required | 60.0 |
| slots | Slots [] | Appointment slots to be booked. | Required | 60.0 |
| workProcedureId | String | ID of the work procedure for which the service appointments are to be created. | Required | 60.0 |

Response body for POST

[Book Slot Chain Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_book_slot_chain_output.htm "Output representation of the request to create service appointments.")

## Code Examples

```
/connect/health/advanced-therapy-management/book-slot-chain
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/health/advanced-therapy-management/book-slot-chain
```

```
{
   "careProgramEnrolleeId":"08pxx0000004C92AAE",
   "workProcedureId":"08pxx0000004C92AAE",
   "slots":[
      {
         "schedStartTime":"2022-03-26T16:30:00.000+0000",
         "schedEndTime":"2022-03-26T16:30:00.000+0000",
         "workTypeId":"08pxx0000004C92AAE",
         "serviceTerritoryId":"08pxx0000004C92AAE",
         "serviceResourceId":"08pxx0000004C92AAE",
         "contactId":"08pxx0000004C92AAE",
         "appointmentType":"08pxx0000004C92AAE",
         "subject":"Apheresis",
         "additionalInformation":"Needs Cab Assistance",
         "street":"1 Market Street",
         "city":"San Francisco",
         "state":"CA",
         "postalCode":"94105",
         "country":"USA",
         "comments":"",
         "status":"Scheduled"
      },
      {
         "schedStartTime":"2022-03-26T16:30:00.000+0000",
         "schedEndTime":"2022-03-26T16:30:00.000+0000",
         "workTypeId":"08pxx0000004C92AAE",
         "serviceTerritoryId":"08pxx0000004C92AAE",
         "serviceResourceId":"08pxx0000004C92AAE",
         "contactId":"08pxx0000004C92AAE",
         "appointmentType":"08pxx0000004C92AAE",
         "subject":"Apheresis",
         "additionalInformation":"Needs Cab Assistance",
         "street":"1 Market Street",
         "city":"San Francisco",
         "state":"CA",
         "postalCode":"94105",
         "country":"USA",
         "comments":"",
         "status":"Scheduled"
      },
      {
         "schedStartTime":"2022-03-26T16:30:00.000+0000",
         "schedEndTime":"2022-03-26T16:30:00.000+0000",
         "workTypeId":"08pxx0000004C92AAE",
         "serviceTerritoryId":"08pxx0000004C92AAE",
         "serviceResourceId":"08pxx0000004C92AAE",
         "contactId":"08pxx0000004C92AAE",
         "appointmentType":"08pxx0000004C92AAE",
         "subject":"Apheresis",
         "additionalInformation":"Needs Cab Assistance",
         "street":"1 Market Street",
         "city":"San Francisco",
         "state":"CA",
         "postalCode":"94105",
         "country":"USA",
         "comments":"",
         "status":"Scheduled"
      }
   ]
}
```

## Related Topics

- Slots (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_slot_input.htm)
- Book Slot Chain Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_book_slot_chain_output.htm)
