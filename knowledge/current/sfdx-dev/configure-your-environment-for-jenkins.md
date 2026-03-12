---
title: "Configure Your Environment for Jenkins"
domain: sfdx-dev
topic: configure-your-environment-for-jenkins
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.131Z
estimatedTokens: 1144
keywords: [Configure, Environment, Jenkins, integrating, Dev, Hub, scratch, orgs, framework, assumes, you’re, working, package, development, model]
---

# Configure Your Environment for Jenkins

> Before integrating your Dev Hub and scratch orgs into your existing Jenkins framework,
    configure your Jenkins environment. Our example assumes that you’re working in a package
    development model.

# Configure Your Environment for Jenkins

Before integrating your Dev Hub and scratch orgs into your existing Jenkins framework, configure your Jenkins environment. Our example assumes that you’re working in a package development model.

1.  In your Dev Hub org, [create a connected app](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.") as described by the JWT-based authorization flow. This step includes obtaining or [creating a private key and digital certificate](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Authorizing an org with the org login jwt command requires a digital certificate and the private key used to sign the certificate. We highly recommend that you use your own private key and certificate issued by a certification authority. You can also use OpenSSL to create a key and a self-signed digital certificate, just to get started. Using a private key and certificate is optional when you authorize an org by logging into a browser.").

    Make note of your consumer key (sometimes called a client ID) when you save the connected app. You need the consumer key to set up your Jenkins environment. Also have available the private key file used to sign the digital certificate.

2.  On the computer that’s running the Jenkins server, do the following.
    1.  Download and install Salesforce CLI.
    2.  Store the private key file as a Jenkins Secret File using the [Jenkins Admin Credentials interface](https://wiki.jenkins-ci.org/display/JENKINS/Credentials+Binding+Plugin "html (New Window)"). Make note of the new entry’s ID.

        You later reference this Credentials entry in your Jenkinsfile.

    3.  Set the following variables in your Jenkins environment.

        -   SF\_USERNAME—The username for the Dev Hub org, such as juliet.capulet@myenvhub.com.
        -   SF\_INSTANCE\_URL—The login URL of the Salesforce instance that hosts the Dev Hub org. The default is https://login.salesforce.com. We recommend that you update this value to the My Domain login URL for the Dev Hub org. You can find an org’s My Domain login URL on the My Domain page in Setup.
        -   SF\_CONSUMER\_KEY—The consumer key that was returned after you created a connected app in your Dev Hub org.
        -   SERVER\_KEY\_CREDENTALS\_ID—The credentials ID for the private key file that you stored in the Jenkins Admin Credentials interface.
        -   PACKAGE\_NAME-The name of your package, such as My Package.
        -   PACKAGE\_VERSION-The version of your package, which starts with 04t.
        -   TEST\_LEVEL-The test level for your package, such as RunLocalTests.

        The names for these environment variables are just suggestions. You can use any name as long as you specify it in the Jenkinsfile.

        You can also optionally set the SF\_AUTOUPDATE\_DISABLE variable to true to disable auto-update of Salesforce CLI. CLI auto-update can interfere with the execution of a Jenkins job.

3.  Set up your Salesforce DX project so that you can create a scratch org.
4.  (Optional) Install the Custom Tools Plugin into your Jenkins console, and create a custom tool that references Salesforce CLI. The Jenkins walkthrough assumes that you created a custom tool named toolbelt in the /usr/local/bin directory, which is the directory in which Salesforce CLI is installed.

#### See Also

-   [Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow "Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.")

-   [*Salesforce CLI Setup Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup "Salesforce CLI Setup Guide - HTML (New Window)")

-   [Jenkins: Credentials Binding Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Credentials+Binding+Plugin "Jenkins: Credentials Binding Plugin - HTML (New Window)")

-   [Project Setup](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm "A Salesforce DX project provides a project structure for your org’s metadata (code and configuration), org templates, sample data, and all your team’s tests. To bring consistency to your team’s development processes, store these items in a source control system (SCS). Retrieve the contents of your team’s repository when you’re ready to develop a new feature.")

## Related Topics

- create a connected app (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- creating a private key and digital certificate (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)
- Authorize an Org Using the JWT Flow (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm)
- Project Setup (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm)
