---
title: "New Publishing Model for LWR Sites"
domain: exp-cloud-lwr
topic: new-publishing-model-for-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.799Z
estimatedTokens: 481
keywords: [New, Publishing, Model, LWR, Sites, Experience, Cloud, take, advantage, paradigm, components, frozen, site, published, served]
---

# New Publishing Model for LWR Sites

> LWR sites in Experience Cloud take advantage of a new publishing paradigm, where
  components are frozen when the site is published and served statically at runtime.

# New Publishing Model for LWR Sites

LWR sites in Experience Cloud take advantage of a new publishing paradigm, where components are frozen when the site is published and served statically at runtime.

This new paradigm allows LWR sites to deliver components and data as efficiently as possible, but it also introduces some caveats and limitations when managing your site and writing components.

In Aura sites, Lightning components (both Lightning web components and Aura components) are delivered dynamically. So when you update a custom component that’s currently used in an Aura site, your component changes go live immediately without publishing the site. However, in LWR sites, you must publish your site before any changes, such as bug fixes or new features, can propagate to standard, custom, or managed components.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

When you preview your site in Experience Builder, Lightning web components are served dynamically, which means the preview always shows the most up-to-date versions of your components and data.

## Which Features Are Affected?

This table explains which features are affected by the new publishing model.

| Feature | You must republish your LWR site... |
| --- | --- |
| Lightning web components | When:You update a Lightning web component that’s being used in an LWR site.Salesforce updates out-of-the-box components.Until you republish the site, it uses the version of the previously published component’s source code, which can cause issues at runtime. |
| Managed package components | When you upgrade components from a managed package that are already in your site.Until you republish the site, it uses the version of the previously published component’s source code, which can cause issues at runtime. |
| Labels | When you update a custom label or want updated labels from Salesforce. |
