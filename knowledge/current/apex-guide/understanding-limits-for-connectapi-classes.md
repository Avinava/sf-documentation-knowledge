---
title: "Understanding Limits for ConnectApi
        Classes"
domain: apex-guide
topic: understanding-limits-for-connectapi-classes
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:32.846Z
estimatedTokens: 344
namespace: ConnectApi
keywords: [Understanding, Limits, ConnectApi, Classes, different, limits, Apex, classes.]
---

# Understanding Limits for ConnectApi
        Classes

> Limits for methods in the ConnectApi
        namespace are different than the limits for other Apex classes.

**Namespace:** `ConnectApi`

# Understanding Limits for ConnectApi Classes

Limits for methods in the ConnectApi namespace are different than the limits for other Apex classes.

For classes in the ConnectApi namespace, every write operation costs one DML statement against the Apex governor limit. ConnectApi method calls are also subject to rate limiting. ConnectApi rate limits match Connect REST API rate limits. Both have a per user, per namespace, per hour rate limit. When you exceed the rate limit, a ConnectApi.RateLimitException is thrown. Your Apex code must catch and handle this exception.

For migrated orgs and orgs created in Summer ’24 and later, only ConnectApi method calls that require Chatter are subject to the per user, per namespace, per hour rate limit. The documentation for every ConnectApi method indicates whether Chatter is required. ConnectApi method calls that don’t require Chatter count toward the [Salesforce Platform total API request allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm), which are per org and span a 24-hour period.

When testing code, a call to the Apex Test.startTest method starts a new rate limit count. A call to the Test.stopTest method sets your rate limit count to the value it was before you called Test.startTest.
