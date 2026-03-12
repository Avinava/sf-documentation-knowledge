---
title: "Lightning Interactions"
domain: pkg2-dev
topic: lightning-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.999Z
estimatedTokens: 965
keywords: [Lightning, Interactions, record, package, usage, log, custom_entity_type, LightningComponent, LightningPage, interaction, packaged, component, User, View]
---

# Lightning Interactions

> Each record in your package usage log that has a custom_entity_type of LightningComponent or
   LightningPage describes an interaction with your packaged
  Lightning component or page.

# Lightning Interactions

Each record in your package usage log that has a custom\_entity\_type of LightningComponent or LightningPage describes an interaction with your packaged Lightning component or page.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


## Lightning User Interaction

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

We’re continually improving the recording of Lightning interaction data in package usage logs. Many interactions with your packaged Lightning component or page are available in AppExchange App Analytics, but not all. To determine which interactions we capture for your specific package, compare your packaged components to your App Analytics package usage logs.

When a user interacts with your LightningPage or LightningComponent packaged component, a log\_record\_type of LightningInteraction is created. Some standard fields are always populated with data. For example, a Lightning component interaction always has app\_name and ui\_event\_source data. Lightning interactions have supplemental fields that are often populated. For example, a Lightning interaction sometimes also has page\_app\_name and page\_context data.

| Standard Data | Supplemental Data |
| --- | --- |
| app_nameui_event_sourceui_event_typetarget_ui_elementparent_ui_element | page_app_namepage_contextrelated_listpage_url |

## Lightning Page View

When a user views your Lightning page, a log\_record\_type of LightningPageView is created. Some standard fields are always populated with data. For example, a Lightning page view always has app\_name and page\_app\_name data. Lightning page views have supplemental fields that are often populated. For example, a Lightning page view sometimes also has page\_entity\_type and prevpage\_url data.

| Standard Data | Supplemental Data |
| --- | --- |
| app_namepage_app_namepage_contextpage_url | page_entity_typeprevpage_urlrelated_list |

## Example

Let’s look at an example package usage log record and analyze the Lightning interaction.

```

```

The Acme\_Insurance\_Agents Lightning page was interacted with as a result of a user action from subscriber org MyCustomer Inc. Specifically, a Lightning interaction took place on the page on 2022-11-22 at 6:17 am.

The key data in this analysis are:

| Question | Field | Value |
| --- | --- | --- |
| What | custom_entitycustom_entity_typepackage_version_idmanaged_package_namespace | Acme_Insurance_AgentsLightningPage04txx0000004IdiAcme |
| Who | organization_iduser_id_token | 00Dxx0000006H2l005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk= |
| How | log_record_type | LightningInteraction |
| When | timestamp_derived | 2022-11-22T06:17:39.167Z |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Lightning interaction data is captured on an event by event basis.

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

-   [Lightning Interaction Event Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightninginteraction.htm "Lightning Interaction Event Type - HTML (New Window)")

-   [Lightning Page View Event Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_lightningpageview.htm "Lightning Page View Event Type - HTML (New Window)")

## Code Examples

```apex
{
        "timestamp_derived": "2022-11-22T06:17:39.167Z",
        "log_record_type": "LightningInteraction",
        "request_id": "TID:7635077000004b3035",
        "organization_id": "00Dxx0000006H2l",
        "organization_name": "MyCustomer Inc.",
        "organization_status": "Demo",
        "organization_edition": "Enterprise Edition",
        "organization_country_code": "IN",
        "organization_language_locale": "en_US",
        "organization_time_zone": "Australia/Sydney",
        "organization_instance": "GS0",
        "organization_type": "Production",
        "user_id_token": "005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk=",
        "user_type": "Standard",
        "package_id": "033xx0000004FqD",
        "package_version_id": "04txx0000004Idi",
        "managed_package_namespace": "Acme",
        "custom_entity": "Acme__Insurance_Agents",
        "custom_entity_type": "LightningPage",
        "session_key": "2l4YtFB/RmsRKVsS",
        "login_key": "fGV6RgVOH3ZCgl2v",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/IP_ADDRESS_REMOVED Safari/537.36",
        "user_country_code": "US",
        "user_time_zone": "America/Los_Angeles",
        "app_name": "one:one",
        "page_app_name": "Insurance_App",
        "page_context": "app_flexipage:lwcAppFlexipageWrapper",
        "ui_event_source": "click",
        "ui_event_type": "user",
        "ui_event_sequence_num": "10",
        "target_ui_element": "setup-app-nav-menu-item-link",
        "parent_ui_element": "global-setup",
        "page_url": "/lightning/n/Acme__Insurance_Agents"
    }
```

## Related Topics

- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
