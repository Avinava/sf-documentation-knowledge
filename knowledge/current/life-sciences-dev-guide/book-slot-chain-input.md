---
title: "Book Slot Chain Input"
domain: life-sciences-dev-guide
topic: book-slot-chain-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.078Z
estimatedTokens: 144
keywords: [Book, Slot, Chain, Input, representation, service, appointments]
---

# Book Slot Chain Input

> Input representation of the request to create service appointments.

# Book Slot Chain Input

Input representation of the request to create service appointments.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| careProgramEnrolleeId | String | ID of the care program enrollee for whom the service appointments must be created. | Required | 60.0 |
| slots | Slots [] | Appointment slots to be booked. | Required | 60.0 |
| workProcedureId | String | ID of the work procedure for which the service appointments are to be created. | Required | 60.0 |

## Code Examples

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

- Slots (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_slot_input.htm)
