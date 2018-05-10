### Content
- [Topcoder React Lib](#react_lib)
- [Development](#development)
- [Actions](#actions)
- [Reducers](#reducers)
- [Services](#services)
- [Utilities](#utilities)

### <a name="react_lib"> Topcoder React Lib
![Dev Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-lib/develop.svg?label=develop)
![Master Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-lib/master.svg?label=master)
![Latest NPM Release](https://img.shields.io/npm/v/topcoder-react-lib.svg)
![NPM Downloads](https://img.shields.io/npm/dm/topcoder-react-lib.svg)

The [Topcoder](https://www.topcoder.com) lib for internal ReactJS projects.

### <a name="development"> Development
```shell
# Install dependencies
npm install

# Run test & build
npm test
npm run build

# Go to other project which depends on the topcoder-react-lib, config its package.json so 
# that the 'topcoder-react-lib' points to the local foler path of topcoder-react-lib:
#
# "dependencies": {
#   "topcoder-react-lib": "<local-path-to-topcoder-react-lib>",
#   ......
# }
#
```

### <a name="actions"> Actions
- [**auth action**](docs/actions/auth-action.md) &mdash; Action for Authentication
- [**challenge action**](docs/actions/challenge-action.md) &mdash; Action for Challenge
- [**direct action**](docs/actions/direct-action.md) &mdash; Action for Direct
- [**errors action**](docs/actions/errors-action.md) &mdash; Action for Errors
- [**groups action**](docs/actions/groups-action.md) &mdash; Action for Groups
- [**member tasks action**](docs/actions/member-tasks-action.md) &mdash; Action for Member Tasks
- [**members action**](docs/actions/members-action.md) &mdash; Action for Members
- [**profile action**](docs/actions/profile-action.md) &mdash; Action for Profile
- [**review opportunity action**](docs/actions/reviewOpportunity-action.md) &mdash; Action for Review Opportunity
- [**stats action**](docs/actions/stats-action.md) &mdash; Action for Stats
- [**terms action**](docs/actions/terms-action.md) &mdash; Action for Terms

### <a name="reducers"> Reducers
- [**auth reducer**](docs/reducers/auth-reducer.md) &mdash; Reducer for Authentication
- [**challenge reducer**](docs/reducers/challenge-reducer.md) &mdash; Action for Challenge
- [**my submissions management reducer**](docs/reducers/my-submissions-management-reducer.md) &mdash; Action for My Sumissions Management
- [**review opportunity reducer**](docs/reducers/reviewOpportunity-reducer.md) &mdash; Action for Review Opportunity
- [**terms reducer**](docs/reducers/terms-reducer.md) &mdash; Action for Terms

### <a name="services"> Services
- [**billing service**](docs/services/billing-service.md) &mdash; Service for Billing
- [**challenges service**](docs/services/challenges-service.md) &mdash; Service for Challenges
- [**communities service**](docs/services/communities-service.md) &mdash; Service for Communities
- [**direct service**](docs/services/direct-service.md) &mdash; Service for Direct
- [**groups service**](docs/services/groups-service.md) &mdash; Service for Groups
- [**members service**](docs/services/members-service.md) &mdash; Service for Members
- [**review opportunities service**](docs/services/reviewOpportunities-service.md) &mdash; Service for Review Opportunities
- [**terms service**](docs/services/terms-service.md) &mdash; Service for Terms
- [**user service**](docs/services/user-service.md) &mdash; Service for User
- [**user settings service**](docs/services/user-settings-service.md) &mdash; Service for User Settings

### <a name="utilities"> Utilities
- [**errors util**](docs/utils/errors-util.md) &mdash; Util for Errors
- [**filter util**](docs/utils/filter-util.md) &mdash; Util for Filter
- [**logger util**](docs/utils/logger-util.md) &mdash; Util for Logger
- [**mock util**](docs/utils/mock-util.md) &mdash; Util for Mock Flux Standard Action creator
- [**tc util**](docs/utils/tc-util.md) &mdash; Codes of the Topcoder communities.
- [**time util**](docs/utils/time-util.md) &mdash; Util for Time
- [**url util**](docs/utils/url-util.md) &mdash; Util for Url


### License
UNLICENSED &mdash; for internal Topcoder projects only.
