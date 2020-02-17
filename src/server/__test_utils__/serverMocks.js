export default () => {
  beforeAll(() => {
    jest.mock('fs', () => {
      const actualFs = jest.requireActual('fs');
      const theModule = {
        ...actualFs,
        promises: actualFs.promises,
        readFileSync: (...args) => {
          const filePath = args[0];

          if (filePath.includes('assets.json')) {
            return '{}';
          }

          return actualFs.readFileSync(...args);
        },

        existsSync: (...args) => {
          const filePath = args[0];

          if (filePath.includes('assets.json')) {
            return true;
          }

          return actualFs.existsSync(...args);
        },
      };

      theModule.default = theModule;

      return theModule;
    });
  });

  afterAll(() => {
    jest.unmock('fs');
  });
};
