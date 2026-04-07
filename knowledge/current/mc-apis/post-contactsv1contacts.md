---
title: "POST /contacts/v1/contacts"
domain: mc-apis
topic: post-contactsv1contacts
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.941Z
estimatedTokens: 1187
keywords: [POST, contacts, Creates, new, contact, attribute, groups, **Overview**]
---

> Creates a new contact with the specified information in the specified attribute groups.

# POST /contacts/v1/contacts

## **Overview**

Creates a new contact with the specified information in the specified attribute groups.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| contactKey | string |  | Primary address for the contact. You must provide either a value for contactKey or contactID. |
| contactID | string |  | Unique ID for the contact. You must provide either a value for contactKey or contactID. |
| attributeSets | array | Required | Array of information used to create a new contact |
| attributeSets.name | string | Required | Name of attribute group to which to add the contact information |
| attributeSets.values | array |  | Name and value pairs indicating the attribute and applicable value |

### Usage

**Example Request**

The request must include at least one of the attribute sets to create a new contact:

-   Email Addresses (You must also include this attribute set if you include Email Demographics)
-   MobileConnect Demographics (You must include a country code for the Locale value)
-   MobilePush Demographics (You must include an ApplicationID value)
-   LINE Addresses and LINE Subscriptions (You must also include these attribute sets if you include LINE Demographics)

> 📝 **Note**: WhatsApp is not supported.

Each call accepts only one instance of each attribute set.

You must also include values for contactKey and HTML Enabled.

Change @example.com to a valid domain.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "contactKey": "acruz@example.com",
    "attributeSets": [{
        "name": "Email Addresses",
        "items": [{
            "values": [{
                "name": "Email Address",
                "value": "acruz@example.com"
            },
            {
                "name": "HTML Enabled",
                "value": true
            }]
        }]
    },
    {
        "name": "Email Demographics",
        "items": [{
            "values": [{
                "name": "Last Name",
                "value": "Cruz"
            },
            {
                "name": "First Name",
                "value": "Angela"
            },
            {
                "name": "Text Profile Attribute",
                "value": "value 1"
            },
            {
                "name": "Number Profile Attribute",
                "value": 12345
            }]
        }]
    },
    {
        "name": "MobileConnect Demographics",
        "items": [{
            "values": [{
                "name": "Mobile Number",
                "value": "317-531-5555"
            },
            {
                "name": "Locale",
                "value": "US"
            },
            {
                "name": "Status",
                "value": 1
            }]
        }]
    },
    {
        "name": "MobilePush Demographics",
        "items": [{
            "values": [{
                "name": "Device ID",
                "value": 958405948
            },
            {
                "name": "Application",
                "value": 958405948
            }]
        }]
    },
    {
        "name": "GroupConnect LINE Addresses",
        "items": [{
            "values": [{
                "name": "Address ID",
                "value": "addressId_from_api"
            }
           ]
        }]
    },
    {

        "name": "GroupConnect LINE Subscriptions",
        "items": [{
            "values": [{
                "name": "Address ID",
                "value": "addressId_from_api"
             },
             {
                "name": "Channel ID",
                "value": "1234567890"
            }]
        }]
    },
    {
        "name": "GroupConnect LINE Demographics",
        "items": [{
            "values": [{
                "name": "Address ID",
                "value": "addressId_from_api"
            },
            {
                "name": "Display Name",
                "value": "display_name"
            },
            {
                "name": "Picture Url",
                "value": "picture_url"
            },
            {
                "name": "Status Message",
                "value": "status_message"
            }]
        }]
    }
  ]
}
```

**Example Response**

```js
200 (OK)
Content-Type: application/json
{
    "operationStatus": "OK",
    "rowsAffetcted": 1,
    "contactKey": "acruz@example.com",
    "contactId": 12345678,
    "contactTypeID": 0,
    "isNewContactKey": false,
    "requestServiceMessageID": "8b51b524-28c1-46fc-9a44-02fca5b0a08c",
    "hasErrors": false,
    "resultMessages": [],
    "serviceMessageID": "80676c59-ceb9-48aa-ad35-81e150094a17"
}
```

Last Updated: Jun 8, 2021
