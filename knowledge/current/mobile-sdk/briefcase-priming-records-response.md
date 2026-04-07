---
title: "Briefcase Priming Records Response"
domain: mobile-sdk
topic: briefcase-priming-records-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.026Z
estimatedTokens: 469
keywords: [Briefcase, Priming, Records, Handles, responses, Mobile, SDK, requests, iOS, Android]
---

# Briefcase Priming Records Response

> Handles responses for all Mobile SDK Briefcase Priming requests.

# Briefcase Priming Records Response

Handles responses for all Mobile SDK Briefcase Priming requests.

In addition to the request factory method, Mobile SDK provides a custom Briefcase response object. Use the properties of this object to obtain parsed Briefcase response values.

## Properties

-   Priming records (map or dictionary; contains record IDs and their modification timestamps)
-   Relay token (string; if null, no more records are available)
-   Rule errors (string array; contains IDs of priming rules that were processed but resulted in an error)
-   Stats (object containing number of rules, number of records, number of rules served, and number of records served)

## iOS

Swift

Response handling:

```

```

Objective-C

Response handling:

```

```

## Android

Kotlin

Request factory method:

```

```

Java

Response handling:

```

```

## See Also

-   [SFSDKPrimingRecordsResponse.h](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/blob/dev/libs/SalesforceSDKCore/SalesforceSDKCore/Classes/RestAPI/SFSDKPrimingRecordsResponse.h "HTML (New Window)") in the SalesforceMobileSDK-iOS repo.
-   [PrimingRecordsResponse.java](https://github.com/forcedotcom/SalesforceMobileSDK-Android/blob/dev/libs/SalesforceSDK/src/com/salesforce/androidsdk/rest/PrimingRecordsResponse.java "HTML (New Window)") in the SalesforceMobileSDK-Android repo.
-   Priming Records request:[“Briefcase Priming Records Resource" in *Connect REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_briefcase_priming_records.htm "HTML (New Window)")
-   [“Priming Record Collection" in *Connect REST API Developer Guide* (Priming Records response)](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_responses_priming_record_collection.htm "HTML (New Window)")

## Code Examples

```
let parsedResponse = 
    PrimingRecordsResponse(try response.asJson() as! [AnyHashable : Any])
let records = parsedResponse.primingRecords
let token = parsedResponse.relayToken
let ruleErrors = parsedResponse.ruleErrors
let stats = parsedResponse.stats
```

```
SFSDKPrimingRecordsResponse* parsedResponse = [[SFSDKPrimingRecordsResponse alloc] 
    initWith:response];
NSDictionary<NSString*, NSDictionary<NSString*, 
    NSArray<SFSDKPrimingRecord*>*>*>* primingRecords = 
    parsedResponse.primingRecords;
NSString *relayToken = parsedResponse.relayToken;
NSArray<SFSDKPrimingRuleError*>* ruleErrors = parsedResponse.ruleErrors;
SFSDKPrimingStats * stats = parsedResponse.stats;
```

```
val parsedResponse = PrimingRecordsResponse(result.asJSONArray())
val primingRecords = parsedResponse.primingRecords
val relayToken = parsedResponse.relayToken
val ruleErrors = parsedResponse.ruleErrors
val stats = parsedResponse.stats
```

```apex
PrimingRecordsResponse parsedResponse = 
    new PrimingRecordsResponse(result.asJSONObject()); 
String stats = parsedResponse.stats;
Map<String, Map<String, List<PrimingRecordsResponse.PrimingRecord>>> records = 
    parsedResponse.primingRecords;
String relayToken = parsedResponse.relayToken;
List<PrimingRecordsResponse.PrimingRuleError> ruleErrors = parsedResponse.ruleErrors;
```
