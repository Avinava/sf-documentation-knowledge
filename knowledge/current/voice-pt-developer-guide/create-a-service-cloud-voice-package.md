---
title: "Create a Service Cloud Voice Package"
domain: voice-pt-developer-guide
topic: create-a-service-cloud-voice-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.001Z
estimatedTokens: 607
keywords: [Service, Cloud, Voice, Package, managed, lets, develop, distribute, resources, needed, integrate, telephony, system, enable, org]
---

# Create a Service Cloud Voice Package

> This managed package lets you develop and distribute resources that are needed to
    integrate your telephony system with Service Cloud Voice and enable Voice in an org.

# Create a Service Cloud Voice Package

This managed package lets you develop and distribute resources that are needed to integrate your telephony system with Service Cloud Voice and enable Voice in an org.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

1.  [Create Developer Hub and Namespace Orgs](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_hub_namespace_orgs.htm)
    Linking a Developer Hub to a namespace org lets you use the Salesforce Developer Experience to develop a second-generation package.
2.  [Create a Salesforce DX Project](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm)
    Allow Service Cloud Voice to communicate with your telephony provider. The package you’re creating includes a connector, contact center, settings metadata, and more.
3.  [Create and Deploy Your Package](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_deploy_package.htm)
    Use these commands to create, update, and install the package.
4.  [Assign User Permissions](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_assign_permissions.htm)
    Service Cloud Voice for Partner Telephony comes with the following user permissions, which should be assigned to users as part of the Contact Center Admin (Partner Telephony) and Contact Center Agent (Partner Telephony) permission sets.
5.  [Generate a Self-Signed Certificate with OpenSSL](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm)
    Use OpenSSL to generate an RSA private key and certificate.

## Related Topics

- Create Developer Hub and Namespace Orgs (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_hub_namespace_orgs.htm)
- Create a Salesforce DX Project (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm)
- Create and Deploy Your Package (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_deploy_package.htm)
- Assign User Permissions (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_assign_permissions.htm)
- Generate a Self-Signed Certificate with OpenSSL (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm)
