---
title: "How Does Apex Work?"
domain: apex-guide
topic: how-does-apex-work
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:33.559Z
estimatedTokens: 326
keywords: [How, Apex, Work, runs, entirely, on-demand, Lightning, Platform, Developers, write, save, code, end, users, trigger]
---

# How Does Apex Work?

> All Apex runs entirely on-demand on the Lightning Platform. Developers write and save
        Apex code to the platform, and end users trigger the execution of the Apex code via the user
        interface.

# How Does Apex Work?

All Apex runs entirely on-demand on the Lightning Platform. Developers write and save Apex code to the platform, and end users trigger the execution of the Apex code via the user interface.

Apex is compiled, stored, and run entirely on the Lightning Platform ![Apex is compiled, run, and stored entirely on the Lightning Platform](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fapex_architecture.png&folder=apexcode)

When a developer writes and saves Apex code to the platform, the platform application server first compiles the code into an abstract set of instructions that can be understood by the Apex runtime interpreter, and then saves those instructions as metadata.

When an end user triggers the execution of Apex, perhaps by clicking a button or accessing a Visualforce page, the platform application server retrieves the compiled instructions from the metadata and sends them through the runtime interpreter before returning the result. The end user observes no differences in execution time from standard platform requests.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_intro_when_use_apex.htm "When Should I Use Apex?")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_intro_apex_limitation.htm "Developing Code in the Cloud")

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_intro_when_use_apex.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_intro_apex_limitation.htm)
