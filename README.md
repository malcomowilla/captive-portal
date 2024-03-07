# Captive Portal
My Captive Portal is a website designed for users connecting to a MikroTik hotspot. When users connect to the hotspot, they are redirected to this portal, where they can purchase various packages to access the hotspot.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#Technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)



## Introduction



A captive portal is a webpage that the user of a public network is required to view and interact with before they can access the network. It is typically used by business centers, airports, hotel lobbies, coffee shops and other public venues that offer free Wi-Fi hotspots for internet users



## Technologies

- Technologies i used for this project

[![My Skills](https://skillicons.dev/icons?i=js,react,html,css,rails,tailwind,vite)](https://skillicons.dev)

* A mikrotik router




### Prerequisites

Before setting up the Captive Portal, make sure you have the following prerequisites installed on your system:

- Node.js and npm
- Git


## Features

- **Payment Processing:** Integration with the Daraja API enables secure online payments for selected packages.

* when a user pays for the selected package he should be receive an stk push prompted to enter an mpesa pin number


### Installation

1. Clone this repository:




   ```bash
   git clone https://github.com/malcomowilla/captive-portal.git

2.  Navigate to the projects directory


```bash
cd captive-portal
```



3. install the dependencies

```bash
npm install
```

4. Start the Development Server


```bash
npm run dev
```