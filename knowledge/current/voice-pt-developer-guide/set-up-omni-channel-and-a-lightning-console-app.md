---
title: "Set Up Omni-Channel and a Lightning Console App"
domain: voice-pt-developer-guide
topic: set-up-omni-channel-and-a-lightning-console-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.141Z
estimatedTokens: 612
keywords: [Omni-Channel, Lightning, Console, App, Service, Cloud, Voice, uses, send, calls, reps, Phone, tab, utility, accept]
---

# Set Up Omni-Channel and a Lightning Console App

> Service Cloud Voice uses Omni-Channel to send calls to reps in your Lightning console
  app. Reps use the Phone tab in the Omni-Channel utility to accept or decline calls and use other
  call controls.

# Set Up Omni-Channel and a Lightning Console App

Service Cloud Voice uses Omni-Channel to send calls to reps in your Lightning console app. Reps use the Phone tab in the Omni-Channel utility to accept or decline calls and use other call controls.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

To get started, assign the automatically generated custom permission, which contains the service presence status set to reps. Then create a Lightning console app and add the Omni-Channel utility to the app.

1.  Assign Partner Telephony Permission Set to reps.

    There’s an automatically generated permission set with the label “Partner Telephony Permission Set.” This permission set contains an automatically generated Service Presence Status called “Available for Voice.” Assign the reps in the contact center to this permission set.

2.  Create a Lightning console app.
    1.  From Setup in Lightning Experience, enter App Manager in the Quick Find box, then select **App Manager**.
    2.  Click **New Lightning App**.
    3.  For **Name**, enter a name such as Contact Center.
    4.  The **Developer Name** is automatically filled. Click **Next**.
    5.  In the App Options settings, select **Console navigation**. Click **Next**.
    6.  In the Utility Bar settings page, click **Add Utility Item**.
    7.  To add Omni-Channel to the utility bar in the console footer, select **Omni-Channel**.
    8.  After you add Omni-Channel to the utility bar, the Omni-Channel utility item properties are displayed. Leave them as is and click **Next**.
    9.  Add Voice Calls as a navigation item in the console.
    10.  Click **Save & Finish**.
