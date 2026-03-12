---
title: "Get Started by Using a Sample Repo"
domain: sfdx-dev
topic: get-started-by-using-a-sample-repo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.292Z
estimatedTokens: 1133
keywords: [Started, Sample, Repo, quickest, way, going, Salesforce, tooling, clone, dreamhouse-lwc, GitHub, configuration, files, application, try]
---

# Get Started by Using a Sample Repo

> The quickest way to get going with Salesforce DX tooling is to clone the dreamhouse-lwc GitHub repo. Use its configuration files and
		Salesforce application to try some commonly used Salesforce CLI commands. In addition to
		source code for the application, the repo includes sample data and Apex tests.

# Get Started by Using a Sample Repo

The quickest way to get going with Salesforce DX tooling is to clone the dreamhouse-lwc GitHub repo. Use its configuration files and Salesforce application to try some commonly used Salesforce CLI commands. In addition to source code for the application, the repo includes sample data and Apex tests.

This task assumes you have a Dev Hub org. See [Select and Enable a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm) for more information.

1.  If you haven't already, [install Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) on your computer.
2.  Open a terminal or command prompt window, and clone the [dreamhouse-lwc](https://www.sfdc.co/sfdx-sample-repo) GitHub sample repo using HTTPS or SSH.

    HTTPS:

    ```

    ```

    SSH:

    ```

    ```

3.  Change to the dreamhouse-lwc project directory.

    ```

    ```

4.  Authorize your Dev Hub org by logging into it, set it as your default, and assign it an alias.

    ```

    ```

    Enter your Dev Hub org credentials in the browser that opens. After you log in successfully, you can close the browser.

5.  Create a scratch org using the config/project-scratch-def.json file, set the org as your default, and assign it an alias.

    ```

    ```

    The command uses the default Dev Hub you set with the sf org login web command in a previous step.

6.  View the orgs that you've either created or logged into.

    ```

    ```

    The table displays the Dev Hub you logged into and the scratch org you created. The right-most column indicates the default scratch org and Dev Hub org; in the real-life output you see cute emojis, but in the output below we use (S) and (D), respectively. The Alias column displays the aliases you assigned each org. Here’s some sample output.

    ```

    ```

7.  Deploy the Dreamforce app, whose source is in the force-app directory, to the scratch org.

    ```

    ```

8.  Assign the dreamhouse permission set to the default scratch org user (test-ibnpzayw@example.com).

    ```

    ```

9.  Import sample data from three objects (Contact, Property, and Broker) into the scratch org using the specified plan definition file.

    ```

    ```

10.  Run Apex tests.

     ```

     ```

     Apex tests run asynchronously by default. If the tests finish before the \--wait value, the results are displayed. Otherwise, use the displayed command to get the results using a job ID.

11.  Open the scratch org and view the deployed metadata under Most Recently Used.

     ```

     ```

12.  In App Launcher, find and open the Dreamhouse application.

Congrats! You just deployed an application to a new scratch org.

#### See Also

-   [Sample Repository on GitHub](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_clone_repo.htm "To get started quickly, see the dreamhouse-lwc GitHub repo. This standalone application contains an example DX project with multiple Apex classes, Aura components, custom objects, sample data, and Apex tests.")

-   [Authorization](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.")

-   [Create Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.")

-   [Deploy Source From Your Project to the Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm "After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.")

-   [Run Apex Tests](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm "When you’re ready to test changes to your source code, you can run Apex tests in an org using Salesforce CLI on the command line. You can also run Apex tests from Salesforce Extensions for VS Code or from within third-party continuous integration tools, such as Jenkins or CircleCI.")

## Code Examples

```
git clone https://github.com/trailheadapps/dreamhouse-lwc.git
```

```
git clone git@github.com:trailheadapps/dreamhouse-lwc.git
```

```
cd dreamhouse-lwc
```

```
sf org login web --set-default-dev-hub --alias DevHub
```

```
sf org create scratch --definition-file config/project-scratch-def.json --set-default --alias my-scratch-org
```

## Related Topics

- Sample Repository on GitHub (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_clone_repo.htm)
- Authorization (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
- Create Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
- Deploy Source From Your Project to the Scratch Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)
- Run Apex Tests (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm)
