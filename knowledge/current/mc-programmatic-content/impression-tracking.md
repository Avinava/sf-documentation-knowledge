---
title: "Impression Tracking"
domain: mc-programmatic-content
topic: impression-tracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.118Z
estimatedTokens: 376
keywords: [Impression, Tracking, lets, define, region, email, measure, performance, contain, dynamic, content, links, images]
---

# Impression Tracking

> Impression tracking lets you define a region within your email to measure the performance of that region. The region you define can contain dynamic content. or you define the region to contain links and images in your static content.

# Impression Tracking

Impression tracking lets you define a region within your email to measure the performance of that region. The region you define can contain dynamic content. or you define the region to contain links and images in your static content.

Using AMPscript, you can identify regions within your emails for impression tracking. Use these functions to enable this solution:

-   BEGINIMPRESSIONREGION()
-   ENDIMPRESSIONREGION()
-   CONTENTAREA()
-   CONTENTAREABYNAME()

Use fixed string or number values in the names of impression regions in all functions. AMPscript observes Impression region names as case insensitive and stores these names at their first occurrence. You can define an unlimited number of unique impression regions.

If you don't explicitly close an impression region, the system will implicitly close that region at the end of the message being built, so an impression region opened in the HTML version of an email will not remain open when the text version of the message builds.

AMPscript allows for nested impression regions. If you open multiple regions and don't close them, all remain open and the final impression region opened remains the active one returned for resolving the related substitutions. If you issue one EndImpressionRegion() call, the second-to-last region becomes the active region. Issuing EndImpressionRegion(true) closes all open regions.

The system tracks impression regions by Job. Use impression regions in both HTML and text content.
