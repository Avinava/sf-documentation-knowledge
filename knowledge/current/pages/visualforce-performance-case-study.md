---
title: "Visualforce Performance Case Study"
domain: pages
topic: visualforce-performance-case-study
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.867Z
estimatedTokens: 301
keywords: [Visualforce, Performance, Case, Study, understand, how, optimizations, work, together, examine, ways, reduce, load, time, large]
---

# Visualforce Performance Case Study

> To understand how Visualforce performance optimizations work together, examine ways to
    reduce the load time of a page with a large data grid and a complex object
    hierarchy.

# Visualforce Performance Case Study

To understand how Visualforce performance optimizations work together, examine ways to reduce the load time of a page with a large data grid and a complex object hierarchy.

Imagine that you have a Visualforce page with a data grid to collect sales forecasts. The data model for the forecast contains a multilevel object hierarchy. The page also contains calculations to display pivoted data. For an average user, the grid contains roughly 1,500 cells, which cause the page to load slowly and to hit heap and view state limits.

To optimize page performance, you can:

-   Make the page targeted and task-focused. Using the same page for both input and aggregate reports adds unnecessary complexity.
-   Create a custom object to hold aggregate data for reporting. Removing the formulas needed to display aggregated data reduces the heap size.
-   Avoid displaying every account on a single page. Implement pagination, which improves page load speeds and reduces the size of the view state.
-   Make the data grid cells read-only. Have users select the cells to edit them, then use Ajax to save the users’ edits. These practices reduce the size of the view state.
