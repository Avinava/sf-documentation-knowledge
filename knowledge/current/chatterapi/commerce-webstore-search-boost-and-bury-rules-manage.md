---
title: "Commerce Webstore Search Boost and Bury Rules, Manage"
domain: chatterapi
topic: commerce-webstore-search-boost-and-bury-rules-manage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.559Z
estimatedTokens: 173
keywords: [Commerce, Webstore, Search, Boost, Bury, Rules, Manage, rule]
---

# Commerce Webstore Search Boost and Bury Rules, Manage

> Get a boost and bury rule. Delete a boost and bury
    rule.

# Commerce Webstore Search Boost and Bury Rules, Manage

Get a boost and bury rule. Delete a boost and bury rule.

Resource

```

```

Available version

59.0

HTTP methods

DELETE GET

Response body for GET

[Boost and Bury Rule](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_boost_bury_rule_output.htm "Boost and bury rule information.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/commerce/management/webstores/${webstoreId}/search/boost-bury-rules/${ruleId}
```

## Related Topics

- Boost and Bury Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_boost_bury_rule_output.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
