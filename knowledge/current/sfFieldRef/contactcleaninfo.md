---
title: "ContactCleanInfo"
domain: sfFieldRef
topic: contactcleaninfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:53.800Z
estimatedTokens: 986
keywords: [ContactCleanInfo, Stores, metadata, Data.com, Clean, uses, determine, contact, record’s, status, Helps, automate, cleaning, processing, records]
---

# ContactCleanInfo

> Stores the metadata Data.com Clean uses to determine a contact
      record’s clean status. Helps you automate the cleaning or related processing of contact
      records. ContactCleanInfo includes a number of bit vector fields.

# ContactCleanInfo

Stores the metadata Data.com Clean uses to determine a contact record’s clean status. Helps you automate the cleaning or related processing of contact records. ContactCleanInfo includes a number of bit vector fields.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactCleanInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactcleaninfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| City | City | string |  | 40 |  |  |
| CleanedByJob | Cleaned by Job | boolean |  |  |  |  |
| CleanedByUser | Cleaned by User | boolean |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| ContactStatusDataDotCom | Contact Status per Data.com | picklist |  | 255 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataDotComId | Data.com ID | string |  | 20 |  |  |
| Email | Email | email |  | 80 |  |  |
| FirstName | First Name | string |  | 255 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Contact Clean Info ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDifferentCity | City is Different | boolean |  |  |  |  |
| IsDifferentCountry | Country is Different | boolean |  |  |  |  |
| IsDifferentCountryCode | Country Code is Different | boolean |  |  |  |  |
| IsDifferentEmail | Email is Different | boolean |  |  |  |  |
| IsDifferentFirstName | First Name is Different | boolean |  |  |  |  |
| IsDifferentLastName | Last Name is Different | boolean |  |  |  |  |
| IsDifferentPhone | Phone is Different | boolean |  |  |  |  |
| IsDifferentPostalCode | ZIP is Different | boolean |  |  |  |  |
| IsDifferentState | State is Different | boolean |  |  |  |  |
| IsDifferentStateCode | State Code is Different | boolean |  |  |  |  |
| IsDifferentStreet | Street is Different | boolean |  |  |  |  |
| IsDifferentTitle | Title is Different | boolean |  |  |  |  |
| IsFlaggedWrongAddress | Address is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongEmail | Email is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongName | Name is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongPhone | Phone is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongTitle | Title is Flagged Wrong | boolean |  |  |  |  |
| IsInactive | Contact Status in Salesforce | boolean |  |  |  |  |
| IsReviewedAddress | Address is Reviewed | boolean |  |  |  |  |
| IsReviewedEmail | Email is Reviewed | boolean |  |  |  |  |
| IsReviewedName | Name is Reviewed | boolean |  |  |  |  |
| IsReviewedPhone | Phone is Reviewed | boolean |  |  |  |  |
| IsReviewedTitle | Title is Reviewed | boolean |  |  |  |  |
| LastMatchedDate | Last Matched Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 255 |  |  |
| LastStatusChangedById | User ID | reference |  | 18 |  |  |
| LastStatusChangedDate | Last Status Changed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| Name | Contact Clean Info Name | string |  | 255 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PostalCode | Zip | string |  | 20 |  |  |
| State | State | string |  | 80 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 128 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
