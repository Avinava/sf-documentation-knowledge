---
title: "Consent Management"
domain: data-cloud
topic: consent-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.102Z
estimatedTokens: 445
keywords: [Consent, Management, Engagement, Mobile, SDK, offers, managed, solution, allowing, restricting, collection, event, data, application, responsible]
---

# Consent Management

> Engagement Mobile SDK offers a managed solution for allowing and restricting collection
    of event data. Your mobile application is responsible for presenting the device owner with the
    choice to opt in or opt out of data collection and for setting the Data Cloud Module consent
    property accordingly.

# Consent Management

Engagement Mobile SDK offers a managed solution for allowing and restricting collection of event data. Your mobile application is responsible for presenting the device owner with the choice to opt in or opt out of data collection and for setting the Data Cloud Module consent property accordingly.

## Consent States

This table describes the Data Cloud Module consent states.

| iOS Values | Android Values | Description |
| --- | --- | --- |
| Consent.optIn | Consent.OPT_IN | In this state, events are transmitted to the configured Data Cloud endpoint for collection. If queued events are present, the Data Cloud Module transmits them immediately to Data Cloud. |
| Consent.optOut | Consent.OPT_OUT | In this state, events created by the mobile application are ignored by the SDK. The events are never queued or transmitted off the device. If queued events are present, the Data Cloud Module deletes them from memory. |
| Consent.pending | Consent.PENDING | The default consent value for a newly initialized Data Cloud Module is pending. In this state, events are collected locally until an opt-in or opt-out state is set. |

## Granting or Revoking Consent

The Data Cloud Module can’t transmit events from a mobile device to Data Cloud until the mobile application has collected customer consent for data collection.

If no prior consent has been set, then the initial state is pending. In this state, events are queued locally until consent is granted or revoked. If consent is granted, the queued events are transmitted to Data Cloud. If revoked, they’re deleted from the queue.

**iOS**

```

```

**Android**

```

```

## Reading Consent State

Access the current state of consent in the Data Cloud Module:

**iOS**

```

```

**Android**

```

```

## Code Examples

```
import Cdp

...

// when a user consents to data collection
CdpModule.shared.setConsent(consent: Consent.optIn)

// when a user does not consent to data collection
CdpModule.shared.setContent(consent: Consent.optOut)
```

```
import com.salesforce.marketingcloud.cdp.CdpSdk
import com.salesforce.marketingcloud.cdp.consent.Consent.OPT_IN
import com.salesforce.marketingcloud.cdp.consent.Consent.OPT_OUT

...

// when a user consents to data collection
CdpSdk.requestSdk { sdk -> sdk.consent = OPT_IN }

// when a user does not consent to data collection
CdpSdk.requestSdk { sdk -> sdk.consent = OPT_OUT }
```

```
let consent = CdpModule.shared.getConsent()
```

```
CdpSdk.requestSdk { sdk ->
  let consent = sdk.consent
}
```
