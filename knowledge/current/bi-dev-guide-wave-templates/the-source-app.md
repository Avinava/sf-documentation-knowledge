---
title: "The Source App"
domain: bi-dev-guide-wave-templates
topic: the-source-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.580Z
estimatedTokens: 421
keywords: [Source, App, purposes, CRM, Analytics, Templates, Studio, It’s, collection, assets—datasets, dataflows, recipes, lenses, dashboards—, stored]
---

# The Source App

> For the purposes of CRM Analytics Templates, the app you create in CRM Analytics
  Analytics Studio is called the source app. It’s a collection of CRM Analytics
  assets—datasets, dataflows, recipes, lenses, and dashboards— stored together in a
  folder.

# The Source App

For the purposes of CRM Analytics Templates, the app you create in CRM Analytics Analytics Studio is called the *source app*. It’s a collection of CRM Analytics assets—datasets, dataflows, recipes, lenses, and dashboards— stored together in a folder.

You create the template—actually a set of JSON files—from that source app. If you update the source app in Analytics Studio, you can also update the template. The same template can also be updated by source apps in different orgs. This lets your team work collaboratively on the source app and its template. That is, more than one developer can work on the template, at the same time.

![This diagram depicts multiple orgs collaborating on a template.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_source_collaboration.png&folder=bi_dev_guide_wave_templates)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

We use the term *source app* to refer to the app you work on, the one on which you base your template. When organizations use your template to create their own apps, we refer to them as *downstream apps*.

Templates can reuse dashboards, lenses, and datasets that are part of apps other than the source app by creating dependencies on those assets. The reused assets must be part of apps created from templates. See [Share CRM Analytics Assets Between Apps](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_share_assets.htm "Use the Template Dependencies feature to reuse CRM Analytics dashboards, datasets, and lenses across apps.").

## Related Topics

- Share CRM Analytics Assets Between Apps (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_share_assets.htm)
