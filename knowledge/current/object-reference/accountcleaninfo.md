---
title: "AccountCleanInfo"
domain: object-reference
topic: accountcleaninfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.584Z
estimatedTokens: 5808
keywords: [AccountCleanInfo, Stores, metadata, Data.com, Clean, uses, determine, account, record’s, status, helps, automate, cleaning, processing, records]
---

# AccountCleanInfo

> Stores the metadata Data.com Clean uses to determine an account
            record’s clean status. AccountCleanInfo helps you automate the cleaning or
            related processing of account records.

# AccountCleanInfo

Stores the metadata Data.com Clean uses to determine an account record’s clean status. AccountCleanInfo helps you automate the cleaning or related processing of account records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

Account Clean Info provides a snapshot of the data in your Salesforce account record and its matched Data.com record at the time the Salesforce record was cleaned.

Account Clean Info includes a number of bit vector fields, whose component fields each correspond to individual object fields and provide related data or status information about those fields. For example, the bit vector field IsDifferent has an IsDifferentState field. If the IsDifferentState field’s value is False, that means the State field value is *the same* on the Salesforce account record and its matched Data.com record.

AccountCleanInfo bit vector fields include:

-   CleanedBy indicates who (a user) or what (a Clean job) cleaned the account record.
-   IsDifferent indicates whether or not a field on the account record has a value that differs from the corresponding field on the matched Data.com record.
-   IsFlaggedWrong indicates whether or not a field on the account record has a value that is flagged as wrong to Data.com.
-   IsReviewed indicates whether or not a field on the account record is in a Reviewed state, which means that the value was reviewed but not accepted.

Their individual bits are defined here.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique, system-generated ID assigned when the account record was created. |
| AccountSite | TypestringPropertiesFilter, Group, Nillable, SortDescriptionInformation about the account’s location, such as single location, headquarters, or branch. |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address. Read-only. See Address Compound Fields for details on compound address fields. |
| AnnualRevenue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionEstimated annual revenue of the account. |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the account. |
| CleanedByJob | TypebooleanPropertiesFilterDescriptionIndicates whether the account record was cleaned by a Data.com Clean job (true) or not (false). |
| CleanedByUser | TypebooleanPropertiesFilterDescriptionIndicates whether the account record was cleaned by a Salesforce user (true) or not (false). |
| CompanyName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the company. |
| CompanyStatusDataDotCom | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe status of the company per Data.com. Values are: Company is In Business per Data.com or Company is Out of Business per Data.com. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the account. |
| DandBCompanyDunsNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe D-U-N-S Number on the D&B Company record (if any) that is linked to the account. |
| DataDotComId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID Data.com maintains for the company. |
| Description | TypetextareaPropertiesNillableDescriptionA description of the account. |
| DunsNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Data Universal Numbering System (D-U-N-S) number is a unique, nine-digit number assigned to every business location in the Dun & Bradstreet database that has a unique, separate, and distinct operation. D-U-N-S numbers are used by industries and organizations around the world as a global standard for business identification and tracking. |
| DunsRightMatchConfidence | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe account’s DUNSRight confidence code. |
| DunsRightMatchGrade | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe account’s DUNSRight match grade. |
| Fax | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe account’s fax number. |
| Industry | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe industry the account belongs to. |
| IsDifferentAccountSite | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s AccountSite field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentAnnualRevenue | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s AnnualRevenue field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCity | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s City field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCompanyName | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s AccountName field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCountry | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Country field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentCountryCode | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Country Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentDandBCompanyDunsNumber | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s DandBCompanyID field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentDescription | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Description field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentDunsNumber | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s DunsNumber field value is different from the D-U-N-S Number on its matched Data.com record (true) or not (false). |
| IsDifferentFax | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Fax field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentIndustry | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Industry field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentNaicsCode | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s NaicsCode field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentNaicsDescription | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s NaicsDescription field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentNumberOfEmployees | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s NumberOf Employees field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentOwnership | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Ownership field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentPhone | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Phone field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentPostalCode | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s PostalCode field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentSic | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Sic field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentSicDescription | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s SicDescription field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentState | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s State field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentStateCode | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s State Code field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentStreet | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s State field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentTickerSymbol | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s TickerSymbol field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentTradestyle | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Tradestyle field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentWebsite | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s Website field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsDifferentYearStarted | TypebooleanPropertiesFilterDescriptionIndicates whether the account’s YearStarted field value is different from the corresponding value on its matched Data.com record (true) or not (false). |
| IsFlaggedWrongAccountSite | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s AccountSite field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongAddress | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Address field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongAnnualRevenue | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s AnnualRevenue field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongCompanyName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s CompanyName field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongDescription | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Description field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongDunsNumber | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s DunsNumber field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongFax | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Fax field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongIndustry | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Industry field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongNaicsCode | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s NaicsCode field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongNaicsDescription | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s NaicsDescription field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongNumberOfEmployees | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s NumberOfEmployees field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongOwnership | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Ownership field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongPhone | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Phone field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongSic | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Sic field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongSicDescription | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s SicDescription field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongTickerSymbol | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s TickerSymbol field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongTradestyle | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Tradestyle field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongWebsite | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Website field value is flagged as wrong to Data.com (true) or not (false). |
| IsFlaggedWrongYearStarted | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s YearStarted field value is flagged as wrong to Data.com (true) or not (false). |
| IsInactive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the account has been reported to Data.com as Inactive (true) or not (false). |
| IsReviewedAccountSite | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s AccountSite field value is in a Reviewed state (true) or not (false). |
| IsReviewedAddress | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Address field value is in a Reviewed state (true) or not (false). |
| IsReviewedAnnualRevenue | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s AnnualRevenue field value is in a Reviewed state (true) or not (false). |
| IsReviewedCompanyName | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s CompanyName field value is in a Reviewed state (true) or not (false). |
| IsReviewedDandBCompanyDunsNumber | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s DandBCompanyID field value is in a Reviewed state (true) or not (false). |
| IsReviewedDescription | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Description field value is in a Reviewed state (true) or not (false). |
| IsReviewedDunsNumber | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s DunsNumber field value is in a Reviewed state (true) or not (false). |
| IsReviewedFax | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Fax field value is in a Reviewed state (true) or not (false). |
| IsReviewedIndustry | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Industry field value is in a Reviewed state (true) or not (false). |
| IsReviewedNaicsCode | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s NaicsCode field value is in a Reviewed state (true) or not (false). |
| IsReviewedNaicsDescription | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s NaicsDescription field value is in a Reviewed state (true) or not (false). |
| IsReviewedNumberOfEmployees | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s NumberOfEmployees field value is in a Reviewed state (true) or not (false). |
| IsReviewedOwnership | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Ownership field value is in a Reviewed state (true) or not (false). |
| IsReviewedPhone | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Phone field value is in a Reviewed state (true) or not (false). |
| IsReviewedSic | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Sic field value is in a Reviewed state (true) or not (false). |
| IsReviewedSicDescription | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s SicDescription field value is in a Reviewed state (true) or not (false). |
| IsReviewedTickerSymbol | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s TickerSymbol field value is in a Reviewed state (true) or not (false). |
| IsReviewedTradestyle | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Tradestyle field value is in a Reviewed state (true) or not (false). |
| IsReviewedWebsite | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s Website field value is in a Reviewed state (true) or not (false). |
| IsReviewedYearStarted | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the account’s YearStarted field value is in a Reviewed state (true) or not (false). |
| LastMatchedDate | TypedateTimePropertiesFilter, SortDescriptionThe date the account record was last matched and linked to a Data.com record. |
| LastStatusChangedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of who or what last changed the record’s Clean Status field value: a Salesforce user or a Clean job. |
| LastStatusChangedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the record’s Clean Status field value was last changed. |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Longitude to specify the precise geolocation of a billing address. Data not currently provided. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with Latitude to specify the precise geolocation of a billing address. Data not currently provided. |
| NaicsCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe six-digit North American Industry Classification System (NAICS) code is the standard used by business and government to classify business establishments into industries, according to their economic activity for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. |
| NaicsDescription | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA brief description of an organization’s line of business, based on its NAICS code. |
| Name | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionField label is Account Clean Info Name. The name of the account. Maximum size is 255 characters. |
| NumberOfEmployees | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of employees working at the account. |
| Ownership | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionOwnership type for the account, for example Private, Public, or Subsidiary. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number for the account. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the account. |
| Sic | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStandard Industrial Classification code of the company’s main business categorization, for example, 57340 for Electronics. |
| SicDescription | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA brief description of an organization’s line of business, based on its SIC code. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the account. |
| Street | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of the account. |
| TickerSymbol | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe stock market symbol for the account. |
| Tradestyle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA name, different from its legal name, that an organization can use for conducting business. Similar to “Doing business as” (DBA). |
| Website | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe website of the account. |
| YearStarted | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe year the company was established or the year when current ownership or management assumed control of the company. |

## Usage

Administrators can modify a limited set of AccountCleanInfo fields from the Account Clean Info page.

Developers can create triggers that read the Account Clean Info fields to help automate the cleaning or related processing of account records. For example, you might create a trigger that reads the Clean Status field on the Account object. If an account record’s Clean Status field value is Different but the record has no Billing Street value, the trigger could update the record’s status to Not Compared.

Create triggers that read AccountCleanInfo fields to help automate the cleaning or related processing of account records. For example:

-   Keep account records’ status InSync if the only difference from matched records is the Phone format (for example, (415) 353-8000 on the account record versus 415 353 8000 on the matched Data.com record).

    ```

    ```

-   Create a customized set of Industry field values for accounts. Use triggers to map values from fields on imported or cleaned records onto a standard set of values.
-   Read the CleanStatus field value on the Account object. If that value is Different, but a Salesforce record has no street address value, update the record’s status to Not Compared.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountCleanInfoChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Code Examples

```
trigger AccountPhoneTrigger on Account (before update) {

   for (Account account: Trigger.new) {
       Account oldAccount = Trigger.oldMap.get(account.ID);
       if (account.CleanStatus == 'Different') {
           List <AccountCleanInfo> cleanInfo = [Select Id, IsDifferentPhone, IsReviewedPhone, Phone from AccountCleanInfo where AccountId = :account.Id];
           if (cleanInfo.size() > 0 && cleanInfo[0].IsDifferentPhone && cleanInfo[0].Phone.StartsWith('+')) {
               // if Data.com phone number is marked Different but starts with ‘+’, ignore this
               // and set the status to “Reviewed”
               AccountCleanInfo cleanInfoToUpdate = new AccountCleanInfo();
               cleanInfoToUpdate.Id = cleanInfo[0].Id;
               cleanInfoToUpdate.IsReviewedPhone = true;
               update cleanInfoToUpdate;
               account.CleanStatus = 'Reviewed';
           }
       }
   }
}
```

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- AccountCleanInfoChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
