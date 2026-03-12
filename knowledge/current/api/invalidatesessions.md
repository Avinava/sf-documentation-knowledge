---
title: "invalidateSessions()"
domain: api
topic: invalidatesessions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.347Z
estimatedTokens: 381
keywords: [invalidateSessions, Ends, sessions, sessionId, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# invalidateSessions()

> Ends one or more sessions specified by a sessionId.

# invalidateSessions()

Ends one or more sessions specified by a sessionId.

See [sessionId](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm#sessionid).

## Syntax

```

```

## Usage

Use this call to end one or more sessions.

You can also use [logout()](atlas.en-us.api.meta/api/sforce_api_calls_logout.htm "Ends the session of the logged-in user.") to end just one session, the session of the logged-in user.

## Sample Code—Java

This sample invalidates a set of sessions. The method in this sample takes an array of session IDs passed in as String values. The method then calls invalidateSessions() with this array and then checks the results for any errors.

```

```

## Sample Code—C#

This sample invalidates a set of sessions. The method in this sample takes an array of session IDs passed in as String values. The method then calls invalidateSessions() with this array and then checks the results for any errors.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sessionIds | string[] | One or more sessionId strings. Limit 200. You can obtain your sessionId from the SessionHeader. |

## Response

[InvalidateSessionsResult](atlas.en-us.api.meta/api/sforce_api_calls_invalidatesessions_result.htm "The invalidateSessions() call returns an array of LogoutResult objects.")\[\]

## Faults

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm "An extensive list of core data types and error-handling objects used in API calls.")

## Code Examples

```
InvalidateSessionsResult = connection.invalidateSessions(string[] sessionIds);
```

```apex
public void invalidateSessionsSample(String[] sessionIds) {
   try {
      InvalidateSessionsResult[] results;
      results = connection.invalidateSessions(sessionIds);
      for (InvalidateSessionsResult result : results) {
         // Check results for errors
         if (!result.isSuccess()) {
            if (result.getErrors().length > 0) {
               System.out.println("Status code: "
                     + result.getErrors()[0].getStatusCode());
               System.out.println("Error message: "
                     + result.getErrors()[0].getMessage());
            }
         } else {
            System.out.println("Success.");
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void invalidateSessionsSample(string[] sessionIds)
{
   try
   {
      InvalidateSessionsResult[] results;
      results = binding.invalidateSessions(sessionIds);
      foreach (InvalidateSessionsResult result in results)
      {
         // Check results for errors
         if (!result.success)
         {
            if (result.errors.Length > 0)
            {
               Console.WriteLine("Status code: " +
                  result.errors[0].statusCode);
               Console.WriteLine("Error message: " +
                  result.errors[0].message);
            }                  
         }
         else
         {
            Console.WriteLine("Success.");
         }
      }
   }
   catch (SoapException e)
   {
      Console.WriteLine("An unexpected error has occurred: " +
                                 e.Message + "
" + e.StackTrace);
   }
}
```

## Related Topics

- sessionId (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
- InvalidateSessionsResult (atlas.en-us.api.meta/api/sforce_api_calls_invalidatesessions_result.htm)
- logout() (atlas.en-us.api.meta/api/sforce_api_calls_logout.htm)
- SessionHeader (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
