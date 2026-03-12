---
title: "Theme"
domain: uiapi
topic: theme
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.167Z
estimatedTokens: 544
keywords: [Theme, images, banners, display, across, top, higher, aspect, ratio]
---

# Theme

> A set of images and banners that make up a theme. Banners display across the top of a
    page and have a higher aspect ratio than images.

# Theme

A set of images and banners that make up a theme. Banners display across the top of a page and have a higher aspect ratio than images.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| brandColor | String | The brand color of the theme. | Small, 42.0 | 42.0 |
| brandImage | Theme Image | The brand image of the theme. | Small, 42.0 | 42.0 |
| defaultGroupBanner | Theme Banner | The default banner for groups. The group banner displays on a group’s home page. | Small, 42.0 | 42.0 |
| defaultGroupImage | Theme Image | The default image for groups. The group image displays beside a group name. | Small, 42.0 | 42.0 |
| defaultPageBanner | Theme Banner | The default banner for pages other than group and user pages. | Small, 42.0 | 42.0 |
| defaultUserBanner | Theme Banner | The default user banner of the theme. The user banner displays on a user’s home page. | Small, 42.0 | 42.0 |
| defaultUserImage | Theme Image | The default user image of the theme. The user image displays beside a username. | Small, 42.0 | 42.0 |
| density | String | The display density in the user interface. One of these values:ViewOne—User interface elements have a lower density on the page, which means they have more white space between them. In Lightning Experience, this setting is called Comfy.ViewTwo—User interface elements have a higher density on the page, which means they have the least amount of white space between them. In Lightning Experience, this setting is called Compact. | Small, 44.0 | 44.0 |
| headerColor | String | The header color of the theme. | Small, 42.0 | 42.0 |
| linkColor | String | The link color of the theme. | Small, 42.0 | 42.0 |
| pageColor | String | The page color of the theme. | Small, 42.0 | 42.0 |

#### See Also

-   [Get Active Theme](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_themes_active.htm "Get a Salesforce org’s active theme. A theme uses colors, images, and banners to change the overall appearance of Salesforce. Administrators can define themes and switch themes to provide a different look. The User Interface API response matches the Admin’s selection.")

## Related Topics

- Theme Image (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme_image.htm)
- Theme Banner (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme_banner.htm)
- Get Active Theme (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_themes_active.htm)
