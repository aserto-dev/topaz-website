# Architecture

<img src="/img/architecture.png" />

## Architectural overview

The architecture of Topaz includes the following:
* An authorizer based on the OPA decision engine
* A directory that hosts identity and resource data
* OPA built-ins for querying the directory from within a policy
* APIs for evaluating authorization decisions and interacting with the directory
* Language SDKs for easily integrating authorization into an application

## Concepts

### Authorizer

The authorizer makes a **decision** by evaluating a **policy** in the context of a **user** and a **resource**. Breaking these concepts down:

* **Policy**: a set of rules for making an authorization decision
* **Decision**: an output of the policy
* **User context**: a set of user properties that can be used in a policy to determine the outcome of decisions
* **Resource context**: additional resource data that is used in determining the outcome of decisions

The Authorizer exposes three APIs to the calling application for the purpose of authorization:

* `authz/is`
* `authz/query`
* `authz/decisiontree`

Each of these APIs is a POST or gRPC API and accepts an input payload.

The payload for each of these APIs includes three common objects:

* **Identity context** identifies the user
* **Policy context** identifies the policy
* **Resource context** identifies the (optional) resource

The [Authorizer Guide](/docs/authorizer-guide/overview.mdx) provides a more complete overview of the Authorizer and the APIs it exposes.

### Directory

Topaz makes it easy to store user and resource information close to the authorizer so that any calls that make use of this information are completed as quickly as possible. The directory is implemented as a BoltDB instance and wrapped with a set of methods that facilitate:

* Defining a domain model composed of object types, relation types, and permissions
* Creating instances of those object and relation types
* Loading identities (users and/or machines), groups, and relationships

At runtime, the authorizer can query data stored in the directory using a set of built-ins, such as:
* `ds.identity`
* `ds.user`
* `ds.object`
* `ds.check`
* `ds.check_relation`
* `ds.check_permission`

Directory objects are loaded on-demand, in contrast to `data.json` files that are materialized into the data namespace when the policy is loaded and remain memory-resident for the duration of the policy lifetime. This means that a policy (rule) interacting with data managed in a directory object will load the data when needed, using the built-in functions present in the Authorizer.

The [Directory Guide](/docs/directory/index.mdx) provides a more complete overview of the Directory.

### Decision logs

The authorizer captures and stores decision logs for every decision that it evaluates. Topaz [decision logs](/docs/decision-logs) are implemented as an OPA plugin and a logger component that writes logs to a rotating set of files.
