---
title: "logout()"
domain: api
topic: logout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.402Z
estimatedTokens: 400
keywords: [logout, Ends, session, logged-in, user, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# logout()

> Ends the session of the logged-in user.

# logout()

Ends the session of the logged-in user.

## Syntax

```

```

## Usage

This call ends the session for the logged-in user issuing the call. No arguments are needed.

To end one or more sessions started by someone other than the logged-in user, see [invalidateSessions()](atlas.en-us.api.meta/api/sforce_api_calls_invalidatesessions.htm "Ends one or more sessions specified by a sessionId.").

## Sample Code—Java

This sample calls logout() to log the current user out and writes a message to the console.

```

```

## Sample Code—C#

This sample calls logout() to log the current user out and writes a message to the console.

```

```

## Arguments

This call uses no arguments. It ends the session for the logged-in user issuing the call, so no arguments are needed. The logged-in user is identified by the [sessionId](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm#sessionid) specified in the [SessionHeader](atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm "Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.") for this call.

## Response

Void is returned. Because failure of the call means that the session has already been logged out, no results are needed. Any unexpected error, such as system unavailability, throws an error that should be handled by your client application.

## Faults

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm "An extensive list of core data types and error-handling objects used in API calls.")

## Code Examples

```
connection.logout();
```

```apex
public void logoutSample() {
   try {
      connection.logout();
      System.out.println("Logged out.");
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void logoutSample()
{
   try
   {
      binding.logout();
      Console.WriteLine("Logged out.");
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

- invalidateSessions() (atlas.en-us.api.meta/api/sforce_api_calls_invalidatesessions.htm)
- sessionId (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
- SessionHeader (atlas.en-us.api.meta/api/sforce_api_header_sessionheader.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
