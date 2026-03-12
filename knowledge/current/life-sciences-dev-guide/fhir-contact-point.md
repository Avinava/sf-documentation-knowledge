---
title: "FHIR Contact Point"
domain: life-sciences-dev-guide
topic: fhir-contact-point
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.807Z
estimatedTokens: 338
keywords: [FHIR, Contact, Point, output, representation, stored, ContactPointPhone, record]
---

# FHIR Contact Point

> The output representation of contact details stored as a
      ContactPointPhone record.

# FHIR Contact Point

The output representation of contact details stored as a ContactPointPhone record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| periodEnd | String | The date until when a contact detail is active. | Small, 53.0 | 53.0 |
| periodStart | String | The date from when a contact detail is active. | Small, 53.0 | 53.0 |
| rank | Integer | The preferred order in which the patient’s contact details are to be used. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the record created to store the contact detail. | Small, 53.0 | 53.0 |
| system | String | The communication system associated with a contact detail. For example, phone and email. | Small, 53.0 | 53.0 |
| use | String | The usage type of the contact detail. | Small, 53.0 | 53.0 |
| value | String | The contact number or email address stored in the Contact​Point​Phone​.Telephone​Number. Contact​Point​Phone​.Area​Code, Contact​Point​Phone​.Extension​Number, and Contact.​Email fields. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_custom_field_value_output.htm)
