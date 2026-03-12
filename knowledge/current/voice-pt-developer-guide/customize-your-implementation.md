---
title: "Customize Your Implementation"
domain: voice-pt-developer-guide
topic: customize-your-implementation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.011Z
estimatedTokens: 707
keywords: [Customize, Implementation, setup, add, vendor]
---

# Customize Your Implementation

> Use this information to customize the setup and add vendor value to your
  implementation.

# Customize Your Implementation

Use this information to customize the setup and add vendor value to your implementation.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

-   **[Automated Key Provisioning with Service Cloud Voice for Partner Telephony](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_key_provisioning.htm)**
    When a contact center is created and connected with the partner telephony system, the public key for the contact center can be provisioned automatically with an Apex call to the partner system.
-   **[Add a Partner Settings UI to Omni-Channel](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_partner_settings_ui.htm)**
    Partners can launch a Lightning component from the Omni-Channel widget with their own additional settings. This Lightning component is shown in the Additional Settings section along with other common rep settings.
-   **[Configure Multiple Connector URLs](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiurl.htm#voice_pt_multiurl)**
    You can add multiple connector URLs and the corresponding login URLs in the managed package. The admin can select a connector URL during contact center creation or from the contact center details page.
-   **[Customize Error Messages](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_custom_messages.htm)**
    Improve rep efficiency by displaying custom error messages in the Omni-Channel utility whenever a telephony action fails. By default, generic labels are displayed.
-   **[Communicating with Lightning Components](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_communicating_with_lc.htm)**
    If you set up Service Cloud Voice with Partner Telephony, you must enable communication between the Lightning components and your telephony system. You can do this by creating a Lightning Message Service (LMS) bridge and/or configuring the Service Cloud Voice Toolkit APIs.

## Related Topics

- Automated Key Provisioning with Service Cloud Voice for Partner Telephony (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_key_provisioning.htm)
- Add a Partner Settings UI to Omni-Channel (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_partner_settings_ui.htm)
- Configure Multiple Connector URLs (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiurl.htm)
- Customize Error Messages (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_custom_messages.htm)
- Communicating with Lightning Components (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_communicating_with_lc.htm)
