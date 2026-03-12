---
title: "Change Events for Lead Conversion"
domain: change-data-capture
topic: change-events-for-lead-conversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.697Z
estimatedTokens: 1982
keywords: [Change, Events, Lead, Conversion, Converting, results, creation, account, contact, optionally, opportunity, event, includes, specific]
---

# Change Events for Lead Conversion

> Converting a lead results in the creation of an account, a contact, and optionally an
    opportunity, and also a lead update. When converting a lead, the change event for the lead
    update includes fields specific to the conversion.

# Change Events for Lead Conversion

Converting a lead results in the creation of an account, a contact, and optionally an opportunity, and also a lead update. When converting a lead, the change event for the lead update includes fields specific to the conversion.

These fields are included in the lead update change event for a lead conversion.

| Field | Description |
| --- | --- |
| Status | The lead conversion status. Possible status values are in the LeadStatus standard object. |
| IsConverted | Indicates whether the lead was converted (true). |
| ConvertedDate | The date of the lead conversion. ConvertedDate doesn’t include the time. |
| ConvertedAccountId | The ID of the account created in the lead conversion. |
| ConvertedContactId | The ID of the contact created in the lead conversion. |
| ConvertedOpportunityId | The ID of the opportunity created in the lead conversion. |

The change event for the lead update doesn't include the LastModifiedDate field.

For an example lead update change event for a lead conversion, see [Lead Update Change Event](#lead_change_event) in the Example section.

## Example

These example change events are generated when converting a lead. The order of the change events corresponds to the sequence of operations: the creation of an account, contact, opportunity, and the lead update. The sequenceNumber field in each change event denotes the sequence of the operations in the same transaction.

**Account Create Change Event**

{ "ChangeEventHeader": { **"entityName": "Account",** "recordIds": \[ "0015f00002JUX1JAAX" \], **"changeType": "CREATE",** "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", **"transactionKey": "00006948-0ac9-7da3-edb3-ea0e31b2334a",** **"sequenceNumber": 1,** "commitTimestamp": 1714153779000, "commitNumber": 1100638524517, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Name": "Cadinal Inc.", "Type": null, "ParentId": null, "BillingAddress": { "Street": null, "City": null, "State": "IL", "PostalCode": null, "Country": "USA", "Latitude": null, "Longitude": null, "GeocodeAccuracy": null }, "ShippingAddress": null, "Phone": "(847) 262-5000", "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": "0055f000005mc66AAA", "CreatedDate": 1714153779000, "CreatedById": "0055f000005mc66AAA", "LastModifiedDate": 1714153779000, "LastModifiedById": "0055f000005mc66AAA", "Jigsaw": null, "JigsawCompanyId": null, "CleanStatus": "Pending", "AccountSource": "Web", "DunsNumber": null, "Tradestyle": null, "NaicsCode": null, "NaicsDesc": null, "YearStarted": null, "SicDesc": null, "DandbCompanyId": null, "OperatingHoursId": null, "CustomerPriority\_\_c": null, "SLA\_\_c": null, "Active\_\_c": null, "NumberofLocations\_\_c": null, "UpsellOpportunity\_\_c": null, "SLASerialNumber\_\_c": null, "SLAExpirationDate\_\_c": null }

**Contact Create Change Event**

{ "ChangeEventHeader": { **"entityName": "Contact",** "recordIds": \[ "0035f00002EztxDAAR" \], **"changeType": "CREATE",** "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", **"transactionKey": "00006948-0ac9-7da3-edb3-ea0e31b2334a",** **"sequenceNumber": 2,** "commitTimestamp": 1714153779000, "commitNumber": 1100638524517, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "AccountId": "0015f00002JUX1JAAX", "Name": { "Salutation": null, "FirstName": "Brenda", "LastName": "Mcclure" }, "OtherAddress": null, "MailingAddress": { "Street": null, "City": null, "State": "IL", "PostalCode": null, "Country": "USA", "Latitude": null, "Longitude": null, "GeocodeAccuracy": null }, "Phone": "(847) 262-5000", "Fax": null, "MobilePhone": null, "HomePhone": null, "OtherPhone": null, "AssistantPhone": null, "ReportsToId": null, "Email": "brenda@cardinal.net", "Title": "CFO", "Department": null, "AssistantName": null, "LeadSource": "Web", "Birthdate": null, "Description": null, "OwnerId": "0055f000005mc66AAA", "HasOptedOutOfEmail": null, "HasOptedOutOfFax": null, "DoNotCall": null, "CreatedDate": 1714153779000, "CreatedById": "0055f000005mc66AAA", "LastModifiedDate": 1714153779000, "LastModifiedById": "0055f000005mc66AAA", "LastCURequestDate": null, "LastCUUpdateDate": null, "EmailBouncedReason": null, "EmailBouncedDate": null, "Jigsaw": null, "JigsawContactId": null, "CleanStatus": "Pending", "IndividualId": null, "Pronouns": null, "GenderIdentity": null, "Level\_\_c": null, "Languages\_\_c": null }

**Opportunity Create Change Event**

{ "ChangeEventHeader": { **"entityName": "Opportunity",** "recordIds": \[ "0065f00000UloqVAAR" \], **"changeType": "CREATE",** "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", **"transactionKey": "00006948-0ac9-7da3-edb3-ea0e31b2334a",** **"sequenceNumber": 3,** "commitTimestamp": 1714153779000, "commitNumber": 1100638524517, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "AccountId": "0015f00002JUX1JAAX", "IsPrivate": false, "Name": "Cadinal Inc.-", "Description": null, "StageName": "Prospecting", "Amount": null, "Probability": 10, "ExpectedRevenue": null, "TotalOpportunityQuantity": null, "CloseDate": 1719705600000, "Type": null, "NextStep": null, "LeadSource": "Web", "IsClosed": false, "IsWon": false, "ForecastCategory": "Pipeline", "ForecastCategoryName": "Pipeline", "CampaignId": null, "HasOpportunityLineItem": false, "Pricebook2Id": null, "OwnerId": "0055f000005mc66AAA", "CreatedDate": 1714153779000, "CreatedById": "0055f000005mc66AAA", "LastModifiedDate": 1714153779000, "LastModifiedById": "0055f000005mc66AAA", "LastStageChangeDate": null, "ContactId": null, "ContractId": null, "LastAmountChangedHistoryId": null, "LastCloseDateChangedHistoryId": null, "DeliveryInstallationStatus\_\_c": null, "TrackingNumber\_\_c": null, "OrderNumber\_\_c": null, "CurrentGenerators\_\_c": null, "MainCompetitors\_\_c": null }

**Lead Update Change Event**

{ "ChangeEventHeader": { **"entityName": "Lead",** "recordIds": \[ "00Q5f000005bwLFEAY" \], **"changeType": "UPDATE",** "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", **"transactionKey": "00006948-0ac9-7da3-edb3-ea0e31b2334a",** **"sequenceNumber": 4,** "commitTimestamp": 1714153780000, "commitNumber": 1100638524517, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[ "0x08F81000" \] }, "Name": null, "Title": null, "Company": null, "Address": null, "Phone": null, "MobilePhone": null, "Fax": null, "Email": null, "Website": null, "Description": null, "LeadSource": null, "Status": "Closed - Converted", "Industry": null, "Rating": null, "AnnualRevenue": null, "NumberOfEmployees": null, "OwnerId": null, "HasOptedOutOfEmail": null, "IsConverted": true, "ConvertedDate": 1714089600000, "ConvertedAccountId": "0015f00002JUX1JAAX", "ConvertedContactId": "0035f00002EztxDAAR", "ConvertedOpportunityId": "0065f00000UloqVAAR", "IsUnreadByOwner": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": 1714153780000, "LastModifiedById": null, "DoNotCall": null, "HasOptedOutOfFax": null, "LastTransferDate": null, "Jigsaw": null, "JigsawContactId": null, "CleanStatus": null, "CompanyDunsNumber": null, "DandbCompanyId": null, "EmailBouncedReason": null, "EmailBouncedDate": null, "IndividualId": null, "Pronouns": null, "GenderIdentity": null, "SICCode\_\_c": null, "ProductInterest\_\_c": null, "Primary\_\_c": null, "CurrentGenerators\_\_c": null, "NumberofLocations\_\_c": null }

The changedFields bitmap field contains the fields that were changed for the lead record. These are the fields contained in changedFields after the Pub/Sub API client decoded this field.

```

```

## Code Examples

```
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - ============================
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class -        Changed Fields       
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - ============================
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - Status
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - IsConverted
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - ConvertedDate
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - ConvertedAccountId
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - ConvertedContactId
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - ConvertedOpportunityId
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - LastModifiedDate
2024-04-26 10:49:43,114 [grpc-default-executor-1] java.lang.Class - ============================
```
