---
title: "Track User Interactions to Send to Data Cloud"
domain: exp-cloud-lwr
topic: track-user-interactions-to-send-to-data-cloud
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.627Z
estimatedTokens: 729
keywords: [Track, User, Interactions, Send, Data, Cloud, integration, comes, interaction, events, turned, mapped, Website, Engagement, DMO]
---

# Track User Interactions to Send to Data Cloud

> Your Data Cloud integration comes with a set of interaction events that are turned on
  and mapped to the Website Engagement DMO by default. Interactions are either all mapped, or not
  mapped at all, but you can update event names to customize your integration. An interaction event
  has a named identifier, required values, and tracked  values that you define.

# Track User Interactions to Send to Data Cloud

Your Data Cloud integration comes with a set of interaction events that are turned on and mapped to the Website Engagement DMO by default. Interactions are either all mapped, or not mapped at all, but you can update event names to customize your integration. An interaction event has a named identifier, required values, and tracked values that you define.


| User Permissions Needed |
| --- |
| To create an Experience Cloud site: | Create and Set Up Experiences AND View Setup and Configuration |
| To customize an Experience Cloud site: | Be a member of the site AND Create and Set Up ExperiencesORBe a member of the site AND View Setup and Configuration AND an experience admin, publisher, or builder in that site |
| To publish an Experience Cloud site: | Be a member of the site AND Create and Set Up ExperiencesORBe a member of the site AND an experience admin or publisher in that site |

The events that you capture can’t be changed, but you can update the named identifier to personalize your integration. For example, if you want to capture when your user clicks on a menu, you can change the interaction name to menu-click, instead of the more general button-click event.

If you want to change an existing name, create an event based on our [Tag Manager Event Reference](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_event_reference.htm "This guide includes the event specifications for Experience Tag Manager. Use the examples and reference to understand the structure of Experience Cloud interaction events that are mapped to the Website Engagement DMO in Data Cloud.").

1.  From Setup, in the Quick Find box, enter Digital Experiences, click **Digital Experiences**, and then click **Settings**.
2.  Select **Advanced**.
3.  Click **Edit Head Markup** and add the script for the event you want to edit.
4.  Save your changes and publish your site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

All anchor and button element clicks are captured as events, unless they’re located inside a Shadow DOM element. For example, if an element is on certain custom lightning components, clicks aren’t tracked. Events within Shadow DOM elements require custom tracking by the custom element. Anchor and button element clicks aren’t supported in . For more information, see [Activity Tracking for Marketing Cloud Growth Landing Pages](https://help.salesforce.com/s/articleView?id=mktg.mktg_consent_tracking_parent.htm&type=5&language=en_US).

#### See Also

-   [Tag Manager Event Reference](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_event_reference.htm "This guide includes the event specifications for Experience Tag Manager. Use the examples and reference to understand the structure of Experience Cloud interaction events that are mapped to the Website Engagement DMO in Data Cloud.")

## Related Topics

- Tag Manager Event Reference (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_event_reference.htm)
