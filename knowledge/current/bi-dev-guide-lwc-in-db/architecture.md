---
title: "Architecture"
domain: bi-dev-guide-lwc-in-db
topic: architecture
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.427Z
estimatedTokens: 441
keywords: [Architecture, Let’s, look, how, custom, Lightning, Web, Component, widgets, fit, CRM, Analytics, dashboard]
---

# Architecture

> Let’s look at how custom Lightning Web Component widgets fit into the existing CRM
    Analytics dashboard architecture.

# Architecture

Let’s look at how custom Lightning Web Component widgets fit into the existing CRM Analytics dashboard architecture.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

This architecture doesn't apply for custom Lightning web components added to Lightning dashboards.

CRM Analytics dashboards work with a clean separation of concerns. Widgets get data from queries, and pass selection back to them. Queries can pass selections to each other through faceting and receive global filters from the core runtime. Steps can also pass selections and data to other components via bindings.

![The CRM Analytics dashboard architecture.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_arch1.png&folder=bi_dev_guide_lwc_in_db)

Now you have a way to put your code into the mix while taking advantage of this entire system.

![The CRM Analytics dashboard architecture with a custom LWC component.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_arch2.png&folder=bi_dev_guide_lwc_in_db)

Mixing custom code in with widgets creates a powerful dynamic, and you have many ways to get state and configuration into your code. Meanwhile, you can communicate with the parent dashboard by setting selections on the associated query or using the setState method.

![How the LWC communicates with the CRM Analytics dashboard.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_arch3.png&folder=bi_dev_guide_lwc_in_db)

#### See Also

-   [Setup](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_setup.htm "Set up your environment to create Lightning Web Component widgets, and then add them to your CRM Analytics and Lightning dashboards.")

## Related Topics

- Setup (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_setup.htm)
