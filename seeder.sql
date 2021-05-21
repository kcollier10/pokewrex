USE pokewrex_db;

CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pokemon (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    api_id INT(10) UNSIGNED,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pokedex (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT(50) UNSIGNED,
    pokemon_id INT UNSIGNED,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon (id)
);

CREATE TABLE IF NOT EXISTS favorites (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT(50) UNSIGNED,
    pokemon_id INT UNSIGNED,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon (id)
)


