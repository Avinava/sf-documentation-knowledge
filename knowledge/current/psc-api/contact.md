---
title: "Contact"
domain: psc-api
topic: contact
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:34.845Z
estimatedTokens: 3356
keywords: [Contact, person, associated, account, Calls, Special, Access, Rules, Usage, Objects]
---

# Contact

> Represents a contact, which is a person associated with an
			account.

# Contact

Represents a contact, which is a person associated with an account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), merge(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Customer Portal users can access only portal-enabled contacts.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account that’s the parent of this contact.We recommend that you update up to 50 contacts simultaneously when changing the accounts on contacts enabled for a Customer Portal or partner portal. We also recommend that you make this update after business hours.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AssistantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assistant’s name. |
| AssistantPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assistant’s phone number. |
| Birthdate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s birthdate.Filter criteria for report filters, list view filters, and SOQL queries ignore the year portion of the Birthdate field. For example, this SOQL query returns contacts with birthdays later in the year than today:SELECT Name, Birthdate FROM Contact WHERE Birthdate > TODAY |
| Department | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s department. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the contact. Label is Contact Description up to 32 KB. |
| DoNotCall | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the contact doesn’t want to receive calls. |
| Email | TypeemailPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe contact’s email address. |
| Fax | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s fax number. Label is Business Fax. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s first name up to 40 characters. |
| GenderIdentity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe contact’s internal experience of their gender, which may or may not correspond to their designated sex at birth. |
| HasOptedOutOfEmail | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contact doesn’t want to receive email from Salesforce (true) or does (false). Label is Email Opt Out. |
| HasOptedOutOfFax | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contact prohibits receiving faxes. |
| HomePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s home phone number. |
| IndividualId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the data privacy record associated with this contact. This field is available if Data Protection and Privacy is enabled.This is a relationship field.Relationship NameIndividualRelationship TypeLookupRefers ToIndividual |
| Jigsaw | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the company’s ID in Data.com. If an account has a value in this field, it means that the account was imported from Data.com. If the field value is null, the account wasn’t imported from Data.com. Maximum size is 20 characters. Available in API version 22.0 and later. Label is Data.com Key.ImportantThe Jigsaw field is exposed in the API to support troubleshooting for import errors and reimporting of corrected data. Do not modify this value. |
| LastCURequestDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that a Stay-in-Touch request was sent to the contact. |
| LastCUUpdateDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last time a Stay-in-Touch update was processed for the contact. |
| LastName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Last name of the contact up to 80 characters. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LeadSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s source. |
| MailingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the mailing address. Read-only. For details on compound address fields, see Address Compound Fields. |
| MailingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the mailing address’s state and country. |
| MailingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, Update, Query, Restricted picklist, NillableDescriptionAccuracy level of the geocode for the mailing address. For details on geolocation compound field, see Compound Field Considerations and Limitations . |
| MailingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with MailingLongitude to specify the precise geolocation of a mailing address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| MailingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with MailingLatitude to specify the precise geolocation of a mailing address. Acceptable values are numbers between –180 and 180 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| MailingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMailing address details. |
| MailingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the mailing address’s state and country. |
| MailingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address for mailing address. |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact’s middle name up to 40 characters. To enable this field, ask Salesforce Customer Support for help. |
| MobilePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContact’s mobile phone number. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionConcatenation of FirstName, MiddleName, LastName, and Suffix up to 203 characters, including whitespaces. |
| OtherAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the other address. Read-only. For details on compound address fields, see Address Compound Fields. |
| OtherCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the alternate address’s state and country. |
| OtherGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the other address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| OtherLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with OtherLongitude to specify the precise geolocation of an alternate address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| OtherLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with OtherLatitude to specify the precise geolocation of an alternate address. Acceptable values are numbers between –180 and 180 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| OtherPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone for alternate address. |
| OtherPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlternate address details. |
| OtherStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO codes for the alternate address’s state and country. |
| OtherStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet for alternate address. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this contact.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number for the contact. Label is Business Phone. |
| Pronouns | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe contact’s personal pronouns, reflecting their gender identity. Others can use these pronouns to refer to the contact in the third person. The entry is selected from a picklist of available values, which the administrator sets. Maximum 40 characters. |
| ReportsToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field doesn’t appear if IsPersonAccount is true.This is a relationship field.Relationship NameReportsToRelationship TypeLookupRefers ToContact |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHonorific abbreviation, word, or phrase to be used in front of name in greetings, such as Dr. or Mrs. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle of the contact, such as CEO or Vice President. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

If you’re importing contact data and need to set the value for an audit field, such as CreatedDate, contact Salesforce. Audit fields are automatically updated during API operations unless you request to set these fields yourself.

## Usage

Use this object to manage individual people who are associated with an account. You can create, query, delete, or update any attachment associated with a contact.

Create or update contacts by converting a lead with the convertLead() call.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContactFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContactHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactshare.htm "HTML (New Window)")

Sharing is available for the object.

## Code Examples

```
SELECT Name, Birthdate
FROM Contact
WHERE Birthdate > TODAY
```

## Related Topics

- ContactChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- ContactFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ContactHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
