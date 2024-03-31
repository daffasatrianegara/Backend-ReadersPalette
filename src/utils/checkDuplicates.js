const { db } = require("../config");

const destroyDuplicateLineGenres = async () => {
  return db.query(`
    DELETE FROM book_genre
    WHERE (book_id, genre) IN (
    SELECT * FROM (
        SELECT book_id, genre
        FROM book_genre
        GROUP BY book_id, genre
        HAVING COUNT(*) > 1
    ) AS duplicates
);`);
};

const destroyDuplicateLineRates = async () => {
  return db.query(`
    DELETE FROM rates
    WHERE (user_id, book_id) IN (
    SELECT * FROM (
        SELECT user_id, book_id
        FROM rates
        GROUP BY user_id, book_id
        HAVING COUNT(*) > 1
    ) AS duplicates
);
  `);
};

module.exports = {
  destroyDuplicateLineRates,
  destroyDuplicateLineGenres,
};
