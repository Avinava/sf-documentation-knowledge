---
title: "sObjects That Don’t Support DML Operations"
domain: apex-guide
topic: sobjects-that-dont-support-dml-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.224Z
estimatedTokens: 521
keywords: [sObjects, Don’t, Support, DML, Operations, organization, contains, standard, objects, provided, Salesforce, custom, created., accessed, Apex, instances, sObject, data, type., query]
---

# sObjects That Don’t Support DML Operations

> Your organization contains standard objects provided by Salesforce and custom objects that
         you created. These objects can be accessed in Apex as instances of the sObject data type.
         You can query these objects and perform DML operations on them. However, some standard
         objec

# sObjects That Don’t Support DML Operations

Your organization contains standard objects provided by Salesforce and custom objects that you created. These objects can be accessed in Apex as instances of the sObject data type. You can query these objects and perform DML operations on them. However, some standard objects don’t support DML operations although you can still obtain them in queries. The following is a non-exhaustive list of such objects:

-   AccountTerritoryAssignmentRule
-   AccountTerritoryAssignmentRuleItem
-   ApexComponent
-   ApexPage
-   BusinessHours
-   BusinessProcess
-   CategoryNode
-   CurrencyType
-   DatedConversionRate
-   NetworkMember (allows update only)
-   ProcessInstance
-   Profile
-   RecordType
-   SelfServiceUser
-   StaticResource
-   Territory2
-   UserAccountTeamMember
-   UserPreference
-   UserTerritory
-   WebLink

The following are special cases of DML operations on objects.

-   If an Account record has a record type of Person Account, the Name field can’t be modified with DML operations.
-   All standard and custom objects can also be accessed through the SOAP API. ProcessInstance is an exception. You can’t create, update, or delete ProcessInstance in the SOAP API.
-   DML operations aren't supported on Data Cloud data model objects (DMOs). For details on using Apex with Data Cloud objects, see [Data Cloud in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/DataCloudInApex.htm).
-   To determine if DML is supported on your specific object, use the Schema.describeSObjects()method as shown in this sample code.

    // This example describes the ApexPage object. Replace it with your // objects(s) in the results list to check if DML is permitted. List<Schema.DescribeSobjectResult> results = Schema.describeSObjects(new List<string> {'ApexPage'}, SObjectDescribeOptions.DEFERRED); DescribeSObjectResult d = results\[0\]; System.debug('isCreateable():' + d.isCreateable()); System.debug('isUpdateable():' + d.isUpdateable()); System.debug('isQueryable(): ' + d.isQueryable());
