---
title: "Prerequisite: Define Platform Events"
domain: platform-events
topic: prerequisite-define-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.732Z
estimatedTokens: 283
keywords: [Prerequisite, Define, Platform, Events, custom, channel, examples, depend, predefined, Order_NorthAmer__e, Order_EMEA__e, creating, Salesforce]
---

# Prerequisite: Define Platform Events

> The custom channel examples depend on a predefined custom platform events called
  Order_NorthAmer__e and Order_EMEA__e. Before creating the custom channel, define these events in
  Salesforce.

# Prerequisite: Define Platform Events

The custom channel examples depend on a predefined custom platform events called Order\_NorthAmer\_\_e and Order\_EMEA\_\_e. Before creating the custom channel, define these events in Salesforce.

| Available in: Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To define a platform event: | Customize Application |

1.  From Setup, in the Quick Find box, enter Platform Events, and then select **Platform Events**.
2.  Click **New Platform Event**.
3.  Provide these values.
    1.  Label: Order NorthAmer
    2.  Plural Label: Order NorthAmer
    3.  Select **Starts with a vowel sound**, if available.
    4.  Click **Save**.
4.  Create four fields. In Custom Fields & Relationships, click **New** for each field, and follow the wizard.
    1.  Field type: Text; Field Label: Order Number; Length: 10
    2.  Field type: Text; Field Label: City; Length: 50
    3.  Field type: Number; Field Label: Amount; Length: 16; Decimal Places: 2
5.  Repeat these steps for a platform event with the label Order EMEA and the same fields.
