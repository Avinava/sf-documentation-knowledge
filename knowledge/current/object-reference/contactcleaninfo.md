---
title: "ContactCleanInfo"
domain: object-reference
topic: contactcleaninfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.847Z
estimatedTokens: 2779
keywords: [ContactCleanInfo, Stores, metadata, Data.com, Clean, uses, determine, contact, record’s, status, Helps, automate, cleaning, processing, records]
---

# ContactCleanInfo

> Stores the metadata Data.com Clean uses to determine a contact
      record’s clean status. Helps you automate the cleaning or related processing of contact
      records. ContactCleanInfo includes a number of bit vector fields.

# ContactCleanInfo

Stores the metadata Data.com Clean uses to determine a contact record’s clean status. Helps you automate the cleaning or related processing of contact records. ContactCleanInfo includes a number of bit vector fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

Contact Clean Info provides a snapshot of the data in your Salesforce contact record and its matched Data.com record at the time the Salesforce record was cleaned.

Contact Clean Info includes a number of bit vector fields, whose component fields each correspond to individual object fields and provide related data or status information about those fields. For example, the bit vector field IsDifferent has an IsDifferentEmail field. If the IsDifferentEmail field’s value is False, that means the Email field value is *the same* on the Salesforce contact record and its matched Data.com record.

ContactCleanInfo bit vector fields include:

-   CleanedBy indicates who (a user) or what (a Clean job) cleaned the contact record.
-   IsDifferent indicates whether or not a field on the contact record has a value that differs from the corresponding field on the matched Data.com record.
-   IsFlaggedWrong indicates whether or not a field on the contact record has a value that is flagged as wrong to Data.com.
-   IsReviewed indicates whether or not a field on the contact record is in a Reviewed state, which means that the value was reviewed but not accepted.

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address. Read-only. See Address Compound Fields for details on compound address fields. |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the contact. |
| CleanedByJob | TypebooleanPropertiesFilterDescriptionIndicates whether the contact record was cleaned by a Data.com Clean job (true) or not (false). |
| CleanedByUser | TypebooleanPropertiesFilterDescriptionIndicates whether the contact record was cleaned by a Salesforce user (true) or not (false). |
| ContactId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique, system-generated ID assigned when the contact record was created. |
| ContactStatusDataDotCom | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe status of the contact per Data.com. Values are: Contact is Active per Data.com, Phone is Wrong per Data.com , Email is Wrong per Data.com, Phone and Email are Wrong per Data.com, Contact Not at Company per Data.com, Contact is Inactive per Data.com, Company this contact belongs to is out of business per Data.com, Company this contact belongs to never existed per Data.com or Email address is invalid per Data.com. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the contact. |
| DataDotComID | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID Data.com maintains for the contact. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address for the contact. |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe contact’s first name. |
| IsDifferentCity | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s City field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCountry | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Country field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCountryCode | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Country Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentEmail | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Email field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentFirstName | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s First Name field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentLastName | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Last Name field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentPhone | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Phone field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentPostalCode | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Postal Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentState | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s State field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentStateCode | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s State Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentStreet | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Street field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentTitle | TypebooleanPropertiesFilterDescriptionIndicates whether the contact’s Title field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsFlaggedWrongAddress | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Address field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongEmail | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Email field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Name field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongPhone | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Phone field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongTitle | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Title field value is flagged as wrong to Data.com (true) or not (false). |
| IsInactive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the contact has been reported to Data.com as Inactive (true) or not (false). |
| IsReviewedAddress | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Address field value is in a Reviewed state (true) or not (false). |
| IsReviewedEmail | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Email field value is in a Reviewed state (true) or not (false). |
| IsReviewedName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Name field value is in a Reviewed state (true) or not (false). |
| IsReviewedPhone | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Phone field value is in a Reviewed state (true) or not (false). |
| IsReviewedTitle | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the contact’s Title field value is in a Reviewed state (true) or not (false). |
| LastMatchedDate | TypedateTimePropertiesFilter, SortDescriptionThe date the contact record was last matched and linked to a Data.com record. |
| LastName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe contact’s last name. |
| LastStatusChangedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of who or what last changed the record’s Clean Status field value: a Salesforce user or a Clean job. |
| LastStatusChangedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the record’s Clean Status field value was last changed. |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Longitude to specify the precise geolocation of a billing address. Data not currently provided. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Latitude to specify the precise geolocation of a billing address. Data not currently provided. |
| Name | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionField label is Contact Clean Info Name. The name of the contact. Maximum size is 255 characters. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number for the contact. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the contact. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the contact. |
| Street | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the contact. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe contact’s title. |

## Usage

Developers can create triggers that read the Contact Clean Info fields to help automate the cleaning or related processing of contact records.

Create a customized set of Title field values. Use triggers to map values from fields on imported or cleaned records onto a standard set of values.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactCleanInfoChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- ContactCleanInfoChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
