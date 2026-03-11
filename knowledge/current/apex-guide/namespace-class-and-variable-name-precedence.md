---
title: "Namespace, Class, and Variable Name Precedence"
domain: apex-guide
topic: namespace-class-and-variable-name-precedence
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.604Z
keywords: [Namespace, Class, Variable, Name, Precedence]
---

# Namespace, Class, and Variable Name Precedence

# Namespace, Class, and Variable Name Precedence

Because local variables, class names, and namespaces can all hypothetically use the same identifiers, the Apex parser evaluates expressions in the form of name1.name2.\[...\].nameN as follows:

1.  The parser first assumes that name1 is a local variable with name2 - nameN as field references.
2.  If the first assumption does not hold true, the parser then assumes that name1 is a class name and name2 is a static variable name with name3 - nameN as field references.
3.  If the second assumption does not hold true, the parser then assumes that name1 is a namespace name, name2 is a class name, name3 is a static variable name, and name4 - nameN are field references.
4.  If the third assumption does not hold true, the parser reports an error.

If the expression ends with a set of parentheses (for example, name1.name2.\[...\].nameM.nameN()), the Apex parser evaluates the expression as follows:

1.  The parser first assumes that name1 is a local variable with name2 - nameM as field references, and nameN as a method invocation.
2.  If the first assumption does not hold true:
    -   If the expression contains only two identifiers (name1.name2()), the parser then assumes that name1 is a class name and name2 is a method invocation.
    -   If the expression contains more than two identifiers, the parser then assumes that name1 is a class name, name2 is a static variable name with name3 - nameM as field references, and nameN is a method invocation.
3.  If the second assumption does not hold true, the parser then assumes that name1 is a namespace name, name2 is a class name, name3 is a static variable name, name4 - nameM are field references, and nameN is a method invocation.
4.  If the third assumption does not hold true, the parser reports an error.

However, with class variables Apex also uses dot notation to reference member variables. Those member variables might refer to other class instances, or they might refer to an sObject which has its own dot notation rules to refer to field names (possibly navigating foreign keys).

Once you enter an sObject field in the expression, the remainder of the expression stays within the sObject domain, that is, sObject fields cannot refer back to Apex expressions.

For instance, if you have the following class:

```

```

Then the following expressions are all legal:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_schema_namespace_using.htm "Using the Schema Namespace")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_type_resolution.htm "Type Resolution and System Namespace for Types")