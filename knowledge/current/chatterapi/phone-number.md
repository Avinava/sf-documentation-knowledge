---
title: "Phone Number"
domain: chatterapi
topic: phone-number
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.341Z
estimatedTokens: 368
keywords: [Phone, Number]
---

# Phone Number

> A phone number.

# Phone Number

A phone number.

| Property | Type | Description | Filter Group and Name | Available Version |
| --- | --- | --- | --- | --- |
| label | String | Localized string indicating the phone type | Small, 30.0 | 30.0 |
| number | String | NoteThis property is not available after version 26.0. Use the phoneNumber property instead.Phone number | NA | 23.0–26.0 |
| phoneNumber | String | Phone number | Small, 29.0 | 27.0 |
| phoneType | String | Phone type. One of these values:FaxMobileWorkThese values are not localized. | Small, 30.0 | 30.0 |
| type | String | NoteThis property is not available after version 29.0. Use the phoneType property instead.Values are:FaxMobileWork | Small, 29.0 | 23.0–29.0 |

#### See Also

-   [Datacloud Company](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_company.htm "The Data.com company record. If you own a company record, you see all the fields. If you don’t own the company record, some fields are hidden by asterisks (***).")

-   [Datacloud Contact](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_contact.htm "Information about Data.com contacts. If you own a contact, you see all the fields. If you don’t own the contact record, some fields are hidden by asterisks (***).")

-   [User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

## Related Topics

- Datacloud Company (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_company.htm)
- Datacloud Contact (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_contact.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
