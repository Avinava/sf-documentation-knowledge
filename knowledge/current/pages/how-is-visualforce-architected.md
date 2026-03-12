---
title: "How is Visualforce Architected?"
domain: pages
topic: how-is-visualforce-architected
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.695Z
estimatedTokens: 482
keywords: [How, Visualforce, Architected, pages, run, entirely, Lightning, platform, developer, creates, end, user, requests, shown, architecture]
---

# How is Visualforce Architected?

> All Visualforce pages run entirely on the Lightning platform, both when a developer creates the
page, and when an end user requests a page, as shown in the following architecture diagrams.

# How is Visualforce Architected?

All Visualforce pages run entirely on the Lightning platform, both when a developer creates the page, and when an end user requests a page, as shown in the following architecture diagrams.

Visualforce System Architecture - Development Mode ![A diagram indicating the way a Visualforce page runs on the platform](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_intro_dev_architecture.jpg&folder=pages)

When a developer finishes writing a Visualforce page and saves it to the platform, the platform application server attempts to compile the markup into an abstract set of instructions that can be understood by the Visualforce renderer. If compilation generates errors, the save is aborted and the errors are returned to the developer. Otherwise, the instructions are saved to the metadata repository and sent to the Visualforce renderer. The renderer turns the instructions into HTML and then refreshes the developer's view, thereby providing instantaneous feedback to the developer for whatever changes were made in the markup.

The architecture diagram below shows the process flow when a non-developer user requests a Visualforce page. Because the page is already compiled into instructions, the application server simply retrieves the page from the metadata repository and sends it to the Visualforce renderer for conversion into HTML.

Visualforce System Architecture - Standard User Mode ![A diagram of the platform when a user edits a page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_intro_user_architecture.jpg&folder=pages)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Your Visualforce pages may be run on one of the force.com servers instead of a salesforce.com server.

#### See Also

-   [What is Visualforce?](atlas.en-us.pages.meta/pages/pages_intro_what_is_it.htm)

## Related Topics

- What is Visualforce? (atlas.en-us.pages.meta/pages/pages_intro_what_is_it.htm)
