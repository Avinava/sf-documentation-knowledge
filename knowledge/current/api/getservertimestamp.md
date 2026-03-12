---
title: "getServerTimestamp()"
domain: api
topic: getservertimestamp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.316Z
estimatedTokens: 471
keywords: [getServerTimestamp, Retrieves, current, system, timestamp, Coordinated, Universal, Time, UTC, zone, API, Usage, Sample, Code—Java, Code—C#]
---

# getServerTimestamp()

> Retrieves the current system timestamp (Coordinated Universal Time (UTC) time zone)
      from the API.

# getServerTimestamp()

Retrieves the current system timestamp (Coordinated Universal Time (UTC) time zone) from the API.

## Syntax

```

```

## Usage

Use getServerTimestamp() to obtain the current system timestamp from the API. Run this call if, for example, you need to use the exact timestamp for timing or data synchronization purposes. When you create() or update() an object, the API uses the system timestamp to update the CreatedDate and LastModifiedDate fields, respectively, in the object.

The getServerTimestamp() call always returns the timestamp in Coordinated Universal Time (UTC) time zone. However, your local system automatically displays the results in your local time based on your time zone settings.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Development tools differ in the way that they handle time data. Some development tools report the local time, while others report only the Coordinated Universal Time (UTC) time zone. To determine how your development tool handles time values, refer to its documentation.

## Sample Code—Java

This sample gets the server time and writes it to the console in the user’s local time zone.

```

```

## Sample Code—C#

This sample gets the server time and writes it to the console in the user’s local time zone.

```

```

## Arguments

None.

## Response

[getServerTimestampResult](atlas.en-us.api.meta/api/sforce_api_calls_getservertimestamp_getservertimestampresult.htm "Returns a GetServerTimestampResult object.")

## Fault

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [Utility Calls](atlas.en-us.api.meta/api/utility_calls.htm "This topic describes API calls that your client applications can invoke to obtain the system timestamp, user information, and change user passwords.")

## Code Examples

```
GetServerTimestampResult timestamp = connection.getServerTimestamp();
```

```apex
public void doGetServerTimestamp() {
   try {
      GetServerTimestampResult result = connection.getServerTimestamp();
      Calendar serverTime = result.getTimestamp();
      System.out.println("Server time is: "
            + serverTime.getTime().toString());
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void doGetServerTimestamp()
{
   try
   {
      GetServerTimestampResult result =
            binding.getServerTimestamp();
      DateTime serverTime = result.timestamp;
      Console.WriteLine("Server time is: " +
            serverTime.ToLocalTime().ToString());
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

- getServerTimestampResult (atlas.en-us.api.meta/api/sforce_api_calls_getservertimestamp_getservertimestampresult.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Utility Calls (atlas.en-us.api.meta/api/utility_calls.htm)
