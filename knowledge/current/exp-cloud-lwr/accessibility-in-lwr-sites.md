---
title: "Accessibility in LWR Sites"
domain: exp-cloud-lwr
topic: accessibility-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.785Z
estimatedTokens: 414
keywords: [Accessibility, LWR, Sites, Experience, Cloud, include, several, features, best, practices, screen, reader, support, navigation]
---

# Accessibility in LWR Sites

> LWR sites in Experience Cloud include several important accessibility features and best
  practices, such as screen reader support and F6 navigation.

# Accessibility in LWR Sites

LWR sites in Experience Cloud include several important accessibility features and best practices, such as screen reader support and F6 navigation.

## F6 Navigation

F6 navigation makes it easier to navigate a webpage with a keyboard or a screen reader. Unlike using the Tab key, which can take several keystrokes to reach a specific element, pressing F6 lets users first navigate between different regions. Then users can use the Tab key to home in on components within that region.

The major sections of the out-of-the-box Header and Footer theme layout component are enabled for F6 navigation. To enable F6 navigation for regions in your custom theme layouts, see [Create Custom Layout Components](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_layout.htm "Layouts are supported in the Build Your Own (LWR) template using Lightning web components instead of Aura components. You can also create your own custom layouts in the same way as for Aura sites, but with some minor changes in syntax.").

## Screen Reader Support

LWR sites run in a single page application (SPA), which is a web app that loads a single HTML page. Page updates are handled by JavaScript that modifies the Document Object Model (DOM) to simulate navigation, which can cause issues for screen readers.

So we provide screen readers with the information to properly recognize SPA navigation. Upon navigation, the title of the page is announced via an ARIA-Live region. If the theme layout stays the same, the user’s focus is returned to the content area. If the theme layout changes, the user’s focus is returned to the top of the page.

## Related Topics

- Create Custom Layout Components (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_layout.htm)
