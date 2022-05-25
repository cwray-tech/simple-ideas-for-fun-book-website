# Simple Ideas for Fun, a one page book website.
Website for my wife's book- Simple Ideas for Fun.

## Local Development

1. Clone this repo.
2. Copy the env.example file in the backend directory to a new .env file. 
3. Add config options as needed. 
-- Specifically, add at a minimum APP_KEYS. You can set these to any string.
5. Open a new terminal, run the following commands to install dependencies and start the local backend server in development.
  ```bash
  cd backend
  yarn 
  yarn develop
  ```
4. Open up a new terminal and run the following commands to start the frontend next server in development.
  ```bash
  cd frontend
  yarn 
  yarn dev
  ```

## Tech Stack

### Frontend

- React/ NextJS
- TailwindCSS

### Backend
- Strapi CMS
- NodeJS/Javascript
