# Movie Web App

A fully-featured movie web application inspired by IMDB, created using Next.js and Clerk for authentication. The app fetches movie details from the TMDB Movie Database and provides a seamless user experience with dark and light mode options. It is fully responsive, supports search functionality, allows users to view detailed information about each movie, and lets users manage their favorite movies using CRUD operations with MongoDB.

---

## Features

- **Dark & Light Mode:** Toggle between dark and light themes for an enhanced viewing experience.
- **Responsive Design:** Fully optimized for all devices, from desktops to mobile screens.
- **Search Functionality:** Easily search for movies using the integrated search bar.
- **Detailed Movie Information:** Each movie has its own page displaying comprehensive details.
- **Favorites Management:** Add, view, edit, and delete favorite movies, powered by MongoDB.
- **Authentication:** Secure user authentication using Clerk.
- **CRUD Operations:** Full functionality for managing user data and movie favorites.

---

## Technologies Used

- **Frontend:** Next.js
- **Authentication:** Clerk
- **Database:** MongoDB
- **Deployment:** Vercel
- **API:** TMDB Movie Database

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone - https://github.com/LakshanMadushnka/imdb-clone-nextjs.git
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```plaintext
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2hpZWYt......
    CLERK_SECRET_KEY=sk_test_ztTN.....
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    SIGNING_SECRET=whsec_4Xkvj/7ndH.....
    MONGODB_URI=mongodb+srv://lraxxxxx:xxxxx@cluster0.xudn7.mongodb.net/?re.........
    API_KEY=64958aa6ef9d33e5.......
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Deployment

The app is deployed on Vercel for fast and reliable hosting. Follow these steps to deploy:

1. Push your code to a GitHub repository.
2. Link the repository to Vercel.
3. Add your environment variables in the Vercel dashboard.
4. Deploy your app.

---

## Screenshots

<img width="1680" alt="Image" src="https://github.com/user-attachments/assets/1506c8ed-ad1d-4f45-be0d-192fed23344b" />

<img width="1680" alt="Image" src="https://github.com/user-attachments/assets/dbdce80a-4585-4812-92d5-16f2795d539e" />
<img width="1680" alt="Image" src="https://github.com/user-attachments/assets/c12f6526-7b43-4adc-a06e-fa8ff42e32ae" />

---



## Contact

For any inquiries or support, please contact:

- **Name:** L.M. Ransinghe
- **Email:** lranasinghe08@gmail.com

