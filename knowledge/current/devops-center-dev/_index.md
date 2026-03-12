---
domain: devops-center-dev
name: Salesforce DevOps Center Developer Guide
documentCount: 39
lastGenerated: 2026-03-12T09:36:26.563Z
---

# Salesforce DevOps Center Developer Guide — Knowledge Index

> Understand the DevOps Center object model and how the custom objects relate to one another.

## Available Topics

| File | Title | Type | Description |
|---|---|---|---|
| [async-operation-result-sfdevopsasyncoperationresultc.md](./async-operation-result-sfdevopsasyncoperationresultc.md) | Async Operation Result (sf_devops__Async_Operation_Result__c) | developer-guide | Represents the communication bridge between the Heroku app and DevOps Center.
   |
| [back-sync-sfdevopsbacksyncc.md](./back-sync-sfdevopsbacksyncc.md) | Back Sync (sf_devops__Back_Sync__c) | help-article | Represents the synchronization between a DevOps Center user’s development
       |
| [branch-sfdevopsbranchc.md](./branch-sfdevopsbranchc.md) | Branch (sf_devops__Branch__c) | developer-guide | Stores the state of a branch in the source control repository (also version
     |
| [change-bundle-sfdevopschangebundlec.md](./change-bundle-sfdevopschangebundlec.md) | Change Bundle (sf_devops__Change_Bundle__c) | help-article | A collection of Work Item records that are promoted as a single unit to the
     |
| [change-bundle-install-sfdevopschangebundleinstallc.md](./change-bundle-install-sfdevopschangebundleinstallc.md) | Change Bundle Install (sf_devops__Change_Bundle_Install__c) | help-article | Represents the deployment of the metadata components associated with a change
   |
| [change-submission-sfdevopschangesubmissionc.md](./change-submission-sfdevopschangesubmissionc.md) | Change Submission (sf_devops__Change_Submission__c) | developer-guide | Represents a change that was submitted (committed) to the work item feature
     |
| [common-promotion-custom-objects.md](./common-promotion-custom-objects.md) | Common Promotion Custom Objects | developer-guide | Before we drill down into the details of promotions, let’s first review the comm |
| [deploy-component-sfdevopsdeploycomponentc.md](./deploy-component-sfdevopsdeploycomponentc.md) | Deploy Component (sf_devops__Deploy_Component__c) | help-article | Stores the aggregated set of metadata components that must be deployed as
       |
| [deployment-sfdevopsdeploymente.md](./deployment-sfdevopsdeploymente.md) | Deployment (sf_devops__Deployment__e) | developer-guide | Notifies subscribers when a work item’s metadata is deployed to a pipeline
      |
| [deployment-result-sfdevopsdeploymentresultc.md](./deployment-result-sfdevopsdeploymentresultc.md) | Deployment Result (sf_devops__Deployment_Result__c) | help-article | Contains information from DevOps Center to the Heroku application about how
     |
| [devops-center-custom-field-on-the-user-standard-object.md](./devops-center-custom-field-on-the-user-standard-object.md) | DevOps Center Custom Field on the User Standard Object | developer-guide | The DevOps Center data model uses the User standard object and adds this custom  |
| [devops-center-custom-objects.md](./devops-center-custom-objects.md) | DevOps Center Custom Objects | help-article | The DevOps Center data model includes several custom objects. |
| [devops-center-custom-platform-events.md](./devops-center-custom-platform-events.md) | DevOps Center Custom Platform Events | api-reference | DevOps Center generates platform events for work items as they move through the
 |
| [devops-center-developer-guide.md](./devops-center-developer-guide.md) | DevOps Center Developer Guide | release-note | This guide describes the DevOps Center object model and provides reference infor |
| [devops-center-release-notes.md](./devops-center-release-notes.md) | DevOps Center Release Notes | release-note | The DevOps Center team releases new features, product enhancements, and bug fixe |
| [environment-sfdevopsenvironmentc.md](./environment-sfdevopsenvironmentc.md) | Environment (sf_devops__Environment__c) | help-article | Represents a connection from DevOps Center to an environment, which currently
   |
| [hidden-remote-change-sfdevopshiddenremotechangec.md](./hidden-remote-change-sfdevopshiddenremotechangec.md) | Hidden Remote Change (sf_devops__Hidden_Remote_Change__c) | developer-guide | Used to hide a Remote Change record from a work item. A sample use case is
      |
| [how-devops-center-keeps-track-of-user-changes.md](./how-devops-center-keeps-track-of-user-changes.md) | How DevOps Center Keeps Track of User Changes | developer-guide | When a DevOps Center user is connected to a development environment, it tracks t |
| [how-devops-center-uses-asynchronous-operations.md](./how-devops-center-uses-asynchronous-operations.md) | How DevOps Center Uses Asynchronous Operations | developer-guide | The custom objects that make up the DevOps Center object model live in the org i |
| [how-promotions-work.md](./how-promotions-work.md) | How Promotions Work | help-article | Show the objects involved when a user does an unbundled or bundled promotion. |
| [merge-result-sfdevopsmergeresultc.md](./merge-result-sfdevopsmergeresultc.md) | Merge Result (sf_devops__Merge_Result__c) | developer-guide | Contains information from DevOps Center to the Heroku application
         about |
| [object-activity-sfdevopsobjectactivityc.md](./object-activity-sfdevopsobjectactivityc.md) | Object Activity (sf_devops__Object_Activity__c) | developer-guide | Represents an activity by one of the DevOps Center custom objects.
         Obje |
| [pipeline-sfdevopspipelinec.md](./pipeline-sfdevopspipelinec.md) | Pipeline (sf_devops__Pipeline__c) | developer-guide | Represents a collection of Pipeline Stage records that together make
         up |
| [pipeline-stage-sfdevopspipelinestagec.md](./pipeline-stage-sfdevopspipelinestagec.md) | Pipeline Stage (sf_devops__Pipeline_Stage__c) | developer-guide | Represents a connection from a pipeline to an environment; the
         collecti |
| [project-sfdevopsprojectc.md](./project-sfdevopsprojectc.md) | Project (sf_devops__Project__c) | developer-guide | Represents the parent of all DevOps Center custom objects. See Understand the De |
| [remote-change-sfdevopsremotechangec.md](./remote-change-sfdevopsremotechangec.md) | Remote Change (sf_devops__Remote_Change__c) | developer-guide | Represents a change to an environment that’s connected to DevOps
         Center |
| [repository-sfdevopsrepositoryc.md](./repository-sfdevopsrepositoryc.md) | Repository (sf_devops__Repository__c) | developer-guide | Represents a specific location in a source control system where the
         met |
| [source-member-reference-sfdevopssourcememberreferencec.md](./source-member-reference-sfdevopssourcememberreferencec.md) | Source Member Reference (sf_devops__Source_Member_Reference__c) | developer-guide | Represents a copy of the relevant information from a SourceMember
         Tooli |
| [submit-component-sfdevopssubmitcomponentc.md](./submit-component-sfdevopssubmitcomponentc.md) | Submit Component (sf_devops__Submit_Component__c) | developer-guide | Represents a metadata component that was committed to a feature
         branch  |
| [unbundled-promotions-a-deeper-look.md](./unbundled-promotions-a-deeper-look.md) | Unbundled Promotions: A Deeper Look | help-article | Now that we know the main custom objects involved in an unbundled promotion, let |
| [understand-the-devops-center-data-model.md](./understand-the-devops-center-data-model.md) | Understand the DevOps Center Data Model | developer-guide | The DevOps Center object model consists of custom objects that are created when  |
| [vcs-sfdevopsvcsc.md](./vcs-sfdevopsvcsc.md) | VCS (sf_devops__Vcs__c) | developer-guide | Represents a supported source (version) control system. This
      object is ava |
| [vcs-synch-state-sfdevopsvcssynchstatec.md](./vcs-synch-state-sfdevopsvcssynchstatec.md) | VCS Synch State (sf_devops__Vcs_Synch_State__c) | developer-guide | Represents the synchronization state between DevOps Center and the
         sour |
| [work-item-sfdevopsworkitemc.md](./work-item-sfdevopsworkitemc.md) | Work Item (sf_devops__Work_Item__c) | help-article | Represents a collection of metadata changes in a project. A work item
         c |
| [work-item-commit-sfdevopsworkitemcommite.md](./work-item-commit-sfdevopsworkitemcommite.md) | Work Item Commit (sf_devops__Work_Item_Commit__e) | developer-guide | Notifies subscribers whenever a commit occurs on a work item’s feature
          |
| [work-item-merged-change-request-sfdevopsworkitemmergedchangerequeste.md](./work-item-merged-change-request-sfdevopsworkitemmergedchangerequeste.md) | Work Item Merged Change Request (sf_devops__Work_Item_Merged_Change_Request__e) | developer-guide | Notifies subscribers when a work item’s metadata is merged into a
         pipel |
| [work-item-open-change-request-sfdevopsworkitemopenchangerequeste.md](./work-item-open-change-request-sfdevopsworkitemopenchangerequeste.md) | Work Item Open Change Request (sf_devops__Work_Item_Open_Change_Request__e) | developer-guide | Notifies subscribers whenever a change request (pull request) is
         opened |
| [work-item-promote-sfdevopsworkitempromotec.md](./work-item-promote-sfdevopsworkitempromotec.md) | Work Item Promote (sf_devops__Work_Item_Promote__c) | help-article | Represents the unbundled promotion of a work item to the next stage
         in  |
| [work-item-state-change-sfdevopsworkitemstatechangee.md](./work-item-state-change-sfdevopsworkitemstatechangee.md) | Work Item State Change (sf_devops__Work_Item_State_Change__e) | developer-guide | Notifies subscribers when the State__c field of a work item
         changes. Th |

## How to Use

1. Read this index to find the relevant topic for your question
2. Load the specific topic file(s) for detailed information
3. Each file is self-contained — no need to load other files for context

*Tags: platform*