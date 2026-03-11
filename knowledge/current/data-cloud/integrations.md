---
title: "Integrations"
domain: data-cloud
topic: integrations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.367Z
keywords: [Integrations, Example]
---

# Integrations

# Integrations

The Salesforce Interactions SDK features built-in CustomEvents that you can use to bind listeners to events that are specific to the Web SDK. Data that these events pass are in the detail properties of the event object passed to a listener’s callback function.

The Salesforce Interactions SDK built-in custom events.

```

```

| Custom Event | Description |
| --- | --- |
| OnBeforeEventSend | This event shows before data passed to SalesforceInteractions.sendEvent is distributed to consuming modules. |
| OnClearPersistedIdentities | This event shows when SalesforceInteractions.clearPersistedIdentities is invoked. |
| OnConsentRevoke | This event is dispatched when a user gives consent but later revokes that consent. |
| OnEventSend | This event is dispatched whenever a request to the Event API sends via SalesforceInteractions.sendEvent. This event contains the actionEvent payload processed in the event pipeline.ActionEvent |
| OnException | This event is dispatched when an operation fails and contains information about the error and its context. You can use the OnException event for debugging and logging runtime errors.{   error: Error,   context: string } |
| OnInit | This event is dispatched when the Web SDK is initialized. You can use the OnInit event for debugging single-page applications (SPA) where the beacon and the sitemap usually reinitialize without a page load event. |
| OnInitSitemap | This event is dispatched whenever the Web SDK sitemap is initialized via the SalesforceInteractions.initSitemap function.{     currentKey: string,     global: GlobalConfig,     pageTypeDefault?: DefaultPageConfig     pageTypes: pageTypeConfig[],     settings: object } |
| OnPageMatchStatusUpdated | This event is dispatched whenever the match status of a sitemap’s page type is updated. The matchStatus array accumulates every time an event is dispatched, in the order the match statuses are updated. If the status is running, the PageMatchStatus includes the start time. Conversely, if the status is selected, rejected, or matched, the PageMatchStatus includes the end time. The selected page type is the first page type to be matched. The sitemap doesn’t evaluate other matched page types.[{     pageName: string;     status: MatchStatus;     startTime?: number;     endTime?: number;     _reject?: any; }] |
| OnResetAnonymousId | This event shows when SalesforceInteractions.resetAnonymousId is invoked. |
| OnSetAnonymousId | OnSetAnonymousId This event shows anytime the Web SDK assigns a new tracking identity to a customer. |
| OnShutDown | This event is dispatched when the Web SDK receives the signal to shut down. |

## Example

```

```