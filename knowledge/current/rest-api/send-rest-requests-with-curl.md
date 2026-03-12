---
title: "Send REST Requests with cURL"
domain: rest-api
topic: send-rest-requests-with-curl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.162Z
estimatedTokens: 462
keywords: [Send, REST, Requests, cURL, examples, guide, tool, send, HTTP, requests, access, create, manipulate, resources, Salesforce., different, same, elements, requests., Note]
---

# Send REST Requests with cURL

> The examples in this guide use the cURL tool to send HTTP requests that access,
        create, and manipulate resources in Salesforce. If you use a different tool to send
        requests, you can use the same elements from the cURL examples to send requests.

# Send REST Requests with cURL

The examples in this guide use the cURL tool to send HTTP requests that access, create, and manipulate resources in Salesforce. If you use a different tool to send requests, you can use the same elements from the cURL examples to send requests.

cURL is pre-installed on many Linux and macOS systems. Windows users can download a version at [curl.haxx.se/](http://curl.haxx.se/). When using HTTPS on Windows, ensure that your system meets the cURL requirements for SSL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

cURL is an open-source tool and isn’t supported by Salesforce.

## Attaching Request Bodies

Many examples include request bodies—JSON or XML files that contain data for the request. When using cURL, save these files to your local system and attach them to the request using the —data-binary or -d option.

This example attaches the new-account.json file.

```

```

## Handling Exclamation Marks in Access Tokens

When you run cURL examples, you can get an error on macOS and Linux systems due to the presence of the exclamation mark (!) special character in OAuth access tokens. To avoid getting this error, either escape the exclamation mark or use single quotes.

To escape the exclamation mark in the access token, insert a backslash before it (\\!) when the access token is enclosed within double quotes. For example, the access token string in this cURL command has the exclamation mark (!) escaped.

```

```

Or, you can enclose the access token within single quotes.

```

```

#### See Also

-   [Setting Up Your Java Developer Environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_overview.htm)

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/ -H "Authorization: Bearer access-token" -H “Content-Type: application/json” —data-binary @new-account.json -X POST
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/ -H "Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>"
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/ -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>'
```
