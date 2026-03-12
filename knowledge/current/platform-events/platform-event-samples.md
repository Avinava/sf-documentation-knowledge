---
title: "Platform Event Samples"
domain: platform-events
topic: platform-event-samples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.666Z
estimatedTokens: 343
keywords: [Platform, Event, Samples, Check, sample, covers, common, business, scenarios, uses, events, along, Lightning, features, App]
---

# Platform Event Samples

> Check out a sample that covers common business scenarios and uses platform events along
  with other Lightning Platform features.

# Platform Event Samples

Check out a sample that covers common business scenarios and uses platform events along with other Lightning Platform features.

## Sample App: The E-Bikes App and the Pub/Sub API Demo

E-Bikes is a fictitious electric bicycle manufacturer. E-Bikes manages its products and reseller orders with the E-Bikes app, which offers a rich user experience. Another app, the E-Bikes Manufacturing app, receives orders sent from the E-Bikes app. The E-Bikes Manufacturing app is a Node app that uses Pub/Sub API to subscribe to Order\_\_ChangeEvent, the change event that is generated for orders, when a reseller order is placed in the E-Bikes app. After the manufacturer receives the change event and approves the order, the manufacturing app publishes a platform event, Manufacturing\_Event\_\_e, back to Salesforce.

The Pub/Sub API demo represents the E-Bikes Manufacturing app and is built using the Lightning Web Runtime. The demo is an add-on to the E-Bikes sample app. The E-Bikes sample app uses Lightning Web Components and integrates with Salesforce Experiences.

Install the E-Bikes app from the [ebikes-lwc](https://github.com/trailheadapps/ebikes-lwc) GitHub repository. After you install the E-Bikes app, install the Pub/Sub API demo from the [ebikes-manufacturing](https://github.com/trailheadapps/ebikes-manufacturing) GitHub repository.
