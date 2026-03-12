---
title: "Data Cloud Query Profile Parameters"
domain: rest-api
topic: data-cloud-query-profile-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.386Z
estimatedTokens: 707
keywords: [Data, Cloud, Query, Profile, Unified, allow, leverage, Salesforce, REST, API, endpoint, execute, SOQL, queries, against, Source, objects, Model, within, org.]
---

# Data Cloud Query Profile Parameters

> Data Cloud Query and Unified Profile parameters allow you to leverage Salesforce REST
		API Query endpoint to execute SOQL queries against the Unified Profile, Data Source objects,
		or Data Model objects within your org. This functionality is supported using API version
		51.0 or later.

# Data Cloud Query Profile Parameters

Data Cloud Query and Unified Profile parameters allow you to leverage Salesforce REST API Query endpoint to execute SOQL queries against the Unified Profile, Data Source objects, or Data Model objects within your org. This functionality is supported using API version 51.0 or later.

For general information about using the Query REST call, see [Execute a SOQL Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)") and [Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm "HTML (New Window)").

## Supported SOQL Parameters

The following SOQL parameters are supported for use with Data Cloud:

-   SELECT statement on a single object
-   SELECT clause: count()
-   SOQL WHERE clause: contains operators
-   SOQL LIKE
-   SOQL LIMIT clause

    The default limit is set to 100. The max limit is 2,000 records in a single call.

-   SOQL OFFSET clause
-   SOQL ORDER BY clause

## SOQL Limitations

The following queries are not supported for use with Data Cloud:

-   SOQL Subqueries
-   SELECT clause: aggregate functions
-   SELECT clause: date functions
-   SOQL HAVING clause

## Sample Queries

| Use Case | Queries |
| --- | --- |
| Data Preview:Examine data that has been ingested into a data lake object. | Get Email Click Events SELECT SubscriberKey__c, EngagementChannel__c, EmailName__c, SubjectLine__c FROM sfmc_email_engagement_click_{EID}__dll LIMIT =100 |
| Consent Lookup:Retrieve Individual IDs from Contact Point Data Model objects based on email address, phone number, or first and last name. | Get Individual IDs by Email AddressSELECT PartyId__c FROM ContactPointEmail__dlm WHERE EmailAddress__c=’jjones@email.com’ LIMIT =100Get Individual IDs by Phone Number SELECT PartyId__c FROM ContactPointPhone__dlm WHERE TelephoneNumber__c=’555-123-4567’ LIMIT =100Get Individual IDs by Name SELECT IndividualId__c FROM Individual__dlm WHERE FirstName__c=’Jimmy’ AND LastName__c=’Smith’ LIMIT =100 |
| Unified Profile Lookup:Retrieve Unified Individual and Unified Contact Points by Source Record Id. | Step 1:Get Unified Record Id by Source Record IdSELECT UnifiedRecordId__c FROM IndividualIdentityLink__dlm WHERE SourceRecordID__c='{sourceID}' LIMIT =100Step 2:Query Unified Individual by Unified Profile IDSELECT FirstName__c, LastName__c FROM UnifiedIndividual__dlm WHERE Id__c='{UnifiedRecordId__c}' LIMIT =100Step 3:Query Unified Contact Point Details by Unified Profile IDUnified Contact Point Email SELECT EmailAddress__c FROM UnifiedContactPointEmail__dlm WHERE PartyId__c={UnifiedRecordId__c} LIMIT =100Unified Contact Point Phone SELECT TelephoneNumber__c FROM UnifiedContactPointPhone__dlm WHERE PartyId__c={UnifiedRecordId__c} LIMIT =100 |
