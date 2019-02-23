import delay from '../utils/delay';

export const mockFetchStudents = () => {
  return new Promise(resolve =>
    delay(2000, () =>
      resolve({
        data: [
          { id: 1, name: 'Dustin', age: 5 },
          { id: 2, name: 'Zag', age: 1 },
          { id: 3, name: 'Ziggy', age: 5 },
        ],
      }),
    ),
  );
};
