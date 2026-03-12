---
title: "LeadCleanInfo"
domain: sfFieldRef
topic: leadcleaninfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:02.176Z
estimatedTokens: 1441
keywords: [LeadCleanInfo, Stores, metadata, Data.com, Clean, uses, determine, lead, record’s, status, Helps, automate, cleaning, processing, records]
---

# LeadCleanInfo

> Stores the metadata Data.com Clean uses to determine a lead
      record’s clean status. Helps you automate the cleaning or related processing of lead
      records.

# LeadCleanInfo

Stores the metadata Data.com Clean uses to determine a lead record’s clean status. Helps you automate the cleaning or related processing of lead records.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LeadCleanInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_leadcleaninfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| AnnualRevenue | Annual Revenue | currency |  |  | 18 | 0 |
| City | City | string |  | 40 |  |  |
| CleanedByJob | Cleaned by Job | boolean |  |  |  |  |
| CleanedByUser | Cleaned by User | boolean |  |  |  |  |
| CompanyDunsNumber | Company D-U-N-S Number | string |  | 9 |  |  |
| CompanyName | Company Name | string |  | 255 |  |  |
| ContactStatusDataDotCom | Contact Status per Data.com | picklist |  | 255 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DandBCompanyDunsNumber | D&B Company D-U-N-S Number | string |  | 9 |  |  |
| DataDotComCompanyId | Data.com Company ID | string |  | 20 |  |  |
| DataDotComId | Data.com ID | string |  | 20 |  |  |
| Email | Email | email |  | 80 |  |  |
| FirstName | First Name | string |  | 255 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Lead Clean Info ID | id |  | 18 |  |  |
| Industry | Industry | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDifferentAnnualRevenue | Annual Revenue is Different | boolean |  |  |  |  |
| IsDifferentCity | City is Different | boolean |  |  |  |  |
| IsDifferentCompanyDunsNumber | Company D-U-N-S Number is Different | boolean |  |  |  |  |
| IsDifferentCompanyName | Company Name is Different | boolean |  |  |  |  |
| IsDifferentCountry | Country is Different | boolean |  |  |  |  |
| IsDifferentCountryCode | Country Code is Different | boolean |  |  |  |  |
| IsDifferentDandBCompanyDunsNumber | D&B Company D-U-N-S Number is Different | boolean |  |  |  |  |
| IsDifferentEmail | Email is Different | boolean |  |  |  |  |
| IsDifferentFirstName | First Name is Different | boolean |  |  |  |  |
| IsDifferentIndustry | Industry is Different | boolean |  |  |  |  |
| IsDifferentLastName | Last Name is Different | boolean |  |  |  |  |
| IsDifferentNumberOfEmployees | Number of Employees is Different | boolean |  |  |  |  |
| IsDifferentPhone | Phone is Different | boolean |  |  |  |  |
| IsDifferentPostalCode | ZIP is Different | boolean |  |  |  |  |
| IsDifferentState | State is Different | boolean |  |  |  |  |
| IsDifferentStateCode | State Code is Different | boolean |  |  |  |  |
| IsDifferentStreet | Street is Different | boolean |  |  |  |  |
| IsDifferentTitle | Title is Different | boolean |  |  |  |  |
| IsFlaggedWrongAddress | Address is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongAnnualRevenue | Annual Revenue is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongCompanyDunsNumber | Company D-U-N-S Number is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongCompanyName | Company Name is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongEmail | Email is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongIndustry | Industry is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongName | Name is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongNumberOfEmployees | Number of Employees is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongPhone | Phone is Flagged Wrong | boolean |  |  |  |  |
| IsFlaggedWrongTitle | Title is Flagged Wrong | boolean |  |  |  |  |
| IsInactive | Contact Status in Salesforce | boolean |  |  |  |  |
| IsReviewedAddress | Address is Reviewed | boolean |  |  |  |  |
| IsReviewedAnnualRevenue | Annual Revenue is Reviewed | boolean |  |  |  |  |
| IsReviewedCompanyDunsNumber | Company D-U-N-S Number is Reviewed | boolean |  |  |  |  |
| IsReviewedCompanyName | Company Name is Reviewed | boolean |  |  |  |  |
| IsReviewedDandBCompanyDunsNumber | D&B Company D-U-N-S Number is Reviewed | boolean |  |  |  |  |
| IsReviewedEmail | Email is Reviewed | boolean |  |  |  |  |
| IsReviewedIndustry | Industry is Reviewed | boolean |  |  |  |  |
| IsReviewedName | Name is Reviewed | boolean |  |  |  |  |
| IsReviewedNumberOfEmployees | Number of Employees is Reviewed | boolean |  |  |  |  |
| IsReviewedPhone | Phone is Reviewed | boolean |  |  |  |  |
| IsReviewedTitle | Title is Reviewed | boolean |  |  |  |  |
| LastMatchedDate | Last Matched Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 255 |  |  |
| LastStatusChangedById | User ID | reference |  | 18 |  |  |
| LastStatusChangedDate | Last Status Changed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| LeadId | Lead ID | reference |  | 18 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| Name | Lead Clean Info Name | string |  | 255 |  |  |
| NumberOfEmployees | Number of Employees | int | 8 |  |  |  |
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
