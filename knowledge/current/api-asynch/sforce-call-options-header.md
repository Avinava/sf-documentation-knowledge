---
title: "Sforce Call Options Header"
domain: api-asynch
topic: sforce-call-options-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.044Z
estimatedTokens: 129
keywords: [Sforce, Call, Options, specify, client-specific, accessing, Bulk, API, resources, Sforce-Call-Options, 2.0]
---

# Sforce Call Options Header

> Use the Sforce-Call-Options header to specify
  client-specific options when accessing Bulk API 2.0 resources.

# Sforce Call Options Header

Use the Sforce-Call-Options header to specify client-specific options when accessing Bulk API 2.0 resources.

## Header Field Name and Values

Field name

Sforce-Call-Options

Field values

-   client—A string that identifies a client, for use, for example, in event log files.
-   defaultNamespace—A string that identifies a developer namespace prefix. Resolve field names in managed packages without having to specify the namespace everywhere.

Example

If the developer namespace prefix is battle, and you have a custom field called botId in a package, set the default namespace with the call options header:

```

```

Then queries such as the following succeed:

```

```

In this case, the actual field queried is the battle\_\_botId\_\_c field.

Using this header allows you to write client code without having to specify the namespace prefix. In the previous example, without the header you must write battle\_\_botId\_\_c.

If this field is set, and the query also specifies the namespace, the response doesn’t include the prefix. For example, if you set this header to battle, and issue a query like SELECT+Id+battle\_\_botID\_\_c+FROM+Account, the response uses a botId\_\_c element, not a battle\_botId\_\_c element.

The defaultNamespace field is ignored when retrieving describe information, which avoids ambiguity between namespace prefixes and customer fields of the same name.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Code Examples

```
Sforce-Call-Options: client=CaseSensitiveToken, defaultNamespace=battle
```

```
/services/data/vXX.X/query/?q=SELECT+Id+botID__c+FROM+Account
```
