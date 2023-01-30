## some-service
Package is generated via [emc function package generate](https://github.com/dasmeta/event-manager-cli#emc-function-package-generate-name) command.

Form more details about available commands visit [event-manager-cli (emc)](https://github.com/dasmeta/event-manager-cli#commands)

### Configs
Default configs for package are stored in `package.json` during generation.

In case of manually editing make sure all cases are replaced.
```json
  "functionsConfig": {
    "dir": "functions",
    "deploymentUid": "1a5cc6d8-cc06-42f1-aca0-4d6d5e29aecb"
  }
```
- `functionsConfig.dir` is the folder where functions will be generated for the current project.
- `functionsConfig.deploymentUid` is the uid to be used by fission to identify resources.

`"dependencies"` in `package.json` is used to clone global project dependencies to new created functions and later sync in all functions.

### Generated Files
- `env.json` local environment json file
- `env.yaml` multi environment yaml file used for deployment
- `test-data.json` contains test data for testing functions