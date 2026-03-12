---
title: "Add a Filter with Tooling API"
domain: change-data-capture
topic: add-a-filter-with-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.605Z
estimatedTokens: 867
keywords: [Add, Filter, Tooling, API, channel, member, version, 56.0, later]
---

# Add a Filter with Tooling API

> Create a channel and channel member in Tooling API using API version 56.0 or
    later.

# Add a Filter with Tooling API

Create a channel and channel member in Tooling API using API version 56.0 or later.


| User Permissions Needed |
| --- |
| To create or update PlatformEventChannel and PlatformEventChannelMember objects: | Customize Application |
| To use REST API: | API Enabled |

You can use your preferred REST API tool to perform these steps. We recommend using Postman with the Salesforce Platform APIs collection, which contains handy templates for Salesforce API calls. See [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce) in Trailhead.

The steps are based on a custom channel. We recommend using a custom channel instead of the standard channel so that the filtered stream is isolated from the standard event stream and subscribers expect the stream to be filtered. You can alternatively use the ChangeEvents standard channel. If you do so, you can skip steps 1 and 2, and in step 4, adjust the FullName field and use this eventChannel value: "eventChannel": "ChangeEvents".

1.  To create a channel, send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and then click **Create channel**.

2.  Use this example request body. The channelType is data because this is a channel for change events.

    ```

    ```

    You receive a response similar to this example response.

    ```

    ```

3.  Add a channel member that specifies the Industry field as an enriched field, a change event type of AccountChangeEvent, and a filter expression.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and then click **Create channel member**.

4.  Use this example request body.

    ```

    ```

    You receive a response similar to this example response.

    ```

    ```


To update a filter expression, perform a PATCH request to /services/data/v66.0/tooling/sobjects/PlatformEventChannelMember/<ChannelMemberID>, and pass in the entire request body with the new filter expression. You can update only the filter expression and enriched fields of a channel member. All other fields aren’t updateable.

If your Salesforce org has a namespace, prepend the namespace prefix to each field used in filterExpression and the selectedEntity value in the PlatformEventChannelMember request body. For example, if the namespace is ns, the request body in this example becomes:

```

```

You can add another filter to the same channel for another change event by adding another channel member. For example, if you want to filter lead change events, add a second channel member for the FilteredChannel\_\_chn channel. In this member, specify selectedEntity as LeadChangeEvent, and specify the filter expression. For example:

```

```

#### See Also

-   [*Tooling API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm "Tooling API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Tooling API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm "Tooling API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
{
  "FullName": "FilteredChannel__chn",
  "Metadata": {
    "channelType": "data",
    "label": "My Custom Filtered Channel"
  }
}
```

```
{
  "id" : "0YLRM000000004m4AA",
  "success" : true,
  "errors" : [ ],
  "warnings" : [ ],
  "infos" : [ ]
}
```

```
{
  "FullName": "FilteredChannel_chn_AccountChangeEvent",
  "Metadata": {
    "eventChannel": "FilteredChannel__chn",
    "filterExpression": "Industry='Agriculture' AND NumberOfEmployees>1000",
    "selectedEntity": "AccountChangeEvent"
  }
}
```

```
{
  "id" : "0v8RM0000004VAKYA2",
  "success" : true,
  "errors" : [ ],
  "warnings" : [ ],
  "infos" : [ ]
}
```

```
{
  "FullName": "FilteredChannel_chn_AccountChangeEvent",
  "Metadata": {
    "eventChannel": "FilteredChannel__chn",
    "filterExpression": "ns__Industry='Agriculture' AND ns__NumberOfEmployees>1000",
    "selectedEntity": "AccountChangeEvent"
  }
}
```
