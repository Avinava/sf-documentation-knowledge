---
title: "Book Slot Chain Output"
domain: health-cloud-object-reference
topic: book-slot-chain-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.413Z
estimatedTokens: 186
keywords: [Book, Slot, Chain, Output, representation, service, appointments]
---

# Book Slot Chain Output

> Output representation of the request to create service appointments.

# Book Slot Chain Output

Output representation of the request to create service appointments.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | API response code. | Small, 60.0 | 60.0 |
| isSuccess | Boolean | Indicates whether the request was successful (true) or not (false). | Small, 60.0 | 60.0 |
| message | String | Error message when the request fails. | Small, 60.0 | 60.0 |
| serviceAppointmentGroupId | String | ID of the service appointment group to which the created service appointments belong to. | Small, 60.0 | 60.0 |
| serviceAppointmentIds | String[] | IDs of the created service appointments. | Big, 60.0 | 60.0 |

## Code Examples

```
{
   "isSuccess":true,
   "serviceAppointmentIds":[
      "08pxx0000004C92AAE",
      "08pxx0000004C92AAE",
      "08pxx0000004C92AAE"
   ],
   "serviceAppointmentGroupId":"08pxx0000004C92AAE",
   "message":"",
   "code":200
}
```
