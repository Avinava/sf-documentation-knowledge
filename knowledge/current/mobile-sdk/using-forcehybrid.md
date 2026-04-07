---
title: "Using Forcehybrid"
domain: mobile-sdk
topic: using-forcehybrid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.783Z
estimatedTokens: 920
keywords: [Forcehybrid, creating, hybrid, apps, Mobile, SDK, npm, utility, works, Cordova, command, line, build, projects, iOS]
---

# Using Forcehybrid

> For creating hybrid apps, Mobile SDK provides
        the forcehybrid npm utility. This utility works with the Cordova command line to build
        hybrid Mobile SDK
        projects. With forcehybrid, you can create hybrid projects for iOS, Android, or both in a
        single pass.

# Using Forcehybrid

For creating hybrid apps, Mobile SDK provides the forcehybrid npm utility. This utility works with the Cordova command line to build hybrid Mobile SDK projects. With forcehybrid, you can create hybrid projects for iOS, Android, or both in a single pass.

Forcehybrid gives you two ways to create your app.

-   Specify the type of application you want, along with basic configuration data.

    OR

-   Use an existing Mobile SDK app as a template. You still provide the basic configuration data.

You can use forcehybrid interactively at the command line, or in script mode with command line parameters. To see usage information, type forcehybrid without arguments.

## Using forcehybrid create Interactively

To enter application options interactively at a command prompt, type forcehybrid create. The forcehybrid utility then prompts you for each configuration option. For example:

```

```

This example creates a hybrid local app named “LocalHybridTest” in the ./LocalHybridTest/ directory, with iOS and Android targets.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Although forcehybrid create sets up hybrid projects for the platforms you specify, the app isn’t ready for building until you’ve finished the setup at the Cordova command line. See [Create Hybrid Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_ios.htm "Once you’ve installed forcehybrid and the Cordova command line, you’re ready to create functioning hybrid apps.")

## Using forcehybrid create in Script Mode

In script mode, you enter your parameters in a single command line instruction:

```

```

This example creates a hybrid local app named “packagetest” in the ./PackageTest/ directory, with iOS and Android targets. Here’s a description of the available options.

```

```

## Using forcehybrid createWithTemplate

The forcehybrid createWithTemplate command is identical to forcehybrid create except that it asks for a GitHub repo URI instead of an app type. You set this path to point to any repo directory that contains a Mobile SDK app that can be used as a template. Your template app can be any supported Mobile SDK app type. The force script changes the template’s identifiers and configuration to match the values you provide for the other parameters.

Before you use createWithTemplate, it's helpful to know which templates are available. To find out, type forcehybrid listtemplates. This command prints a list of templates provided by Mobile SDK. Each listing includes a brief description of the template and its GitHub URI. For example:

```

```

Once you've found a template's URI, you can plug it into the forcehybrid command line. Here’s command line usage information for forcehybrid createWithTemplate:

```

```

For any template in the SalesforceMobileSDK-Templates repo, you can drop the path for templaterepouri—just the template name will do. For example, consider the following command line call:

```

```

This call replicates the hybrid local template app. It recreates the app in the current directory with the same source code and resources as the template app. Forcehybrid changes the app name to “MyHybrid” throughout the project. (This createwithtemplate call is equivalent to creating a hybrid\_local app with forcehybrid.)

## How the Forcehybrid Script Generates New Apps

The forcehybrid script

-   Generates apps with the Cordova command line.
-   Downloads the template app and a bootconfig.json file from GitHub.
-   Downloads the SalesforceMobileSDK Cordova plugin from GitHub. This plugin delivers the Mobile SDK libraries as Android and iOS library projects.

## Code Examples

```
$ forcehybrid create
Enter the target platform(s) separated by commas (ios, android): ios,android
Enter your application type (hybrid_local, hybrid_remote): <press RETURN>
Enter your application name: LocalHybridTest
Enter your package name: com.myhybrid.ios
Enter your organization name (Acme, Inc.): BestApps.com
Enter output directory for your app (leave empty for the current directory): LocalHybridTest
```

```
$ forcehybrid create --platform=ios,android --apptype=hybrid_local --appname=packagetest 
--packagename=com.test.my_new_app --organization="Acme Widgets, Inc." 
--outputdir=PackageTest
```

```
Usage:

# create ios/android hybrid_local or hybrid_remote mobile application
forcehybrid create
    --platform=Comma separated platforms (ios, android)
    --apptype=Application Type (hybrid_local, hybrid_remote)
    --appname=Application Name
    --packagename=App Package Identifier (e.g. com.mycompany.myapp)
    --organization=Organization Name (Your company's/organization's name)
    [--startpage=App Start Page (The start page of your remote app. Only required for hybrid_remote)]
    [--outputdir=Output Directory (Leave empty for current directory)]
```

```
Available templates:

1) Basic hybrid local applicationforcehybrid createwithtemplate
    --templaterepouri=HybridLocalTemplate
2) Basic hybrid remote applicationforcehybrid createwithtemplate
    --templaterepouri=HybridRemoteTemplate
```

```
# create ios/android hybrid_local or hybrid_remote mobile application from a template
forcehybrid createWithTemplate
    --platform=Comma separated platforms (ios, android)
    --templaterepouri=Template repo URI
    --appname=Application Name
    --packagename=App Package Identifier (e.g. com.mycompany.myapp)
    --organization=Organization Name (Your company's/organization's name)
    [--outputdir=Output Directory (Leave empty for current directory)]
```

## Related Topics

- Create Hybrid Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_ios.htm)
