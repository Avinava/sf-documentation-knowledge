---
title: "Create Developer Hub and Namespace Orgs"
domain: voice-pt-developer-guide
topic: create-developer-hub-and-namespace-orgs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.057Z
estimatedTokens: 811
keywords: [Developer, Hub, Orgs, Linking, org, lets, Salesforce, Experience, develop, second-generation, package]
---

# Create Developer Hub and Namespace Orgs

> Linking a Developer Hub to a namespace org lets you use the Salesforce Developer
  Experience to develop a second-generation package.

# Create Developer Hub and Namespace Orgs

Linking a Developer Hub to a namespace org lets you use the Salesforce Developer Experience to develop a second-generation package.

Before you begin, contact Salesforce Support to request the ability to create connected apps. This requirement starts in Spring ’26.

1.  Create an org with Dev Hub features enabled.
    1.  Create a Developer Edition org.
    2.  Enable Lightning Experience.
    3.  Enable Dev Hub features: From Setup, enter Dev Hub in the Quick Find box and select **Dev Hub**. Then, click **Enable**. After you enable Dev Hub, you can’t disable it.
    4.  Enable Unlocked Packages and Second-Generation Managed Packages.
2.  Create a namespace org.
    1.  Create a Developer Edition org.
    2.  Enable Lightning Experience.
    3.  [Create a namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/namespaces_creating.htm).

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

        #### Note

        Choose your namespace carefully. If you’re trying out this feature or need a namespace for testing purposes, choose a disposable namespace. Don’t choose a namespace that you want to use in the future for a production org or some other real use case. After you associate a namespace with an org, you can't change it or reuse it.

    4.  In the Dev Hub org, use Namespace Registry to register the namespace that you created. To learn more, see [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm).
    5.  In the sfdx-project.json file, specify your namespace using the **namespace** attribute.
3.  [Create a connected app](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm) in your Dev Hub org for authorization. The app allows you to set the refresh token timeout, specify IP ranges, and more. Use any name; for example, Dev Hub Connected App.
4.  To authenticate into the dev hub, use the following Salesforce CLI command. For HUB\_ORG\_ALIAS, choose any name. For CLIENT\_ID, use the consumer key. For INSTANCE\_URL, use [https://login.salesforce.com](https://login.salesforce.com).

    ```

    ```

5.  You are prompted for the secret. To retrieve it, click **Click to reveal** under Consumer Secret.![App Manager interface](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fconnected_apps.png&folder=voice_pt_developer_guide)

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=voice_pt_developer_guide)

    #### Tip

    To view the OAuth client ID and personal connected app secret, from Setup, enter App Manager in the Quick Find box and click **App Manager**. Click **Connected App** → **Consumer Key** and **Consumer Secret**. To learn about more authentication methods, see [Authorize an Org Using the Web Server Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm).


-   [Next →](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm "Create a Salesforce DX Project")

## Code Examples

```
sf org login web --set-default-dev-hub --alias [HUB_ORG_ALIAS] --client-id [CLIENT_ID] —instance-url [INSTANCE_URL]
```

## Related Topics

- Next → (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm)
