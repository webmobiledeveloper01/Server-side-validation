DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('Classics'),('Fantasy'),('Mystery'),('Romance'), ('Science Fiction');
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Neuromancer', 'William Gibson', '', 599, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Dune', 'Frank Herbert', '', 799, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Foundation', 'Isaac Asimov', '', 599, 0, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Snow Crash', 'Neal Stephenson', '', 699, 0, TRUE, FALSE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Hyperion', 'Dan Simmons', '', 800, 0, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Left Hand of Darkness', 'Ursula K. Le Guin', '', 599, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('I, Robot', 'Isaac Asimov', '', 599, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Moon is a Harsh Mistress', 'Robert A. Heinlein', '', 900, 0, TRUE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Brave New World', 'Aldous Huxley', '', 799, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Do Androids Dream of Electric Sheep?', 'Philip K. Dick', '', 500, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Three-Body Problem', 'Liu Cixin', '', 599, 0, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Altered Carbon', 'Richard K. Morgan', '', 900, 0, TRUE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Diamond Age', 'Neal Stephenson', '', 799, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Ender''s Game', 'Orson Scott Card', '', 700, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Expanse: Leviathan Wakes', 'James S.A. Corey', '', 599, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Windup Girl', 'Paolo Bacigalupi', '', 800, 0, FALSE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Ready Player One', 'Ernest Cline', '', 799, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', '', 700, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Starship Troopers', 'Robert A. Heinlein', '', 599, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Ubik', 'Philip K. Dick', '', 800, 0, FALSE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Rendezvous with Rama', 'Arthur C. Clarke', '', 799, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Old Man''s War', 'John Scalzi', '', 700, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Forever War', 'Joe Haldeman', '', 599, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Stars My Destination', 'Alfred Bester', '', 800, 0, FALSE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Oryx and Crake', 'Margaret Atwood', '', 799, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Pattern Recognition', 'William Gibson', '', 700, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Czech Republic', 'Charles Stross', '', 599, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Blindsight', 'Peter Watts', '', 800, 0, FALSE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Diaspora', 'Greg Egan', '', 799, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Permutation City', 'Greg Egan', '', 700, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Martian', 'Andy Weir', '', 599, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Red Mars', 'Kim Stanley Robinson', '', 800, 0, FALSE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Anathem', 'Neal Stephenson', '', 799, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Gateway', 'Frederik Pohl', '', 700, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A Fire Upon the Deep', 'Vernor Vinge', '', 599, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Reality Dysfunction', 'Peter F. Hamilton', '', 800, 0, FALSE, FALSE, 1002);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Eon', 'Greg Bear', '', 799, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Quantum Thief', 'Hannu Rajaniemi', '', 700, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Consider Phlebas', 'Iain M. Banks', '', 599, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Childhood''s End', 'Arthur C. Clarke', '', 800, 0, FALSE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Invisible Man', 'H.G. Wells', '', 799, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Time Machine', 'H.G. Wells', '', 700, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('2001: A Space Odyssey', 'Arthur C. Clarke', '', 599, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Flowers for Algernon', 'Daniel Keyes', '', 800, 0, FALSE, FALSE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A Scanner Darkly', 'Philip K. Dick', '', 799, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Neuropath', 'R. Scott Bakker', '', 799, 0, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Rainbows End', 'Vernor Vinge', '', 700, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Metamorphosis of Prime Intellect', 'Roger Williams', '', 599, 0, TRUE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Daemon', 'Daniel Suarez', '', 800, 0, FALSE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Rapture of the Nerds', 'Cory Doctorow & Charles Stross', '', 800, 0, FALSE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Superintelligence', 'Nick Bostrom', '', 800, 0, FALSE, FALSE, 1005);