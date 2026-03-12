---
title: "LeadCleanInfo"
domain: object-reference
topic: leadcleaninfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.611Z
estimatedTokens: 3647
keywords: [LeadCleanInfo, Stores, metadata, Data.com, Clean, uses, determine, lead, record’s, status, Helps, automate, cleaning, processing, records]
---

# LeadCleanInfo

> Stores the metadata Data.com Clean uses to determine a lead
      record’s clean status. Helps you automate the cleaning or related processing of lead
      records.

# LeadCleanInfo

Stores the metadata Data.com Clean uses to determine a lead record’s clean status. Helps you automate the cleaning or related processing of lead records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

Lead Clean Info provides a snapshot of the data in your Salesforce lead record and its matched Data.com record at the time the Salesforce record was cleaned.

Lead Clean Info includes a number of bit vector fields, whose component fields each correspond to individual object fields and provide related data or status information about those fields. For example, the bit vector field IsDifferent has an IsDifferentTitle field. If the IsDifferentTitle field’s value is False, that means the Title field value is *the same* on the Salesforce lead record and its matched Data.com record.

LeadCleanInfo bit vector fields include:

-   CleanedBy indicates who (a user) or what (a Clean job) cleaned the lead record.
-   IsDifferent indicates whether or not a field on the lead record has a value that differs from the corresponding field on the matched Data.com record.
-   IsFlaggedWrong indicates whether or not a field on the lead record has a value that is flagged as wrong to Data.com.
-   IsReviewed indicates whether or not a field on the lead record is in a Reviewed state, which means that the value was reviewed but not accepted..

Their individual bits are defined here

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address. Read-only. See Address Compound Fields for details on compound address fields. |
| AnnualRevenue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionEstimated annual revenue of the lead. |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the lead. |
| CleanedByJob | TypebooleanPropertiesFilterDescriptionIndicates whether the lead record was cleaned by a Data.com Clean job (true) or not (false). |
| CleanedByUser | TypebooleanPropertiesFilterDescriptionIndicates whether the lead record was cleaned by a Salesforce user (true) or not (false). |
| CompanyDunsNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Data Universal Numbering System (D-U-N-S) number is a unique, nine-digit number assigned to every business location in the Dun & Bradstreet database that has a unique, separate, and distinct operation. D-U-N-S numbers are used by industries and organizations around the world as a global standard for business identification and tracking. |
| CompanyName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the company. |
| ContactStatusDataDotCom | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe status of the contact associated with the lead per Data.com. Values are: Contact is Active per Data.com, Phone is Wrong per Data.com , Email is Wrong per Data.com, Phone and Email are Wrong per Data.com, Contact Not at Company per Data.com, Contact is Inactive per Data.com, Company this contact belongs to is out of business per Data.com, Company this contact belongs to never existed per Data.com or Email address is invalid per Data.com. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the lead. |
| DandBCompanyDunsNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe D-U-N-S Number on the D&B Company record (if any) that is linked to the lead. |
| DataDotComCompanyId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID Data.com maintains for the company associated with the lead. |
| DataDotComId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID Data.com maintains for the contact associated with the lead. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe lead’s email address. |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe lead’s first name. |
| Industry | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe industry the lead belongs to. |
| IsDifferentAnnualRevenue | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s AnnualRevenue field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCity | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s City field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCompanyDunsNumber | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Company D-U-N-S Number field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCompanyName | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Company Name field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCountry | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Country field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCountryCode | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Country Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentDandBCompanyDunsNumber | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s D&B Company D-U-N-S Number field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentEmail | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Email field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentFirstName | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s First Name field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentIndustry | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Industry field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentLastName | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Last Name field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentNumberOfEmployees | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s No. of Employees field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentPhone | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Phone field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentPostalCode | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Postal Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentState | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s State field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentStateCode | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s State Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentStreet | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Street field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentTitle | TypebooleanPropertiesFilterDescriptionIndicates whether the lead’s Title field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsFlaggedWrongAddress | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Address field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongAnnualRevenue | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Annual Revenue field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongCompanyDunsNumber | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Company D-U-N-S Number field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongCompanyName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Company Name field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongEmail | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Email field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongIndustry | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Industry field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Name field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongNumberOfEmployees | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s No. of Employees field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongPhone | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Phone field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongTitle | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Title field value is flagged as wrong to Data.com (true) or not (false). |
| IsInactive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the lead has been reported to Data.com as Inactive (true) or not (false). |
| IsReviewedAddress | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Address field value is in a Reviewed state (true) or not (false). |
| IsReviewedAnnualRevenue | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Annual Revenue field value is in a Reviewed state (true) or not (false). |
| IsReviewedCompanyDunsNumber | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Company D-U-N-S Number field value is in a Reviewed state (true) or not (false). |
| IsReviewedCompanyName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Company Name field value is in a Reviewed state (true) or not (false). |
| IsReviewedDandBCompanyDunsNumber | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s D&B Company D-U-N-S Number field value is in a Reviewed state (true) or not (false). |
| IsReviewedEmail | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Email field value is in a Reviewed state (true) or not (false). |
| IsReviewedIndustry | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Industry field value is in a Reviewed state (true) or not (false). |
| IsReviewedName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Name field value is in a Reviewed state (true) or not (false). |
| IsReviewedNumberOfEmployees | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s No. of Employees field value is in a Reviewed state (true) or not (false). |
| IsReviewedPhone | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Phone field value is in a Reviewed state (true) or not (false). |
| IsReviewedTitle | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the lead’s Title field value is in a Reviewed state (true) or not (false). |
| LastMatchedDate | TypedateTimePropertiesFilter, SortDescriptionThe date the lead record was last matched and linked to a Data.com record. |
| LastName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe lead’s last name. |
| LastStatusChangedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of who or what last changed the record’s Clean Status field value: a Salesforce user or a Clean job. |
| LastStatusChangedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the record’s Clean Status field value was last changed. |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Longitude to specify the precise geolocation of a billing address. Data not currently provided. |
| LeadId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique, system-generated ID assigned when the lead record was created. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Latitude to specify the precise geolocation of a billing address. Data not currently provided. |
| Name | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionField label is Lead Clean Info Name. The name of the lead. Maximum size is 255 characters. |
| NumberOfEmployees | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of employees working at the lead. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number for the lead. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the lead. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the lead. |
| Street | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the lead. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe lead’s title. |

## Usage

Developers can create triggers that read the Lead Clean Info fields to help automate the cleaning or related processing of lead records.

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
