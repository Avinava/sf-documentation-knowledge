---
title: "Jenkinsfile Walkthrough"
domain: sfdx-dev
topic: jenkinsfile-walkthrough
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.142Z
estimatedTokens: 3012
keywords: [Jenkinsfile, Walkthrough, sample, how, integrate, Dev, Hub, scratch, orgs, Jenkins, job, uses, Multibranch, Pipelines, Every]
---

# Jenkinsfile Walkthrough

> The sample  Jenkinsfile shows how to integrate your Dev Hub and scratch orgs into a
        Jenkins job. The sample uses Jenkins Multibranch Pipelines. Every Jenkins setup is
        different. This walkthrough describes one of the ways to automate testing of your Salesforce
        applications. The walkthrough highlights Salesforce CLI commands to create a scratch org,
        upload your code, and run your tests.

# Jenkinsfile Walkthrough

The sample Jenkinsfile shows how to integrate your Dev Hub and scratch orgs into a Jenkins job. The sample uses Jenkins Multibranch Pipelines. Every Jenkins setup is different. This walkthrough describes one of the ways to automate testing of your Salesforce applications. The walkthrough highlights Salesforce CLI commands to create a scratch org, upload your code, and run your tests.

This walkthrough relies on the [sfdx-jenkins-package](https://github.com/forcedotcom/sfdx-jenkins-package/blob/master/Jenkinsfile) Jenkinsfile. We assume that you’re familiar with the structure of the [Jenkinsfile](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_code.htm "A Jenkinsfile is a text file that contains the definition of a Jenkins Pipeline. This Jenkinsfile shows how to integrate Salesforce CLI commands to automate testing of your Salesforce applications using scratch orgs."), Jenkins Pipeline DSL, and the Groovy programming language. This walkthrough demonstrates implementing a Jenkins pipeline using Salesforce CLI and scratch orgs. See the CLI Command Reference regarding the commands used.

This workflow most closely corresponds to Jenkinsfile stages.

-   [Define Variables](#define-var)
-   [Check Out the Source Code](#check-out)
-   [Wrap All Stages in a withCredentials Command](#wrap)
-   [Wrap All Stages in a withEnv Command](#withenv)
-   [Authorize Your Dev Hub Org and Create a Scratch Org](#authorize)
-   [Push Source and Assign a Permission Set](#push)
-   [Run Apex Tests](#run-tests)
-   [Delete the Scratch Org](#delete)
-   [Create a Package](#package)
-   [Create a Scratch Org and Display Info](#package-scratch)
-   [Install Package, Run Unit Tests, and Delete Scratch Org](#package-install)

## Define Variables

Use the def keyword to define the variables required by Salesforce CLI commands. Assign each variable the corresponding environment variable that you previously set in your Jenkins environment.

```

```

Define the SF\_USERNAME variable, but don’t set its value. You do that later.

```

```

Although not required, we assume that you used the Jenkins Global Tool Configuration to create the toolbelt custom tool that points to the CLI installation directory. In your Jenkinsfile, use the tool command to set the value of the toolbelt variable to this custom tool.

```

```

You can now reference the Salesforce CLI executable in the Jenkinsfile using ${toolbelt}/sf.

## Check Out the Source Code

Before testing your code, get the appropriate version or branch from your version control system (VCS) repository. In this example, we use the checkout scm Jenkins command. We assume that the Jenkins administrator has already configured the environment to access the correct VCS repository and check out the correct branch.

```

```

## Wrap All Stages in a withCredentials Command

You previously stored the JWT private key file as a Jenkins Secret File using the Credentials interface. Therefore, you must use the withCredentials command in the body of the Jenkinsfile to access the secret file. The withCredentials command lets you name a credential entry, which is then extracted from the credential store and provided to the enclosed code through a variable. When using withCredentials, put all stages within its code block.

This example stores the credential ID for the JWT key file in the variable SERVER\_KEY\_CREDENTALS\_ID. You defined the SERVER\_KEY\_CREDENTALS\_ID earlier and set it to its corresponding environment variable. The withCredentials command fetches the contents of the secret file from the credential store and places the contents in a temporary location. The location is stored in the variable server\_key\_file. You use the server\_key\_file variable with the org login jwt command to specify the private key securely.

```

```

## Wrap All Stages in a withEnv Command

When running Jenkins jobs, it’s helpful to understand where files are being stored. There are two main directories to be mindful of: the workspace directory and the home directory. The workspace directory is unique to each job while the home directory is the same for all jobs.

The withCredentials command stores the JWT key file in the Jenkins workspace during the job. However, Salesforce CLI auth commands store authentication files in the home directory; these authentication files persist outside of the duration of the job.

This setup isn’t a problem when you run a single job but can cause problems when you run multiple jobs. So, what happens if you run multiple jobs using the same Dev Hub or other Salesforce user? When the CLI tries to connect to the Dev Hub as the user you authenticated, it fails to refresh the token. Why? The CLI tries to use a JWT key file that no longer exists in the other workspace, regardless of the withCredentials for the current job.

If you set the home directory to match the workspace directory using withEnv, the authentication files are unique for each job. Creating unique auth files per job is also more secure because each job has access only to the auth files it creates.

When using withEnv, put all stages within its code block,

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If you don’t use a pipeline or you run commands outside of a pipeline stage, add a home environment specification to your script: export HOME=$WORKSPACE.

## Authorize Your Dev Hub Org and Create a Scratch Org

This sfdx-jenkins-package example uses two stages: one stage to authorize the Dev Hub org and another stage to create a scratch org.

```

```

Use org login jwt to authorize your Dev Hub org.

You’re required to run this step only one time, but we suggest you add it to your Jenkinsfile and authorize each time you run the Jenkins job. This way you’re always sure that the Jenkins job isn’t aborted due to lack of authorization. There’s typically little harm in authorizing multiple times, but keep in mind that the API call limit for your scratch org’s edition still applies.

Use the flags of the org login jwt command to provide information about the Dev Hub org that you’re authorizing. The values for the \--client-id, \--username, and \--instance-url flags are the SF\_CONSUMER\_KEY, HubOrg, and SF\_INSTANCE\_URL environment variables you previously defined, respectively. The value of the \--jwt-key-file flag is the server\_key\_file variable that you set in the previous section using the withCredentials command. The \--set-default-dev-hub flag specifies that this HubOrg is the default Dev Hub org for creating scratch orgs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

It’s a best practice to have a unique authentication file for each Jenkins job using the withEnv wrapper. But it’s possible to authorize a Dev Hub on your Jenkins machine instead. The advantage is that your authentication is set centrally on your machine for any Jenkins job you run. The disadvantage is security: Every job has access to all authenticated users whether you want them to or not.

If you do want to auth to your Dev Hub on your Jenkins machine, follow these steps:

-   On the Jenkins machine as the Jenkins user, authorize to your Dev Hub using any of the org login commands.
-   In your Jenkinsfile, remove the withCredentials, withEnv, and org login jwt statements.

Use the org create scratch CLI command to create a scratch org. In the example, the CLI command uses the config/project-scratch-def.json file (relative to the project directory) to create the scratch org. The \--json flag specifies the output as JSON format. The \--set-default flag sets the new scratch org as the default.

The Groovy code that parses the JSON output of the org create scratch command extracts the username that was auto-generated as part of the org creation. This username, stored in the SF\_USERNAME variable, is used with the CLI commands that push source, assign a permission set, and so on.

## Push Source and Assign a Permission Set

Let’s populate your new scratch org with metadata. This example uses the project deploy start command to deploy your source to the org. The source includes all the pieces that make up your Salesforce application: Apex classes and test classes, permission sets, layouts, triggers, custom objects, and so on.

```

```

Recall the SF\_USERNAME variable that contains the auto-generated username that was output by the org create scratch command in an earlier stage. The code uses this variable as the argument to the \--target-org flag to specify the username for the new scratch org.

The project deploy start command deploys all the Salesforce-related files that it finds in your project. Add a .forceignore file to your repository to list the files that you don’t want pushed to the org.

## Run Apex Tests

Now that your source code and test source are pushed to the scratch org, run the apex run test command to run Apex tests.

```

```

You can specify various flags to the apex run test CLI command. In the example:

-   The \--test-level ${TEST\_LEVEL} flag runs all tests in the scratch org, except tests that originate from installed managed packages. You can also specify RunLocalTests to run only local tests, RunSpecifiedTests to run only certain Apex tests or suites or RunAllTestsInOrg to run all tests in the org.
-   The \--result-format tap flag specifies that the command output is in Test Anything Protocol (TAP) format. The test results that are written to a file are still in JUnit and JSON formats.
-   The \--target-org ciorg flag specifies the username for accessing the scratch org (the value in SF\_USERNAME).

The apex run test command writes its test results in JUnit format.

## Delete the Scratch Org

Salesforce reserves the right to delete a scratch org a specified number of days after it was created. You can also create a stage in your pipeline that uses org delete scratch to explicitly delete your scratch org when the tests complete. This cleanup ensures better management of your resources.

```

```

## Create a Package

Now, let’s create a package. If you’re new to packaging, you can think about a package as a container that you fill with metadata. It contains a set of related features, customizations, and schema. You use packages to move metadata from one Salesforce org to another. After you create a package, add metadata and create a new package version.

```

```

## Create a Scratch Org and Display Info

Remember when you created a scratch org earlier? Now let’s create a scratch org to install your package into, and display info about that scratch org.

```

```

## Install Package, Run Unit Tests, and Delete Scratch Org

To finish up, install your package in your scratch org, run unit tests, then delete the scratch org. That’s it!

```

```

#### See Also

-   [Sample Jenkinsfile](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_code.htm "A Jenkinsfile is a text file that contains the definition of a Jenkins Pipeline. This Jenkinsfile shows how to integrate Salesforce CLI commands to automate testing of your Salesforce applications using scratch orgs.")

-   [Pipeline-as-code with Multibranch Workflows in Jenkins](https://jenkins.io/blog/2015/12/03/pipeline-as-code-with-multibranch-workflows-in-jenkins/ "Pipeline-as-code with Multibranch Workflows in Jenkins - HTML (New Window)")

-   [TAP: Test Anything Protocol](https://testanything.org/ "TAP: Test Anything Protocol - HTML (New Window)")

-   [Configure Your Environment for Jenkins](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_config_env.htm "Before integrating your Dev Hub and scratch orgs into your existing Jenkins framework, configure your Jenkins environment. Our example assumes that you’re working in a package development model.")

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

## Code Examples

```
def SF_CONSUMER_KEY=env.SF_CONSUMER_KEY
def SERVER_KEY_CREDENTALS_ID=env.SERVER_KEY_CREDENTALS_ID
def TEST_LEVEL='RunLocalTests'
def PACKAGE_NAME='0Ho1U000000CaUzSAK'
def PACKAGE_VERSION
def SF_INSTANCE_URL = env.SF_INSTANCE_URL ?: "https://MyDomainName.my.salesforce.com"
```

```
def SF_USERNAME
```

```
def toolbelt = tool 'toolbelt'
```

```
stage('checkout source') {
        // when running in multi-branch job, one must issue this command
        checkout scm
  }
```

```
withCredentials([file(credentialsId: SERVER_KEY_CREDENTALS_ID, variable: 'server_key_file')])
   # all stages will go here 
}
```

## Related Topics

- Jenkinsfile (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_code.htm)
- Sample Jenkinsfile (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_code.htm)
- Configure Your Environment for Jenkins (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_config_env.htm)
