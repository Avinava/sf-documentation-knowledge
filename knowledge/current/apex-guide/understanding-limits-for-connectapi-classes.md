---
title: "Understanding Limits for ConnectApi
        Classes"
domain: apex-guide
topic: understanding-limits-for-connectapi-classes
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T07:38:42.302Z
estimatedTokens: 293
namespace: ConnectApi
keywords: [Understanding, Limits, ConnectApi, Classes, different, Apex]
---

# Understanding Limits for ConnectApi
        Classes

> Limits for methods in the ConnectApi
        namespace are different than the limits for other Apex classes.

**Namespace:** `ConnectApi`

# Understanding Limits for ConnectApi Classes

Limits for methods in the ConnectApi namespace are different than the limits for other Apex classes.

For classes in the ConnectApi namespace, every write operation costs one DML statement against the Apex governor limit. ConnectApi method calls are also subject to rate limits. Most ConnectApi method calls count toward the [Salesforce Platform total API request allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm), which are per org and span a 24-hour period. Only ConnectApi method calls that require Chatter are subject to a per user, per namespace, per hour rate limit. The documentation for every ConnectApi method indicates whether Chatter is required. When you exceed the rate limit, a ConnectApi.RateLimitException is thrown. Your Apex code must catch and handle this exception.

When testing code, a call to the Apex Test.startTest method starts a new rate limit count. A call to the Test.stopTest method sets your rate limit count to the value it was before you called Test.startTest.
