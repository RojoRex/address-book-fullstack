exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('groups', {
      id: {
        type: 'serial',
        primaryKey: true,
      },
      userid: {
        type: 'text',
        notNull: true,
      },    
      groupname: {
        type: 'text',
        notNull: true,
      },
      contactid: {
        type: 'text',
        notNull: true,
      },
    });
  };

exports.down = (pgm) => {

};
