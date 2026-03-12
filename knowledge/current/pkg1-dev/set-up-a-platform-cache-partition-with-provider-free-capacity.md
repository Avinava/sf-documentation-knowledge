---
title: "Set Up a Platform Cache Partition with Provider Free Capacity"
domain: pkg1-dev
topic: set-up-a-platform-cache-partition-with-provider-free-capacity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.700Z
estimatedTokens: 680
keywords: [Platform, Cache, Partition, Provider, Free, Capacity, Salesforce, security-reviewed, managed, packages, made, automatically, enabled, Developer, edition]
---

# Set Up a Platform Cache Partition with Provider Free Capacity

> Salesforce provides 3 MB of free Platform Cache capacity for security-reviewed managed
  packages. This is made available through a capacity type called Provider Free capacity and is
  automatically enabled in all Developer edition orgs.

# Set Up a Platform Cache Partition with Provider Free Capacity

Salesforce provides 3 MB of free Platform Cache capacity for security-reviewed managed packages. This is made available through a capacity type called Provider Free capacity and is automatically enabled in all Developer edition orgs.

Follow the steps here to allocate the Provider Free capacity to a Platform Cache partition before adding it to your managed package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

If a Platform Cache partition is already part of your managed package, you can choose to edit the existing partition and allocate the Provider Free capacity to it.

Create a partition from the Platform Cache page and then set it up to use the Provider Free capacity

1.  From Setup, in the Quick Find box, enter Platform Cache, and then select **Platform Cache**.

    As the Provider Free capacity is automatically enabled in all Developer edition orgs, the Org’s Capacity Breakdown donut chart shows the Provider Free capacity.

2.  Click **New Platform Cache Partition**.
3.  In the Label box, enter a name for the partition. The name can contain alphanumeric characters only and must be unique in your org.
4.  In the Description box, enter an optional description for the partition.
5.  In the Capacity section, allocate separate capacities for session cache and org cache from the available Provider Free capacity.
6.  Save the new Platform Cache partition.

You can add this new Platform Cache partition to your managed package. When a security-reviewed managed package with Platform Cache partition is installed on the subscriber org, the Provider Free capacity is allocated and automatically made available to the installed partition. The managed package can start using the Platform Cache partition; no post-install script or manual allocation is required.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

If the managed package is not AppExchange-certified and security-reviewed, the Provider Free capacity resets to zero and will not be allocated to the installed Platform Cache partition.

When a Platform Cache partition with Provider Free capacity is installed in a subscriber org, the Provider Free capacity allocated is non-editable. The provider free capacity of one installed partition can’t be used for any other partition.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pkg1_dev)

#### Tip

After you install a Platform Cache partition with Provider Free capacity, you can edit the partition and make additional allocations from the available platform cache capacity of the org.
