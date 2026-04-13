CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    teacher_id INT REFERENCES users(id) ON DELETE SET NULL,
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

INSERT INTO courses (title, description, teacher_id) VALUES
    ('Lập trình Node.js cơ bản',   'Học Node.js từ đầu đến nâng cao', 1),
    ('PostgreSQL thực chiến',       'Thiết kế và tối ưu database',     2),
    ('Docker cho người mới bắt đầu','Containerize ứng dụng với Docker',3),
    ('RESTful API Design',          'Xây dựng API chuẩn REST',         1),
    ('Frontend với HTML/CSS/JS',    'Giao diện web từ cơ bản',         4);
