---
title: "User-Defined Data Sources"
domain: mc-programmatic-content
topic: user-defined-data-sources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.062Z
estimatedTokens: 238
keywords: [User-Defined, Data, Sources, Template, Language, offers, two]
---

# User-Defined Data Sources

> Guide Template Language offers two types of user-defined data sources:

# User-Defined Data Sources

Guide Template Language offers two types of user-defined data sources:

-   Dataobjects use a global scope, making data available for reuse multiple times via section tags.
-   Datasources reside locally within the tags, making data accessible only inside the scope of the datasource tags.

![Flowchart for User-Defined Data Sources](/docs/resources/img/en-us/noversion?doc_id=images%2Fdataobjectanddatasourcenew.png&folder=mc-programmatic-content)

In this example, the two sections for the dataobject would display this text:

```
Data from Dataobject using Section Tag
```

The first section for the datasource example would display this text:

```
Data from Inside Datasource
```

The second section from the datasource example would display this text:

```
This will not display the output of the out-of-scope variable:
```

The section does not display the template tag because it could not access any relevant data.
