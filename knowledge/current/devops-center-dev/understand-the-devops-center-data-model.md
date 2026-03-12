---
title: "Understand the DevOps Center Data Model"
domain: devops-center-dev
topic: understand-the-devops-center-data-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.372Z
estimatedTokens: 1039
keywords: [Understand, DevOps, Center, Data, Model, consists, custom, objects, created, install, managed, package, org, top, Project]
---

# Understand the DevOps Center Data Model

> The DevOps Center object model consists of custom objects that are created when you install the DevOps Center managed package in an org. The top object is Project, which is the direct or indirect parent of almost all other objects. The only exception is Repository, which one or more projects reference.

# Understand the DevOps Center Data Model

The DevOps Center object model consists of custom objects that are created when you install the DevOps Center managed package in an org. The top object is Project, which is the direct or indirect parent of almost all other objects. The only exception is Repository, which one or more projects reference.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=devops_center_dev)

#### Note

For easier reading, this guide typically refers to objects and fields by their labels rather than their API names. For example, the guide refers to the object Async Operation Result rather than sf\_devops\_\_Async\_Operation\_Result\_\_c and to its field Error Details rather than sf\_devops\_\_Error\_Details\_\_c. See the [custom objects reference section](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_customobjects.htm "The DevOps Center data model includes several custom objects."), which lists the objects by label, with their API name in parentheses. Also, when referring to the object, the name is capitalized (Project). When referring to the DevOps Center feature that the object represents, the guide uses lower case (project).

This diagram shows many of the foundational objects in the DevOps Center object model; not all objects are shown.

![High-level relationship diagram of the foundational custom objects in the DevOps Center object model.](/docs/resources/img/en-us/260.0?doc_id=devops_center%2Fimages%2Fdevops_center_dev_main.png&folder=devops_center_dev)

These three objects have direct relationships to the Project object:

-   Work Item—Represents a collection of metadata changes. When the user connects the work item to a development environment in DevOps Center (rather than developing and committing externally in the source control repository), the Work Item object references an Environment object. When the work item is promoted, the referenced environment is where the development work was previously done for that item. A single project can have multiple work items.
-   Pipeline—Represents the release pipeline. A Pipeline object has one or more Pipeline Stage child objects that represent the stages of the pipeline, such as integration, UAT, and release. The pipeline stages are in a specific order, with the production stage always occurring last. Currently, a project can have only one pipeline.
-   Environment—Represents an environment in which development work or testing of the promoted work is done. Projects, work items, and pipeline stages all have direct relationships with environments. Projects have multiple child environments, but work items and pipeline stages each reference only one environment. Currently, the only type of environment is a Salesforce org.

The DevOps Center object model uses validation rules to enforce that all references to work items, environments, pipeline stages, and so on, are contained within a single project. For example, when a work item is promoted to a new pipeline stage, the work item and pipeline stage must both be part of the same project. You can’t connect a work item in one project to an environment that’s connected to a different project.

-   **[How DevOps Center Uses Asynchronous Operations](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_asynch.htm)**
    The custom objects that make up the DevOps Center object model live in the org in which you installed the DevOps Center managed package. But many of the operations that DevOps Center performs happen outside this org.
-   **[How DevOps Center Keeps Track of User Changes](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm)**
    When a DevOps Center user is connected to a development environment, it tracks the changes the user makes to the environment. This tracking allows DevOps Center to later commit the changes to the source control repository for review.
-   **[How Promotions Work](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions.htm)**
    Show the objects involved when a user does an unbundled or bundled promotion.

## Related Topics

- custom objects reference section (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_customobjects.htm)
- How DevOps Center Uses Asynchronous Operations (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_asynch.htm)
- How DevOps Center Keeps Track of User Changes (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm)
- How Promotions Work (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions.htm)
