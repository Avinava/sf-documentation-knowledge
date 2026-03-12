---
title: "Creating and Undeleting a Person Account"
domain: change-data-capture
topic: creating-and-undeleting-a-person-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.706Z
estimatedTokens: 1228
keywords: [Creating, Undeleting, Person, Account, change, event, contact, record, includes, custom, standard, start, prefix]
---

# Creating and Undeleting a Person Account

> When creating or undeleting a person account, the account change event contains both
    account and contact fields. It contains account record fields and some fields from the contact
    record. The contact fields that the account change event includes are all custom contact fields
    and some standard contact fields, which start with the Person prefix.

# Creating and Undeleting a Person Account

When creating or undeleting a person account, the account change event contains both account and contact fields. It contains account record fields and some fields from the contact record. The contact fields that the account change event includes are all custom contact fields and some standard contact fields, which start with the Person prefix.

The contact change event contains all contact standard and custom fields. The contact change event doesn’t contain the account fields of the person account.

The Name field is included in both the account and contact change events for a new or undeleted person account.

## Example

These two change events are generated when a person account is created. The first event is for the Account standard object. The account change event contains the Name field, which is the person account name. This field is also included in the contact change event. The second event is for the Contact standard object. The contact has a custom field named CustomContactField\_\_c, which is part of both the contact and account change events. In the account change event, the contact custom field ends with the \_\_pc prefix.

// Change event for Account { "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "001ZL000001QS6mYAG" \], "changeType": "CREATE", "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", "transactionKey": "000a6a7b-b859-8ba4-2ab8-1a1babf66ff0", "sequenceNumber": 1, "commitTimestamp": 1714431097000, "commitNumber": 71542214535, "commitUser": "005ZL000000M0x1YAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Name": { "Salutation": "Ms.", "FirstName": "Martha", "LastName": "Brown" }, "Type": null, "RecordTypeId": "012ZL0000008Td4YAE", "ParentId": null, "BillingAddress": { "Street": "415 Mission Street", "City": "San Francisco", "State": "CA", "PostalCode": "94105", "Country": "US", "Latitude": null, "Longitude": null, "GeocodeAccuracy": null }, "ShippingAddress": null, "Phone": "(415) 555-1212", "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": "005ZL000000M0x1YAC", "CreatedDate": 1714431097000, "CreatedById": "005ZL000000M0x1YAC", "LastModifiedDate": 1714431097000, "LastModifiedById": "005ZL000000M0x1YAC", "PersonContactId": "003ZL000001EDrPYAW", "PersonMailingAddress": null, "PersonOtherAddress": null, "PersonMobilePhone": null, "PersonHomePhone": null, "PersonOtherPhone": null, "PersonAssistantPhone": null, "PersonEmail": null, "PersonTitle": null, "PersonDepartment": null, "PersonAssistantName": null, "PersonLeadSource": null, "PersonBirthdate": null, "PersonHasOptedOutOfEmail": null, "PersonHasOptedOutOfFax": null, "PersonDoNotCall": null, "PersonLastCURequestDate": null, "PersonLastCUUpdateDate": null, "PersonEmailBouncedReason": null, "PersonEmailBouncedDate": null, "PersonIndividualId": null, "PersonPronouns": null, "PersonGenderIdentity": null, "Jigsaw": null, "JigsawCompanyId": null, "AccountSource": null, "SicDesc": null, "CustomContactField\_\_pc": "ABC" } // Change event for Contact { "ChangeEventHeader": { "entityName": "Contact", "recordIds": \[ "003ZL000001EDrPYAW" \], "changeType": "CREATE", "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", "transactionKey": "000a6a7b-b859-8ba4-2ab8-1a1babf66ff0", "sequenceNumber": 2, "commitTimestamp": 1714431097000, "commitNumber": 71542214535, "commitUser": "005ZL000000M0x1YAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "AccountId": "001ZL000001QS6mYAG", "IsPersonAccount": true, "Name": { "Salutation": "Ms.", "FirstName": "Martha", "LastName": "Brown" }, "OtherAddress": null, "MailingAddress": null, "Phone": "(415) 555-1212", "Fax": null, "MobilePhone": null, "HomePhone": null, "OtherPhone": null, "AssistantPhone": null, "ReportsToId": null, "Email": null, "Title": null, "Department": null, "AssistantName": null, "LeadSource": null, "Birthdate": null, "Description": null, "OwnerId": "005ZL000000M0x1YAC", "HasOptedOutOfEmail": null, "HasOptedOutOfFax": null, "DoNotCall": null, "CreatedDate": 1714431097000, "CreatedById": "005ZL000000M0x1YAC", "LastModifiedDate": 1714431097000, "LastModifiedById": "005ZL000000M0x1YAC", "LastCURequestDate": null, "LastCUUpdateDate": null, "EmailBouncedReason": null, "EmailBouncedDate": null, "Jigsaw": null, "JigsawContactId": null, "IndividualId": null, "Pronouns": null, "GenderIdentity": null, "CustomContactField\_\_c": "ABC" }

#### See Also

-   [*Salesforce Help*: Person Account Fields (by Label Names)](https://help.salesforce.com/articleView?id=account_fields.htm#PersonAccountFieldsTitle&language=en_US "Salesforce Help: Person Account Fields (by Label Names) - HTML (New Window)")
