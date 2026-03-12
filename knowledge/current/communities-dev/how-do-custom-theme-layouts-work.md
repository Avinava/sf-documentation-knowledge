---
title: "How Do Custom Theme Layouts Work?"
domain: communities-dev
topic: how-do-custom-theme-layouts-work
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.288Z
estimatedTokens: 1021
keywords: [How, Custom, Theme, Layouts, Work, understand, layout, works, let’s, look, things, Experience, Builder, perspective, combine]
---

# How Do Custom Theme Layouts Work?

> To understand how a theme layout works, let’s look at things from the Experience
    Builder perspective. In Experience Builder, theme layouts combine with theme layout components
    to give you granular control of the appearance and structure of each page in your site. You can
    customize the layout’s header and footer to match your company’s branding and style, configure
    theme properties, or use a custom search bar and user profile menu. You then use theme layouts
    to apply a theme layout component to individual pages and quickly change layouts from one
    central location.

# How Do Custom Theme Layouts Work?

To understand how a theme layout works, let’s look at things from the Experience Builder perspective. In Experience Builder, theme layouts combine with theme layout components to give you granular control of the appearance and structure of each page in your site. You can customize the layout’s header and footer to match your company’s branding and style, configure theme properties, or use a custom search bar and user profile menu. You then use theme layouts to apply a theme layout component to individual pages and quickly change layouts from one central location.

A theme layout categorizes the pages in your site that share the same theme layout component. You can assign a theme layout component to any existing theme layout. Then you apply the theme layout —and thereby the theme layout component—in the page’s properties.

For example, the Customer Service template includes the following theme layouts and components, but you can create custom components or switch layouts as needed.

-   Default applies the Customer Service theme layout to all pages, except the login pages.
-   Login applies the Login Body Layout theme layout component to the login pages.

## Example

Let’s say you create three pages for your upcoming Spring campaign. Using the forceCommunity:themeLayout interface, you create a custom Large Header theme layout in the Developer Console. In the **Settings** | **Theme** area, you add a custom theme layout called Spring to categorize the campaign pages and you assign the Large Header layout component to it.

![The Theme area](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_communities%2F%2Fimages%2Fcommunity_builder_theme1.png&folder=communities_dev)

Next, you apply the Spring theme layout in each page’s properties, which instantly applies the Large Header layout to each page. Select **Override the default theme layout for this page.** (1) to display Theme Layout. Choose the new layout (2) from the available choices.

![The Page Properties area](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_communities%2Fimages%2Fcommunity_builder_theme5.png&folder=communities_dev)

Everything looks rosy until the VP of marketing decides that the header takes up too much room. That’s an easy fix, because you don’t have to update the properties of each page to change the theme layout. Instead, with one click in the Theme area, you can switch Spring to the Small Header layout and instantly update all three pages.

## Example

Now let’s say that the Small Header layout includes two custom properties—Blue Background and Small Logo. You enabled and applied these properties to all your campaign pages. However, for one page, you want to apply only the Small Logo property.

In this case, you could create a theme layout called Spring B, assign the Small Header layout component to it, and enable Small Logo. Then, you apply the Spring B theme to the page.

![Spring custom theme layout type](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_communities%2Fimages%2Fcommunity_builder_theme4.png&folder=communities_dev)

Not sure which pages are associated with any of your theme layouts?

![Theme Settings panel with Pages Assigned shown](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_communities%2Fimages%2Fcommunity_builder_theme_settings.png&folder=communities_dev)

With a click and a glance, you can see how many and which pages are associated with any of your theme layouts. From **Settings** | **Theme**, click the Pages Assigned total for any theme layout row (1). Clicking this value opens a list of the pages associated with that theme layout (2).

Theme layouts make it easy to reuse the same theme layout component in different ways while maintaining as much granular control as you need.

#### See Also

-   [*Trailhead*: Build a Custom Theme Layout Component for Experience Builder Sites](https://trailhead.salesforce.com/content/learn/projects/communities_theme_layout "Trailhead: Build a Custom Theme Layout Component for Experience Builder
    Sites - HTML (New Window)")
