---
title: "Donor Details Input"
domain: edu-cloud-dev-guide
topic: donor-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.799Z
estimatedTokens: 333
keywords: [Donor, Input, representation, that’s, associated, gift, transaction]
---

# Donor Details Input

> Input representation of the donor details that’s associated with the gift
    transaction.

# Donor Details Input

Input representation of the donor details that’s associated with the gift transaction.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account​CustomFields | Custom Field Details Input[] | Account standard and custom fields of the donor. | Optional | 60.0 |
| address | Address Details Input[] | Address details of the donor. | Optional | 60.0 |
| donorType | String | Type of the donor.You can’t use the organizationName when the donorType is set to Individual. Similarly, don’t use firstName or lastName properties when the donorType is Organizational. | Required | 60.0 |
| email | String | Email address of the donor. | Optional | 60.0 |
| firstName | String | First name of the donor. | Required | 60.0 |
| id | String | ID of the gift designation. This ID can also be passed as an externalID in the format given below: {             "externalId": {               "fieldName": "<EXTERNAL_ID_FIELD_NAME>",               "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"         } | Optional | 60.0 |
| lastName | String | Last name of the donor. | Required | 60.0 |
| organization​Name | String | Organization name of the donor. | Required | 60.0 |
| phone | String | Phone number of the donor. | Optional | 60.0 |

## Code Examples

```
{
  "donorType": "individual",
  "id": "0015500000WO1ZiAAL",
  "firstName": "Daniel",
  "lastName": "Chavez",
  "phone": "510-434-8920",
  "email": "d.chavez@salesforce.com",
  "address": [
    {
      "street": "123 Main Street",
      "city": "Oakland",
      "state": "CA",
      "postalCode": "94610",
      "country": "US"
    }
  ],
  "accountCustomFields": [
    {
      "fieldName": "string",
      "fieldValue": "string"
    }
  ]
}
```

```
{
            "externalId": {
              "fieldName": "<EXTERNAL_ID_FIELD_NAME>",
              "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"
        }
```

## Related Topics

- Custom Field Details Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_custom_field_detail.htm)
- Address Details Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_address_detail.htm)
