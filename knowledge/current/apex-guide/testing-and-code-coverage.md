---
title: "Testing and Code Coverage"
domain: apex-guide
topic: testing-and-code-coverage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.689Z
keywords: [Testing, Code, Coverage, How, Calculated?, Note, Inspecting]
---

# Testing and Code Coverage

# Testing and Code Coverage

The Apex testing framework generates code coverage numbers for your Apex classes and triggers every time you run one or more tests. Code coverage indicates how many executable lines of code in your classes and triggers have been exercised by test methods. Write test methods to test your triggers and classes, and then run those tests to generate code coverage information.

Apex Trigger and Class Covered by Test Methods

![Apex trigger and class covered by test methods](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fcode_coverage_by_test_classes.png&folder=apexcode)

In addition to ensuring the quality of your code, unit tests enable you to meet the code coverage requirements for deploying or packaging Apex. To deploy Apex or package it for the Salesforce AppExchange, unit tests must cover at least 75% of your Apex code, and those tests must pass.

Code coverage serves as one indication of test effectiveness, but doesn’t guarantee test effectiveness. The quality of the tests also matters, but you can use code coverage as a tool to assess whether you need to add more tests. While you need to meet minimum code coverage requirements for deploying or packaging your Apex code, code coverage shouldn’t be the only goal of your tests. Tests should assert your app’s behavior and ensure the quality of your code.

## How Is Code Coverage Calculated?

Code coverage percentage is a calculation of the number of covered lines divided by the sum of the number of covered lines and uncovered lines. Only executable lines of code are included. (Comments and blank lines aren’t counted.) System.debug() statements and curly brackets are excluded when they appear alone on one line. Multiple statements on one line are counted as one line for the purpose of code coverage. If a statement consists of multiple expressions that are written on multiple lines, each line is counted for code coverage.

The following is an example of a class with one method. The tests for this class have been run, and the option to show code coverage was chosen for this class in the Developer Console. The blue lines represent the lines that are covered by tests. The lines that aren’t highlighted are left out of the code coverage calculation. The red lines show the lines that weren’t covered by tests. To achieve full coverage, more tests are needed. The tests must call getTaskPriority() with different inputs and verify the returned value.

This is the class that is partially covered by test methods. The corresponding test class isn’t shown.

![Sample class with code coverage view in the Developer Console](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fapex_testing_code_coverage_partial_dev_console.png&folder=apexcode)

Test classes (classes that are annotated with @isTest) are excluded from the code coverage calculation. This exclusion applies to all test classes regardless of what they contain—test methods or utility methods used for testing.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The Apex compiler sometimes optimizes expressions in a statement. For example, if multiple string constants are concatenated with the + operator, the compiler replaces those expressions with one string constant internally. If the string concatenation expressions are on separate lines, the additional lines aren’t counted as part of the code coverage calculation after optimization. To illustrate this point, a string variable is assigned to two string constants that are concatenated. The second string constant is on a separate line.

```

```

The compiler optimizes the string concatenation and represents the string as one string constant internally. The second line in this example is ignored for code coverage.

```

```

## Inspecting Code Coverage

After running tests, you can view code coverage information in the Tests tab of the Developer Console. The code coverage pane includes coverage information for each Apex class and the overall coverage for all Apex code in your organization.

Also, code coverage is stored in two Lightning Platform Tooling API objects: [ApexCodeCoverageAggregate](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverageaggregate.htm "HTML (New Window)") and [ApexCodeCoverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverage.htm "HTML (New Window)"). ApexCodeCoverageAggregate stores the sum of covered lines for a class after checking all test methods that test it. ApexCodeCoverage stores the lines that are covered and uncovered by each individual test method. For this reason, a class can have multiple coverage results in ApexCodeCoverage—one for each test method that has tested it. You can query these objects by using SOQL and the Tooling API to retrieve coverage information. Using SOQL queries with Tooling API is an alternative way of checking code coverage and a quick way to get more details.

For example, this SOQL query gets the code coverage for the TaskUtil class. The coverage is aggregated from all test classes that exercised the methods in this class.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

This SOQL query requires the Tooling API. You can run this query by using the Query Editor in the Developer Console and checking **Use Tooling API**.

Here’s a sample query result for a class that’s partially covered by tests:

| ApexClassOrTrigger.Name | NumLinesCovered | NumLinesUncovered |
| --- | --- | --- |
| TaskUtil | 8 | 2 |

This next example shows how you can determine which test methods covered the class. The query gets coverage information from a different object, ApexCodeCoverage, which stores coverage information by test class and method.

```

```

Here’s a sample query result.

| ApexTestClass.Name | TestMethodName | NumLinesCovered | NumLinesUncovered |
| --- | --- | --- | --- |
| TaskUtilTest | testTaskPriority | 7 | 3 |
| TaskUtilTest | testTaskHighPriority | 6 | 4 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If a single deployment has over 2,000 Apex classes, ApexCodeCoverage objects for the deployed classes are deleted even if the deployment fails or is rolled back.ApexCodeCoverageAggregate objects aren’t affected.

The NumLinesUncovered values in ApexCodeCoverage differ from the corresponding value for the aggregate result in ApexCodeCoverageAggregate because they represent the coverage related to one test method each. For example, test method testTaskPriority() covered 7 lines in the entire class out of a total of 10 coverable lines, so the number of uncovered lines with regard to testTaskPriority() is 3 lines (10–7). Because the aggregate coverage stored in ApexCodeCoverageAggregate includes coverage by all test methods, the coverage of testTaskPriority() and testTaskHighPriority() is included, which leaves only 2 lines that are not covered by any test methods.