# Architecture

<img src="/img/architecture.png" />

#### The architecture of Topaz includes the following:
* Topaz uses the OPA decision engine
* Instead of relying solely on the data.json file OPA uses to make decisions, Topaz has a directory that hosts identity and resource data.
* Topaz provides an API for the directory that lets you
  1. Import identity data
  2. Define a domain model and create instances of objects in that domain model
* The authorizer’s built-ins are extended with directory-specific built-ins that make it easy to build ReBAC policies alongside (and mixed with) RBAC and ABAC policies.
* The Topaz SDKs make it easy to pass identity and resource context to the authorizer and apply the decisions made by the authorizer in your application.

## Concepts
### Authorizer
The main concepts for the Authorizer are:

* Policy: a set of rules for making an authorization decision
* Decision: an output of the policy
* User context: a set of user properties, roles, and scopes that can be used in a policy to determine the outcome of decisions
* Resource context: additional resource data (often in the form of lookup tables) that is used in determining the outcome of decisions

The Authorizer makes three APIs available to the calling application for the purpose of authorization:

* `authz/is`
* `authz/query`
* `authz/decisiontree`

Each of these APIs is a POST or GRPC API and accepts an input payload.

The payload for each of these APIs includes three common objects:

* Identity context identifies the user
* Policy context identifies the policy
* Resource context identifies the (optional) resource

### Directory
We wanted to make it easier to store user and resource information close to the authorizer so that any calls that make use of this information are completed as quickly as possible. The directory is built on a BoltDB instance and wrapped with a set of methods that facilitate:

* Defining a domain model composed of objects and relations
* Creating instances of those objects and relations
* Loading identities (users and/or machines)

On runtime, the authorizer can query data stored in the directory using a set of built-ins, such as:
* `ds.user`
* `ds.object`
* `ds.check_relations`
* `ds.check_permissions`

Directory objects are loaded on-demand, in contrast to data.json files that are materialized into the data namespace when the policy is loaded and remain memory-resident for the duration of the policy lifetime. Concretely this means that a policy (rule) interacting with data managed in a directory object will load the data when needed, using the built-in functions present in the Authorizer.

### Policy
