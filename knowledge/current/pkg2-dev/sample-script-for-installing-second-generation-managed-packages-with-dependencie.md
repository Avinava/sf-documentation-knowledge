---
title: "Sample Script for Installing Second-Generation Managed Packages with Dependencies"
domain: pkg2-dev
topic: sample-script-for-installing-second-generation-managed-packages-with-dependencie
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.067Z
estimatedTokens: 137
keywords: [Sample, Script, Installing, Second-Generation, Managed, Packages, Dependencies, basis, own, install, query, finds, dependent, installs, correct]
---

# Sample Script for Installing Second-Generation Managed Packages with Dependencies

> Use this sample script as a basis to create your own script to install second-generation
        managed packages with dependencies. This script contains a query that finds dependent
        packages and installs them in the correct dependency order.

# Sample Script for Installing Second-Generation Managed Packages with Dependencies

Use this sample script as a basis to create your own script to install second-generation managed packages with dependencies. This script contains a query that finds dependent packages and installs them in the correct dependency order.

## Sample Script

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Be sure to replace the package version ID and scratch org user name with your own specific details.

```

```

## Code Examples

```
#!/bin/bash


# The execution of this script stops if a command or pipeline has an error.

# For example, failure to install a dependent package will cause the script

# to stop execution.

set -e


# Specify a package version id (starts with 04t)

# If you know the package alias but not the id, use sf package version list to find it.

PACKAGE=04tB0000000NmnHIAS


# Specify the user name of the subscriber org.

USER_NAME=test-bvdfz3m9tqdf@example.com


# Specify the timeout in minutes for package installation.

WAIT_TIME=15


echo "Retrieving dependencies for package Id: "$PACKAGE


# Execute soql query to retrieve package dependencies in json format.

RESULT_JSON=`sf data query -u $USER_NAME -t -q "SELECT Dependencies FROM SubscriberPackageVersion WHERE Id='$PACKAGE'" --json`


# Parse the json string using python to test whether the result json contains a list of ids or not.

DEPENDENCIES=`echo $RESULT_JSON | python -c 'import sys, json; print json.load(sys.stdin)["result"]["records"][0]["Dependencies"]'`


# If the parsed dependencies is None, the package has no dependencies. Otherwise, parse the result into a list of ids.

# Then loop through the ids to install each of the dependent packages.

if [[ "$DEPENDENCIES" != 'None' ]]; then


    DEPENDENCIES=`echo $RESULT_JSON | python -c '

import sys, json

ids = json.load(sys.stdin)["result"]["records"][0]["Dependencies"]["ids"]

dependencies = []

for id in ids:

    dependencies.append(id["subscriberPackageVersionId"])

print " ".join(dependencies)

'` 


    echo "The package you are installing depends on these packages (in correct dependency order): "$DEPENDENCIES

    for id in $DEPENDENCIES

    do

        echo "Installing dependent package: "$id

        sf package install --package $id -u $USER_NAME -w $WAIT_TIME --publish-wait 10

    done


else

    echo "The package has no dependencies"


fi


# After processing the dependencies, proceed to install the specified package.

echo "Installing package: "$PACKAGE

sf package install --package $PACKAGE -u $USER_NAME -w $WAIT_TIME --publish-wait 10


exit 0;
```
