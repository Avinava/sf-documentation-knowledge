---
title: "Data Differences in Event Fields"
domain: change-data-capture
topic: data-differences-in-event-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.514Z
estimatedTokens: 1647
keywords: [Data, Differences, Event, updated, text, sent, diff, SHA-256, hash, unified]
---

# Data Differences in Event Fields

> When the updated text field value is sent as a diff, it contains the SHA-256 hash value
    and data differences in the unified diff format.

# Data Differences in Event Fields

When the updated text field value is sent as a diff, it contains the SHA-256 hash value and data differences in the unified diff format.

The field whose data is sent as a unified diff contains a value in this format.

```

```

## Example

In a Pub/Sub API client, the field contains the unified diff value in this format.

```

```

And the fields whose values are sent as a unified diff are listed in diffFields in ChangeEventHeader.

In a Streaming API (CometD) client, the field contains the diff subfield, which contains the unified diff value.

```

```

This change event is received in a Pub/Sub API client after the Description field with more than 1,000 characters is updated for an account. The Description field contains the hash value after the +++ prefix followed by the data differences.

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "0015f00002JUWMVAA5" \], "changeType": "UPDATE", "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", "transactionKey": "0000654a-b07c-5852-d65f-47dc5ecd631d", "sequenceNumber": 1, "commitTimestamp": 1714149392000, "commitNumber": 1100583868458, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[ "0x010000" \], "changedFields": \[ "0x410000" \] }, "Name": null, "Type": null, "ParentId": null, "BillingAddress": null, "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": "--- +++ 682b8747ccdb93b546e7bbe479b27d26ec7c38ccabb76cdd8308c6595492bffc @@ -2,1 +2,1 @@ -Business applications are moving to the cloud. It’s not just a fad—the shift from traditional software models to the Internet has steadily gained momentum over the last 10 years. +Business apps are moving to the cloud. It’s not just a fad—the shift from traditional software models to the Internet has steadily gained momentum over the last 10 years. @@ -7,1 +7,1 @@ -As cloud computing grows in popularity, thousands of companies are simply rebranding their non-cloud products and services as “cloud computing.” Always dig deeper when evaluating cloud offerings. +As cloud computing grows in popularity, thousands of companies are simply rebranding their non-cloud products and services as “cloud computing.” Always dig deeper when evaluating cloud offerings. And keep in mind that if you have to buy and manage hardware and software, what you’re looking at isn’t really cloud computing but a false cloud.", "Rating": null, "Site": null, "OwnerId": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": 1714149392000, "LastModifiedById": null, "Jigsaw": null, "JigsawCompanyId": null, "CleanStatus": null, "AccountSource": null, "DunsNumber": null, "Tradestyle": null, "NaicsCode": null, "NaicsDesc": null, "YearStarted": null, "SicDesc": null, "DandbCompanyId": null, "OperatingHoursId": null, "CustomerPriority\_\_c": null, "SLA\_\_c": null, "Active\_\_c": null, "NumberofLocations\_\_c": null, "UpsellOpportunity\_\_c": null, "SLASerialNumber\_\_c": null, "SLAExpirationDate\_\_c": null }

The updates made to the diff field are the following.

-   In the paragraph starting with “Business applications,” the word “applications” was replaced with “apps.”
-   In the paragraph starting with “As cloud computing grows,”, one sentence was appended at the end of the paragraph: “And keep in mind that if you have to buy and manage hardware and software, what you’re looking at isn’t really cloud computing but a false cloud.”

This event for the account creation shows the original and full values in the Description field before it was updated. If you generate the SHA-256 hash on the full value, you get the same value sent in the account update event (682b8747ccdb93b546e7bbe479b27d26ec7c38ccabb76cdd8308c6595492bffc).

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "0015f00002JUWMVAA5" \], "changeType": "CREATE", "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", "transactionKey": "0000653e-941c-2eab-33e9-5459293f4b89", "sequenceNumber": 1, "commitTimestamp": 1714149340000, "commitNumber": 1100583170994, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Name": "Acme", "Type": null, "ParentId": null, "BillingAddress": null, "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": "Everyone is talking about “the cloud.” But what does it mean?\\r Business applications are moving to the cloud. It’s not just a fad—the shift from traditional software models to the Internet has steadily gained momentum over the last 10 years.\\r Cloud computing: a better way\\r With cloud computing, you eliminate headaches because you’re not managing hardware and software—that’s the responsibility of an experienced vendor like Salesforce. The shared infrastructure means it works like a utility: you only pay for what you need, upgrades are automatic, and scaling up or down is easy.\\r Cloud-based apps can be up and running in days or weeks, and they cost less. With a cloud app, you just open a browser, log in, customize the app, and start using it.\\r Businesses are running all kinds of apps in the cloud, like customer relationship management (CRM), HR, accounting, and much more. Some of the world’s largest companies moved their applications to the cloud with Salesforce after rigorously testing the security and reliability of our infrastructure.\\r As cloud computing grows in popularity, thousands of companies are simply rebranding their non-cloud products and services as “cloud computing.” Always dig deeper when evaluating cloud offerings.", "Rating": null, "Site": null, "OwnerId": "0055f000005mc66AAA", "CreatedDate": 1714149340000, "CreatedById": "0055f000005mc66AAA", "LastModifiedDate": 1714149340000, "LastModifiedById": "0055f000005mc66AAA", "Jigsaw": null, "JigsawCompanyId": null, "CleanStatus": "Pending", "AccountSource": null, "DunsNumber": null, "Tradestyle": null, "NaicsCode": null, "NaicsDesc": null, "YearStarted": null, "SicDesc": null, "DandbCompanyId": null, "OperatingHoursId": null, "CustomerPriority\_\_c": null, "SLA\_\_c": null, "Active\_\_c": null, "NumberofLocations\_\_c": null, "UpsellOpportunity\_\_c": null, "SLASerialNumber\_\_c": null, "SLAExpirationDate\_\_c": null }

## Code Examples

```
"--- 
+++ <hash_value>
 
    (Changes)"
```

```
"<Field_Name>": "--- 
+++ <hash_value>
 
    (Changes)"
}
```

```
"<Field_Name>": {
      "diff": "--- 
+++ <hash_value>
 
               (Changes)"
}
```
