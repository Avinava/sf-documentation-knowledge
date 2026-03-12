---
title: "Add a Filter with Metadata API"
domain: platform-events
topic: add-a-filter-with-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.813Z
estimatedTokens: 847
keywords: [Add, Filter, Metadata, API, recommend, part, application, lifecycle, management, process, develop, test, deploy, release, apps]
---

# Add a Filter with Metadata API

> We recommend using Metadata API as part of the application lifecycle management process
        to develop, test, deploy, and release your apps to production. If you want to create the
        channel and filter expression, we recommend that you use Tooling API with REST.

# Add a Filter with Metadata API

We recommend using Metadata API as part of the application lifecycle management process to develop, test, deploy, and release your apps to production. If you want to create the channel and filter expression, we recommend that you use Tooling API with REST.


| User Permissions Needed |
| --- |
| To deploy and retrieve metadata types: | Customize Application |
| To update metadata types: | Modify Metadata Through Metadata API Functions |
| To use Metadata API: | API Enabled |

Before you add a filter, create a channel. Use PlatformEventChannel in Metadata API, and specify API version 56.0 or later.

To create a channel and channel member with Metadata API, you can use tools such as Visual Studio Code with the Salesforce Extension pack or Salesforce CLI. For more information, see [Metadata API Developer Tools](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_developer_tools.htm) and [Quick Start: Metadata API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_quickstart_retrieve.htm) in the Metadata API Developer Guide.

This sample custom channel definition is for the MyChannel\_\_chn channel. The file name is MyChannel\_\_chn.platformEventChannel. To have this channel accept platform events, event is specified for channelType.

```

```

This channel member specifies the custom platform event and filter expression. This sample channel member definition associates the custom platform event to the channel and adds a filter expression. The file name is MyChannel\_chn\_Order\_Event\_e.platformEventChannelMember.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

If the filter expression contains the < and & special characters, they aren’t allowed in XML data in their literal form. Escape those characters as &lt; and &amp;, or enclose the entire filter expression value within the <!\[CDATA\[...\]\]> section. Although no special characters are present in the previous example, <!\[CDATA\[...\]\]> is included for convenience. For more information, see [CData sections](https://www.w3.org/TR/xml/#sec-cdata-sect) in the Extensible Markup Language (XML) specification.

If your Salesforce org has a namespace, prepend the namespace prefix to each field used in filterExpression and the selectedEntity value in the PlatformEventChannelMember request body. For example, if the namespace is ns, the request body in this example becomes:

```

```

This package.xml file references the channel and channel member.

```

```

To update a filter expression, redeploy the package with an updated value for the filterExpression field in the PlatformEventChannelMember component. You can update only the filterExpression field of a channel member. All other fields aren’t updateable.

#### See Also

-   [*Metadata API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm "Metadata API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Metadata API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm "Metadata API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>event</channelType>
    <label>Custom Channel for Platform Events</label>
</PlatformEventChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>MyChannel__chn</eventChannel>
    <filterExpression><![CDATA[(City__c LIKE 'S%' OR City__c='New York') AND Amount__c>10.50]]>
    </filterExpression>
    <selectedEntity>Order_Event__e</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>MyChannel__chn</eventChannel>
    <filterExpression><![CDATA[(ns__City__c LIKE 'S%' OR ns__City__c='New York') AND ns__Amount__c>10.50]]>
    </filterExpression>
    <selectedEntity>ns__Order_Event__e</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyChannel__chn</members>
        <name>PlatformEventChannel</name>
    </types>
    <types>
        <members>MyChannel_chn_Order_Event_e</members>
        <name>PlatformEventChannelMember</name>
    </types>
    <version>66.0</version>
</Package>
```
