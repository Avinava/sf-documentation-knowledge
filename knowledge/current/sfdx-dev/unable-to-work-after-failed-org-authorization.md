---
title: "Unable to Work After Failed Org Authorization"
domain: sfdx-dev
topic: unable-to-work-after-failed-org-authorization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.705Z
estimatedTokens: 280
keywords: [Unable, Work, Failed, Org, Authorization, Sometimes, try, authorize, Dev, Hub, scratch, Salesforce, CLI, IDE, don’t]
---

# Unable to Work After Failed Org Authorization

> Sometimes you try to authorize a Dev Hub org or a scratch org using the Salesforce CLI or
    an IDE, but you don’t successfully log in to the org. The port remains open for the stray
    authorization process, and you can’t use the CLI or IDE. To proceed, end the process
    manually.

# Unable to Work After Failed Org Authorization

Sometimes you try to authorize a Dev Hub org or a scratch org using the Salesforce CLI or an IDE, but you don’t successfully log in to the org. The port remains open for the stray authorization process, and you can’t use the CLI or IDE. To proceed, end the process manually.

## macOS or Linux

To recover from a failed org authorization on macOS or Linux, use a terminal to kill the process running on port 1717.

1.  From a terminal, run:

    ```

    ```

2.  In the results, find the ID for the process that’s using the port.
3.  Run:

    ```

    ```


## Windows

To recover from a failed org authorization on Windows, use the Task Manager to end the Node process.

1.  Press Ctrl+Alt+Delete, then click **Task Manager**.
2.  Select the **Process** tab.
3.  Find the process named Node.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

    #### Note

    If you’re a Node.js developer, you can have several running processes with this name.

4.  Select the process that you want to end, and then click **End Process**.

## Code Examples

```
lsof -i tcp:1717
```

```
kill -9 <the process ID>
```
