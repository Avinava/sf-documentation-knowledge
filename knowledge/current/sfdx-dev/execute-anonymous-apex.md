---
title: "Execute Anonymous Apex"
domain: sfdx-dev
topic: execute-anonymous-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.223Z
estimatedTokens: 327
keywords: [Execute, Anonymous, Apex, block, code, org, run, Salesforce, CLI, command]
---

# Execute Anonymous Apex

> You can execute an anonymous block of Apex code in an org with the apex run Salesforce CLI command.

# Execute Anonymous Apex

You can execute an anonymous block of Apex code in an org with the apex run Salesforce CLI command.

1.  Open a terminal (macOS and Linux) or command prompt Windows and change to your Salesforce DX project directory.
2.  Run the apex run command with no flags to open an interactive shell. At the prompt, enter all your Apex code; press CTRL-D when you're finished. Your code is then executed in a single execute anonymous request in the specified org, or the default org if you don’t specify one.

    ```

    ```

    This output shows an example of executing the Apex code system.debug ('Hello world!');

    ```

    ```

    Use the \--file flag to execute Apex code in a file rather than interactively.

    ```

    ```


#### See Also

-   [*Apex Developer Guide*: Anonymous Blocks](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_anonymous_block.htm "Apex Developer Guide: Anonymous Blocks - HTML (New Window)")

-   [*VS Code Command*: SFDX: Execute Anonymous Apex with Currently Selected Text | Editor Contents](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/apex-writing.html#anonymous-apex "VS Code Command: SFDX: Execute Anonymous Apex with Currently Selected Text | Editor Contents - HTML (New Window)")

## Code Examples

```
sf apex run --target-org myscratch
```

```
Start typing Apex code. Press the Enter key after each line, then press CTRL+D when finished.
system.debug ('Hello world!');
Compiled successfully.
Executed successfully.

58.0 APEX_CODE,DEBUG;APEX_PROFILING,INFO
Execute Anonymous: system.debug ('Hello world!');
14:23:06.174 (174742273)|USER_INFO|[EXTERNAL]|0058H000005QWcE|test-ux9lpg9jyyqt@example.com|(GMT-07:00) Pacific Daylight Time (America/Los_Angeles)|GMT-07:00
14:23:06.174 (174785450)|EXECUTION_STARTED
14:23:06.174 (174792639)|CODE_UNIT_STARTED|[EXTERNAL]|execute_anonymous_apex
14:23:06.174 (175417814)|USER_DEBUG|[1]|DEBUG|Hello world!
14:23:06.175 (175529797)|CUMULATIVE_LIMIT_USAGE
14:23:06.175 (175529797)|LIMIT_USAGE_FOR_NS|(default)|
  Number of SOQL queries: 0 out of 100
  Number of query rows: 0 out of 50000
  Number of SOSL queries: 0 out of 20
  Number of DML statements: 0 out of 150
  Number of Publish Immediate DML: 0 out of 150
  Number of DML rows: 0 out of 10000
  Maximum CPU time: 0 out of 10000
  Maximum heap size: 0 out of 6000000
  Number of callouts: 0 out of 100
  Number of Email Invocations: 0 out of 10
  Number of future calls: 0 out of 50
  Number of queueable jobs added to the queue: 0 out of 50
  Number of Mobile Apex push calls: 0 out of 10

14:23:06.175 (175529797)|CUMULATIVE_LIMIT_USAGE_END

14:23:06.174 (175598235)|CODE_UNIT_FINISHED|execute_anonymous_apex
14:23:06.174 (175617689)|EXECUTION_FINISHED
```

```
sf apex run --file ~/test.apex
```
