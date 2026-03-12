---
title: "Generate an Event Bus Tenant Secret"
domain: change-data-capture
topic: generate-an-event-bus-tenant-secret
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.676Z
estimatedTokens: 547
keywords: [Generate, Event, Bus, Tenant, Secret, enable, encryption, change, events]
---

# Generate an Event Bus Tenant Secret

> To enable encryption of change events, first generate an event bus tenant
    secret.

# Generate an Event Bus Tenant Secret

To enable encryption of change events, first generate an event bus tenant secret.

**Prerequisites:**


| User Permissions Needed |
| --- |
| To manage tenant secrets: | Manage Encryption Keys |

Only authorized users can generate tenant secrets from the Platform Encryption page. Ask your Salesforce admin to assign the Manage Encryption Keys permission to you.

Before generating an Event Bus tenant secret, you must have an active Fields and Files (Probabilistic) or Fields (Deterministic) tenant secret. For instructions, see [Generate a Tenant Secret with Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_ui_setup.htm&type=5&language=en_US) in Salesforce Help.

**Steps:**

1.  From Setup, in the Quick Find box, enter Platform Encryption, and then select **Key Management**.
2.  In the Key Management Table, select **Event Bus**.
3.  Click **Generate Tenant Secret** or, to upload a customer-supplied tenant secret, click **Bring Your Own Key**.

    ![Generate a tenant secret in the Key Management page](/docs/resources/img/en-us/260.0?doc_id=platform_events%2Fimages%2Fpe-encryption-eventbus.png&folder=change_data_capture)


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

-   You can generate or rotate an event bus tenant secret once every 7 days.
-   You can also generate a tenant secret through SOAP API or REST API using the TenantSecret object and the Type field value of EventBus. For more information, see [TenantSecret](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_tenantsecret.htm "HTML (New Window)") in the [Object Reference for Salesforce and Lightning Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "HTML (New Window)").

#### See Also

-   [*Salesforce Help*: Generate a Tenant Secret with Salesforce](https://help.salesforce.com/articleView?id=security_pe_ui_setup.htm&type=5&language=en_US "Salesforce Help: Generate a Tenant Secret with Salesforce - HTML (New Window)")
