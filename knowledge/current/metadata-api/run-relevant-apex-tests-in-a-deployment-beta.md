---
title: "Run Relevant Apex Tests in a Deployment (Beta)"
domain: metadata-api
topic: run-relevant-apex-tests-in-a-deployment-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.849Z
keywords: [Run, Relevant, Apex, Tests, Deployment, Beta, Important, Why, RunRelevantTests, Set, Test, Level, Apply, Class, Overrides, See]
---

# Run Relevant Apex Tests in a Deployment (Beta)

# Run Relevant Apex Tests in a Deployment (Beta)

Use the RunRelevantTests (beta) test level to run only the Apex tests that are relevant to your deployment. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

The RunRelevantTests test level and the associated @IsTest() annotations are pilot or beta services that are subject to the Beta Services Terms at Agreements — Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of these pilot or beta services are at the Customer’s sole discretion.

## Why Use RunRelevantTests

Compared to the default RunLocalTests test level set for production deployments, using RunRelevantTests can significantly shorten deployment time. Whereas the RunLocalTests test level runs all Apex tests in the org except the ones that originate from installed managed and unlocked packages, RunRelevantTests runs only Apex tests relevant to the deployment payload. In orgs with extensive test suites, RunLocalTests causes long deployment times even for minor code changes, but with RunRelevantTests, the number of tests that are run are proportionally scaled to deployment size. In other words, smaller deployments result in the inclusion of fewer relevant tests compared to larger deployments.

Compared to the RunSpecifiedTests test level, where only a specified subset of Apex tests are run, RunRelevantTests requires less DevOps overhead. For RunSpecifiedTests, you must manually determine the tests that are applicable to the changes, which often requires custom DevOps tooling. In contrast, the RunRelevantTests test engine analyzes the deployment payload and automatically runs a subset of tests based on that analysis.

When you set the deployment test level to RunRelevantTests, you must still meet at least 75% test coverage for every class and trigger included in the deployment package. This coverage is computed for each class and trigger individually and is different from the overall coverage percentage. If your deployment package doesn’t meet code coverage requirements when RunRelevantTests is set, you can use test class annotations to augment your test suite. See the “Apply Test Class Overrides to RunRelevantTests” section.

## Set the Test Level to RunRelevantTests

To run relevant tests, set the RunRelevantTests test level on the DeployOptions object. Then pass DeployOptions as an argument to the deploy() call.

```

```

You can [Deploy Metadata with Apex Testing Using REST](atlas.en-us.api_meta.meta/api_meta/meta_rest_deploy.htm "Deploy using the deployRequest REST resource to initiate a request that handles all operations for the deployment."). Set the RunRelevantTests test level on the deployOptions object in the request body.

You can deploy metadata from a local project by using the Salesforce CLI. Set the \--test-level flag on one of the [supported project commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_start_unified) to RunRelevantTests.

## Apply Test Class Overrides to RunRelevantTests

For fine-grained control of the tests run with the RunRelevantTests level, you can use @IsTest annotations.

Add the @IsTest(critical=true) annotation to a test class so that it always runs during deployments, regardless of the classes or triggers in the deployment payload. Add the @IsTest(testFor='...') annotation to a test class so that its tests run whenever specified classes or triggers are new or changed in the deployment payload.

For implementation instructions, see [@IsTest(critical=true)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm#isCriticalTrue) and [@IsTest(testFor='...')](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm#isTestFor) in the Apex Developer Guide.

#### See Also

-   [*Apex Developer Guide*: @IsTest Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)