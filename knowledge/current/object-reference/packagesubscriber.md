---
title: "PackageSubscriber"
domain: object-reference
topic: packagesubscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.270Z
estimatedTokens: 927
keywords: [PackageSubscriber, installation, package, org, managed, unlocked, packages, developed, you’re, logged, Calls, Special, Access, Rules, Usage]
---

# PackageSubscriber

> Represents an installation of a package in an org. This object contains
			installation information for managed or unlocked packages developed in the org you’re
			logged in to.

# PackageSubscriber

Represents an installation of a package in an org. This object contains installation information for managed or unlocked packages developed in the org you’re logged in to.

One record is created per installation. For example, if 5 orgs installed 2 packages, 10 records are created.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To initiate a push upgrade for a first-generation managed package, the Upload AppExchange Packages user permission is required.

To initiate a push upgrade for an unlocked or second-generation managed package, the Create and Update Second-Generation Packages user permission is required.

The push upgrade feature is only available to first- and second-generation managed packages that have passed AppExchange security review. To enable push upgrades for your managed package, log a support case in the [Salesforce Partner Community.](https://partners.salesforce.com/)

For unlocked packages, push upgrades are enabled by default.

## Fields

| Field Name | Details |
| --- | --- |
| InstalledStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf the package is installed in the org, the value is i. |
| InstanceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe instance that hosts the subscriber org. |
| MetadataPackageId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe package ID. Package Ids have a prefix of 033. This field is available in API version 49.0 and later. |
| MetadataPackageVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character package version ID starting with 04t. |
| OrgKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID that represents the Salesforce org. |
| OrgName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the org where the package is installed. |
| OrgStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionValid values are:ActiveDemoFreeInactiveTrialOrgs with an OrgStatus of Inactive can’t receive push upgrades. |
| OrgType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionValid values are:ProductionSandbox |
| ParentOrg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe production org from which a sandbox was created. |

## Usage

Here are examples of the types of API queries you can perform.

| Query | String |
| --- | --- |
| Get all package subscriber orgs with a specific package ID | SELECT Id, OrgKey, OrgStatus, OrgName, OrgType FROM PackageSubscriber WHERE MetadataPackageVersionId = '04t...' |
| Get all package subscriber orgs that have an installed package created by the org you’re logged in to | SELECT Id, OrgKey, OrgStatus, OrgName, OrgType FROM PackageSubscriber WHERE InstalledStatus = 'i' |

**Filter PackageSubscriber Objects by Instance**

If you have packages with many subscribers, querying PackageSubscriber objects can take a while. To improve query performance, add filters to your PackageSubscriber queries, such as an InstanceName filter. InstanceName is a field that represents the instance that the subscriber org is hosted on.

1.  Get the org’s package and the latest released version of the package.

    ```

    ```

2.  Get eligible subscribers. The following query strings and methods are modified to allow querying for PackageSubscribers filtered by an instance.

    ```

    ```

    ```

    ```

3.  Put it all together. The following code sample shows how to use the previous methods to modify the workflow to perform package pushes by instance.

    ```

    ```

## Code Examples

```apex
/**
* Get the MetadataPackage object corresponding to this org's managed package
*/
public MetadataPackage getMetadataPackage() throws ConnectionException {
	// retrieve the managed package, which won’t have an empty namespace
	QueryResult result = conn.query("select id from  MetadataPackage where namespaceprefix <> ''");
		
	return (MetadataPackage) result.getRecords()[0];
}

/**
* Get the latest MetadataPackageVersion object of the given MetadataPackage
*/
public MetadataPackageVersion getLatestMetadataPackageVersion(MetadataPackage metadataPackage) 
throws ConnectionException {
	// get the latest released version of the given package
	String query = "Select id, ReleaseState, MajorVersion, MinorVersion, PatchVersion, 
MetadataPackageId"
		+ " From MetadataPackageVersion"
		+ " Where MetadataPackageId = '%s' and ReleaseState = 'Released'"
		+ " Order by majorversion desc, minorversion desc, patchversion desc";
		
	QueryResult result = conn.query(String.format(query, metadataPackage.getId()));
		
	return (MetadataPackageVersion) result.getRecords()[0];
}
```

```apex
static final String PACKAGE_SUBSCRIBER_ORG_KEY_QUERY = "Select OrgKey from PackageSubscribers where OrgStatus = 'Active'"
	+ " and InstalledStatus = 'I'"
	+ " and InstanceName = '%s'"; // placeholder for instance values

static final String METADATA_PACKAGE_VERSION_QUERY = "Select Id, Name, ReleaseState, (%s) from MetadataPackageVersion"
	+ " where MetadataPackageId = '%s' AND ReleaseState = 'Released'"
	+ " AND (MajorVersion < %s OR (MajorVersion = %s and MinorVersion < %s)"
	+ " OR (MajorVersion = %s and MinorVersion = %s and PatchVersion < %s))";

/**
* Get all PackageSubscribers on the given instance that are eligible to upgrade to the given 
* MetadataPackageVersion
*/
public PackageSubscriber[] getEligibleSubscriberIds(MetadataPackageVersion version, String instanceName) throws ConnectionException {
	String allPackageId = version.getMetadataPackageId();
	Integer major = version.getMajorVersion();
	Integer minor = version.getMinorVersion();
	Integer patch = version.getPatchVersion();

	return getEligibleSubscriberIds(major, minor, patch, allPackageId, instanceName);
}
```

```apex
public PackageSubscriber[] getEligibleSubscriberIds(Integer major, Integer minor, Integer patch, String packageId, String instanceName) throws ConnectionException {
	String subscriberQuery = String.format(PACKAGE_SUBSCRIBER_ORG_KEY_QUERY, instanceName);
QueryResult results = conn.query(String.format(METADATA_PACKAGE_VERSION_QUERY, 
subscriberQuery, packageId, major, major, minor, major, minor, patch));

	return Arrays.stream(results.getRecords()).map(MetadataPackageVersion.class::cast)
		.filter(mpv -> mpv.getPackageSubscribers() != null)
		.flatMap(mpv -> Arrays.stream(mpv.getPackageSubscribers().getRecords()))
		.map(PackageSubscriber.class::cast)
		.toArray(PackageSubscriber[]::new);
}
```

```
String[] instances = { "NA4" }; // Here we list the instances we would like to push to
MetadataPackage metadataPackage = api.getMetadataPackage();
MetadataPackageVersion version = api.getLatestMetadataPackageVersion(metadataPackage);

// do pushes by instance to avoid API timeouts retrieving PackageSubscribers
for (String instanceName : instances) {
PackageSubscriber[] eligibleSubscribers = api.getEligibleSubscriberIds(version, 
instanceName);
	
// ... proceed with creating PushRequests and PushJobs as before
```
