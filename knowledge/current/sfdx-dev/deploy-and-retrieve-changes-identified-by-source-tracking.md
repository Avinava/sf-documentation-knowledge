---
title: "Deploy and Retrieve Changes Identified by Source Tracking"
domain: sfdx-dev
topic: deploy-and-retrieve-changes-identified-by-source-tracking
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.657Z
estimatedTokens: 616
keywords: [Deploy, Retrieve, Changes, Identified, Source, Tracking, Salesforce, app, typically, low-code, pro-code, techniques, creating, custom, directly]
---

# Deploy and Retrieve Changes Identified by Source Tracking

> When you create a Salesforce app, you typically use both low-code and pro-code
    techniques. An example of low-code is creating a custom object directly in an org using Setup.
    An example of pro-code is creating an Apex class in your local project using an IDE, such as VS
    Code. As you work, source tracking identifies changes so you can keep the remote metadata in the
    org in sync with the source in your local project.

# Deploy and Retrieve Changes Identified by Source Tracking

When you create a Salesforce app, you typically use both low-code and pro-code techniques. An example of low-code is creating a custom object directly in an org using Setup. An example of pro-code is creating an Apex class in your local project using an IDE, such as VS Code. As you work, source tracking identifies changes so you can keep the remote metadata in the org in sync with the source in your local project.

The process is iterative. First you preview the remote and local changes. If conflicts exist, you resolve them. You must now ensure that these changes exist in both the org and your local project. So you retrieve the remote changes to your local project, then push them to your source control repository, to ensure that the source control system contains all your changes and is the source of historical truth. You deploy your local changes, such as Apex code, to the org so you can validate and test it. And you keep iterating through this process until you finish developing the Salesforce app.

To see source tracking in action, let’s look at some examples.

Say you run project retrieve preview and see remote changes.

```

```

Retrieve the changes in your org to your local project with the project retrieve start command. Now that the components have been created locally, the Path column has a value and it includes the default package directory.

```

```

After retrieving the source, run project retrieve preview again. Now, source tracking reports that there’s nothing to retrieve.

```

```

Let’s now look at deploying. To preview your local changes, run project deploy preview.

```

```

Then deploy your local changes. After deploying to a sandbox, other developers that are using the sandbox can see your changes.

```

```

Run project deploy preview again.

```

```

The command reports there’s nothing to deploy, indicating that your local project and the org are synchronized.

-   **[Retrieve Changes to Profiles with Source Tracking](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_source_tracking_profiles.htm)**
    Retrieving profiles behaves a little differently with source tracking.

#### See Also

-   [*VS Code Command*: SFDX: Deploy|Retrieve Source to|from Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/deploy-changes.html "VS Code Command: SFDX: Deploy|Retrieve Source to|from Org - HTML (New Window)")

## Code Examples

```
sf project retrieve preview --target-org DevSandbox

No conflicts found.

No files will be deleted.

Will Retrieve [3] files.
 Type         Fullname                          Path 
 ──────────── ───────────────────────────────── ──── 
 Layout       GizmoObject__c-GizmoObject Layout      
 CustomObject GizmoObject__c                         
 ApexClass    GizmoClass                             

Ignored [2] files. These files won't retrieve because they're ignored by your .forceignore file.
 Type    Fullname                            Path 
 ─────── ─────────────────────────────────── ──── 
 Profile Admin                                    
 Profile B2B Reordering Portal Buyer Profile
```

```
sf project retrieve start --target-org DevSandbox
Preparing retrieve request... ⣟ Sending request to org
Preparing retrieve request... Succeeded

Retrieved Source
=========================================================================================================================================
| State   Name                              Type         Path                                                                             
| ─────── ───────────────────────────────── ──────────── ──────────────────────────────────────────────────────────────────────────────── 
| Created GizmoClass                        ApexClass    force-app/main/default/classes/GizmoClass.cls                                    
| Created GizmoClass                        ApexClass    force-app/main/default/classes/GizmoClass.cls-meta.xml                           
| Created GizmoObject__c                    CustomObject force-app/main/default/objects/GizmoObject__c/GizmoObject__c.object-meta.xml     
| Created GizmoObject__c-GizmoObject Layout Layout       force-app/main/default/layouts/GizmoObject__c-GizmoObject Layout.layout-meta.xml
```

```
sf project retrieve preview 

No conflicts found.

No files will be deleted.

No files will be retrieved.

Ignored [2] files. These files won't retrieve because they're ignored by your .forceignore file.
 Type    Fullname                            Path 
 ─────── ─────────────────────────────────── ──── 
 Profile Admin                                    
 Profile B2B Reordering Portal Buyer Profile
```

```
sf project deploy preview --target-org DevSandbox

No conflicts found.

No files will be deleted.

Will Deploy [2] files.
 Type         Fullname        Path                                                                           
 ──────────── ─────────────── ────────────────────────────────────────────────────────────────────────────── 
 ApexClass    WidgetClass     force-app/main/default/classes/WidgetClass.cls-meta.xml                        
 CustomObject WidgetObject__c force-app/main/default/objects/WidgetObject__c/WidgetObject__c.object-meta.xml 

No files were ignored. Update your .forceignore file if you want to ignore certain files.
```

```
sf project deploy start --target-org DevSandbox
Deploying v59.0 metadata to test-ikspctiorkzs@example.com using the v59.0 SOAP API.
Deploy ID: 0Af8D00000pNmKySAK
Status: Succeeded | ████████████████████████████████████████ | 2/2 Components (Errors:0) | 0/0 Tests (Errors:0)

Deployed Source
=====================================================================================================================
| State   Name            Type         Path                                                                           
| ─────── ─────────────── ──────────── ────────────────────────────────────────────────────────────────────────────── 
| Created WidgetClass     ApexClass    force-app/main/default/classes/WidgetClass.cls                                 
| Created WidgetClass     ApexClass    force-app/main/default/classes/WidgetClass.cls-meta.xml                        
| Created WidgetObject__c CustomObject force-app/main/default/objects/WidgetObject__c/WidgetObject__c.object-meta.xml
```

## Related Topics

- Retrieve Changes to Profiles with Source Tracking (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_source_tracking_profiles.htm)
