---
title: "Follow Visualforce Design Guidelines"
domain: pages
topic: follow-visualforce-design-guidelines
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:21.876Z
estimatedTokens: 442
keywords: [Follow, Visualforce, Design, Guidelines, optimize, performance, task-centric, pages, standard, objects, declarative, features, flatten, component, hierarchies]
---

# Follow Visualforce Design Guidelines

> To optimize Visualforce page performance, design task-centric pages, use standard objects
        and declarative features, and flatten component hierarchies.

# Follow Visualforce Design Guidelines

To optimize Visualforce page performance, design task-centric pages, use standard objects and declarative features, and flatten component hierarchies.

## Design Task-Centric Pages

Design pages around specific tasks, with a logical workflow and clear navigation between tasks. Don’t overload pages with functionality and data. Visualforce pages with unbounded data or a large number of components, rows, and fields have poor usability and performance. They risk hitting governor limits for view state and heap size, and they can exceed the record retrieval limit and the page size limit. Push back on requests to include nonessential functionality and build prototypes to validate performance concerns.

## Use Standard Features Wherever Possible

The programmatic features of Lightning Platform make it easy to customize functionality. But standard objects and declarative features—such as approval processes, flows, and workflow rules—are highly optimized already and don’t count against most governor limits. Standard features simplify data models and often reduce the number of Visualforce pages necessary for business processes.

## Flatten Component Hierarchies

Flat component structures process faster than deep, hierarchical component structures. Limit the nesting of custom components to logically organize functionality, and use custom components only when that logic is intended for reuse or inclusion in another package. Vast hierarchies increase server-side management and processing time because Visualforce maintains context throughout the entire request. Each traversal of the component hierarchy consumes time and resources. Vast hierarchies also put pages at risk of hitting governor limits for heap size.
