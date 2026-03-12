---
title: "SelfServiceUser"
domain: object-reference
topic: selfserviceuser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.729Z
estimatedTokens: 1120
keywords: [SelfServiceUser, Contact, enabled, organization’s, Self-Service, portal, obtain, online, support, Calls, Special, Access, Rules, Usage]
---

# SelfServiceUser

> Represents a Contact who has been enabled to use your
   organization’s Self-Service portal, where he or she can obtain online
  support.

# SelfServiceUser

Represents a Contact who has been enabled to use your organization’s Self-Service portal, where he or she can obtain online support.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Starting with Spring ’12, the Self-Service portal isn’t available for new Salesforce orgs. Existing orgs continue to have access to the Self-Service portal.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. All Self-Service users must be associated with a Contact. The contact’s email should match the Self-Service user email. The contact must have a value in the AccountId field or an error occurs. |
| Email | TypeemailPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Make this the same as the email address for the Contact associated with this SelfServiceUser. Password resets and other system communication will be sent to this email address. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst name of the Self-Service user. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Self-Service user is allowed to log in to the Self-Service portal (true) or not (false). Note that there is no way to delete a Self-Service user. They can only be marked as inactive. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LanguageLocaleKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. This is a restricted picklist field. It is the primary language for the user. All on-screen text in the Self-Service portal is displayed in this language. |
| LastLoginDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the Self-Service user last logged in. |
| LastName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Last name of the Self-Service user. |
| LocaleSidKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. This is a restricted picklist field. The value of this field affects the formatting and parsing of values, especially numeric values, in the Self-Service portal. Values are two-letter codes that indicate language and sometimes language and country. The codes are based on ISO standards. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionConcatenation of FirstName and LastName. Limited to 203 characters, including whitespaces. |
| SuperUser | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this Self-Service user is a super user with additional access on his or her company's Self-Service portal (true) or not (false). |
| TimeZoneSidKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. This is a restricted picklist field. The time zone of a affects the offset used when displaying or entering times in the Self-Service portal. |
| Username | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. This contains the name that a Self-Service user enters to log into the Self-Service portal. Value must be unique in your organization. If you try to create or update a user with a duplicate value, the operation is rejected and an error is returned. |

## Usage

For security reasons, you can’t query Self-Service user passwords via the API or the user interface. However, the API allows you to set and reset Self-Service user passwords using the setPassword() and resetPassword() calls.

SelfServiceUser records created from the API don’t cause a notification email to be sent. If you want to notify the user, you must send them an email after creating the user.

#### See Also

-   [Contact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contact.htm "Represents a contact, which is a person associated with an account.")

-   [User](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm "Represents a user in your organization.")

## Related Topics

- Contact (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contact.htm)
- User (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm)
