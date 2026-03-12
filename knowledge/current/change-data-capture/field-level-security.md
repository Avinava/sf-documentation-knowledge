---
title: "Field-Level Security"
domain: change-data-capture
topic: field-level-security
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.668Z
estimatedTokens: 456
keywords: [Field-Level, Security, Change, Data, Capture, respects, org’s, settings, Delivered, events, contain, subscribed, user, allowed, view]
---

# Field-Level Security

> Change Data Capture respects your org’s field-level security settings. Delivered events
    contain only the fields that a subscribed user is allowed to view. Before delivering a change
    event for an object, the subscribed user’s field permissions are checked. If a subscribed user
    has no access to a field, the field isn’t included in the change event message that the
    subscriber receives.

# Field-Level Security

Change Data Capture respects your org’s field-level security settings. Delivered events contain only the fields that a subscribed user is allowed to view. Before delivering a change event for an object, the subscribed user’s field permissions are checked. If a subscribed user has no access to a field, the field isn’t included in the change event message that the subscriber receives.

When describing a change event of a Salesforce object, the describe call checks the user’s field-level security settings for that object. The describe call returns only the fields that the user has access to in the describe result of the change event. You can describe a change event through SOAP API or REST API by using the change event name as the sObject name, such as AccountChangeEvent. See [describeSObjects()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects.htm "HTML (New Window)") in the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "HTML (New Window)") and [sObject Describe](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_describe.htm "HTML (New Window)") in the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_what_is_rest_api.htm "HTML (New Window)").

When getting the change event schema corresponding to a Salesforce object, the returned schema includes all object fields, even the fields that the user doesn’t have access to. See [Get the Event Schema](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_event_schema.htm "HTML (New Window)") in the Platform Events Developer Guide..
