# Flocial - Flow's social network platform

Decentralized social networking on Flow faces challenges of fragmented profiles, limited integration, and inefficient user discovery. Users encounter repetitive profile setups, lack cohesive social connections, and struggle to find relevant users within the Flow ecosystem. A standardized protocol is needed to enhance data consistency and enable seamless integration across Flow dApps. Introducing the solution: Flocial.

Flocial revolutionizes decentralized social networking on Flow by establishing independent social graphs for users. Let me elaborate it's features in-depth

### Redefining Social dApps on Flow
Flocial establishes a decentralized social networking protocol for Flow, redefining social networking in the flowverse. We ensure consistency and uniformity across games, apps, and assets on Flow. Future updates will introduce features such as post publishing, comments, user following, and more.

### Efficient Profile Management:
Flocial's client dApp allows users to connect their wallet addresses and manage their profile details, such as name, username, email, description, and avatar. This information is securely stored on the blockchain, enabling seamless integration with other dApps that utilize Flocial's protocol.

### Enhanced Discoverability & Networking:
Flocial incorporates an explore feature that enables users to browse registered profiles, facilitating social interactions, networking, and collaboration within the Web3 community. Additionally, Flocial's advanced search mechanism allows users to find individuals with specific keywords, fostering efficient collaborations and knowledge sharing.

### Fast & Easily Integratable API
Flocial currently has 2 fast, low-latency API endpoints. One to get all users registered on the protocol, and one to get profile details by querying wallet address. Any interested dApp can integrate our protocol by using our API or customising our open-sourced smart-contract according to their needs.

### Public API

use the public API like so:

```
https://flocialapi-6k6gsdlfoa-em.a.run.app/getprofile?address=0xxxxxxxx// get profile by address
https://flocialapi-6k6gsdlfoa-em.a.run.app/getprofiles // get all profiles

```