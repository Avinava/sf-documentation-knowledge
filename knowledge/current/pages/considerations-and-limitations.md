---
title: "Considerations and Limitations"
domain: pages
topic: considerations-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:21.798Z
estimatedTokens: 421
keywords: [Considerations, Limitations, Keep, mind, working, Lightning, message, service, Visualforce]
---

# Considerations and Limitations

> Keep these considerations and limitations in mind when working with Lightning message
  service in Visualforce.

# Considerations and Limitations

Keep these considerations and limitations in mind when working with Lightning message service in Visualforce.

Considerations

Lightning message service doesn’t work for Visualforce’s sforce.one library when pages are loaded in the Chatter Publisher that uses <chatter:feed showPublisher="true"/>. Use the native Lightning Publisher instead.

Lightning message service doesn’t work in Visualforce pages that are included in Lightning Experience via iframes, including <wave:dashboard>, <apex:iframe>, and the standard HTML <iframe\> tag. Instead, add Visualforce pages through the Lightning App Builder or as a utility bar item.

Visualforce supports only Lightning Message Channels where isExposed is true. For more information about LightningMessageChannel, see the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_lightningmessagechannel.htm "HTML (New Window)").

Lightning message service doesn’t work in Salesforce Classic or when previewing Visualforce from Setup.

Limitations

The lightning message service supports only these experiences.

-   Lightning Experience standard navigation
-   Lightning Experience console navigation
-   Salesforce mobile app for Aura and Lightning Web Components, but not for Visualforce pages
-   Lightning components used in Experience Builder sites. Support for Experience Builder sites is beta.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    Lightning Message Service doesn’t work with Salesforce Tabs + Visualforce sites or with Visualforce pages in Experience Builder sites.
