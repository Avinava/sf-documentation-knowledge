---
title: "FHIR Contact Point Input"
domain: health-cloud-object-reference
topic: fhir-contact-point-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.981Z
estimatedTokens: 356
keywords: [FHIR, Contact, Point, Input, representation, ContactPoint]
---

# FHIR Contact Point Input

> Input representation for the ContactPoint FHIR
    object.

# FHIR Contact Point Input

Input representation for the ContactPoint FHIR object.

The ContactPoint FHIR object maps to the [ContactPoint](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_ContactPoint.htm "The ContactPoint FHIR resource maps to the Contact​Point​Phone​ object in Salesforce.") object in Salesforce.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value Input[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| periodEnd | String | The date until when the contact detail is active. | Optional | 53.0 |
| periodStart | String | The date from when the contact detail is active. | Optional | 53.0 |
| rank | Integer | The preference rank of the contact detail among all the contact details associated with a person. | Optional | 53.0 |
| system | String | The system of the contact detail. For example, email and phone. | Optional | 53.0 |
| use | String | The usage type of the contact detail. For example, home and office. | Optional | 53.0 |
| value | String | The actual details of the patient’s contact point phone record stored in the Contact​Point​Phone​.Telephone​Number. Contact​Point​Phone​.Area​Code, Contact​Point​Phone​.Extension​Number, and Contact.​Email fields. | Optional | 53.0 |

## Code Examples

```
{
   "ContactPoint": [ {
      "system": "email",
      "value": "a@bc.com",
      "use": "office",
      "rank": "1",
      "periodStart": "1998-05-26T15:40:30.000Z",
      "periodEnd": "2021-08-09T15:40:30.000Z"
    } ]
}
```

## Related Topics

- ContactPoint (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_ContactPoint.htm)
- Custom Field Value Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_custom_field_value.htm)
