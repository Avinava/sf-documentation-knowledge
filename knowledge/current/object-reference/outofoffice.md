---
title: "OutOfOffice"
domain: object-reference
topic: outofoffice
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.208Z
estimatedTokens: 489
keywords: [OutOfOffice, user-set, profile, user, intends, office, API, version, 41.0, later, Calls, Special, Access, Rules, Usage]
---

# OutOfOffice

> Represents a user-set value on a profile that shows when the
      user intends to be out of the office. This object is available in API version 41.0 and later.

# OutOfOffice

Represents a user-set value on a profile that shows when the user intends to be out of the office. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), query(), undelete(), upsert(), update()

## Special Access Rules

In Lightning Experience, lets users set a message next to their name in Chatter to show when they plan to be out of the office. The message appears in Lightning Experience, Salesforce Classic, and mobile views. Messages expire automatically after their end date. You can control whether out-of-office functionality is available to your users. Set it up in the Out of Office section in **Setup** | **Chatter Settings**.

Only internal users can set an out-of-office message.

## Fields

| Field Name | Details |
| --- | --- |
| EndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date of the last day a person is out of the office. After the message expires, it goes away automatically. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on createDescriptionIndicates whether an out-of-office message can be displayed for a user. The default value is true. |
| Message | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe message portion of the out-of-office message. This text, along with start and end dates, is appended to the user’s name in the Salesforce user interface. The maximum length of this string is 40 characters. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date of the first day a person is out of the office. |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user associated with the out-of-office message. |

## Usage

-   Maximum message length is 60 characters.
-   Users can set only their own out-of-office message. An admin can set an out-of-office message for any user.
-   The out-of-office message can be set only for internal users.

## Related Topics

- boolean (atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm)
