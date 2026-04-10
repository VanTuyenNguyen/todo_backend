CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, age) VALUES
    ('Nguyen Van An',     'an.nguyen@example.com',     22),
    ('Tran Thi Bich',     'bich.tran@example.com',     25),
    ('Le Van Cuong',      'cuong.le@example.com',      30),
    ('Pham Thi Dung',     'dung.pham@example.com',     28),
    ('Hoang Van Em',      'em.hoang@example.com',      35),
    ('Vo Thi Phuong',     'phuong.vo@example.com',     27),
    ('Dang Van Giang',    'giang.dang@example.com',    24),
    ('Bui Thi Hoa',       'hoa.bui@example.com',       29),
    ('Nguyen Van Hung',   'hung.nguyen2@example.com',  31),
    ('Tran Thi Lan',      'lan.tran@example.com',      26);
