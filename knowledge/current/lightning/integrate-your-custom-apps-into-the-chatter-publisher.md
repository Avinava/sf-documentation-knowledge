---
title: "Integrate Your Custom Apps into the Chatter Publisher"
domain: lightning
topic: integrate-your-custom-apps-into-the-chatter-publisher
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.293Z
estimatedTokens: 1561
keywords: [Integrate, Custom, Apps, Chatter, Publisher, Rich, API, developers, attach, any, payload, feed, item, uses, Lightning]
---

# Integrate Your Custom Apps into the Chatter Publisher

> Use the Chatter Rich Publisher Apps API to integrate your custom apps into the
        Chatter publisher. The Rich Publisher Apps API enables developers to attach any custom
        payload to a feed item. Rich Publisher Apps uses Lightning components for composition and
        rendering. We provide two Lightning interfaces and a Lightning event to assist with
        integration. You can package your apps and upload them to AppExchange. An Experience Builder
        site admin page provides a selector for choosing which five of your apps to add to the
        Chatter publisher for that site.

# Integrate Your Custom Apps into the Chatter Publisher

Use the Chatter Rich Publisher Apps API to integrate your custom apps into the Chatter publisher. The Rich Publisher Apps API enables developers to attach any custom payload to a feed item. Rich Publisher Apps uses Lightning components for composition and rendering. We provide two Lightning interfaces and a Lightning event to assist with integration. You can package your apps and upload them to AppExchange. An Experience Builder site admin page provides a selector for choosing which five of your apps to add to the Chatter publisher for that site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Rich Publisher Apps are available to Experience Builder sites in topics, group, and profile feeds and in direct messages.

Use the lightning:availableForChatterExtensionComposer and lightning:availableForChatterExtensionRenderer interfaces with the lightning:sendChatterExtensionPayload event to integrate your custom apps into the Chatter publisher and carry your apps’ payload into a Chatter feed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The payload must be an [object](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/ref_attr_types_object.htm "HTML (New Window)").

## Example of a Custom App Integrated into a Chatter Publisher

This example shows a Chatter publisher with three custom app integrations. There are icons for a video meeting app (1), an emoji app (2), and an app for selecting a daily quotation (3).

![Three apps integrated into the Chatter publisher](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flightning_aef_integrated_apps.png&folder=lightning)

## Example of a Custom App Payload in a Chatter Feed Post

This example shows the custom app’s payload included in a Chatter feed.

![Custom apps payload in a Chatter post](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flightning_aef_integrated_apps_payload.png&folder=lightning)

The next sections describe how we integrated the custom quotation app with the Chatter publisher.

## 1\. Set Up the Composer Component

For the composer component, we created component, controller, helper, and style files.

Here’s the component markup in quotesCompose.cmp. In this file, we implement the lightning:availableForChatterExtensionComposer interface.

```

```

Use your controller and helper to initialize the composer component and to get the quote from a source. When you get the quote, fire the event sendChatterExtensionPayload. Firing the event enables the **Add** button so the platform can associate the app’s payload with the feed item. You can also add a title and description as metadata for the payload. The title and description are shown in a non-Lightning context, like Salesforce Classic.

```

```

Add a CSS resource to your component bundle to style your composition component.

## 2\. Set Up the Renderer Component

For the renderer component, we created component, controller, and style files.

Here’s the component markup in quotesRender.cmp. In this file, we implement the lightning:availableForChatterExtensionRenderer interface, which provides the payload as an attribute in the component.

```

```

You have a couple of ways of dealing with the payload. You can use the payload directly in the component {!v.payload}. You can use your controller to parse the payload provided by the lightning:availableForChatterExtensionRenderer interface and set its attributes yourself. Add a CSS resource to your renderer bundle to style your renderer component.

## 3\. Set Up a New ChatterExtension Entity

After you create these components, open [Postman](https://www.postman.com/downloads/ "HTML (New Window)") or any tool that can make SOAP and REST API calls. Make sure that you’re using at least API version 41.0. Log in to your org, and create a ChatterExtension entity using the [Salesforce SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_create.htm "HTML (New Window)").

Provide values for ChatterExtension fields (see [ChatterExtension](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_chatterextension.htm "HTML (New Window)") for values and descriptions).

![ChatterExtensions fields and values in Workbench](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fcustom_app_workbench3.png&folder=lightning)

Get the IconId for the file asset. Go to Postman, or your preferred tool, and make a new POST request for [creating a file asset](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_files_asset.htm "HTML (New Window)") with a fileId from your org. The filepath is /services/data/v41.0/connect/files/<fileid>/asset. Replace the version number with the current version.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Rich Publisher Apps information is cached, so there can be a 5-minute wait before your app appears in the publisher.

## 4\. Package Your App and Upload It to AppExchange

The *[Second-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm)* provides useful information about packaging your apps and publishing them on AppExchange.

## 5\. Select the Apps to Embed in the Chatter Publisher

An admin page is available in each Experience Builder site for selecting and arranging the apps to show in the Chatter publisher. Select up to five apps, and arrange them in the order you like. The order you set here controls the order the app icons appear in the publisher.

In your site, go to Experience Workspaces and open the Administration page. Click **Rich Publisher Apps** to open the page.

![Rich Publisher Apps admin settings](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Frich_publisher_apps_admin.png&folder=lightning)

After you move apps to the Selected Items column and click **Save**, the selected apps appear in the Chatter Publisher.

## Code Examples

```
<aura:component implements="lightning:availableForChatterExtensionComposer">
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>
    
    <div class="container">
    	<span class="quote" aura:id="quote"></span>
        <span class="author" aura:id="author"></span>
        <lightning:button label="Get next Quote" onclick="{!c.getQuote}"/>
    </div>

</aura:component>
```

```
getQuote: function(cmp, event, helper) {
    // get quote from the source
    var compEvent = cmp.getEvent("sendChatterExtensionPayload");
    compEvent.setParams({
        "payload" : "<payload object>",
        "extensionTitle" : "<title to use when extension is rendered>",
        "extensionDescription" : "<description to use when extension is rendered>"
    });
    compEvent.fire(); 
}
```

```
<aura:component implements="lightning:availableForChatterExtensionRenderer">
    <aura:attribute name="_quote" type="String"/>
    <aura:attribute name="_author" type="String"/>
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>
    
    <div class="container">
    	<span class="quote" aura:id="quote">{!v._quote}</span>
        <span class="author" aura:id="author">--- {!v._author} ---</span>
    </div>
</aura:component>
```
