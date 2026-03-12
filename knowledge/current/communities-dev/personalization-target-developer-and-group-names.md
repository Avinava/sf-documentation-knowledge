---
title: "Personalization Target Developer and Group Names"
domain: communities-dev
topic: personalization-target-developer-and-group-names
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.374Z
estimatedTokens: 1966
keywords: [Personalization, Target, Developer, Group, Determine, experience, variation, targets, Connect, REST, API, Metadata, personalize, Builder, site]
---

# Personalization Target Developer and Group Names

> Determine the developer name and group name for your experience variation targets when
    using Connect REST API or Metadata API to personalize your Experience Builder site.

# Personalization Target Developer and Group Names

Determine the developer name and group name for your experience variation targets when using Connect REST API or Metadata API to personalize your Experience Builder site.

For the [Target Input](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_requests_target_input.htm) request body of Connect Rest API or the PersonalizationTargetInfo subtype of the [Audience](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_audience.htm) metadata type, you must specify:

-   The target group name in the groupName property
-   The target developer name in the targetValue property

To determine these names, you have to copy property values from several JSON files in the site’s ExperienceBundle folders.

![ExperienceBundle folders](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fmigrate_experiencebundle_structure.png&folder=communities_dev)

The way you determine these values varies depending on whether you’re targeting [page variations](#page_vars), [branding sets](#branding), [component visibility](#visibility), or [component attributes](#attributes).

## Page Variations

To determine the group name and developer name for a page variation, open the relevant route file and the corresponding view file. For example, open the Home.json file in the routes folder and the Home.json file in the views folder.

Group Name

**Format:** route.id, where route.id is the id property of the route JSON file.

**Example:** 63d9b8fe-99fc-4f54-b784-5034e09a6670

![Page variations group name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_var1.png&folder=communities_dev)

Developer Name

**Format:** route.label\_view.label\_Page, where:

-   route.label is the label property of the route JSON file.
-   view.label is the label property of the view JSON file.

**Example:** Home\_Gold\_Home\_Page

![Page variation developer name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_var2.png&folder=communities_dev)

## Branding Sets

To determine the group name and developer name for a branding set, open the relevant branding set file and the corresponding theme file. For example, in a Customer Service site, open the customerService.json file in the themes folder and the customerService.json file in the brandingSets folder.

Group Name

**Format:** theme.id$#$Branding, where theme.id is the id property of the theme JSON file.

**Example:** 70ebee67-0fca-421e-ac32-12879ee55936$#$Branding

![Branding set group name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_brand1.png&folder=communities_dev)

Developer Name

**Format:** theme.developerName\_brandingSet.label\_Branding, where:

-   theme.developerName is the developerName property of the theme JSON file.
-   brandingSet.label is the label property of the branding set JSON file.

**Example:** service\_Customer\_Service\_Branding

![Branding set developer name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_brand2.png&folder=communities_dev)

## Component Visibility

To determine the group name and developer name for component visibility, open the view file that contains the component. For example, open the Home.json file in the views folder.

Group Name

**Format:** view.id$#$component.id, where:

-   view.id is the id property of the view JSON file.
-   component.id is the id property of the component in the view JSON file.

**Example:** f8c9b721-0a1d-45bb-954f-3277a0501892$#$823cb1c0-697f-4b33-8fa4-a925aef98cf7

![Component visibility group name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_vis1.png&folder=communities_dev)

Developer Name

**Format:** view.label\_componentName\_Component, where:

-   view.label is the label property of the view JSON file.
-   componentName is the name of the component in Experience Builder (not in the JSON file).

**Example:** Home\_Headline\_Component

![Component visibility dev name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_vis2.png&folder=communities_dev)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

If necessary, you can add a numeric value to the developer name to make it unique. For example, Home\_Page\_Rich\_Content\_Editor\_Component1.

## Component Attributes

For component attributes, the group and developer names vary depending on whether the component is in the view body or in the header or footer of a theme layout.

***Components in the View Body***

To determine the group and developer names for a component in the view body, open the view file that contains the component. For example, open the Home.json file in the views folder.

Group Name

**Format:** view.id$#$component.id, where:

-   view.id is the id property of the view JSON file.
-   component.id is the id property of the component in the view JSON file.

**Example:** f8c9b721-0a1d-45bb-954f-3277a0501892$#$823cb1c0-697f-4b33-8fa4-a925aef98cf7

![Component visibility group name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_vis1.png&folder=communities_dev)

Developer Name

**Format:** view.label\_componentName\_Component\_Properties, where:

-   view.label is the label property of the view JSON file.
-   componentName is the name of the component in Experience Builder (not in the JSON file).

**Example:** Home\_Headline\_Component\_Properties

![Component visibility dev name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_vis2.png&folder=communities_dev)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

If necessary, you can add a numeric value to the developer name to make it unique. For example, Home\_Page\_Rich\_Content\_Editor\_Component1.

***Components in the Header or Footer***

To determine the group and developer names for a component in the header or footer of a theme layout, open the theme file that contains the component. For example, in a Customer Service site, open the customerService.json file in the themes folder.

Group Name

**Format:** themeLayout.id$#$component.id, where:

-   themeLayout.id is the id property of the layout that contains the component.
-   component.id is the id property of the component in the layout.

**Example:** 06ce2db9-2c79-4ccc-9ca8-94c7b50efb6b$#$c55d1908-fe6b-47e8-b41e-70ad05aeb490

![Component attributes group name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_attrib1.png&folder=communities_dev)

Developer Name

**Format:** themeLayout.label\_componentName\_Component\_Properties, where:

-   themeLayout.label is the label property of the layout that contains the component.
-   componentName is the name of the component in Experience Builder (not in the JSON file).

**Example:** Default\_Navigation\_Menu\_Component\_Properties

![Component attributes developer name](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fpersonalization_attrib2.png&folder=communities_dev)

#### See Also

-   [*Metadata API Developer Guide*: Audience](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_audience.htm "Metadata API Developer Guide: Audience - HTML (New Window)")

-   [*Connect REST API Developer Guide*: Target Input](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_requests_target_input.htm "Connect REST API Developer Guide: Target Input - HTML (New Window)")
