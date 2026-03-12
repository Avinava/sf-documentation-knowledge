---
title: "Add a Filter with Metadata API"
domain: change-data-capture
topic: add-a-filter-with-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.591Z
estimatedTokens: 1086
keywords: [Add, Filter, Metadata, API, recommend, part, application, lifecycle, management, process, develop, test, deploy, release, apps]
---

# Add a Filter with Metadata API

> We recommend using Metadata API as part of the application lifecycle management
        process to develop, test, deploy, and release your apps to production. If you want to create
        the channel and filter expression, we recommend that you use Tooling API with
        REST.

# Add a Filter with Metadata API

We recommend using Metadata API as part of the application lifecycle management process to develop, test, deploy, and release your apps to production. If you want to create the channel and filter expression, we recommend that you use Tooling API with REST.


| User Permissions Needed |
| --- |
| To deploy and retrieve metadata types: | Customize Application |
| To update metadata types: | Modify Metadata Through Metadata API Functions |
| To use Metadata API: | API Enabled |

Create a channel and channel member in Metadata API using API version 56.0 or later.

To create a channel and channel member with Metadata API, you can use tools such as Visual Studio Code with the Salesforce Extension pack or Salesforce CLI. For more information, see [Metadata API Developer Tools](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_developer_tools.htm) and [Quick Start: Metadata API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_quickstart_retrieve.htm) in the Metadata API Developer Guide.

The steps are based on a custom channel. We recommend using a custom channel instead of the standard channel so that the filtered stream is isolated from the standard event stream and subscribers expect the stream to be filtered. You can alternatively use the ChangeEvents standard channel. If you do so, you can skip the custom channel definition, and for the PlatformEventChannelMember definition, adjust the file name and use this eventChannel value: <eventChannel>ChangeEvents</eventChannel>.

This sample custom channel definition is for the FilteredChannel\_\_chn channel. The file name is FilteredChannel\_\_chn.platformEventChannel.

```

```

Next, add a channel member. This channel member specifies the enriched fields of Industry and NumberOfEmployees, the filter expression, and the selected entity of AccountChangeEvent. The file name is FilteredChannel\_chn\_AccountChangeEvent.platformEventChannelMember.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If the filter expression contains the < and & special characters, they aren’t allowed in XML data in their literal form. Escape those characters as &lt; and &amp;, or enclose the entire filter expression value within the <!\[CDATA\[...\]\]> section. Although no special characters are present in the previous example, <!\[CDATA\[...\]\]> is included for convenience. For more information, see [CData sections](https://www.w3.org/TR/xml/#sec-cdata-sect) in the Extensible Markup Language (XML) specification.

If your Salesforce org has a namespace, prepend the namespace prefix to each field used in filterExpression and the selectedEntity value in the PlatformEventChannelMember request body. For example, if the namespace is ns, the request body in this example becomes:

```

```

This package.xml file references the channel and channel member.

```

```

To update a filter expression, redeploy the package with an updated value for the filterExpression field in the PlatformEventChannelMember component. You can update only the filter expression and enriched fields of a channel member. All other fields aren’t updateable.

You can add another filter on another change event by adding a channel member to the same channel. For example, to filter lead change events, add a second channel member for the FilteredChannel\_\_chn channel. In this member, specify selectedEntity as LeadChangeEvent, and specify the filter expression and enriched fields. This PlatformEventChannelMember definition is an example component with a file name of FilteredChannel\_chn\_LeadChangeEvent.platformEventChannelMember.

```

```

This package.xml file references both channel members.

```

```

#### See Also

-   [*Metadata API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm "Metadata API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Metadata API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm "Metadata API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>data</channelType>
    <label>My Custom Filtered Channel</label>
</PlatformEventChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
       <eventChannel>FilteredChannel__chn</eventChannel>
    <filterExpression><![CDATA[Industry='Agriculture' AND NumberOfEmployees>1000]]></filterExpression>
    <selectedEntity>AccountChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
       <eventChannel>FilteredChannel__chn</eventChannel>
    <filterExpression><![CDATA[ns__Industry='Agriculture' AND ns__NumberOfEmployees>1000]]></filterExpression>
    <selectedEntity>AccountChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>FilteredChannel__chn</members>
        <name>PlatformEventChannel</name>
    </types>
    <types>        
        <members>FilteredChannel_chn_AccountChangeEvent</members>
        <name>PlatformEventChannelMember</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>FilteredChannel__chn</eventChannel>
    <filterExpression><![CDATA[AnnualRevenue>1000000]]></filterExpression>
    <selectedEntity>LeadChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```
