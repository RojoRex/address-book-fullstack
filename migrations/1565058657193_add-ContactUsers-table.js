exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('addcontacts', {
      id: {
        type: 'serial',
        primaryKey: true,
      },
      userId: {
        type: 'text',
        notNull: true,
      },
      firstname: {
        type: 'text',
        notNull: true,
      },
      lastaname: {
        type: 'text',
        notNull: true,
      },
      email: {
        type: 'text',
        notNull: true,
      },
      city: {
        type: 'text',
        notNull: true,
      },
      stateprob: {
        type: 'text',
        notNull: true,
      },
      postal: {
        type: 'text',
        notNull: true,
      },
      country: {
        type: 'text',
        notNull: true,
      },
      homephone: {
        type: 'text',
        notNull: true,
      },
      mobilephone: {
        type: 'text',
        notNull: true,
      },
      workphone: {
        type: 'text',
        notNull: true,
      },
    });
  };

exports.down = (pgm) => {

};
