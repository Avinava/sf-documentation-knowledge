---
title: "Prerequisite: Define a Platform Event"
domain: platform-events
topic: prerequisite-define-a-platform-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.817Z
estimatedTokens: 249
keywords: [Prerequisite, Define, Platform, Event, examples, depend, predefined, custom, Order_Event__e, Salesforce, steps]
---

# Prerequisite: Define a Platform Event

> The examples in this section depend on a predefined custom platform event called
  Order_Event__e. To define this event in Salesforce, complete these steps.

# Prerequisite: Define a Platform Event

The examples in this section depend on a predefined custom platform event called Order\_Event\_\_e. To define this event in Salesforce, complete these steps.

| Available in: Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To define a platform event: | Customize Application |

1.  From Setup, in the Quick Find box, enter Platform Events, and then select **Platform Events**.
2.  Click **New Platform Event**.
3.  Provide these values.
    1.  Label: Order Event
    2.  Plural Label: Order Events
    3.  Select **Starts with a vowel sound**, if available.
    4.  Click **Save**.
4.  Create these fields. In Custom Fields & Relationships, click **New** for each field, and follow the wizard.
    1.  Field type: Text; Field Label: Order Number; Length: 18
    2.  Field type: Text; Field Label: City; Length: 50
    3.  Field type: Number; Field Label: Amount; Length: 16; Decimal Places: 2
