---
title: "Briefcase Priming Records"
domain: mobile-sdk
topic: briefcase-priming-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.020Z
estimatedTokens: 461
keywords: [Briefcase, Priming, Records, obtains, record, IDs, briefcases, assigned, connected, app, Relay, Tokens, Acquire, iOS, Android]
---

# Briefcase Priming Records

> Returns a request object that obtains record IDs from briefcases assigned to the
        connected app.

# Briefcase Priming Records

Returns a request object that obtains record IDs from briefcases assigned to the connected app.

Mobile SDK provides a custom response object for parsing the results of Briefcase Priming Records requests. See [Briefcase Priming Records Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming_response.htm "Handles responses for all Mobile SDK Briefcase Priming requests.").

## Using Relay Tokens to Acquire Record IDs

Retrieve batches of record IDs in an iterative loop that's controlled by a relay token, as follows:

-   In your first request, set relayToken to null. The response to this request will contain a new relay token.
-   In each subsequent request, set relayToken to the relay token value of the previous response.

In your request, you can also set a timestamp to retrieve only records that changed after the given time.

## Parameters

-   API version (string)
-   Relay token (string; can be null)
-   "Changed after" timestamp (ISO timestamp; can be null)

## iOS

Swift

Request factory method:

```

```

Objective-C

Request factory method:

```

```

## Android

Kotlin

Request factory method:

val request = RestRequest.getRequestForPrimingRecords(ApiVersionStrings.getVersionNumber(this), relayToken, changedAfter)

Java

Request factory method:

```

```

## See Also

-   [“Briefcase Priming Records Resource" in *Connect REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_briefcase_priming_records.htm "HTML (New Window)")
-   [“Priming Record Collection" in *Connect REST API Developer Guide* (Priming Records response)](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_responses_priming_record_collection.htm "HTML (New Window)")

## Code Examples

```
let request = RestClient.shared.requestForPrimingRecords(relayToken: relayToken, 
    changedAfter: changedAfter, apiVersion: nil)
```

```
- (SFRestRequest*) requestForPrimingRecords:(*nullable* NSString *)relayToken 
    changedAfterTimestamp:(nullable NSNumber *)timestamp apiVersion:(*nullable* NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForPrimingRecords(
    String apiVersion, 
    String relayToken,
    Long changedAfterTime)
```

## Related Topics

- Briefcase Priming Records Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming_response.htm)
