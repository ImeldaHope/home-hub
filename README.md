# HomeHub
Live view: [Home Hub](https://github.com/ImeldaHope/home-hub)

## Description

Welcome to the Real Estate Management System! This project is designed to showcase various properties, including houses, apartments, villas, and more. It provides an easy-to-use interface for browsing, searching, and filtering properties.

## Project Overview

This project is a web-based real estate management application that allows users to:

- View property listings with detailed information.
- Filter and search for properties based on various criteria.
- Contact agents for more information.

## Features

- **Property Listings**: Display a range of properties with detailed information such as title, location, price, property type, number of bedrooms, bathrooms, square footage, status, and amenities.
- **Property Images**: Each property includes multiple images showcasing its features.
- **Agent Information**: Contact details and profile pictures of agents handling the properties.
- **Search and Filter**: Options to search and filter properties based on location, price range, and property type.

## Installation

To get started with Home Hub, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ImeldaHope/home-hub.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd home-hub
   ```
3. **Install Dependencies**
   Ensure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```
4. **Start the Application**
   ```bash
   npm start
   ```

## Project Structure

- `src/` - Contains the source code of the application.
  - `components/` - React components for the UI.
  - `styles/` - CSS files for styling.  
- `public/` - Static files and assets.
- `README.md` - This file.
- `db.json/` - JSON files for property data.
- `package.json` - Project dependencies and scripts.

## Data Format

The application uses a JSON file (`db.json`) to store property data. Here is an example of the data format:

```json
[
  {
    "id": 1,
    "title": "Modern Family Home",
    "location": "Nairobi, Kenya",
    "price": 45000000,
    "propertyType": "House",
    "bedrooms": 4,
    "bathrooms": 3,
    "squareFootage": 2500,
    "status": "For Sale",
    "amenities": [
      "Garden",
      "Garage",
      "Swimming Pool",
      "Home Office"
    ],
    "images": [
      "house1_img1.jpg",
      "house1_img2.jpg",
      "house1_img3.jpg"
    ],
    "description": "A spacious modern family home with a large garden, perfect for a growing family.",
    "agent": {
      "name": "John Doe",
      "email": "john.doe@realestate.com",
      "phone": "+254712345678",
      "profilePicture": "agent1.jpg"
    }
  },
  // Additional properties
]
```

## Contributing

We welcome contributions to the Real Estate Management System! If you have any improvements or fixes, please follow these guidelines:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit Your Changes**
   ```bash
   git commit -am 'Add some feature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/your-feature
   ```
5. **Create a New Pull Request**

## Collaborators

This project is maintained by the following collaborators:
- **Imelda Hope** - https://github.com/ImeldaHope
- **Samson Njai** - https://github.com/nanoprogrammer
- **Harmony Mukolwe** - https://github.com/SirHarmony
- **Michael Shalom** - https://github.com/michae-shalom
- **Anne Musau**  - https://github.com/AnneMusau

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using Home Hub! We hope you find it useful.
