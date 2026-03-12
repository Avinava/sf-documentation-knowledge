---
title: "Call Options Header"
domain: rest-api
topic: call-options-header
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:35.143Z
estimatedTokens: 460
keywords: [Call, Options, Header, Specifies, options, client, you’re, access, REST, API, resources., example, provide, default, prefix, don’t, need, specify, code., Field]
---

# Call Options Header

> Specifies options for the client you’re using to access REST
			API resources. For example, you can provide a default namespace prefix so that you don’t
			need to specify the prefix in your code.

# Call Options Header

Specifies options for the client you’re using to access REST API resources. For example, you can provide a default namespace prefix so that you don’t need to specify the prefix in your code.

The Call Options header can be used with sObject Basic Information, sObject Rows, sObject Rows by External ID, Query, QueryAll, and Search. It is also supported in Bulk API and Bulk API 2.0.

## Header Field Name and Values

Field name

Sforce-Call-Options

Field values

-   client—A string used as an identifier for the client sending the request. This string appears in log files, helping you keep track of which client sent a request.
-   defaultNamespace—A developer namespace prefix used as the default namespace for the request. With this header field, the request resolves field names in managed packages without specified namespaces. (Not supported in Bulk API.)

## Example

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

## Code Examples

```
Sforce-Call-Options: client=caseSensitiveToken; defaultNamespace=battle
```

```
/services/data/vXX.X/query/?q=SELECT+Id+botID__c+FROM+Account
```
