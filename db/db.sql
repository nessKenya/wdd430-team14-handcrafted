-- sellers
CREATE TABLE sellers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- profiles (1-to-1 with sellers)
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    seller_id INT NOT NULL UNIQUE REFERENCES sellers(id) ON DELETE CASCADE,
    address TEXT,
    phone TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- items (belongs to a seller)
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    seller_id INT NOT NULL REFERENCES sellers(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    rating NUMERIC(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    favs INT DEFAULT 0,
    img_url TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- reviews (belongs ONLY to an item)
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    item_id INT NOT NULL REFERENCES items(id) ON DELETE CASCADE,
    reviewer_name VARCHAR(150) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
