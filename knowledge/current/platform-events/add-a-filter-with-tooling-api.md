---
title: "Add a Filter with Tooling API"
domain: platform-events
topic: add-a-filter-with-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.830Z
estimatedTokens: 693
keywords: [Add, Filter, Tooling, API, channel, PlatformEventChannel, specify, version, 56.0, later]
---

# Add a Filter with Tooling API

> Before you can add a filter, create a channel. Use PlatformEventChannel in Tooling API,
  and specify API version 56.0 or later.

# Add a Filter with Tooling API

Before you can add a filter, create a channel. Use PlatformEventChannel in Tooling API, and specify API version 56.0 or later.


| User Permissions Needed |
| --- |
| To create or update PlatformEventChannel and PlatformEventChannelMember objects: | Customize Application |
| To use REST API: | API Enabled |

You can use your preferred REST API tool to perform these steps. We recommend using Postman with the Salesforce Platform APIs collection, which contains handy templates for Salesforce API calls. To set up Postman, see [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce) in Trailhead.

1.  To create a channel, send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and click **Create channel**.

2.  Use this example request body. To have this channel accept platform events, event is specified for channelType.

    ```

    ```

    You receive a response similar to this example response.

    ```

    ```

3.  Add a channel member that specifies the custom platform event and filter expression. This example references the custom platform event, Order\_Event\_\_e. Send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and click **Create channel member**.

4.  Use this example request body.

    ```

    ```

    You receive a response similar to this example response.

    ```

    ```


To update a filter expression, perform a PATCH request to /services/data/v66.0/tooling/sobjects/PlatformEventChannelMember/<ChannelMemberID>, and pass in the entire request body with the new filter expression. You can update only the filterExpression field of a channel member. All other fields aren’t updateable.

If your Salesforce org has a namespace, prepend the namespace prefix to each field used in filterExpression and the selectedEntity value in the PlatformEventChannelMember request body. For example, if the namespace is ns, the request body in this example becomes:

```

```

#### See Also

-   [*Tooling API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm "Tooling API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Tooling API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm "Tooling API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
{
  "FullName": "MyChannel__chn",
  "Metadata": {
    "channelType": "event",
    "label": "Custom Channel for Platform Events"
  }
}
```

```
{
  "id" : "0YLRM000000004X4AQ",
  "success" : true,
  "errors" : [ ],
  "warnings" : [ ],
  "infos" : [ ]
}
```

```
{
 "FullName": "MyChannel_chn_Order_Event_e",
 "Metadata": {
  "eventChannel": "MyChannel__chn",
  "filterExpression": "(City__c LIKE 'S%' OR City__c='New York') AND Amount__c>10.50",
  "selectedEntity": "Order_Event__e"
 }
}
```

```
{
  "id" : "0v8RM0000000MnNYAU",
  "success" : true,
  "errors" : [ ],
  "warnings" : [ ],
  "infos" : [ ]
}
```

```
{
  "FullName": "MyChannel_chn_Order_Event_e",
  "Metadata": {
    "eventChannel": "MyChannel__chn",
    "filterExpression": "(ns__City__c LIKE 'S%' OR ns__City__c='New York') AND ns__Amount__c>10.50",
    "selectedEntity": "ns__Order_Event__e"
  }
}
```
