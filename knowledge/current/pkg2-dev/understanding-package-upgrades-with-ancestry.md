---
title: "Understanding Package Upgrades with Ancestry"
domain: pkg2-dev
topic: understanding-package-upgrades-with-ancestry
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.005Z
estimatedTokens: 284
keywords: [Understanding, Package, Upgrades, Ancestry, Review, how, impacts, version, allowed]
---

# Understanding Package Upgrades with Ancestry

> Review how package ancestry impacts which package version upgrades are
    allowed.

# Understanding Package Upgrades with Ancestry

Review how package ancestry impacts which package version upgrades are allowed.

Refer to this table and the package ancestry tree to understand whether your subscribers can upgrade between these 2GP package versions.

**Example Package Ancestry Tree**

![Graphic of a package ancestry tree](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fpkg2_ancestry_upgrades.png&folder=pkg2_dev)

| Upgrade From | Upgrade To | Will This Package Upgrade Succeed? |
| --- | --- | --- |
| 1.1 | 1.7 | Yes |
| 1.3.2 | 1.3.4 | Yes. Both 1.3.2 and 1.3.4 are patch versions within the same major and minor version. You’re allowed to upgrade between patch versions that share the same major and minor version. |
| 1.3.1 | 1.7 | Yes. 1.3.1 is a patch version. Because upgrading from 1.3 to 1.7 is allowed, you can also upgrade from 1.3.x to 1.7. |
| 1.2 | 1.3 | No. These two versions don’t share an ancestry path. |
| 1.5 | 1.7 | No. These two versions don’t share an ancestry path. |
| 1.4 | 1.3.3 | No. Downgrading an installed package isn’t allowed. |
| 1.0 | 1.8 | Yes |
