---
title: "Run Apex Tests"
domain: sfdx-dev
topic: run-apex-tests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.683Z
estimatedTokens: 1490
keywords: [Run, Apex, Tests, you’re, ready, test, changes, source, code, org, Salesforce, CLI, command, line, Extensions]
---

# Run Apex Tests

> When you’re ready to test changes to your source code, you can run Apex tests in an org
    using Salesforce CLI on the command line. You can also run Apex tests from Salesforce Extensions
    for VS Code or from within third-party continuous integration tools, such as Jenkins or
    CircleCI.

# Run Apex Tests

When you’re ready to test changes to your source code, you can run Apex tests in an org using Salesforce CLI on the command line. You can also run Apex tests from Salesforce Extensions for VS Code or from within third-party continuous integration tools, such as Jenkins or CircleCI.

## Minimum User Permissions and Settings Required

The user running Apex tests must have these user permissions in the org:

-   View Setup and Configuration
-   API Enabled

Also ensure that the Enable Streaming API setting is enabled in the org’s user interface. The setting is enabled by default.

See [User Permissions](https://help.salesforce.com/articleView?id=platform.admin_userperms.htm&type=5&language=en_US) and [Configure User Interface Settings](https://help.salesforce.com/articleView?id=xcloud.customize_ui_settings.htm&type=5&language=en_US) for details.

## Run All Apex Tests and View Results

This command runs all Apex tests in the specified org asynchronously, which is the default behavior.

```

```

The command outputs the apex get test command with a job ID that you can then run to view the full results. For example:

```

```

For more examples, see the help for the commands by running sf apex run test --help and sf apex get test --help CLI commands, or read the [Salesforce CLI Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm), which contains the same information as the help output.

## Determine Code Coverage in Orgs With Large Volumes of Apex Code

Before deploying Apex classes and triggers to your production org, or including them in an AppExchange managed package, you must write unit tests that cover 75% of the total Apex code in your org. You can retrieve information about your current code coverage percentage using one of these tools:

-   Salesforce CLI: Specify the --code-coverage flag of the apex run test command. Or
-   VS Code: Check the retrieve-test-code-coverage setting.

Both methods produce a report with detailed information about the code coverage of all Apex classes in your org.

To improve the performance for large test runs, check the **Store Only Aggregate Code Coverage** setting in your org from **Setup** | **Apex Test Execution** | **Options...**. This setting improves the performance of gathering code coverage information for large orgs with many Apex classes by turning off per-class code coverage. When the setting is checked, the Apex Code Coverage by Class table in the Apex test results contains all Apex classes and triggers listed in ApexCodeCoverageAggregate, including classes that aren't covered by the tests in the current Apex test run. You can drill down and check which classes aren’t covered, and then adjust your unit tests to reach the required code coverage.

To minimize scrolling while viewing your code coverage information when you run only a handful of Apex tests, we recommend unchecking the **Store Only Aggregate Code Coverage** setting. The Apex Code Coverage by Class table then shows only the Apex classes and triggers covered by the current Apex test run. The calculation of per-class code coverage filters the entries in this table to include only classes that were directly touched by the test methods in the run.

Here’s an example of how you can use the **Store Only Aggregate Code Coverage** setting to investigate and resolve code coverage issues. A nightly build with the setting checked shows that the Class032 has only 57% code coverage.

![store only aggregate code coverage setting checked](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fcode_coverage_checked.png&folder=sfdx_dev)

Uncheck the setting and run the test on Class032 to get code coverage information for just that class. Use this information to write more unit tests for the class with low coverage. As you keep checking the new code coverage percentage of Class032, you no longer have to scroll through the long results of all your Apex tests.

![store only aggregate code coverage setting unchecked](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fcode_coverage_uncheck.png&folder=sfdx_dev)

-   **[Debug Apex](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_apex_debugger.htm)**
    If you use Salesforce Extensions for Visual Studio Code (VS Code) for your development tasks, you have a choice of Apex Debugger extensions. Whichever debugger you chose, you set breakpoints in your Apex classes and step through their execution to inspect your code in real time to find bugs. You can run Apex tests in VS Code or on the command line.
-   **[Generate and View Apex Debug Logs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_view_apex_debug_logs.htm)**
    Apex debug logs can record database operations, system processes, and errors that occur when executing a transaction or running unit tests in any authenticated org. Enable the Debug Log in Salesforce Extensions for VS Code, then view the logs with VS Code or Salesforce CLI.

#### See Also

-   [*Apex Developer Guide* : Debugging, Testing, and Deploying Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_debug_test_deploy.htm "Apex Developer Guide : Debugging, Testing, and Deploying Apex - HTML (New Window)")

-   [*Salesforce CLI Command Reference* : Apex Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm "Salesforce CLI Command Reference : Apex Commands - HTML (New Window)")

-   [Test Anything Protocol (TAP)](https://testanything.org/ "Test Anything Protocol (TAP) - HTML (New Window)")

-   [*VS Code Command*: SFDX: Run Apex Tests | Test Suite](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/apex-testing.html "VS Code Command: SFDX: Run Apex Tests | Test Suite  - HTML (New Window)")

## Code Examples

```
sf apex run test --target-org myscratch
```

```
sf apex get test --test-run-id 7078HzRMVV --target-org myscratch
```

## Related Topics

- Debug Apex (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_apex_debugger.htm)
- Generate and View Apex Debug Logs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_view_apex_debug_logs.htm)
