exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('addressbook', {
      id: {
        type: 'serial',
        primaryKey: true,
      },
      userId: {
        type: 'integer',
        notNull: true,
        references: '"users"',
      },
      contactsId: {
        type: 'integer',
        notNull: true,
        references: '"contacts"',
      }
    });
  };

exports.down = (pgm) => {

};
