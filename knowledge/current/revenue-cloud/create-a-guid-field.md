---
title: "Create a GUID Field"
domain: revenue-cloud
topic: create-a-guid-field
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-06-07T00:37:41.256Z
estimatedTokens: 373
keywords: [GUID, Add, deployment, ensure, unique, identification, records, across, environments]
---

> Add a GUID field to all objects used during your deployment to ensure unique
  identification of records across environments.

# Create a GUID Field

Add a GUID field to all objects used during your deployment to ensure unique identification of records across environments.

1.  From Setup, in the Quick Find box, find and select **Object Manager**.
2.  Select an object.
3.  Click **Fields & Relationships**.
4.  Click **New**.
5.  Select **Text** for the data type.
6.  Enter a field label and field name.
7.  Enter a length.

    We recommend 255 to avoid any errors related to ID length.

8.  Select **Unique** and **External ID**.

    ![Important](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

    #### Important

    Selecting these attributes ensures that every record gets a unique ID.

9.  Click **Next**.
10.  Select the appropriate profiles for field access, optionally add the field to page layouts, and then click **Save**.
11.  Repeat this process for all Salesforce objects related to your deployment plan.

![Note](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

Alternatively, you can create GUID fields by using the Metadata API. For more information, see [Understanding Metadata API](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/meta_intro.htm "HTML (New Window)") and the [Custom Field](https://developer.salesforce.com/docs/atlas.en-us.262.0.api_meta.meta/api_meta/customfield.htm "HTML (New Window)") metadata type.
