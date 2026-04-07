---
title: "Check the Results of an API Call"
domain: mc-apis
topic: check-the-results-of-an-api-call
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.551Z
estimatedTokens: 396
keywords: [Check, Results, API, Call, checking, Why, How, Sample, NET, Code]
---

# Check the Results of an API Call

> This page contains information  about checking the results of an API call.

# Check the Results of an API Call

This page contains information about checking the results of an API call.

## Why Check the Results of an API Call

After making an API call, you need to check the results of that call to determine whether it was successful and possibly take action based on the success or failure of the call.

## How to Check the Results of an API Call

Use the sample code below as a model for your own call.

### Sample .NET Code

```apex
public static bool CheckResults(string status, Marketing Cloud.Integration.WSDL.CreateResult[] results, out string error, out string newID)
{
    error = null;
    newID = null;
    // If no results, then return true
    if ((results == null) || (results.Length == 0))
    {
        return true;
    }
    //Check the status
    if (status.Equals("OK"))
    {
        return true;
    }
    // Check the results
    for (int i = 0; i < results.Length; i++)
    {
        if (results[i].StatusCode.Equals("OK"))
        {// The status is OK so get the ID
            if (results[i].NewID > 0)
                newID = results[i].NewID.ToString();
            else if (!string.IsNullOrEmpty(results[i].NewObjectID))
                newID = results[i].NewObjectID;
    }
    else
    {// The status is something else so get the error
            if (!string.IsNullOrEmpty(results[i].StatusMessage))
            {
                    error = results[i].StatusMessage;
            }
        }
    }
    // Return true if we have an ID and no error
    return (!string.IsNullOrEmpty(newID) && string.IsNullOrEmpty(error));
}
```
