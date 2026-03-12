---
title: "Set Up and Publish Your Partner Telephony Package"
domain: voice-pt-developer-guide
topic: set-up-and-publish-your-partner-telephony-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.148Z
estimatedTokens: 681
keywords: [Publish, Partner, Telephony, Package, started, Service, Cloud, Voice, managed, lets, develop, distribute, resources, needed, integrate]
---

# Set Up and Publish Your Partner Telephony Package

> To get started with Service Cloud Voice for Partner Telephony, set up and publish a
  managed package. This package lets you develop and distribute resources that are needed to
  integrate your telephony system with Service Cloud Voice and enable Service Cloud Voice in an
  org.

# Set Up and Publish Your Partner Telephony Package

To get started with Service Cloud Voice for Partner Telephony, set up and publish a managed package. This package lets you develop and distribute resources that are needed to integrate your telephony system with Service Cloud Voice and enable Service Cloud Voice in an org.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

We assume that you’re a Salesforce admin who is comfortable using git, generating public and private keys, and working with Salesforce APIs.

To integrate your telephony system with Service Cloud Voice, you’ll also include a connector in your package that lets Salesforce and your telephony system talk to each other. The connector enables inbound and outbound calling as well as common call controls such as mute, hold, and transfer.

-   **[A Note About Scratch Orgs](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_scratch_org.htm)**
    When developing your managed package, we recommend using a scratch org. The scratch org is a source-driven and disposable deployment of Salesforce code and metadata.
-   **[Create a Service Cloud Voice Package](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_create_voice_package.htm)**
    This managed package lets you develop and distribute resources that are needed to integrate your telephony system with Service Cloud Voice and enable Voice in an org.
-   **[Get Started with the Quick Start Partner Telephony Package](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_quick_start_package.htm)**
    You can explore the partner telephony features in your partner telephony-enabled org. We’ve published a sample quick start package that you can install in your org, create a contact center, and get started.

## Related Topics

- A Note About Scratch Orgs (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_scratch_org.htm)
- Create a Service Cloud Voice Package (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_create_voice_package.htm)
- Get Started with the Quick Start Partner Telephony Package (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_quick_start_package.htm)
