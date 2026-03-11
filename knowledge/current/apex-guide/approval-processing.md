---
title: "Approval Processing"
domain: apex-guide
topic: approval-processing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.445Z
keywords: [Approval, Processing, Note]
---

# Approval Processing

# Approval Processing

An approval process automates how records are approved in Salesforce. An approval process specifies each step of approval, including from whom to request approval and what to do at each point of the process.

-   Use the Apex process classes to create approval requests and process the results of those requests:
    -   [ProcessRequest Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ProcessRequest.htm)
    -   [ProcessResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ProcessResult.htm)
    -   [ProcessSubmitRequest Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ProcessSubmitRequest.htm)
    -   [ProcessWorkItemRequest Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ProcessWorkitemRequest.htm)
-   Use the Approval.process method to submit an approval request and approve or reject existing approval requests. For more information, see [Approval Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_approval.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The process method counts against the DML limits for your organization. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

For more information about approval processes, see “Set Up an Approval Process” in the Salesforce online help.

-   **[Apex Approval Processing Example](atlas.en-us.apexcode.meta/apexcode/apex_process_example.htm)**