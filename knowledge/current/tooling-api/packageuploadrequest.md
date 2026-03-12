---
title: "PackageUploadRequest"
domain: tooling-api
topic: packageuploadrequest
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T05:14:46.294Z
estimatedTokens: 1019
keywords: [PackageUploadRequest, Represents, request, upload, first-generation, package, version, its, components, subscribers, install, it., API, 38.0, later., Supported, SOAP, Calls, REST, HTTP]
---

# PackageUploadRequest

> Represents a request to upload a first-generation package version
            and its components so that subscribers can install it. Available in API version
        38.0 and later.

# PackageUploadRequest

Represents a request to upload a first-generation package version and its components so that subscribers can install it. Available in API version 38.0 and later.

## Supported SOAP Calls

create(), describeSObjects(),query(),retrieve()

## Supported REST HTTP Methods

Query, GET, POST

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, NillableDescriptionA description of the package and what this version contains. |
| Errors | TypecomplexvaluePropertiesNillableDescriptionErrors that occurred during upload, if any. |
| IsReleaseVersion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionFor managed packages only. Indicates whether the managed package is a released version (true) or a beta version (false). The default is false. |
| MajorVersion | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe first number in a package version number. A version number either has an x.y format or an x.y.z format. The x represents the major version, y the minor version, and z the patch version. (The patch version can’t be specified; it’s automatically assigned when a managed beta is uploaded.)If IsReleaseVersion is false, MajorVersion is ignored. If IsReleaseVersion is true, and a managed beta is the latest uploaded version for the package, the major version must match the major version of the last uploaded beta. |
| MetadataPackageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe 18-character package ID, which starts with 033. |
| MetadataPackageVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character package version ID representing the non-deprecated package you’re uploading. |
| MinorVersion | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe second number in a package version number. A version number either has an x.y format or an x.y.z format. The x represents the major version, y the minor version, and z the patch version. (The patch version can’t be specified; it’s automatically assigned when a managed beta is uploaded.)If MinorVersion isn’t specified, the default value is 1 more than the minor version of the currently released package (0 if not released).If IsReleaseVersion is false, MinorVersion is ignored. If IsReleaseVersion is true and a managed beta is the latest uploaded version for the package, the minor version must match the minor version of the last uploaded beta. |
| Password | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionAn optional installation key for sharing the package privately with anyone who has the password value. Don't include the password if you want to make the package available to anyone on AppExchange and share your package publicly. |
| PostInstallUrl | TypetextareaPropertiesCreate, NillableDescriptionThe fully qualified URL of the post-installation instructions. Instructions are shown as a link after installation and are available from the package detail view. |
| ReleaseNotesUrl | TypetextareaPropertiesCreate, NillableDescriptionThe fully qualified URL of the package release notes. Release notes are shown as a link during the installation process and are available from the package detail view after installation. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the upload. Valid values are:ErrorIn ProgressQueuedSuccess |
| VersionName | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. The name of the package version. Example: Spring 2016. |

## Usage

Suppose that you want to upload version 1.3 of your managed package. Let’s write some code to create a package upload request, upload the package version, and poll the status of the upload until it completes.

First, let’s set some variables for the request object.

```

```

Now let’s create the upload request and start the upload. This code sample uses the Web Services Connector (WSC).

```

```

**Checking the Status of an Upload Request**

```

```

## Code Examples

```apex
static private final String packageId = "033xx00000007l0";
static private final Integer packageMajorVersionNumber = 1;
static private final Integer packageMinorVersionNumber = 3;
static private final Boolean isReleaseVersion = true;
static private final String packageVersionDescriptionSuffix =
   isReleaseVersion ? "" : "beta";
static private final String packageVersionDescription =
   "r" + packageMinorVersionNumber + packageVersionDescriptionSuffix;
static private final String packageDescription = 
   String.format("This is the most amazing package in the world! ",
      "And %s is the most amazing release so far! ",
      packageVersionDescription);
static private final String packageReleaseNotesUrl = "https://www.example.com";
static private final String packagePostInstallUrl = "https://www.example.com";

// Leave blank or null for no password
static private final String packagePassword = "";

static private final String baseUrl = "https://MyDomainName.my.salesforce.com:6109";
```

```apex
PackageUploadRequest packageUploadRequest = new PackageUploadRequest();
packageUploadRequest.setMetadataPackageId(packageId);
packageUploadRequest.setVersionName(packageVersionDescription);
packageUploadRequest.setDescription(packageDescription);
packageUploadRequest.setMajorVersion(packageMajorVersionNumber);
packageUploadRequest.setMinorVersion(packageMinorVersionNumber);
packageUploadRequest.setPostInstallUrl(packagePostInstallUrl);
packageUploadRequest.setReleaseNotesUrl(packageReleaseNotesUrl);
packageUploadRequest.setIsReleaseVersion(isReleaseVersion);
packageUploadRequest.setPassword(packagePassword);

SObject[] argArray = {packageUploadRequest};
SaveResult[] saveResults = connection.create(argArray);

if (saveResults[0].isSuccess()) {
   // The save result contains the ID of the created request.
   // Save it in the local request.
   packageUploadRequest.setId(saveResults[0].getId());
   System.out.println("PackagePushRequest created, ID: "
      + saveResults[0].getId());
} else {
   for (Error error : saveResults[0].getErrors()) {
      System.out.println(error.getMessage());
   }
}
```

```apex
// Find the status of the PackageUploadRequest for a given ID
String query = String.format("SELECT Status,MetadataPackageVersionId
   FROM PackageUploadRequest WHERE Id = '%s'", packageUploadRequest.getId());

boolean inProgress = false;
boolean queued = false;
boolean done = false;
while (true) {
   QueryResult queryResult = connection.query(query);

   PackageUploadRequest updatedPackageUploadRequest =
      (PackageUploadRequest) queryResult.getRecords()[0];

   PackageUploadRequestStatus status = updatedPackageUploadRequest.getStatus();
   switch (status) {
      case Success:
         System.out.println(String.format("Package upload %s completed",
            packageUploadRequest.getId()));
         System.out.println(String.format(
            "Package install url: %s/packaging/installPackage.apexp?p0=%s",
            baseUrl,
            updatedPackageUploadRequest.getMetadataPackageVersionId()));
         done = true;
         break;

      case Error:
         PackageUploadErrors errors = updatedPackageUploadRequest.getErrors();

         if (errors.getErrors().length == 0) {
            System.out.println(String.format(
               "%s: For upload of package %s, no further information available",
               updatedPackageUploadRequest.getStatus(),
               packageUploadRequest.getId()));
         }
         else {
            System.out.println(String.format(
               "%s: For upload of package %s",
               updatedPackageUploadRequest.getStatus(),
               packageUploadRequest.getId()));
            for (PackageUploadError error : errors.getErrors()) {
               System.out.println("Error detail: " + error.getMessage());
            }
         }
         assertTrue("Upload failure occurred", false);
         break;

      case Queued:
         if (!queued) {
            System.out.println(String.format("Package upload %s enqueued”,
            packageUploadRequest.getId()));
            queued = true;
         }
         break;

      case InProgress:
         if (!inProgress) {
            System.out.println(String.format("Package upload %s started",
               packageUploadRequest.getId()));
            inProgress = true;
         }
         break;

      case Unknown:
         System.out.println("Unexpected package upload status: " +
            updatedPackageUploadRequest.getStatus());
   }

   if (done) break;

   try {
      Thread.sleep(1000);
   } catch (InterruptedException e) {
      // ignore interruptions
   }
}
```
