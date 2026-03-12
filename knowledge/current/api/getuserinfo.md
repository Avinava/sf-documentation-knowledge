---
title: "getUserInfo()"
domain: api
topic: getuserinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.334Z
estimatedTokens: 622
keywords: [getUserInfo, Retrieves, personal, user, associated, current, session, Usage, Sample, Code—Java, Code—C#, Arguments, Fault]
---

# getUserInfo()

> Retrieves personal information for the user associated with the current
      session.

# getUserInfo()

Retrieves personal information for the user associated with the current session.

## Syntax

```

```

## Usage

Use [getUserInfo()](# "Retrieves personal information for the user associated with the current session.") to obtain personal information about the currently logged-in user. This convenience API call retrieves and aggregates common profile information that your client application can use for display purposes, performing currency calculations, and so on.

The getUserInfo() call applies only to the username under which your client application has logged in. To retrieve additional personal information not found in the [getUserInfoResult](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm "The getUserInfo() call returns a GetUserInfoResult object.") object, you can call [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs.") on the [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") object and pass in the [userID](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm#i1434422) returned by this call. To retrieve personal information about other users, you could call retrieve() (if you know their user ID) or [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.") on the [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") object.

## Sample Code—Java

This sample calls getUserInfo() and writes information about the current user to the console.

```

```

## Sample Code—C#

This sample calls getUserInfo() and writes information about the current user to the console.

```

```

## Arguments

None.

## Response

[getUserInfoResult](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm "The getUserInfo() call returns a GetUserInfoResult object.")

## Fault

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [Utility Calls](atlas.en-us.api.meta/api/utility_calls.htm "This topic describes API calls that your client applications can invoke to obtain the system timestamp, user information, and change user passwords.")

## Code Examples

```
getUserInfoResult result = connection.getUserInfo();
```

```apex
public void doGetUserInfo() {
   try {
      GetUserInfoResult result = connection.getUserInfo();
      System.out.println("
User Information");
      System.out.println("\tFull name: " + result.getUserFullName());
      System.out.println("\tEmail: " + result.getUserEmail());
      System.out.println("\tLocale: " + result.getUserLocale());
      System.out.println("\tTimezone: " + result.getUserTimeZone());
      System.out.println("\tCurrency symbol: " + result.getCurrencySymbol());
      System.out.println("\tOrganization is multi-currency: " + 
            result.isOrganizationMultiCurrency());
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void doGetUserInfo()
{
   try
   {
      GetUserInfoResult result = binding.getUserInfo();
      Console.WriteLine("
User Information");
      Console.WriteLine("\tFull name: " + result.userFullName);
      Console.WriteLine("\tEmail: " + result.userEmail);
      Console.WriteLine("\tLocale: " + result.userLocale);
      Console.WriteLine("\tTimezone: " + result.userTimeZone);
      Console.WriteLine("\tCurrency symbol: " + result.currencySymbol);
      Console.WriteLine("\tOrganization is multi-currency: " +
            result.organizationMultiCurrency);
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

- getUserInfoResult (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm)
- retrieve() (atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm)
- userID (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Utility Calls (atlas.en-us.api.meta/api/utility_calls.htm)
