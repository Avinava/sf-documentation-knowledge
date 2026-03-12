---
title: "Continuous Integration Using Jenkins"
domain: sfdx-dev
topic: continuous-integration-using-jenkins
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.124Z
estimatedTokens: 528
keywords: [Continuous, Integration, Jenkins, open-source, extensible, automation, server, implementing, delivery, easily, integrate, Salesforce, framework, automate, testing]
---

# Continuous Integration Using Jenkins

> Jenkins is an open-source, extensible automation server for implementing continuous
  integration and continuous delivery. You can easily integrate Salesforce DX into the Jenkins
  framework to automate testing of Salesforce applications against scratch orgs.

# Continuous Integration Using Jenkins

Jenkins is an open-source, extensible automation server for implementing continuous integration and continuous delivery. You can easily integrate Salesforce DX into the Jenkins framework to automate testing of Salesforce applications against scratch orgs.

To integrate Jenkins, we assume:

-   You are familiar with how Jenkins works. You can configure and use Jenkins in many ways. We focus on integrating Salesforce DX into Jenkins multibranch pipelines.
-   The computer on which the Jenkins server is running has access to your version control system and to the repository that contains your Salesforce application.

-   **[Configure Your Environment for Jenkins](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_config_env.htm)**
    Before integrating your Dev Hub and scratch orgs into your existing Jenkins framework, configure your Jenkins environment. Our example assumes that you’re working in a package development model.
-   **[Jenkinsfile Walkthrough](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_sample_walkthrough.htm)**
    The sample Jenkinsfile shows how to integrate your Dev Hub and scratch orgs into a Jenkins job. The sample uses Jenkins Multibranch Pipelines. Every Jenkins setup is different. This walkthrough describes one of the ways to automate testing of your Salesforce applications. The walkthrough highlights Salesforce CLI commands to create a scratch org, upload your code, and run your tests.
-   **[Sample Jenkinsfile](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_code.htm)**
    A Jenkinsfile is a text file that contains the definition of a Jenkins Pipeline. This Jenkinsfile shows how to integrate Salesforce CLI commands to automate testing of your Salesforce applications using scratch orgs.

#### See Also

-   [Jenkins](https://jenkins.io/ "Jenkins - HTML (New Window)")

-   [Pipeline-as-code with Multibranch Workflows in Jenkins](https://jenkins.io/blog/2015/12/03/pipeline-as-code-with-multibranch-workflows-in-jenkins/ "Pipeline-as-code with Multibranch Workflows in Jenkins - HTML (New Window)")

## Related Topics

- Configure Your Environment for Jenkins (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_config_env.htm)
- Jenkinsfile Walkthrough (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_sample_walkthrough.htm)
- Sample Jenkinsfile (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_jenkins_code.htm)
