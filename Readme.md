<h1 align="center">Shoppingify</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://shoppifyv2-1.onrender.com" target="_blank">
      Demo
    </a>
    <span> | </span>
    <a href="" target="_blank">
      Solution
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/challenges/mGd5VpbO4JnzU6I9l96x" target="_blank">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [Built With](#built-with)
-   [Features](#features)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot-2](./shoppify.png)

#### Installation:

1.  Clone the repository:

    ```bash
    git clone https://github.com/render217/ShoppifyV2
    ```

2.  Create a .env file in backend/config folder and add the following as key = value

          ```
            MONGODB_URI=
            DB_NAME=
            JWT_SECRET=
            JWT_EXPIRES_IN=
            FRONTEND_URL=
          ```

    Create a .env file in frontend directory and add the following as key = value

    ```
      VITE_BACKEND_URL=http://localhost:<PORT>/api

      N.B(PORT => port you used for the backend)
    ```

3.  Navigate into the directory and install dependencies: both in frontend and backend folder

    ```bash
    npm install
    ```

4.  Start the development server: in both client and backend folder
    ```bash
    npm run dev
    ```

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   **React**
-   **Tailwind**
-   **Zustand**
-   **Express**
-   **MongoDB**

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://legacy.devchallenges.io/challenges/mGd5VpbO4JnzU6I9l96x) challenge. The [challenge](https://legacy.devchallenges.io/challenges/mGd5VpbO4JnzU6I9l96x) was to build an application to complete the given user stories.

-   User story: When I select the items tab, I can see a list of items under different categories.
-   User story: I can add a new item with name, category, note, and image.
-   User story: When I add a new item, I can select one from the existing categories or add a new one if the category does not exist
-   User story: When I select an item, I can see its details and I can choose to add the current list or delete the item.
-   User story: I can add items to the current list
-   User story: I can increase the number of item in the list
-   User story: I can remove the item from the list
-   User story: I can save/update the list with a name (user can have only one active list at a time)
-   User story: I can toggle between editing state and completing state
-   User story: When I am at completing state, I can save my progress by selecting the item
-   User story: I can cancel the active list
-   User story: When I try to cancel a list, I can see a confirmation notification
-   User story: I can see my shopping history and I can see the details of it
-   User story: I can see some statistics: top items, top categories, and monthly comparison. (Tips: use libraries like recharts for the graph)
-   User story (optional): I can search for items

## Acknowledgements

-   [Render](https://render.com) - For Both Frontend and backend deployment
