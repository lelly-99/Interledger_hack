CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    phone_no VARCHAR(50),
    email VARCHAR(100),
    is_business BOOLEAN,
    open_payments_url VARCHAR(100),

);

CREATE TABLE withdrawals(
    withdraw_id SERIAL PRIMARY KEY,
    tiger_beetle_id TEXT,
    user_id INTEGER REFERENCES users(user_id),
    receiver_phone_no VARCHAR(50),
    PIN VARCHAR(100),
    status VARCHAR(100),
    

);