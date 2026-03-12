---
title: "Get Custom Invocable Actions"
domain: rest-api
topic: get-custom-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.199Z
estimatedTokens: 509
keywords: [Custom, Invocable, Actions, require, special, access, resource, REST, API, version, 32.0, later, URI, Formats, HTTP]
---

# Get Custom Invocable Actions

> Gets the list of all custom invocable actions. Some actions require special access.
    This resource is available in REST API version 32.0 and later.

# Get Custom Invocable Actions

Gets the list of all custom invocable actions. Some actions require special access. This resource is available in REST API version 32.0 and later.

Sending email with the emailAlert action counts against your daily email limit for workflows. For more information, see Daily Allocations for Email Alerts in Salesforce Help.

When invoking an Apex action using the POST method and supplying the inputs in the request, only the following primitive types are supported as inputs:

-   Blob
-   Boolean
-   Date
-   Datetime
-   Decimal
-   Double
-   ID
-   Integer
-   Long
-   String
-   Time

Describe and invoke for an Apex action respect the profile access for the Apex class. If you don’t have access, an error is issued.

If you add an Apex action to a flow, and then remove the Invocable Method annotation from the Apex class, a runtime error in the flow occurs.

When a flow user invokes an autolaunched flow, the active flow version runs. If there’s no active version, the latest version runs. When a flow admin invokes a flow, the latest version always runs.

If any of these elements are used in a flow, packageable components that reference the elements aren’t automatically included in the package.

-   Apex action
-   Email alerts
-   Post to Chatter core action
-   Quick Action core action
-   Send Email core action
-   Submit for Approval core action

For example, if you use an email alert, manually add the email template that’s used by that email alert. To deploy the package successfully, manually add those referenced components to the package.

For more information about actions, see the [Actions Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/ "HTML (New Window)").

## Syntax

## URI

/services/data/vXX.X/actions/custom

## Formats

JSON, XML

## HTTP Methods

\\ GET

## Authentication

Authorization: Bearer token

## Request parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/actions/custom -H "Authorization: Bearer token"
```

```
{
        "quickAction" : "/services/data/v66.0/actions/custom/quickAction",
       "apex" : "/services/data/v66.0/actions/custom/apex",
       "emailAlert" : "/services/data/v66.0/actions/custom/emailAlert",
       "flow" : "/services/data/v66.0/actions/custom/flow",
       "sendNotification" : "/services/data/v66.0/actions/custom/sendNotification",
       "generatePromptResponse" : "/services/data/v60.0/actions/custom/generatePromptResponse"
        }
```
