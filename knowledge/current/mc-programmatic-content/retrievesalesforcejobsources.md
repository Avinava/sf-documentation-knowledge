---
title: "RetrieveSalesforceJobSources"
domain: mc-programmatic-content
topic: retrievesalesforcejobsources
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.332Z
estimatedTokens: 199
keywords: [RetrieveSalesforceJobSources, Function, Ordinal, numeric, **Overview**, **Syntax**]
---

# RetrieveSalesforceJobSources

> RetrieveSalesforceJobSources(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    null

# RetrieveSalesforceJobSources

## **Overview**

Returns a rowset with SourceID, SourceType, and IsInclusionSource columns from the job with the specified ID. This function works only with version 2 of the Salesforce integration with Marketing Cloud. This function does not return any information on the status of the job itself. For example, the function returns the same information from a completed job as it does from a job that was started and then canceled. Don't use this information as a guarantee that the send completed. Because this function returns data as a rowset, use Row() and Field() to evaluate the data.

### **Syntax**

RetrieveSalesforceJobSources(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | null |

Last Updated: Jun 8, 2021
