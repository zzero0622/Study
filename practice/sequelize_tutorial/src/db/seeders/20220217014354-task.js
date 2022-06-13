'use strict';

//! seeding 할 때는 createAt과 updateAt이 자동 추가되지 않기 때문에 별도로 추가해줘야 한다.
const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const currentTime = new Date(new Date().toUTCString()).toISOString();
    await queryInterface.bulkInsert(
      'Tasks', //! 복수형! -> Model 이 아닌 실제 Table을 참조하고 있기 때문. Magrations 파일도 같은 문법
      [
        {
          taskName: 'This is task number one!',
          createdAt,
          updatedAt,
        },
        {
          taskName: 'This is task number two!',
          createdAt,
          updatedAt,
        },
        {
          taskName: 'This is task number three!',
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
